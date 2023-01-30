---
title: 'SQL 03: WHERE Yan Cümlesi (Where Clause)'
date: '2009-07-22'
subtitle: 'SELECT sorgularının yalnızca belli bir kritere uygun kayıtları getirmesini istiyorsak, sorguya WHERE anahtar sözcüğü ile başlayan ve gerekli koşulları içeren bir yan cümle ekleriz.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

SELECT sorgularının yalnızca belli bir kritere uygun kayıtları getirmesini istiyorsak, sorguya WHERE anahtar sözcüğü ile başlayan ve gerekli koşulları içeren bir **yan cümle** ekleriz.



<p style='margin-top:50px'>


```sql
SELECT kolon_adı(ları)
FROM tablo_adı
WHERE koşul
```

**Örnek:** Aşağıdaki `Kisiler` tablosunda yalnızca Ankara’da oturan kişileri seçmek istersek:

| kisi_no | isim        | soyisim  | website           | kent     |
|---------|-------------|----------|-------------------|----------|
| 1       | Harun Reşit | Zafer    | hrzafer.com       | İstanbul |
| 2       | Derya       | Zaimoğlu | dz.net            | Ankara   |
| 3       | Meryem      | Arkadaş  |                   | Kars     |
| 4       | Emir        | Aydın    | biracayipadam.com | Houston  |

<p>

```sql
SELECT * FROM kisiler WHERE kent = 'Ankara'
```

Yukarıdaki sorgudan dönen sonuç kümesi aşağıdaki gibi olacaktır:

| kisi_no | isim  | soyisim  | website | kent   |
|---------|-------|----------|---------|--------|
| 2       | Derya | Zaimoğlu | dz.net  | Ankara |


Aşağıdaki yazarlar tablosu için “ülkesi Rusya olan yazarlar” sorgusunu yazalım:

| yazar_no  | isim   | soyisim     | ulke    | dogum_yili  | olum_yili  |
|-----------|--------|-------------|---------|-------------|------------|
| 1         | Lev    | Tolstoy     | Rusya   | 1828        | 1910       |
| 2         | Fyodor | Dostoyevski | Rusya   | 1821        | 1881       |
| 3         | Victor | Hugo        | Fransa  | 1802        | 1885       |
| 5         | Alev   | Alatlı      | Türkiye | 1944        | NULL       |

<p>

```sql
SELECT * FROM yazarlar WHERE ulke='Rusya'
```

Sonuç kümesi aşağıdaki gibi olacaktır:

| yazar_no  | isim   | soyisim     | ulke  | dogum_yili  | olum_yili  |
|-----------|--------|-------------|-------|-------------|------------|
| 1         | Lev    | Tolstoy     | Rusya | 1828        | 1910       |
| 2         | Fyodor | Dostoyevski | Rusya | 1821        | 1881       |


Doğum yılı 1825′ten büyük olan yazarlar:

```sql
SELECT * FROM yazarlar WHERE dogum_yili > 1825
```
<p>

| yazar_no  | isim  | soyisim  | ulke    | dogum_yili  | olum_yili  |
|-----------|-------|----------|---------|-------------|------------|
| 1         | Lev   | Tolstoy  | Rusya   | 1828        | 1910       |
| 5         | Alev  | Alatlı   | Türkiye | 1944        | NULL       |


**Önemli:** Tipi metin (text) olan alanlara karşılık gelen değerleri her zaman tırnak içerisinde yazıyoruz.


```sql
 WHERE ulke='Rusya'
```
Sayısal değerleri ise her zaman tırnaksız yazıyoruz.

```sql
 WHERE dogum_yili=1825
```
<p>

### WHERE Yan Cümlesinde Kullanılan İşleçler (Operatörler)

<p>

| İşleç    | Tanım                           |
|----------|---------------------------------|
| =        | Eşittir                         |
| `<>`     | Eşit değildir                   |
| `>`      | Büyüktür                        |
| `<`      | Küçüktür                        |
| `>=`     | Büyük eşit                      |
| `<=`     | Küçük eşit                      |
| BETWEEN  | Arasında (bir değer aralığının) |
| LIKE     | Gibi                            |
| IN       | İçinde                          |

Yukarıdaki işleçler sayesinde aşağıdaki gibi farklı koşullar tanımlayabiliriz.


`WHERE olum_yili &lt; 1900` (1900 yılından önce ölenler)

`WHERE soyisim &lt;&gt; 'Ali'` (Soyadı Ali olmayan kişiler)

`WHERE isim &lt; 'Can'` (Adı alfabetik olarak Can kelimesinden önce gelenler)

**Not:** `BETWEEN`, `LIKE` ve `IN` işleçlerinin her birine ayrı bir yazıda yer vereceğim.

Ayrıca birden fazla koşul tanımlamak için kullanılan AND ve OR anahtar sözcüklerini de ayrı bir yazıda ayrıntılı olarak anlatacağım.


Herkese kolay gelsin

### İlgili Diğer Makaleler

- [SQL Dersleri](/sql-dersleri)
- [SQL 02: Distinct İfadesi](/sql-distinct-ifadesi)
- [SQL 03: WHERE Yan Cümlesi (Clause)](/sql-where-clause)
- [Veritabanına Genel Bakış](/veritabanina-genel-bakis)

