---
title: 'SQL 17: Örnek Okul Veritabanı'
date: '1888-01-01'
subtitle: 'Bundan sonraki SQL derslerinde üzerinde çeşitli sorgular çalıştırabileceğimiz, sade, anlaşılır ve yeterince veri içeren bir veritabanına ihtiyacımız olacak. Okul veritabanını temelde bu amaçla hazırladım.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

Bundan sonraki SQL derslerinde üzerinde çeşitli sorgular çalıştırabileceğimiz, sade, anlaşılır ve yeterince veri içeren bir veritabanına ihtiyacımız olacak. Okul veritabanını temelde bu amaçla hazırladım. Ayrıca Java ve PHP ile ileride yapacağım örnek veritabanı uygulamalarında da aynı veritabanını kullanmayı düşünüyorum. Sonuç olarak eğitim amaçlı ideal bir veritabanı oldu. Okul veritabanının bu ilk versiyonu 6 tablodan oluşuyor. Tabloların açıklamaları ve ilişkileri aşağıdaki gibidir.

![okul_vt_hrzafer](http://www.hrzafer.com/wp-content/uploads/2012/05/okul_vt_hrzafer.png) 

Öğrenci ile Bölüm arasında bire-çok ilişki vardır. Yani bir öğrencinin **bir ve yalnız bir** bölümü olur. Aynı şekilde Ders ile Bölüm arasında ve Öğretmen ile Bölüm arasında da bire-çok ilişki var. Yani her ders ve öğretmen bir bölüme ait olmak zorunda. Öğrenci ile Ders arasında çoğa-çok ilişki vardır. Yani bir öğrenci birden fazla ders alabilir. Bir dersi de birden fazla öğrenci alabilir. Bu nedenle bu ilişki ögrenci_ders adındaki ayrı bir tabloda ele alındı. Aynı şekilde Öğretmen ile Ders arasında da çoğa çok ilişki vardır. Yani bir dersi birden fazla öğretmen verebilir. Ve bir öğretmen birden fazla ders verebilir. Veritabanının yapısı (structure) bu şekilde. Bu yapıyı daha iyi anlamak için bazı tabloları girilen örnek verilerle birlikte görelim: 

**Bölüm Tablosu**

![okul_vt_tablo_bolum_hrzafer](http://www.hrzafer.com/wp-content/uploads/2012/05/okul_vt_tablo_bolum_hrzafer.png)

**Ders Tablosu** 

![okul_vt_tablo_ders_hrzafer](http://www.hrzafer.com/wp-content/uploads/2012/05/okul_vt_tablo_ders_hrzafer.png) 

Görüldüğü gibi bu tabloda son kolon dersin ait olduğu bölümün id'sini (bid) tutuyor. Yani yabancı anahtar. 

**Öğrenci Tablosu** 

![okul_vt_tablo_ogrenci_hrzafer](http://www.hrzafer.com/wp-content/uploads/2012/05/okul_vt_tablo_ogrenci_hrzafer.png) 

Bu tabloda da son kolon öğrencinin ait olduğu bölümü gösteren bir yabancı anahtar. 

**Öğrenci Ders Tablosu** 

![okul_vt_tablo_ogrenci_ders_hrzafer](http://www.hrzafer.com/wp-content/uploads/2012/05/okul_vt_tablo_ogrenci_ders_hrzafer.png) 

Bu tabloda mesela birinci satır 1 no'lu öğrencinin 1 id'li dersi aldığını ve bu dersten notunun 3 olduğunu belirtiyor. 

**Veritabanını phpmyadmin üzerinden yüklemek için:** 

1. `okul_vt_hrzafer` isimli bir veritabanı oluşturun. 
2. içeri aktar (import) seçeneğine tıklayın. 
3. Daha sonra gözat butonuna tıklayarak sql uzantılı veritabanı dosyasını yükleyin. 

Veritabanını [buradan](http://www.hrzafer.com/wp-content/uploads/2012/05/okul_vt_hrzafer.zip) indirebilirsiniz.

Herkese kolay gelsin

### İlgili Diğer Makaleler

- [SQL 14: Kümeleme Fonksiyonları](/sql-14-kumeleme-fonksiyonlari)
- [SQL 15: GROUP BY İfadesi](/sql-15-group-by-ifadesi)
- [SQL 16: HAVING İfadesi](/sql-16-having-ifadesi)
- [SQL 18: Join Türleri](/sql-18-join-turleri)