---
title: 'SQL 16: HAVING İfadesi'
date: '2010-10-16'
subtitle: 'Son iki yazımda SQL kümeleme fonksiyonlarını ve GROUP BY ifadesini anlatmıştım. HAVING ifadesi bu iki yazıda anlatılanların devamı, çünkü sadece GROUP BY ifadesi ile birlikte kullanılan bir ifade.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

Son iki yazımda SQL kümeleme fonksiyonlarını ve GROUP BY ifadesini anlatmıştım. HAVING ifadesi bu iki yazıda anlatılanların devamı, çünkü sadece GROUP BY ifadesi ile birlikte kullanılan bir ifade. Aslında HAVING ifadesinin işlevi WHERE ifadesininkine çok benziyor. Ancak kümeleme fonksiyonları ile WHERE ifadesi birlikte kullanılamadığından HAVING ifadesine ihtiyaç duyulmuştur. Meseleyi daha iyi izah edebilmek için hemen örneklere geçelim.

**Not:** Bu arada diğer SQL derslerine [buradan ulaşabilirsiniz](/sql-dersleri) 

Öncelikle bir önceki makalede de kullandığımız aşağıdaki _kisiler_ tablosunu inceleyelim. Sonra bu tablo üzerinden örneklerle konuyu inceleyeceğiz.

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

Öncelikle aşağıdaki 2 sorgu örneğini inceleyelim:

```sql
SELECT ülke, AVG(maaş) FROM \`kisiler\` GROUP BY ülke
```

Bu sorgu ülkelere göre maaş ortalamasını verir ve çıktısı aşağıdaki gibidir:

| ülke | AVG(maaş) |
| --- | --- |
| Almanya | 4000.0000 |
| Fransa | 3700.0000 |
| Türkiye | 2414.2857 |
| USA | 3500.0000 |

 

```sql
SELECT ülke, AVG(maaş) FROM \`kisiler\` WHERE yas > 30 GROUP BY ülke
```
Dikkat ederseniz bu sorgunun bir öncekinden tek farkı "WHERE yas > 30" kısmı. Sorgu yine ülkelere göre maaş ortalamasını hesaplıyor ama bu hesaba yalnızca yaşı 30'dan büyük olan çalışanları katıyor. Sorgunun çıktısı aşağıdaki gibidir:

| ülke | AVG(maaş) |
| --- | --- |
| Fransa | 3700.0000 |
| Türkiye | 2600.0000 |
| USA | 3500.0000 |

Şimdi de yaş ortalaması 30'un üzerinde olan ülkelerin maaş ortalamalarını getiren sorguyu yazmaya çalışalım. Burada 30 yaş üstü koşulu çalışanlar için değil ülkeler için (yani gruplar) geçerli. O halde yine yukarıdaki sorgularda olduğu gibi ülkelere göre gruplama yapacağız ama bu sefer koşulu gruplar için yazacağız.

```sql
SELECT ülke, AVG(maaş) FROM \`kisiler\` GROUP BY ülke HAVING AVG(yas) > 30
```
Sorgunun çıktısı aşağıdaki gibi olacaktır:

| ülke | AVG(maaş) |
| --- | --- |
| Fransa | 3700.0000 |
| USA | 3500.0000 |

Sorgunun döndürdüğü sonuç kümesine bakarak iki ülkenin (Türkiye ve Almanya) yaş ortalamalarının 30'dan küçük olduğunu söyleyebiliriz. Şimdi de çalışan sayısı 1'den fazla olan şehirleri ve çalışan sayılarını getiren sorguyu yazalım.

```sql
SELECT şehir, COUNT(*) FROM \`kisiler\` GROUP BY şehir HAVING COUNT(*) > 1
```
Sorgunun çıktısı aşağıdaki gibi olacaktır.

| şehir | COUNT(*) |
| --- | --- |
| Adana | 2   |
| Ankara | 2   |
| New York | 2   |

 Şimdi yazacağımız sorgunun açıklaması şöyle: Maaş ortalaması 3000'den fazla olan ülkelerdeki erkek çalışanların maaş ortalaması. Burada gruplamanın ülkelere göre yapılacağı ve yalnızca erkek çalışanların hesaba katılacağı açık.

```sql
SELECT ülke, AVG(maaş) FROM \`kisiler\` WHERE Cinsiyet=1 GROUP BY ülke HAVING AVG(maaş) > 3000
```
Sorgunun çıktısı aşağıdaki gibidir. Bu sorguda WHERE ve HAVING ifadeleri birlikte kullandığımızdan farklarını rahatça görebiliyoruz.

| ülke | AVG(maaş) |
| --- | --- |
| Almanya | 4000.0000 |
| Fransa | 3700.0000 |
| USA | 3500.0000 |

Yukarıdaki sorguyu biraz değiştirelim: Erkek çalışanların sayısı 1'den fazla olan ülkelerin maaş ortalamasını getiren sorgu:

```sql
SELECT ülke, AVG(maaş) FROM \`kisiler\` WHERE Cinsiyet=1 GROUP BY ülke HAVING COUNT(*) > 1
```
Sorgunun çıktısı aşağıdaki gibi olacaktır:

| ülke | AVG(maaş) |
| --- | --- |
| Türkiye | 2000.0000 |

Sorguları ve "ne yaptıklarını" dikkatle incelerseniz konuyu daha iyi anlayacaksınız. Bitirmeden önce WHERE ifadesinin her zaman GROUP BY ifadesinden önce geldiğini HAVING'in ise her zaman sonra geldiğini hatırlatalım.

Benim tavsiyem sorguları makalenin başındaki _kisiler_ tablosunu kullanarak zihninizden çalıştırmanız. Sorguların sonuç sonuç kümelerini (çıktılarını) yazmaya çalışın ve buradakilerle karşılaştırın. Bu şekilde sorguların çalışma mantığını daha iyi anlar ve benzer sorguları daha rahat yazmaya başlarsınız.

Herkese kolay gelsin

### İlgili Diğer Makaleler

- [SQL 13: Sorguda Birden Fazla Tablo Kullanma: Join-2](/sql-13-sorguda-birden-fazla-tablo-kullanma-join-2)
- [SQL 14: Kümeleme Fonksiyonları](/sql-14-kumeleme-fonksiyonlari)
- [SQL 15: GROUP BY İfadesi](/sql-15-group-by-ifadesi)
- [SQL 17: Örnek Okul Veritabanı](/sql-17-ornek-okul-veritabani)
- [SQL 18: Join Türleri](/sql-18-join-turleri)

