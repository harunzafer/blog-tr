---
title: 'SQL 14: Kümeleme Fonksiyonları'
date: '2010-09-10'
subtitle: 'Programlama dillerinde olduğu gibi SQL''de de bir çok yerleşik (built-in) fonksiyon mevcuttur. Bunlar temel olarak kümeleme (aggregate) fonksiyonları ve skalar (scalar - iyi bir önerisi olan?) fonksiyonlar diye ikiye ayrılır.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

Programlama dillerinde olduğu gibi SQL'de de bir çok yerleşik (built-in) fonksiyon mevcuttur. Bunlar temel olarak kümeleme (aggregate) fonksiyonları ve skalar (scalar - iyi bir önerisi olan?) fonksiyonlar diye ikiye ayrılır. Bu yazıda en çok kullanılan kümeleme fonksiyonlarını ele alacağız. Yine sık kullanılan skalar fonksiyonlar ise bir başka makalenin konusu olacak. 

Kümeleme fonksiyonları tablodaki bir kolon (alan) üzerindeki değerler için belli matematiksel hesaplamalar yapar ve sonuç döndürürler. Örneğin AVG (average-ortalama) fonksiyonu bir kolondaki tüm değerlerin ortalamasını hesaplamamıza yardımcı olur. Makale boyunca örnek sorgular aşağıdaki _kisiler_ tablosu üzerinde işletilecektir. Tabloya söyle bir göz atıp devam edelim. 

**Not:** Bu arada diğer SQL derslerine [buradan ulaşabilirsiniz](/sql-dersleri)

| id  | Ad  | Soyad | Yas | Cinsiyet | Şehir | Ülke | Maaş |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2   | Ahmet | Yılmaz | 20  | 1   | Ankara | Türkiye | 2000 |
| 3   | Mehmet | Efe | 22  | 1   | Bolu | Türkiye | 2000 |
| 4   | Ayşe | Can | 23  | 0   | İstanbul | Türkiye | 3500 |
| 5   | Fatma | Ak  | 35  | 0   | Ankara | Türkiye | 3200 |
| 6   | John | Smith | 45  | 1   | New York | USA | 3500 |
| 7   | Ellen | Smith | 40  | 0   | New York | USA | 3500 |
| 8   | Hans | Müller | 30  | 1   | Berlin | Almanya | 4000 |
| 9   | Frank | Cesanne | 35  | 1   | Paris | Fransa | 3700 |
| 10  | Abbas | Demir | 26  | 1   | Adana | Türkiye | 2000 |
| 11  | Hatice | Topçu | 26  | 0   | Hatay | Türkiye | 2200 |
| 12  | Gülsüm | Demir | 35  | 0   | Adana | Türkiye | 2000 |

**AVG() Fonksiyonu** 

Ortalama hesaplar. Örneğin çalışanların ortalama ne kadar maaş aldığını hesaplamak istersek:

```sql
SELECT AVG(maaş) FROM kisiler
```
Sorgunun çıktısı aşağıdaki gibi olacaktır:

| AVG(maaş) |
| --- |
| 2872.7273 |

Eğer çıktının biraz daha okunur olmasını arzu edersek sorgu üzerinde ufak bir değişiklik yapabiliriz:

```sql
SELECT AVG(maaş) as OrtalamaMaaş FROM kisiler
```

Sorgunun çıktısı aşağıdaki gibi olacaktır:

| OrtalamaMaaş |
| --- |
| 2872.7273 |

Eğer yalnızca Türkiye'de çalışanların maaş ortalamasını hesaplamak istersek:

```sql
SELECT AVG(maaş) as OrtalamaMaaş FROM kisiler WHERE ülke='Türkiye'
```
Sorgunun çıktısı aşağıdaki gibi olacaktır:

| OrtalamaMaaş |
| --- |
| 2414.2857 |

**COUNT() Fonksiyonu** 

Bir alandaki değerlerin kaç adet olduğunu yani sayısını hesaplar. Örneğin kaç çalışanın olduğunu hesaplamak istersek:

```sql
SELECT COUNT(maaş) as Sayı FROM kisiler
```
Sorgunun çıktısı aşağıdaki gibi olacaktır:

| Sayı |
| --- |
| 11  |

Sorguyu aşağıdaki gibi değiştirsek de sonuç değişmez:

```sql
SELECT COUNT(id) as Sayı FROM kisiler
```
Çünkü COUNT fonksiyonu alandaki değerlerin ne olduğu ile ilgilenmez, sadece kaç adet değer olduğu ile ilgilenir. Eğer boş (NULL) değerler var ise bunlar hesaba katılmaz. Yani yukarıdaki tabloda eğer bir çalışanın maaş bilgisi boş olsaydı, `COUNT(maaş)` sorgusu 10 sonucunu verirken `COUNT(id)` sorgusu 11 sonucunu verecekti.   

**COUNT(*) Kullanımı** 

Eğer kesin olarak kayıt sayısını istiyorsak her zaman ifadeyi `COUNT(*)` şeklinde kullanmalıyız. Bu ifade her zaman tablodaki ya da sonuç kümesindeki kayıt sayısını (satır sayısını) döndürür.

```sql
SELECT COUNT(*) as Sayı FROM kisiler
```
Sorgu kisiler tablosunda kaç kayıt olduğunu hesaplar:

| Sayı |
| --- |
| 11  |

