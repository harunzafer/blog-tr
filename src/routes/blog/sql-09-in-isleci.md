---
title: 'SQL 09: IN İşleci'
date: '2009-11-20'
subtitle: 'WHERE ifadesi içinde birden fazla değeri koşul olarak belirlemek istediğimizde IN (içinde) anahtar sözcüğünü kullanırız.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">


`WHERE` ifadesi içinde birden fazla değeri koşul olarak belirlemek istediğimizde `IN` (içinde) anahtar sözcüğünü kullanırız. Daha iyi anlamak için hemen örneklere geçelim. 

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

**Sorgu:**  Yaşı 22, 23, 25, 26 sayılarından birine eşit olanlar.

```sql
Select * from personel where yas in (22, 23, 25, 26)
```

veya

```sql
Select * from personel where yas=22 OR yas=23 OR yas=25 OR yas=26
```

Her iki sorgunun da çıktısı aşağıdaki gibi olacaktır:

| per_no | isim | soyisim | yas | cinsiyet | kent | ulke | maas |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2   | Mehmet | Efe | 22  | E   | Bolu | Türkiye | 1800 |
| 3   | Ayşe | Can | 23  | K   | İstanbul | Türkiye | 2500 |
| 9   | Abbas | Demir | 26  | E   | Adana | Türkiye | 1500 |
| 10  | Hatice | Yılmaz | 26  | K   | İstanbul | Türkiye | 3000 |

Görüldüğü gibi iki sorgu aynı işi yapıyor. Ancak `OR` ile yazdığımız sorgu daha uzun ve karışık görünüyor. Ancak `In` işlecinin tek faydası sağladığı bu pratiklik değil. Gerisini ileriki konulara havale edelim. 

**Sorgu:** İsimleri Ahmet veya Mehmet olan personel

```sql
SELECT * FROM personel WHERE isim IN ('Ahmet', 'Mehmet')
```

veya

```sql
SELECT * FROM personel WHERE isim='Ahmet' OR isim= 'Mehmet'
```

Her iki sorgunun da çıktısı aşağıdaki gibi olacaktır:

| per_no | isim | soyisim | yas | cinsiyet | kent | ulke | maas |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | Ahmet | Yılmaz | 20  | E   | Ankara | Türkiye | 2000 |
| 2   | Mehmet | Efe | 22  | E   | Bolu | Türkiye | 1800 |

İsim, soyisim gibi metin değerleri yukarıdaki gibi **tek tırnak** içerisinde yazmayı unutmayın. 

Herkese Kolay Gelsin

### İlgili Diğer Makaleler

- [SQL Dersleri](/sql-dersleri)
- [SQL 02: Distinct İfadesi](/sql-distinct-ifadesi)
- [SQL 03: WHERE Yan Cümlesi (Clause)](/sql-where-clause)
- [Veritabanına Genel Bakış](/veritabanina-genel-bakis)

