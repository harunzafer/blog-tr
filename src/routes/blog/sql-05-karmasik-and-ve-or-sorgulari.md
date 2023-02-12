---
title: 'SQL 05: Karmaşık AND ve OR sorguları'
date: '2009-08-11'
subtitle: 'Başlık gözünüzü korkutmasın. Bir önceki yazıda AND ve OR işleçlerinin (operatör) kullanımına genel olarak değinmiştik ama AND ve OR kavramlarının daha iyi anlaşılması için farklı sorgu örnekleri vermek istedim. Sorguları aşağıdaki tablo için yazacağız'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

Başlık gözünüzü korkutmasın. Bir [önceki yazıda](http://www.hrzafer.com/sql-04-and-ve-or-islecleri) AND ve OR işleçlerinin (operatör) kullanımına genel olarak değinmiştik ama AND ve OR kavramlarının daha iyi anlaşılması için farklı sorgu örnekleri vermek istedim. Sorguları aşağıdaki tablo için yazacağız. 

 **Not:** Bu arada diğer SQL derslerine [buradan ulaşabilirsiniz](http://www.hrzafer.com/sql-dersleri)
 
 **Personel Tablosu**

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

**1-** Adı Ahmet ve Mehmet olanlar:

```sql
SELECT * FROM personel WHERE isim= 'Ahmet' AND isim= 'Mehmet'
```

Bu sorgunun sonucu boş kümedir. Zira adı aynı zamanda hem Ahmet hem Mehmet olan kayıt yoktur. Bu örneği vermemin nedeni **_Adı Ahmet ve Mehmet olanlar_** ifadesinin normalde **_Ahmetler ve Mehmetler_** şeklinde anlaşılması. Ancak SQL'de işleçlerin (operatörlerin) anlamları nettir. Sorguyu aşağıdaki gibi değiştirelim:

```sql
SELECT * FROM personel WHERE isim='Ahmet' OR isim='Mehmet'
```

Değiştirmiş olduğumuz sorgunun Türkçesi **_adı 'Ahmet' veya adı 'Mehmet' olanlar_** şeklinde ifade edilir. Bu sorgunun sonucu aşağıdaki gibidir:  

| per_no | isim | soyisim | yas | cinsiyet | kent | ulke | maas |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1   | Ahmet | Yılmaz | 20  | E   | Ankara | Türkiye | 2000 |
| 2   | Mehmet | Efe | 22  | E   | Bolu | Türkiye | 1800 |

**2-** Yaşı 30'dan büyük ve erkek **veya** yaşı 25'ten küçük ve kadın olanlar:

```sql
SELECT * FROM personel 
WHERE (yas > 30 AND cinsiyet= 'E') OR 
(yas < 25 AND cinsiyet= 'K')
```

Sorgudaki parantezlere ve sorgunun aşağıdaki sonucuna dikkat:

| per_no | isim | soyisim | yas | cinsiyet | kent | ulke | maas |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3   | Ayşe | Can | 23  | K   | İstanbul | Türkiye | 2500 |
| 5   | John | Smith | 45  | E   | New York | ABD | 3500 |
| 8   | Frank | Cesanne | 35  | E   | Paris | Fransa | 3700 |

**3-** Yaşı 30'dan büyük veya Ankara'da oturan **ve** maaşı 2500'den büyük veya kadın olanlar:

```sql
SELECT * FROM personel 
WHERE (yas > 30 OR kent= 'Ankara') AND 
(maas > 2500 OR cinsiyet= 'K')
```

Yukarıdaki 2 parantezin her birindeki 2 sorgudan en az birine uyan kayıtlar bu sorgunun sonucunu oluşturur. Örneğin ilk parantezdeki yaş koşulu tutan yani yaşı 30'dan büyük olan bir kayıtın ikinci parantezden de en az bir koşula uyması gerekiyor ki aşağıda yer alabilsin. Aşağıdaki sonuç kümesini incelediğinizde yukarıdaki sorguyu daha iyi anlayacaksınız:

| per_no | isim | soyisim | yas | cinsiyet | kent | ulke | maas |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4   | Fatma | Ak  | 35  | K   | Ankara | Türkiye | 2800 |
| 5   | John | Smith | 45  | E   | New York | ABD | 3500 |
| 6   | Ellen | Smith | 40  | K   | New York | ABD | 3000 |
| 8   | Frank | Cesanne | 35  | E   | Paris | Fransa | 3700 |

Herkese Kolay Gelsin

### İlgili Diğer Makaleler


- [SQL 02: Distinct İfadesi](/sql-distinct-ifadesi)
- [SQL 03: WHERE Yan Cümlesi (Clause)](/sql-where-clause)
- [SQL 04: AND ve OR İşleçleri](/sql-04-and-ve-or-islecleri)
sql-05-karmasik-and-ve-or-sorgulari)
- [SQL 06: ORDER BY (Sıralama)](/sql-06-order-by-siralama)