Eğer Amerika'da çalışanların sayısını hesaplamak istersek:

```sql
SELECT COUNT(*) as Sayı FROM kisiler WHERE ülke='USA'
```
Sorgunun çıktısı aşağıdaki gibi olacaktır:

| Sayı |
| --- |
| 2   |

**COUNT (DISTINCT kolon_adı) Kullanımı** 

DISTINCT ifadesini [bu makalede](/sql-distinct-ifadesi) anlatmıştım. Eğer bilmiyorsanız önce o kısa makaleyi okumanızı öneririm. Eğer bir kolondaki farklı değerlerin sayısını öğrenmek istiyorsak COUNT ifadesini `COUNT (DISTINCT kolon_adı)` şeklinde kullanırız. Örneğin kaç farklı ülkeden çalışan olduğunu hesaplamak istersek:

```sql
SELECT COUNT(Distinct ülke) as ÜlkeSayısı FROM kisiler
```
Tabloda ülke alanında 4 farklı değer (Türkiye, USA, Fransa, Almanya) olduğundan çıktı aşağıdaki gibi olacaktır.

| ÜlkeSayısı |
| --- |
| 4   |

**FIRST() Fonksiyonu** 

Bir alandaki ilk değeri döndürür. Örneğin tablodaki ilk ismi öğrenmek istiyorsak.

```sql
SELECT FIRST(Ad) as ilkİsim FROM kisiler
```
Çıktı aşağıdaki gibi olacaktır:

| ilkİsim |
| --- |
| Ahmet |

Ancak bu MySQL First fonksiyonunu desteklemez. Aynı işi yapan sorgu MySQL'de aşağıdaki gibidir.

```sql
SELECT ad as ilkİsim FROM kisiler LIMIT 1
```
Bu arada Limit konusu [bu makalede](/sql-07-top-veya-limit-mysql) anlatıldı. Bilmiyorsanız bir göz atmanızda fayda var.   

**LAST() Fonksiyonu** 

Tahmin edebileceğiniz gibi en sondaki değeri döndürür. Ve yine tahmin edebileceğiniz gibi MySQL tarafından desteklenmez. Tablodaki son soyisim değerini döndüren sorgunun standart SQL ve MySQL versiyonları aşağıdaki gibidir:

```sql
SELECT LAST(Soyad) as SonSoyad FROM kisiler
```

```sql
SELECT soyad as SonSoyad FROM kisiler ORDER BY id DESC LIMIT 1
```
Her iki sorgunun çıktısı aşağıdaki gibidir.

| SonSoyad |
| --- |
| Demir |

**MAX() ve MIN() Fonksiyonları**

Bir alandaki en büyük ve en küçük değerleri döndürürler. En yaşlı ve en genç çalışanları belirlemek istersek:

```sql
SELECT MAX(yas) as EnYaşlı FROM kisiler
```
Çıktı aşağıdaki gibi olacaktır:

| EnYaşlı |
| --- |
| 45  |
 

```sql
SELECT MIN(yas) as EnGenç FROM kisiler
```
Çıktı aşağıdaki gibi olacaktır:

| EnGenç |
| --- |
| 20  |

**Dikkat:** Eğer en yaşlı çalışanı ismi ile birlikte sorgulamak isteseydik aşağıdaki gibi bir sorgunun işimizi görebileğini düşünebilirsiniz. Ancak bu sorgu hatalıdır.

```sql
SELECT ad, MAX(yas) as EnYaşlı FROM kisiler
```
Sorgu ad alanına tablodaki ilk ismi getirirken MAX(yas) alanına maksimum yaşı getirir:

| ad  | EnYaşlı |
| --- | --- |
| Ahmet | 45  |

Ancak Ahmet isimli çalışanın yaşı 45 değildir. Fonksiyonun sadece maksimum değer ile ilgilendiğini unutmayalım. En yaşlı çalışanı ismi ile birlikte bulabilmek için iç-içe (iki seviyeli) sorgu yazmamız gerekiyor ki bu da ileriki bir makalenin konusu olacak inş.   

**SUM() Fonksiyonu**

Sayısal değerler içeren bir kolondaki değerlerin toplamını döndürür. Örneğin aylık ödenen toplam maaşı öğrenmek istersek:

```sql
SELECT SUM(maaş) as ToplamMaaş FROM kisiler
```
Çıktı aşağıdaki gibidir:

| ToplamMaaş |
| --- |
| 31600 |

Son olarak kümeleme fonksiyonlarının `GROUP BY` ifadesi ile birlikte sıkça kullanıldığını hatırlatalım. Bunun yanında iç-içe sorgularda da sıkça kümeleme fonksiyonu kullanılır. Sonraki makalelerde her iki konuyu da örneklerle inceleyeceğiz.

Herkese kolay gelsin

### İlgili Diğer Makaleler

- [SQL 12: Sorguda Birden Fazla Tablo Kullanma: Join-1](/sql-12-sorguda-birden-fazla-tablo-kullanma-join-1)
- [SQL 13: Sorguda Birden Fazla Tablo Kullanma: Join-2](/sql-13-sorguda-birden-fazla-tablo-kullanma-join-2)
- [SQL 15: GROUP BY İfadesi](/sql-15-group-by-ifadesi)
- [SQL 16: HAVING İfadesi](/sql-16-having-ifadesi)