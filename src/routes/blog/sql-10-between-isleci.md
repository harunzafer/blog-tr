---
title: 'SQL 10: BETWEEN İşleci'
date: '2009-12-26'
subtitle: 'BETWEEN işleci adından da anlaşılacağı üzere bir alanın değerinin iki değer arasında olup olmadığına dair koşul tanımlamak istediğimizde kullanılır.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

`BETWEEN` işleci adından da anlaşılacağı üzere bir alanın değerinin iki değer arasında olup olmadığına dair koşul tanımlamak istediğimizde kullanılır. (garip bir cümle oldu. farkındayım) Örneğin _"yaşı 20 ile 30 arasında olanlar"_ gibi bir koşulu SQL ile yazabilmek için `BETWEEN` işlecini kullanırız. Kullanımı oldukça basit olan bu işleç için hemen bir kaç örnek verelim. 

Örnekler için aşağıdaki _personel_ tablosunu kullanacağız. 

**Not:** Bu arada diğer SQL derslerine [buradan ulaşabilirsiniz](http://www.hrzafer.com/sql-dersleri)

| per_no | isim | soyisim | yas | cinsiyet | kent | ulke | maas |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | Ahmet | Yılmaz | 20  | E   | Ankara | Türkiye | 2000 |
| 2   | Mehmet | Efe | 22  | E   | Bolu | Türkiye | 1800 |
| 3   | Ayşe | Can | 23  | K   | İstanbul | Türkiye | 2500 |
| 4   | Fatma | Ak  | 35  | K   | Ankara | Türkiye | 2800 |
| 5   | John | Smith | 45  | E   | New York | ABD | 3500 |
| 6   | Ellen | Smith | 40  | K   | New York | ABD | 3000 |
| 7   | Hans | Müller | 30  | E   | Berlin | Almanya | 4000 |
| 8   | Frank | Cesanne | 35  | E   | Paris | Fransa | 3700 |
| 9   | Abbas | Demir | 26  | E   | Adana | Türkiye | 1500 |
| 10  | Hatice | Yılmaz | 26  | K   | İstanbul | Türkiye | 3000 |

**Sorgu:** Yaşı 20 ile 26 arasında olan personellerin isim, soyisim ve yaş bilgileri.

```sql
SELECT isim, soyisim, yas FROM personel WHERE yas between 20 and 26
```

Sorgunun çıktısı aşağıdaki gibi olacaktır:

| isim | soyisim | yas |
| --- | --- | --- |
| Ahmet | Yılmaz | 20  |
| Mehmet | Efe | 22  |
| Ayşe | Can | 23  |
| Abbas | Demir | 26  |
| Hatice | Yılmaz | 26  |

Burada **sonuç kümesi**ne dikkat edecek olusanız. Klasik _"20 ve 26 da dahil mi"_ sorusuna da cevap almış olacaksınız. **Ancak** bu MySQL için böyle. Başka veritabanı sistemlerinde farklı olabilir. Kodları yalnızca MySQL ile deniyorum. Bunu anlamanın en iyi yolu çalıştığınız VT üzerinde denemek. 

**Sorgu:** İsimleri Ahmet ile Fatma arasında olanlar (kulağa ilginç geliyor ama aslında sadece alfabetik sıralama.)

```sql
SELECT isim, soyisim, yas FROM personel WHERE isim between 'Ahmet' and 'Fatma'
```

| isim | soyisim | yas |
| --- | --- | --- |
| Ahmet | Yılmaz | 20  |
| Ayşe | Can | 23  |
| Fatma | Ak  | 35  |
| Ellen | Smith | 40  |

**Dikkat:** Burada 'Ahmet' ve 'Fatma' yerine 'ahmet' ve 'fatma' yazsaydık, sorgumuz boş küme döndürürdü. 'A' ve 'a' sembolleri farklı değerler ifade ediyor. Başka bir ifade ile küçük harfler ile büyük harfler farklı iki grup teşkil ediyorlar. Bu arada Türkçe karakterler de (doğrusu yalnızca çığöşü değil İngiliz alfabesinde olmayan tüm karakterler) genelde bu grupların sonunda yer alıyor. 

Örneğin `ORDER BY` ile isme göre sıralama yaptığınızda Ç ile başlayan ismin C ile başlayanlardan sonra değil de Z'den sonra geldiğini görürseniz saşırmayın. Elbette bunu düzeltmenin de yolları var ama ileriki konularda değineceğim inş. 

`BETWEEN` işlecini sayısal (`INTEGER`) ve metin (`VARCHAR`) değerlerin yanında tarih (`DATE`) tipindeki değerler ile de kullanabileceğimizi hatırlatalım.


Herkese kolay gelsin

### İlgili Diğer Makaleler

- [SQL Dersleri](/sql-dersleri)
- [SQL 02: Distinct İfadesi](/sql-distinct-ifadesi)
- [SQL 03: WHERE Yan Cümlesi (Clause)](/sql-where-clause)
- [Veritabanına Genel Bakış](/veritabanina-genel-bakis)

