---
title: 'SQL 15: GROUP BY İfadesi'
date: '1888-01-01'
subtitle: 'Bir önceki makalede SQL kümeleme fonksiyonlarını anlatmıştık. Çünkü kümeleme fonksiyonları genelde GROUP BY ifadesi ile birlikte kullanılır. Adından da anlaşılacağı üzere GROUP BY ifadesi gruplama yapar.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

[Bir önceki makalede](http://www.hrzafer.com/sql-14-kumeleme-fonksiyonlari) SQL kümeleme fonksiyonlarını anlatmıştık. Çünkü kümeleme fonksiyonları genelde GROUP BY ifadesi ile birlikte kullanılır. Adından da anlaşılacağı üzere GROUP BY ifadesi gruplama yapar. Yani sonuç kümesini bir veya birden fazla kolona göre gruplar. Öncelikle bir önceki makalede de kullandığımız aşağıdaki _kisiler_ tablosunu inceleyelim. Sonra bu tablo üzerinde biraz gruplama yapacağız. 

**Not:** Bu arada diğer SQL derslerine [buradan ulaşabilirsiniz](http://www.hrzafer.com/sql-dersleri)

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

Şimdi yukarıdaki tabloyu ülkelere göre gruplasaydık ne olurdu? Görüldüğü gibi 4 farklı ülke olduğuna göre 4 farklı grup oluşacaktı. Bu gruplar Türkiye'de çalışanlar, Amerika'da çalışanlar, Fransa'da çalışanlar ve Almanya'da çalışanlar olarak ifade edilebilir. Bu ifade biçimi oldukça anlaşılır zira saf Türkçe. Biraz daha teknik bir ifade kullanmak istersek; Ülke **alan**ında Türkiye, Amerika, Fransa veya Almanya **değer**leri bulunan **kayıt**ların **grup**laşması diyebiliriz. Hemen bu örneği sorgu olarak yazalım:

```sql
SELECT ülke FROM \`kisiler\` GROUP BY ülke
```
Sorgunun çıktısı aşağıdaki gibi olacaktır:

| ülke |
| --- |
| Almanya |
| Fransa |
| Türkiye |
| USA |

Burada SELECT ifadesinden sonra _ülke_ kolonu dışında kolonlar yazarsak, bu kolonlar için gelecek olan değerler anlamlı olmayacaktır. Mesela:

```sql
SELECT * FROM \`kisiler\` GROUP BY ülke
```
Anlamsız sonuçlar verir

| id  | Ad  | Soyad | Yas | Cinsiyet | Şehir | Ülke | Maaş |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8   | Hans | Müller | 30  | 1   | Berlin | Almanya | 4000 |
| 9   | Frank | Cesanne | 35  | 1   | Paris | Fransa | 3700 |
| 2   | Ahmet | Yılmaz | 20  | 1   | Ankara | Türkiye | 2000 |
| 6   | John | Smith | 45  | 1   | New York | USA | 3500 |

Sonuç kümesine baktığımızda _ülke_ alanı hariç diğer alanlar için gruba ait kayıtlardan ilkinin değerlerinin geldiğini görürüz. Bu da yukarıdaki tabloyu anlamsız kılıyor. Bütün bunları anlatmamın sebebi GROUP BY'ın kümeleme fonksiyonları ile nasıl anlamlı hale geldiğini göstermek. Örneğin ülkelerin ortalama maaşını görmek istesek:

```sql
SELECT ülke, AVG(maaş) FROM \`kisiler\` GROUP BY ülke
```
Sorgunun çıktısı aşağıdaki gibi olacaktır:

| ülke | AVG(maaş) |
| --- | --- |
| Almanya | 4000.0000 |
| Fransa | 3700.0000 |
| Türkiye | 2414.2857 |
| USA | 3500.0000 |

Burada geri planda kayıtlar ülke değerlerine göre gruplandı ve her grubun maaş değerinin ortalaması hesaplanarak yukarıdaki sonuç kümesi elde edildi. Sonuç olarak GROUP BY kullanırken SELECT'ten sonra GROUP BY ile kullandığımız alanları ve kümeleme fonksiyonlarını kullanmamız gerekiyor. Eğer her ülkeden kaç çalışanın olduğunu görmek istersek:

```sql
SELECT ülke, COUNT(*) AS sayı FROM \`kisiler\` GROUP BY ülke
```
Sorgunun çıktısı aşağıdaki gibi olacaktır:

| ülke | sayı |
| --- | --- |
| Almanya | 1   |
| Fransa | 1   |
| Türkiye | 7   |
| USA | 2   |

Örneğin maaş ortalamasını bayanlar ve erkekler olarak görmek isteseydik:

```sql
SELECT cinsiyet, AVG(maaş) AS sayı FROM \`kisiler\` GROUP BY cinsiyet
```
Sorgunun çıktısı aşağıdaki gibi olacaktır:

| cinsiyet | sayı |
| --- | --- |
| 0   | 2880.0000 |
| 1   | 2866.6667 |

**GROUP BY ile birden fazla alan kullanımı** 

GROUP BY ifadesinden sonra birden fazla alan kullanabiliriz. Örneğin kayıtları önce ülkelere göre gruplayıp sonra her bir grubu kendi içinde şehirlere göre gruplamak istesek:

```sql
SELECT ülke, şehir FROM \`kisiler\` GROUP BY ülke, şehir
```
Sorgunun çıktısı aşağıdaki gibi olacaktır:

| ülke | şehir |
| --- | --- |
| Almanya | Berlin |
| Fransa | Paris |
| Türkiye | Adana |
| Türkiye | Ankara |
| Türkiye | Bolu |
| Türkiye | Hatay |
| Türkiye | İstanbul |
| USA | New York |

Türkiye dışındaki gruplarda tek bir şehir varken, Türkiye grubunun da kendi içinde 5 gruba ayrıldığına dikkat edin. Her bir gruba ait kaç adet çalışan olduğunu görmek istersek sorguya ufak bir ekleme yapmamız yeterli olur:

```sql
SELECT ülke, şehir, COUNT(*) FROM \`kisiler\` GROUP BY ülke, şehir
```
Sorgunun çıktısı aşağıdaki gibi olacaktır:

| ülke | şehir | COUNT(*) |
| --- | --- | --- |
| Almanya | Berlin | 1   |
| Fransa | Paris | 1   |
| Türkiye | Adana | 2   |
| Türkiye | Ankara | 2   |
| Türkiye | Bolu | 1   |
| Türkiye | Hatay | 1   |
| Türkiye | İstanbul | 1   |
| USA | New York |

Şimdi de her ülke için bayan ve erkek çalışanların sayısını ve yaş ortalamalarını bulalım:

```sql
SELECT ülke, cinsiyet, AVG(yas), COUNT(*) FROM \`kisiler\` GROUP BY ülke, cinsiyet
```
Sorgunun çıktısı aşağıdaki gibi olacaktır:

| ülke | cinsiyet | AVG(yas) | COUNT(*) |
| --- | --- | --- | --- |
| Almanya | 1   | 30.0000 | 1   |
| Fransa | 1   | 35.0000 | 1   |
| Türkiye | 0   | 29.7500 | 4   |
| Türkiye | 1   | 22.6667 | 3   |
| USA | 0   | 40.0000 | 1   |
| USA | 1   | 45.0000 | 1   |

Yukarıdaki tablodan mesela, Türkiye'den 4 bayan, 3 erkek çalışanın olduğunun ve bayanların yaş ortalamalarının 29.7 erkeklerinkinin ise 22.6 olduğunu okuyabiliriz. 

**GROUP BY İfadesini  WHERE ifadesi ile birlikte kullanmak** 

Öncelikle WHERE ifadesinin sorguda her zaman group by'dan önce geldiğini belirtelim. Örneğin yukarıdaki sorguya maaşı 2000'den büyük olanlar gibi bir koşul ekleyelim.

```sql
SELECT ülke, cinsiyet, AVG(yas), COUNT(*) FROM \`kisiler\` WHERE maaş > 2000 GROUP BY ülke, cinsiyet
```
Sorgunun çıktısı aşağıdaki gibi olacaktır:

| ülke | cinsiyet | AVG(yas) | COUNT(*) |
| --- | --- | --- | --- |
| Almanya | 1   | 30.0000 | 1   |
| Fransa | 1   | 35.0000 | 1   |
| Türkiye | 0   | 28.0000 | 3   |
| USA | 0   | 40.0000 | 1   |
| USA | 1   | 45.0000 | 1   |

Bu sorgu biraz karışık görünse de aslında oldukça basit. Geri planda önce maaşı 2000'den küçük olan kayıtlar elendi. Yani önce sorgunun WHERE kısmı çalıştırıldı. Sonra kalan kayıtlar üzerinde sorgunun geri kalanı çalıştırıldı. Yani asında bir önceki sorgu tüm tablo yerine tablonun alt kümesi (maaşı 2000'den büyük olanlar) üzerinde çalıştırılmış oldu. 

Umarım yeterince açık izah edebildim meseleyi. Bir sonraki yazıda yalnızca GROUP BY ile birlikte kullanılan HAVING anahtar sözcüğünü anlatacağım. Yazıda anlayamadığınız ya da "şöyle olsaydı daha anlaşılır olurdu" diyebileceğiniz yerler var ise yorumlara çekinmeden yazın. En kısa zamanda bir tepki veririm.

Herkese kolay gelsin

### İlgili Diğer Makaleler

- [SQL Dersleri](/sql-dersleri)
- [SQL 02: Distinct İfadesi](/sql-distinct-ifadesi)
- [SQL 03: WHERE Yan Cümlesi (Clause)](/sql-where-clause)
- [Veritabanına Genel Bakış](/veritabanina-genel-bakis)

