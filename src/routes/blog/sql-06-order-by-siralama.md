---
title: 'SQL 06: ORDER BY (Sıralama)'
date: '2009-08-13'
subtitle: 'SELECT sorgusu ile çektiğimiz kayıtları (sonuç kümesini) sıralamak için ORDER BY anahtar kelimesini kullanırız. Bu sıralama belirtilen kolona göre yapılır. Ve varsayılan olarak artan (küçükten büyüğe) sıradadır. ORDER BY için sözdizimi (syntax - sintaks) aşağıdaki gibidir:'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

SELECT sorgusu ile çektiğimiz kayıtları (sonuç kümesini) sıralamak için ORDER BY anahtar kelimesini kullanırız. Bu sıralama belirtilen kolona göre yapılır. Ve varsayılan olarak artan (küçükten büyüğe) sıradadır. `ORDER BY` için sözdizimi (syntax - sintaks) aşağıdaki gibidir:

```sql
SELECT kolon_adı(ları)
FROM tablo_adı
ORDER BY kolon_adı(ları) ASC|DESC
```

Burada sıralamanın azalan (büyükten küçüğe) şekilde olmasını istiyorsak `DESC` anahtar kelimesini kullanırız. Artan şekilde olması için ASC yazmamız veya hiç bir şey yazmamamız yeterlidir. 

**Not:** Bu arada diğer SQL derslerine [buradan ulaşabilirsiniz](http://www.hrzafer.com/sql-dersleri)

Örnek sorgularımız için kullanacağımız `Uyeler` tablosu:

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| hrzafer | Harun Reşit | Zafer | hrzafer@hrzafer.com | E   |
| derya.z | Derya | Zaimoğlu | derya.z@derya.com | K   |
| meryem1990 | Meryem | Arkadaş | meryem1990@nospam.co | K   |
| eaydin | Emir | Aydın | ea@biracayipadam.com | E   |
| denizeri | Levent | Denizeri | levend@naval.com | E   |
 
```sql
SELECT isim, soyisim FROM uyeler ORDER BY isim
```

<br>

| isim | soyisim |
| --- | --- |
| Derya | Zaimoğlu |
| Emir | Aydın |
| Harun Reşit | Zafer |
| Levent | Denizeri |
| Meryem | Arkadaş |

Görüldüğü gibi sonuç kümesi **_isim_** kolonuna küçükten büyüğe göre sıralandı.

```sql
SELECT isim, soyisim FROM uyeler ORDER BY soyisim DESC
```

| isim | soyisim |
| --- | --- |
| Derya | Zaimoğlu |
| Harun Reşit | Zafer |
| Levent | Denizeri |
| Emir | Aydın |
| Meryem | Arkadaş |

Bu sorgu ile de  sonuç kümesini _**soyisim**_ kolonuna göre azalan (büyükten küçüğe) şekilde sıralamış olduk. Aşağıdaki sorguyu da Personel tablomuz için yazalım:

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

Erkeklerden Türkiye'de olanları aldıkları maaşa göre artan şekilde sıralayan sorgu:

```sql
SELECT * FROM personel 
WHERE cinsiyet='E' AND ulke='Türkiye' ORDER BY maas
```

| per_no | isim | soyisim | yas | cinsiyet | kent | ulke | maas |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9   | Abbas | Demir | 26  | E   | Adana | Türkiye | 1500 |
| 2   | Mehmet | Efe | 22  | E   | Bolu | Türkiye | 1800 |
| 1   | Ahmet | Yılmaz | 20  | E   | Ankara | Türkiye | 2000 |

Görüldüğü gibi `ORDER BY` anahtar kelimesi her zaman sorgunun sonuna geliyor. Çünkü sorgunun kendisi sonuç kümesini belirlerken `ORDER BY` yalnızca bu sonuç kümesini sıralıyor.


Herkese kolay gelsin

### İlgili Diğer Makaleler

- [SQL 04: AND ve OR İşleçleri](/sql-04-and-ve-or-islecleri)
- [SQL 05: Karmaşık AND ve OR sorguları](/sql-05-karmasik-and-ve-or-sorgulari)
- [SQL 07: TOP veya LIMIT (mySQL)](/sql-07-top-veya-limit-mysql)
- [SQL 08: LIKE İşleci (Operatörü) – 1](/sql-08-like-1)