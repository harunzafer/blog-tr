---
title: 'SQL 02: Distinct İfadesi'
date: '2009-07-22'
subtitle: 'Bazen bir tablonun bazı kolonlarında tekrarlanan değerler (veriler) olabilir. Örneğin aşağıdaki tabloda şehir alanına bakarsanız İstanbul verisinin iki kez bulunduğunu görürsünüz. Elbette bu gayet normal bir durumdur. Ancak tekrarlanan verileri eleyerek her farklı veriden yalnız bir adet bulunmasını istiyorsak DISTINCT anahtar sözcüğünü kullanırız.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

Bazen bir tablonun bazı kolonlarında tekrarlanan değerler (veriler) olabilir. Örneğin aşağıdaki tabloda şehir alanına bakarsanız İstanbul verisinin iki kez bulunduğunu görürsünüz. Elbette bu gayet normal bir durumdur. Ancak tekrarlanan verileri eleyerek her farklı veriden yalnız bir adet bulunmasını istiyorsak DISTINCT anahtar sözcüğünü kullanırız.

| ID | Soyad    | Ad     | Adres       | Şehir    |
|----|----------|--------|-------------|----------|
| 1  | Has      | Okan   | Kadıköy 10  | İstanbul |
| 2  | Sevim    | Tuğrul | Bakırköy 23 | İstanbul |
| 3  | Pıtırcık | Kerem  | Sincan 20   | Ankara   |

**Örnek-1:** Eğer yukarıdaki tabloda yalnızca farklı şehirleri seçmek istiyorsak:

```sql
 SELECT DISTINCT Şehir FROM Kişiler
```

Sonuç kümesi (result-set) aşağıdaki gibi olacaktır:

| Şehir    |
|----------|
| İstanbul |
| Ankara   |

**Örnek-2:** Bu defa DISTINCT komutumuzu aşağıdaki Uyeler tablosunun cinsiyet alanı için yazalım:

| uye_adi    | isim        | soyisim  | e-posta              | cinsiyet  |
|------------|-------------|----------|----------------------|-----------|
| hrzafer    | Harun Reşit | Zafer    | hrzafer@hrzafer.com  | E         |
| derya.z    | Derya       | Zaimoğlu | derya.z@derya.com    | K         |
| meryem1990 | Meryem      | Arkadaş  | meryem1990@nospam.co | K         |
| eaydin     | Emir        | Aydın    | ea@biracayipadam.com | E         |

<p>

```sql
SELECT DISTINCT cinsiyet FROM uyeler
```

Aslında bu sorgu "tablomuzdaki farklı cinsiyetler" ifadesine karşılık gelir. Sonuç kümesi doğal olarak aşağıdaki gibi olacaktır:

| cinsiyet  |
|-----------|
| E         |
| K         |

Sanıyorum bu örnekler DISTINCT anahtar sözcüğünün anlaşılmasında yeterli olmuştur.

**Not:** distinct kelimesi different (farklı) kelimesi ile eş anlamlıdır. Akılda kalıcı olması adına bu küçük bilgiyi ekleme ihtiyacı duydum

Herkese kolay gelsin



### İlgili Diğer Makaleler

- [SQL Dersleri](/sql-dersleri)
- [SQL 01: Select İfadesi](/sql-select-ifadesi)
- [SQL 03: WHERE Yan Cümlesi (Clause)](/sql-where-clause)
- [Veritabanına Genel Bakış](/veritabanina-genel-bakis)

