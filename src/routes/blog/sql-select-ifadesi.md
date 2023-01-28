---
title: 'SQL 01: Select İfadesi'
date: '2009-07-22'
subtitle: 'Veritabanından istediğimiz kriterlere uygun verileri getiren sorgulara SELECT sorguları diyebiliriz. Bunların dışında veritabanındaki verileri güncelleyen, yenilerini ekleyen ya da silen INSERT, UPDATE ve DELETE sorguları da vardır. Ancak SELECT sorgularını iyi anlayan birisinin genelde daha basit olan bu sorguları da rahatlıkla yazabileceğini düşünüyorum.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

Veritabanından istediğimiz kriterlere uygun verileri getiren sorgulara SELECT sorguları diyebiliriz. Bunların dışında veritabanındaki verileri güncelleyen, yenilerini ekleyen ya da silen INSERT, UPDATE ve DELETE sorguları da vardır. Ancak SELECT sorgularını iyi anlayan birisinin genelde daha basit olan bu sorguları da rahatlıkla yazabileceğini düşünüyorum. Bu yüzden bu makale dizisinde öncelikle SELECT sorguları anlatılacak. İleride vaktim olursa INSERT, UPDATE, DELETE ve dahi SQL’e dair bir çok ayrıntıyı anlatmak isterim. Select (seç) ifadesi bir veritabanından kayıt seçmek için kullanılır. Genel sözdizimi (syntax) aşağıdaki gibidir:

```sql
SELECT kolon_adı(ları) FROM tablo_adı
```

veya

```sql
SELECT * FROM tablo_adı
```

Bu sorgulardan dönen kayıtlar bir tablo olarak karşımıza gelir.

**Örnek-1:** “Kişiler” tablosundan basit bir SELECT sorgusu ile kayıt çekelim.

| ID | Soyad    | Ad     | Adres       | Şehir    |
|----|----------|--------|-------------|----------|
| 1  | Has      | Okan   | Kadıköy 10  | İstanbul |
| 2  | Sevim    | Tuğrul | Bakırköy 23 | İstanbul |
| 3  | Pıtırcık | Kerem  | Sincan 20   | Ankara   |

Bu tablodan “Soyad” ve “Ad” alanlarını seçmek için, aşağıdaki SELECT ifadesini kullanırız:

```sql
SELECT Soyad, Ad FROM Kişiler
```

**Sonuç-kümesi** aşağıdaki gibidir. (Bir sorgudan dönen kayıtlar her zaman bir tablo şeklinde olurlar ve bu tabloya sonuç-kümesi (result-set) denir.)

| Soyad    | Ad     |
|----------|--------|
| Has      | Okan   |
| Sevim    | Tuğrul |
| Pıtırcık | Kerem  |

**Örnek-2:** Eğer bütün alanları (kolonları) seçmek istiyorsak, yıldız karakteri -asteriks de denir- (<strong>*</strong>) kullanılır.

```sql
SELECT * FROM Kişiler
```

Sonuç-kümesi aşağıdaki gibi olacaktır. (Sonuç kümesinin tablonun kendisi olduğunu farkettiniz mi?)

| ID | Soyad    | Ad     | Adres       | Şehir    |
|----|----------|--------|-------------|----------|
| 1  | Has      | Okan   | Kadıköy 10  | İstanbul |
| 2  | Sevim    | Tuğrul | Bakırköy 23 | İstanbul |
| 3  | Pıtırcık | Kerem  | Sincan 20   | Ankara   |


**Not:** SQL dili karakter boyutuna duyarlı değildir. Aşağıdaki sorguların hepsi geçerlidir.

```sql
SELECT * FROM Kişiler
SELECT * FROM kişiler
SELECT * FROM KişiLER
```

<p> <!-- linebreak  -->

### İlgili Diğer Makaleler

- [SQL Dersleri](/sql-dersleri)
- [SQL 02: Distinct İfadesi](/sql-distinct-ifadesi)
- [SQL 03: WHERE Yan Cümlesi (Clause)](/sql-where-clause)
- [Veritabanına Genel Bakış](/veritabanina-genel-bakis)

Herkese kolay gelsin