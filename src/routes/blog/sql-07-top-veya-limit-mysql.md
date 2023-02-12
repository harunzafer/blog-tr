---
title: 'SQL 07: TOP veya LIMIT (mySQL)'
date: '2009-10-01'
subtitle: 'SELECT sorgusu ile dönen kayıtların belli bir sayıda olmasını istememiz halinde TOP (mySQL için LIMIT) anahtar sözcüğünü kullanırız. Özellikle binlerce kayıt bulunan çok geniş tablolarda bu komut performans açısından oldukça faydalı olabilir.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

SELECT sorgusu ile dönen kayıtların belli bir sayıda olmasını istememiz halinde TOP (mySQL için LIMIT) anahtar sözcüğünü kullanırız. Özellikle binlerce kayıt bulunan çok geniş tablolarda bu komut performans açısından oldukça faydalı olabilir. Bunu aşağıdaki örnekler ile daha iyi anlayacaksınız. 

**Not:** TOP özelliği SQL server, MySQL ve Oracle'da farklı anahtar sözcükler ile ifade edildiğinden söz-dizimde de farklılıklar var.  

**Not:** Bu arada diğer SQL derslerine [buradan ulaşabilirsiniz](http://www.hrzafer.com/sql-dersleri)

Örnek sorgularımız için kullanacağımız `Uyeler` tablosu:

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| hrzafer | Harun Reşit | Zafer | hrzafer@hrzafer.com | E   |
| derya.z | Derya | Zaimoğlu | derya.z@derya.com | K   |
| meryem1990 | Meryem | Arkadaş | meryem1990@nospam.co | K   |
| eaydin | Emir | Aydın | ea@biracayipadam.com | E   |
| denizeri | Levent | Denizeri | levend@naval.com | E   |

Tablodan ilk 2 kaydı seçmek istiyoruz

**SQL Server (Ms Access'de dahil ) Söz-dizimi  (Syntax)**

```sql
SELECT TOP 2 * FROM uyeler
```

**MySQL Sözdizimi**

```sql
SELECT * FROM uyeler LIMIT 2
```

**Oracle Sözdizimi**

```sql
SELECT * FROM uyeler WHERE ROWNUM <=2
```

Yukarıdaki sorguların sonucu aşağıdaki gibi olacaktır:

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| hrzafer | Harun Reşit | Zafer | hrzafer@hrzafer.com | E   |
| derya.z | Derya | Zaimoğlu | derya.z@derya.com | K   |

**TOP ifadesinin performans ve hız açısından önemini öne çıkaran bir örnek:** 

Binlerce üyesi olan bir forum sitesinin kullanıcı girişi bölümünün kullandığı SQL kodunu yazmaya çalışalım: 

**Not:** Bu örnekte kullanılan `uyeler` tablosunu yukarıdaki ile karıştırmayın. Bu tabloda `kullaniciadi` ve `sifre` alanlarının da bulunduğunu farz edin. 

**SQL Server**

```sql
SELECT TOP 1 * FROM uyeler
WHERE kullaniciadi = 'derya.z' AND sifre = '0947'
```
**MySQL**

```sql
SELECT * FROM uyeler
WHERE kullaniciadi = 'derya.z' AND sifre = '0947' LIMIT 1
```

**Soru:** 

Sizce bu sorgularda TOP veya LIMIT ifadelerini neden 1 ile sınırladık? 

**Cevap:**
Çünkü bu kullanıcı adı ve şifreye sahip yalnızca 1 kullanıcı olacağı aşikardır. O halde 50 bin kayıtlı bir tabloda "derya.z" isimli kullanıcı diyelim ki 10 bininci sırada bulunduğunda geriye kalan 40 bin satırın aranmasına gerek yoktur. Özetle TOP işlevi sonuç-kümesinin ilk belli sayıda satırını/kaydını getirir. O sayı kadar kayıt bulunduğunda sorgunun işletimi sonlandırılır. Böylece performanstan tasarruf sağlanmış olur. Her saniye onlarca, yüzlerce hatta binlerce kişinin giriş yaptığı sitelerde bu tür ufak iyileştirmelerin ne gibi büyük performans kazançları sağlayabileceğini artık siz düşünün. Biz buna optimizasyon diyoruz :) 

**Not:** Sonuç-kümesi (result-set) kavramının zihninizde oturmuş olması çok önemli.

Herkese kolay gelsin

### İlgili Diğer Makaleler

- [SQL 05: Karmaşık AND ve OR sorguları](/sql-05-karmasik-and-ve-or-sorgulari)
- [SQL 06: ORDER BY (Sıralama)](/sql-06-order-by-siralama)
- [SQL 08: LIKE İşleci (Operatörü) – 1](/sql-08-like-1)
- [SQL 08: LIKE İşleci (Operatörü) – 2](/sql-08-like-isleci-operatoru-2)
- [SQL 09: IN İşleci](/sql-09-in-isleci)