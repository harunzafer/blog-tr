---
title: 'SQL 04: AND ve OR İşleçleri'
date: '2009-08-10'
subtitle: 'Bir önceki yazıda SQL sorgularına nasıl koşul koyacağımızı öğrenmiştik. Bu yazıda ise birden fazla koşul tanımlamak istediğimizde bize yardımcı olacak 2 temel işleci (operatörü) çalışalım.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

Bir önceki [yazıda](http://www.hrzafer.com/sql-where-clause) SQL sorgularına nasıl koşul koyacağımızı öğrenmiştik. Bu yazıda ise birden fazla koşul tanımlamak istediğimizde bize yardımcı olacak 2 temel işleci (operatörü) çalışalım.

<p style='margin-top:50px'>

* AND işlecinin bir kaydı getirmesi için **her iki koşulun da** doğru olması gerekir.
* OR işlecinin bir kaydı getirmesi için iki koşuldan **en az birinin** doğru olması yeterlidir.

**Not:** Bu arada diğer SQL derslerine [buradan ulaşabilirsiniz](/sql-dersleri) 

**AND İşleci Örneği** 

Aşağıdaki tabloda ismi "Derya" **ve** cinsiyeti "K" olanları seçelim.

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| hrzafer | Harun Reşit | Zafer | hrzafer@hrzafer.com | E   |
| derya.z | Derya | Zaimoğlu | derya.z@derya.com | K   |
| meryem1990 | Meryem | Arkadaş | meryem1990@nospam.co | K   |
| eaydin | Emir | Aydın | ea@biracayipadam.com | E   |
| denizeri | Levent | Denizeri | levend@naval.com | E   |

<p>

 ```sql
 SELECT * FROM uyeler WHERE isim = 'Derya' AND cinsiyet = 'K'
 ```
<p>

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| derya.z | Derya | Zaimoğlu | derya.z@derya.com | K   |

Tabloda her iki koşula da uyan tek kayıt getirildi. **OR İşleci Örneği** Yine yukarıdaki tablodan ismi "Derya" **veya** cinsiyeti "K" olanları seçelim.

```sql
SELECT * FROM uyeler WHERE isim = 'Derya' OR cinsiyet = 'K'
```

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| derya.z | Derya | Zaimoğlu | derya.z@derya.com | K   |
| meryem1990 | Meryem | Arkadaş | meryem1990@nospam.co | K   |

Bu defa tabloda iki koşuldan her hangi birine uyan kayıtlar getirildi. Örneğin 2. kaydın isim alanı "Meryem" olsa da cinsiyet alanının "K" olması yeterli oldu. Eğer tablomuzda ismi "Derya" olan ancak cinsiyeti "E" olan bir kayıt olsaydı, o da bu sorgu sonucunda dönen kayıtlar arasında olacaktı. 

**AND ve OR İşleçlerini Beraber Kullanma** 

Cinsiyeti "E" olan ve soyismi "Aydın" veya "Zafer" olan kayıtları getirmek istersek:

```sql
SELECT * FROM uyeler 
WHERE cinsiyet = 'E' AND 
(soyisim = 'Aydın' OR soyisim = 'Zafer')
```

<p>

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| hrzafer | Harun Reşit | Zafer | hrzafer@hrzafer.com | E   |
| eaydin | Emir | Aydın | ea@biracayipadam.com | E   |

Bir kaydın bu koşula uyabilmesi için hem cinsiyeti "E" hem de soyismi "Zafer" veya "Aydın" değerlerinden birisi olmak zorunda. `AND` ve `OR` işleçlerini kullanırken parantezlerin hayati önem taşıdığını unutmayın. 


Herkese kolay gelsin

### İlgili Diğer Makaleler

- [SQL Dersleri](/sql-dersleri)
- [SQL 02: Distinct İfadesi](/sql-distinct-ifadesi)
- [SQL 03: WHERE Yan Cümlesi (Clause)](/sql-where-clause)
- [Veritabanına Genel Bakış](/veritabanina-genel-bakis)

