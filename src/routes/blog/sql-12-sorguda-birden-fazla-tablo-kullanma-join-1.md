---
title: 'SQL 12: Sorguda Birden Fazla Tablo Kullanma: Join-1'
date: '2010-02-13'
subtitle: 'Bundan önceki tüm sorguların içerisinde yalnızca bir tablo kullanmıştık. Bu sorgular temel SQL işleçleri için birer örnekti. Bu ders ile beraber SQL''in esaslı konularına giriş yapıyoruz.'
---


<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

Bundan önceki tüm sorguların içerisinde yalnızca bir tablo kullanmıştık. Bu sorgular temel SQL işleçleri için birer örnekti. Bu ders ile beraber SQL'in esaslı konularına giriş yapıyoruz. Gerçek hayatta ihtiyacımız olan bilgileri bize döndürecek olan sogular nadiren önceki derslerde anlatılanlar kadar basit olacak. 

Veritabanları çoğu zaman birden fazla tablo içerir.Ve bu tablolar birbiri ile **ilişkilidir**. Örneğin aşağıdaki _Yayinevleri_ ve _Kitaplar_ tablolarını inceleyelim. 

**Not:** Bu arada diğer SQL derslerine [buradan ulaşabilirsiniz](http://www.hrzafer.com/sql-dersleri) 

**Yayınevleri**

| **no** | **isim** | **sehir** |
| --- | --- | --- |
| 1   | A   | Ankara |
| 2   | B   | İstanbul |
| 3   | C   | İzmir |

**Kitaplar**

| **no** | **isim** | **yv_no** |
| --- | --- | --- |
| 1   | 5 dakkada Java | 1   |
| 2   | 5 bilemedin 6 saatte SQL | 1   |
| 3   | Hakiki SQL | 2   |

Dikkat ederseniz `Kitaplar` tablosunda `yv_no` isimli bir alan göreceksiniz. Bu alan kitabın hangi yayınevi tarafından basıldığını göstermektedir. Buradan ilk 2 kitabın "A", 3. kitabın ise "B" yayınevi tarafından basıldığını, "C" yayınevi tarafından ise basılmış bir kitabın bulunmadığı anlaşılmakta. Yani kitaplar tablosundaki `yv_no` isimli alan ile `Yayınevleri` tablosundaki `no` isimli alan ilişkilidir. 

Örneğin `Kitaplar` tablosuna yeni bir kitap eklemek istesek ve `yv_no` olarak 4 değerini versek, 4 nolu yayınevi mevcut olmadığından bunun mümkün olmadığını belirten bir hata mesajı ile karşılaşırız. Şimdi bu iki tabloyu kullanan (iki tabloyu **join** eden) sorgu örneklerine geçelim: 

**Not:** MySQL'i bilgisayarınıza kurup benzer örnekleri bizzat uygulamak isterseniz [bu videoyu](http://www.hrzafer.com/mysql-kurulumu-ve-kullanimi-goruntulu-anlatim) izleyebilirsiniz.

```sql
SELECT * FROM kitaplar , yayinevleri
```

Sorgunun çıktısı aşağıdaki gibi olacaktır:

| no  | isim | yv_no | no  | isim | sehir |
| --- | --- | --- | --- | --- | --- |
| 1   | 5 dakkada Java | 1   | 1   | A   | Ankara |
| 2   | 5 bilemedin 6 saatte SQL | 1   | 1   | A   | Ankara |
| 3   | Hakiki SQL | 2   | 1   | A   | Ankara |
| 1   | 5 dakkada Java | 1   | 2   | B   | İstanbul |
| 2   | 5 bilemedin 6 saatte SQL | 1   | 2   | B   | İstanbul |
| 3   | Hakiki SQL | 2   | 2   | B   | İstanbul |
| 1   | 5 dakkada Java | 1   | 3   | C   | İzmir |
| 2   | 5 bilemedin 6 saatte SQL | 1   | 3   | C   | İzmir |
| 3   | Hakiki SQL | 2   | 3   | C   | İzmir |

Bu tablonun ilk bakışta ne kadar anlamsız göründüğünü biliyorum. Ama aslında o kadar da değil. Bu tablo yukarıdaki 2 tablonun **kartezyen çarpım**ı. Her iki tabloda da 3'er kayıt var. Bu tabloda ise 3x3=9 kayıt (satır) mevcut. Şimdi sorgumuzu aşağıdaki gibi değiştirelim:

```sql
SELECT * FROM kitaplar, yayinevleri WHERE kitaplar.yv_no = yayinevleri.no
```

Yukarıda _Kitaplar_ tablosundaki _yv_no_ ile _Yayinevleri_ tablosundaki _no_ alanlarının ilişkili olduğunu söylemiştik. `WHERE kitaplar.yv_no = yayinevleri.no` ifadesiile bu ilişkiyi sorgumuzda kullanmış olduk. Sorgunun çıktısı aşağıdaki gibi olacaktır:

| no  | isim | yv_no | no  | isim | sehir |
| --- | --- | --- | --- | --- | --- |
| 1   | 5 dakkada Java | 1   | 1   | A   | Ankara |
| 2   | 5 bilemedin 6 saatte SQL | 1   | 1   | A   | Ankara |
| 3   | Hakiki SQL | 2   | 2   | B   | İstanbul |

Evet bu sonuç kümesi hangi kitabın, hangi yayınevi tarafından basıldığını gösteren **anlamlı** bir tablo oldu. Aslında bu tablo yukarıdaki 9 satırlı tabloda _yv_no_ ile _no_ alanları eşit olmayan satırlar **elenerek** elde edildi geri planda. Kısacası tüm veritabanı işlemleri matematiksel fomül ve fonksiyonlara dayanır. İlgilenen arkadaşlar **ilişkisel cebir** ve **ilişkisel hesap** konularını inceleyebilirler. 

Sorgumuzu aşağıdaki gibi değiştirerek daha sade ve anlaşılır bir sonuç kümesi elde edelim:

```sql
SELECT kitaplar.isim, yayinevleri.isim FROM kitaplar, yayinevleri WHERE kitaplar.yv_no = yayinevleri.no
```

Sonuç kümesi aşağıdaki gibi olacaktır:

| isim | isim |
| --- | --- |
| 5 dakkada Java | A   |
| 5 bilemedin 6 saatte SQL | A   |
| Hakiki SQL | B   |

Şimdi de sorgumuzu [bir önceki derste](http://www.hrzafer.com/sql-11-as-sozcugu-ve-takma-isimler-alias) öğrendiklerimizden faydalanarak daha okunur hale getirelim.

```sql
SELECT K.isim, Y.isim FROM kitaplar K, yayinevleri Y WHERE K.yv_no = Y.no
```

İşlev açısından yukarıdaki ile tamamen aynı olan sorgumuzu, takma isimlerden (alias) yaralanarak yalnızca sadeleştirdik.

Dersi bir soru ile bitirelim: Aynı sorguyu neden aşağıdaki gibi yazamazdık?

```sql
SELECT isim, isim FROM kitaplar, yayinevleri WHERE yv_no = no
```

Herkese kolay gelsin

### İlgili Diğer Makaleler

- [SQL Dersleri](/sql-dersleri)
- [SQL 02: Distinct İfadesi](/sql-distinct-ifadesi)
- [SQL 03: WHERE Yan Cümlesi (Clause)](/sql-where-clause)
- [Veritabanına Genel Bakış](/veritabanina-genel-bakis)

