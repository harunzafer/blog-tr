---
title: 'SQL 13: Sorguda Birden Fazla Tablo Kullanma: Join-2'
date: '1888-01-01'
subtitle: 'İki veya daha fazla tablonun belirli kolonları arasındaki ilişkilere dayanarak bu tablolardan veri çekme işlemine JOIN denir. Bu işlem için JOIN anahtar kelimesi kullanılır ama zorunlu değildir.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

İki veya daha fazla tablonun belirli kolonları arasındaki ilişkilere dayanarak bu tablolardan veri çekme işlemine JOIN denir. Bu işlem için JOIN anahtar kelimesi kullanılır ama zorunlu değildir. Bir önceki yazıda ilişkili 2 tablo için yazdığımız join sorgularımızın hiçbirinde JOIN anahtar sözcüğünü kullanmamıştık. Bu yazıda hem JOIN anahtar sözcüğünün kullanımını hem de ilişkili 3 tablo için sorgu yazılışını anlatmaya çalışacağım.

**Not:** Bu arada diğer SQL derslerine [buradan ulaşabilirsiniz](http://www.hrzafer.com/sql-dersleri)

Ama önce biraz ısınmak için tabloları ve sorgumuzu hatırlayalım. Bu iki tablo arasındaki ilişkiyi yayınevleri tablosundaki **no** alanı ile Kitaplar tablosundaki **yv_no** (yayınevi no) alanlarının sağladığını tekrar hatırlatalım. Aslında `yv_no` alanı Yayınevleri tablosunun **birincil anahtarı** (primary key) olan no alanını referans göstermektedir. Bir tabloda, başka bir tablonun birincil anahtar alanını referans gösteren alanlara **yabancı anahtar** (foreign key) diyoruz. Burada da yv\_no alanı yabancı anahtar konumunda. Örneğin Yayınevleri tablosunda 5 nolu bir yayınevi olmadığına göre Kitaplar tablosundaki yv\_no alanı değerini alamaz. yv\_no alanının bu örnekte alabileceği değerler 1, 2 ve 3'tür. Ancak 5 nolu bir yayınevi Yayınevleri tablosuna eklendikten sonra yv\_no alanı da 5 değerini alabilir. 

Yukarıdaki paragrafın Türkçesi: 5 nolu bir yayınevi olmadığına göre 5 nolu yayınevi tarafından basılmış kitap/kitaplar da olamaz. 

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

Hangi kitabın hangi yayınevi tarafından basıldığını gösteren sorgu (JOIN anahtar sözcüğünü kullanmadan)

```sql
SELECT K.isim, Y.isim FROM kitaplar K, yayinevleri Y WHERE K.yv_no = Y.no
```
Yukarıdaki soru ile tamamen aynı işi yapan bu sorguda ise JOIN anahtar sözcüğünü kullanalım:

```sql
SELECT K.isim, Y.isim FROM kitaplar K INNER JOIN yayınevleri Y ON Y.no = K.yv_no
```
Her iki sorgunun da çıktısı aşağıdaki gibi olacaktır:

| isim | isim |
| --- | --- |
| 5 dakkada Java | A   |
| 5 bilemedin 6 saatte SQL | A   |
| Hakiki SQL | B   |

Birbiri ile ilişkili 3 tablo için join sorgularının nasıl yazılacağına bakmadan önce bize 3 tablo gerekiyor. 

Bu yüzden veritabanımıza yazarları da dahil edelim. Ancak bir yazarın birden fazla kitabı olabileceği gibi bir kitabın da birden fazla yazarı olabilir. Bu da kitap ve yazar tabloları arasında **çoğa-çok** ilişki olduğunu gösteriyor. Oysa kitap ile yayınevi tabloları arasındaki ilişki **bire-çok** şeklindedir. Yani bir yayınevi birden fazla kitap basabilir ancak bir kitap yalnızca bir yayınevi tarafından basılabilir.

Çoğa-çok ilişkili varlıkları ifade edebilmek için veritabanına **3\. bir tablo** eklememiz gerekiyor. Burada bu tablonun adı KitapYazar.  KitapYazar tablosuna şöyle bir baktığımızda 1 nolu kitabı 2 nolu yazarın yazdığını, 3 nolu kitabı 1 ve 2 nolu yazarların yazdığını ya da 2 nolu yazarın 1 ve 3 nolu kitapların yazarı olduğunu görebiliyoruz.

**Kitaplar**

| no  | isim | yv_no |
| --- | --- | --- |
| 1   | 5 dakkada Java | 1   |
| 2   | 5 bilemedin 6 saatte SQL | 1   |
| 3   | Hakiki SQL | 2   |

**KitapYazar**

| kno | yno |
| --- | --- |
| 1   | 2   |
| 2   | 3   |
| 3   | 1   |
| 3   | 2   |

**Yazarlar**

| no  | isim | ulke |
| --- | --- | --- |
| 1   | Nihat Veritabanı | Türkiye |
| 2   | Muharrem Nesnel | Türkiye |
| 3   | Taylan Esquel | Meksika |

Hangi kitabı hangi yazarın yazdığını isim isim listelemek istememiz durumunda 3 tabloyu da kullanan bir JOIN sorugusu yazmamız gerekir.

```sql
SELECT * FROM kitaplar K , yazarlar Y, kitapyazar KY WHERE K.no=KY.kno AND Y.no=KY.yno
```
veya

```sql
SELECT * FROM kitaplar K INNER JOIN kitapyazar KY ON K.no= KY.kno INNER JOIN yazarlar Y ON KY.yno=Y.no
```
Her iki sorgunun da çıktısı aşağıdaki gibi olacaktır:

| no  | isim | yv_no | kno | yno | no  | isim | ulke |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | 5 dakkada Java | 1   | 1   | 2   | 2   | Muharrem Nesnel | Türkiye |
| 2   | 5 bilemedin 6 saatte SQL | 1   | 2   | 3   | 3   | Taylan Esquel | Meksika |
| 3   | Hakiki SQL | 2   | 3   | 1   | 1   | Nihat Veritabanı | Türkiye |
| 3   | Hakiki SQL | 2   | 3   | 2   | 2   | Muharrem Nesnel | Türkiye |

Sonuç tablosunu daha sade istersek sorgularımızı yalnızca isim alanlarını getirecek şekilde düzenleyebiliriz:

```sql
SELECT K.isim,  Y.isim FROM kitaplar K , yazarlar Y, kitapyazar KY WHERE K.no=KY.kno AND Y.no=KY.yno
```
veya

```sql
SELECT K.isim, Y.isim FROM kitaplar K JOIN kitapyazar KY ON K.no= KY.kno JOIN yazarlar Y ON KY.yno=Y.no
```
Dikkat ederseniz bu sorguda **INNER** anahtar sözcüğünü kullanmadım çünkü aksini belirtmedikçe (yani INNER yerine outer, right, left anahtar sözcükleri ile join'in türünü belirtmedikçe) varsayılan olarak INNER JOIN işlemi yapılacaktır. Başka bir ifade ile "abi ben OUTER, RIGHT, LEFT join nedir bilmem, bana bildiğimiz JOIN lazım diyorsanız" ben de "kardeş INNER yazmasan da olur" diyorum. 

Her iki sorgunun da çıktısı aşağıdaki gibi olacaktır:

| isim | isim |
| --- | --- |
| 5 dakkada Java | Muharrem Nesnel |
| 5 bilemedin 6 saatte SQL | Taylan Esquel |
| Hakiki SQL | Nihat Veritabanı |
| Hakiki SQL | Muharrem Nesnel |

Sonuç olarak bu yazı beni pek tatmin etmedi. Daha samimi bir ifade ile "içime sinmedi". Çünkü JOIN konusu veritabanı tasarımı ile doğrudan alakalı ve birincil anahtar, yabancı anahtar, tablo ilişkileri gibi bir çok kavramın önceden anlaşılmış olması gerekiyor ki bu konu tam olarak anlaşılabilsin. Yukarıda biraz bahsetmeye çalıştım ama aslında 4-5 makale ile ayrıntılı ele alınması gereken ve SQL çalışmaya başlamadan önce öğrenilmesi gereken konular bunlar. 

İnşaallah bu yazı faydalı olmuştur ve umarım vaktim olur da veritabanı tasarımı konusunu detaylı olarak ele alabilirim. Herkese Kolay Gelsin

Herkese kolay gelsin

### İlgili Diğer Makaleler

- [SQL Dersleri](/sql-dersleri)
- [SQL 02: Distinct İfadesi](/sql-distinct-ifadesi)
- [SQL 03: WHERE Yan Cümlesi (Clause)](/sql-where-clause)
- [Veritabanına Genel Bakış](/veritabanina-genel-bakis)

