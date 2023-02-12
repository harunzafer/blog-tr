---
title: 'SQL 08: LIKE İşleci (Operatörü) - 1'
date: '2009-10-09'
subtitle: 'Like (layk diye okunur) kelimesinin buradaki anlamının "gibi" olduğunu en baştan bilirsek gerisini anlamamız çok daha kolay olacaktır. LIKE işleci (operatörü) belirtilen özelliklere uygun metinlerin bulunması için kullanılan, oldukça faydalı ve sık kullanılan bir işleçtir.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

Like (layk diye okunur) kelimesinin buradaki anlamının "gibi" olduğunu en baştan bilirsek gerisini anlamamız çok daha kolay olacaktır. LIKE işleci (operatörü) belirtilen özelliklere uygun metinlerin bulunması için kullanılan, oldukça faydalı ve sık kullanılan bir işleçtir. Bu yüzden konunun üzerinde ayrıntılı olarak duracağım. 

**SQL LIKE Sözdizimi (Syntax)**

```sql
SELECT kolon_adı(ları)
FROM tablo_adı
WHERE kolan_adı LIKE 'desen' (pattern)
```

Yukarıda geçen desen (pattern) kavramını örneklerden sonra daha iyi anlayacaksınız. 

**Not:** Bu arada diğer SQL derslerine [buradan ulaşabilirsiniz](http://www.hrzafer.com/sql-dersleri)

Örnek sorgularımız için kullanacağımız `Uyeler` tablosu:

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| hrzafer | Harun Reşit | Zafer | hrzafer@hrzafer.com | E   |
| derya.z | Derya | Zaimoğlu | derya.z@derya.com | K   |
| meryem1990 | Meryem | Arkadaş | meryem1990@nospam.com | K   |
| eaydin | Emir | Aydın | ea@biracayipadam.com | E   |
| denizeri | Levent | Denizeri | levend@naval.com | E   |

**Örnek-1:** Soyadı "Z" harfi ile başlayan üyeleri seçmek istiyoruz

```sql
SELECT * FROM uyeler 
WHERE soyisim LIKE 'Z%'
```

Sorgumuzun çıktısı aşağıdaki gibi olacaktır:

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| hrzafer | Harun Reşit | Zafer | hrzafer@hrzafer.com | E   |
| derya.z | Derya | Zaimoğlu | derya.z@derya.com | K   |

Burada desen olarak `Z%` ifadesini kullandık. Ve bu ifadeyi **tek tırnak içerisinde** yazdık. Bu desenin anlamı avamca "ilk harfi büyük Z olmalı gerisi ise herşey olabilir" demek. 

**Örnek-2:** Adının son harfi "t" olan üyeleri seçelim:

```sql
SELECT * FROM uyeler
WHERE isim LIKE '%t'
```
Sorgumuzun çıktısı aşağıdaki gibi olacaktır:

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| hrzafer | Harun Reşit | Zafer | hrzafer@hrzafer.com | E   |
| denizeri | Levent | Denizeri | levend@naval.com | E   |

**Örnek-3:** İsminin içerisinde "er" ifadesi geçen üyeleri bulalım:

```sql
SELECT * FROM uyeler
WHERE isim LIKE '%er%'
```

Sorgumuzun çıktısı aşağıdaki gibi olacaktır:

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| derya.z | Derya | Zaimoğlu | derya.z@derya.com | K   |
| meryem1990 | Meryem | Arkadaş | meryem1990@nospam.com | K   |

`%` karakterinin sıfır, bir yada daha çok karakterin yerine geçebilen bir **joker karakter** (wildcard) olduğu herhalde örneklerden anlaşılmıştır. 

**Örnek-4:** Şimdi de isminin içerisinde "er" ifadesi **geçmeyen** üyeleri bulalım:

```sql
SELECT * FROM uyeler
WHERE isim NOT LIKE '%er%'
```
<br>

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| hrzafer | Harun Reşit | Zafer | hrzafer@hrzafer.com | E   |
| eaydin | Emir | Aydın | ea@biracayipadam.com | E   |
| denizeri | Levent | Denizeri | levend@naval.com | E   |

Görüldüğü gibi `NOT` ifadesi **seçimi tersine çevirmek** için yeterli oluyor. Buraya kadar LIKE operatörüne genel bir giriş yapmış olduk. Bir sonraki yazıda LIKE ile **joker karakterlerin** (wildcards) kullanımına ayrıntılı olarak bakacağız. 


Herkese kolay gelsin

### İlgili Diğer Makaleler

- [SQL 07: TOP veya LIMIT (mySQL)](/sql-07-top-veya-limit-mysql)
- [SQL 08: LIKE İşleci (Operatörü) – 2](/sql-08-like-isleci-operatoru-2)
- [SQL 09: IN İşleci](/sql-09-in-isleci)
- [SQL 10: BETWEEN İşleci](/sql-10-between-isleci)