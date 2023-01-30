---
title: 'SQL 08: LIKE İşleci (Operatörü) – 2'
date: '2009-11-06'
subtitle: 'Bir veya birden fazla karakterin yerine geçebilen karakterlere **joker karakter** diyoruz. Aslında joker karakter kavramı bilgisayar dünyasında sıkça kullanılan bir kavramdır.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

**Joker Karakterler (Wildcards)** 
Bir veya birden fazla karakterin yerine geçebilen karakterlere **joker karakter** diyoruz. Aslında joker karakter kavramı bilgisayar dünyasında sıkça kullanılan bir kavramdır. Ortama göre  (kullandığınız programlama dilinden tutun da, işletim sistemine kadar pek çok şey olabilir bu ortam) gösterimde ufak tefek değişiklikler olsa da genel mantığı aynıdır. SQL dilinde joker karakterleri yalnızca `LIKE` işleci ile birlikte kullanıyoruz. SQL için tanımlanmış joker karakterler aşağıdaki gibidir:  

**Not:** Bu arada diğer SQL derslerine [buradan ulaşabilirsiniz](http://www.hrzafer.com/sql-dersleri)

| **Joker Karakter** | **Açıklama** |
| --- | --- |
| % (MS Access için * kullanılır) | Sıfır, bir veya daha fazla sayıda karakterin yerine geçebilir. |
| _ (MS Access için ? kullanılır) | Bir adet karakterin yerine geçebilir. |
| \[liste\] | Listedeki karakterlerden herhangi biri |
| \[^liste\]Veya \[!liste\] | Listedede olmayan karakterlerden  herhangi biri Ya da listede olan karakterlerden hiçbirisi. (iki açıklama da aynı kapıya çıkıyor) |

Yazı boyunca örnek olarak kullanacağımız `Uyeler` tablosu aşağıdaki gibidir.

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| hrzafer | Harun Reşit | Zafer | hrzafer@hrzafer.com | E   |
| derya.z | Derya | Zaimoğlu | derya.z@derya.com | K   |
| meryem1990 | Meryem | Arkadaş | meryem1990@nospam.com | K   |
| eaydin | Emir | Aydın | ea@biracayipadam.com | E   |
| denizeri | Levent | Denizeri | levend@naval.com | E   |

Bir önceki yazıda  % Joker karakterinin kullanımına dair örnekler yapmıştık. Bir örnek daha yapalım. Adı "M" ile başlayıp "m" ile biten üyeleri görmek istersek:

```sql
SELECT * FROM uyeler
WHERE isim LIKE 'M%m'
```

Sorgumuzun çıktısı aşağıdaki gibi olacaktır:

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| meryem1990 | Meryem | Arkadaş | meryem1990@nospam.com | K   |

**_ veya ? Joker karakteri** 

Bu karakter standart SQL için "_" (alt-tire) MS Access için de "?" olarak tanımlanmıştır. Ben örneklerde "_" olarak kullanacağım. Şimdi aşağıdaki sorguyu ve çıktısını inceleyelim:

```sql
SELECT * FROM uyeler
WHERE uye\_adi LIKE 'h\_zafer'
```

Sorgunun çıktısı aşağıdaki gibi olacaktır:

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| hrzafer | Harun Reşit | Zafer | hrzafer@hrzafer.com | E   |

Eğer tablomuzda uye\_adi alanında `hdzafer`, `hczafer`, `hazafer` gibi kayıtlar olsaydı, bunlar da bu sorgudan dönen tabloda yer alacaklardı. 

LIKE '\_a_'  : Üç harfli ortadaki harfi "a" olanlar. 

LIKE ' m\_s\_n' : _mısın, musun, müsün_ veya _muson_ gibi bir çok kelime bu desene uyuyor. Ancak _muusun_ gibi bir kelime bu desene uymaz. Bu karakter yerine yalnızca bir adet karakter gelebileceğini tekrar hatırlatalım. 

**Karakter Listeleri** Karakter listeleri ise yukarıdaki işlemleri yalnız bir grup karakter için tanımlamak istediğimizde kullanılır: 

LIKE 'c\[ai\]n': Bu desen _can_ ve _cin_ kelimelerini kapsar. Örneğin ismi erhan, ercan, erkan veya erman olan üyeleri getirmek isteseydik:

```sql
SELECT * FROM uyeler
WHERE uye_adi LIKE 'er\[hckm\]an'
```

sorgusu işimizi görürdü. Adı E veya K harfi ile **başlamayan** üyeleri seçmek isteseydik:

```sql
SELECT * FROM uyeler
WHERE uye_adi LIKE '\[^EK\]%'
```

sorgusu yeterli olurdu. Aynı sorguyu Access için yazmak istesek LIKE'tan sonraki kısım '\[!EK\]*' şeklinde olacaktı.

**Önemli Not:** Karakter listeleri MySQL'de LIKE ile çalışmıyor. Bunun yerine RLIKE (veya REGEXP) işleci kullanılıyor. Bu işleç bütün **Düzenli İfadeler** (Regular Expressions) ile çalışıyor.

Herkese kolay gelsin

### İlgili Diğer Makaleler

- [SQL Dersleri](/sql-dersleri)
- [SQL 02: Distinct İfadesi](/sql-distinct-ifadesi)
- [SQL 03: WHERE Yan Cümlesi (Clause)](/sql-where-clause)
- [Veritabanına Genel Bakış](/veritabanina-genel-bakis)

