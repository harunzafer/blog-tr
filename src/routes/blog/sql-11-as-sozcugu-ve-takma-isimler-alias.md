---
title: 'SQL 11: AS Sözcüğü ve Takma İsimler (Alias)'
date: '2010-01-12'
subtitle: 'Bu yazı SQL''in daha karmaşık bölümlerine geçmeden önceki son yazı. Bundan önceki 10 (aslında 11) yazıda SQL için temel sayılabilecek konuları ele aldık.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

Bu yazı SQL'in daha karmaşık bölümlerine geçmeden önceki son yazı. Bundan önceki 10 (aslında 11) yazıda SQL için temel sayılabilecek konuları ele aldık. Bu yazıda ise karmaşık SQL sorgularında çok işimize yarayacak olan "takma isimler" (alias) konusunu işleyeceğiz. Takma isimler önceki konular göz önünde bulundurulduğunda çok da gerekli gibi görünmeyebilir ancak bundan sonraki konularda ne kadar gerekli hatta bazı durumlarda zorunlu olduğunu göreceğiz. 

**Not:** Bu arada diğer SQL derslerine [buradan ulaşabilirsiniz](/sql-dersleri) 

**Not:** Alias kelimesi için sözlükte bir çok karşılık var. Bana "takma isim" uygun gibi geldi, ama daha iyi bir önerisi olan varsa yazıyı güncelleyebilirim. 

Örnekler için aşağıdaki _uyeler_ tablosunu kullanacağız.

| uye_adi | isim | soyisim | e-posta | cinsiyet |
| --- | --- | --- | --- | --- |
| hrzafer | Harun Reşit | Zafer | hrzafer@hrzafer.com | E   |
| derya.z | Derya | Zaimoğlu | derya.z@derya.com | K   |
| meryem1990 | Meryem | Arkadaş | meryem1990@nospam.com | K   |
| eaydin | Emir | Aydın | ea@biracayipadam.com | E   |
| denizeri | Levent | Denizeri | levend@naval.com | E   |

Gerek tablolara gerekse alanlara takma isim verebiliriz. Alanlar ile başlayalım: 

**Sorgu:** Kullanıcıların isim ve soyisimleri

```sql
SELECT isim AS 'ad', soyisim AS 'soyad' FROM uyeler
```

| ad  | soyad |
| --- | --- |
| Harun Reşit | Zafer |
| Derya | Zaimoğlu |
| Meryem | Arkadaş |
| Emir | Aydın |
| Levent | Denizeri |

Gördüğünüz gibi sonuç kümesinde ilgili alanlar takma isimleri ile geldiler. Daha önceki yazılarda da sonuç kümesinin de aslında bir tablo olduğunu belirtmiştim. Bunu zihnimizin bir köşesine yazalım. Burada AS (ez diye okunur) sözcüğü "olarak" anlamında kullanılmış, isim AS 'ad' dediğimizde "isim alanını 'ad' olarak getir" demiş oluyoruz kısacası. 

Şimdi de uyeler tablomuza takma isim verelim. 

**Sorgu:** İsmi Derya olan bayanlar

```sql
SELECT u.isim , u.soyisim FROM uyeler u WHERE u.cinsiyet='K' AND u.isim='Derya'
```

| isim | soyisim |
| --- | --- |
| Derya | Zaimoğlu |

Burada altını çizmek istediğim 2 husus var: 

1-) Tablolara takma isim verirken AS sözcüğünü kullanmak zorunda değiliz. Sorguyu aşağıdaki gibi de yazabilirdik ama genelde bu teâmül uygulanır ve AS yalnızca alanlar için kullanılır.

```sql
SELECT u.isim , u.soyisim FROM uyeler AS u WHERE u.cinsiyet='K' AND u.isim='Derya'
```

2-) Dikkat ederseniz tablolara verdiğimiz takma adlar sonuç kümesinde bir değişikliğe yol açmıyor. Yalnızca SQL sorgumuzda bu kısaltmaları (takma isimleri) kullanıyoruz. Şu ana kadar sorgularda yalnızca bir tablo kullandığımız için çok da anlamlı gelmemiş olabilir bu örnekler. İlerleyen yazılarda takma isimlerin (alias) sebeb-i hikmeti daha iyi anlaşılacaktır.


Herkese kolay gelsin

### İlgili Diğer Makaleler

- [SQL 09: IN İşleci](/sql-09-in-isleci)
- [SQL 10: BETWEEN İşleci](/sql-10-between-isleci)
- [SQL 12: Sorguda Birden Fazla Tablo Kullanma: Join-1](/sql-12-sorguda-birden-fazla-tablo-kullanma-join-1)
- [SQL 13: Sorguda Birden Fazla Tablo Kullanma: Join-2](/sql-13-sorguda-birden-fazla-tablo-kullanma-join-2)
