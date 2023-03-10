---
title: 'SQL 18: Join Türleri'
date: '2013-01-22'
subtitle: 'Önceki iki yazıda SQL''deki temel join sorguları üzerinde durmuştuk. O yazılarda anlatılan join''in en çok kullanılan türü olan inner join''di.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/Schema-SQL1.jpg">

Önceki [iki yazıda](/sql-12-sorguda-birden-fazla-tablo-kullanma-join-1) SQL'deki temel join sorguları üzerinde durmuştuk. O yazılarda anlatılan join’in en çok kullanılan türü olan inner join'di. Bu yazıda ise genel olarak inner, outer, left, right, full gibi join türlerinin benzer ve farklı yönlerini örneklerle açıklamaya çalışacağım. Eğer join konusuna tamamen yeni iseniz öncelikle ilk iki makaleyi çalışmanızı öneririm. 

Bildiğiniz gibi üzerinde çalıştığımız veritabanları için kullanılan genel isim "**ilişkisel** veritabanı"dır. Yani tablolar birbiri ile ilişkilidir ve bu ilişki bir tablodaki birincil anahtar (primary key) ile diğer tablodaki yabancı anahtar (foreign key) üzerinden kurulur. Aşağıdaki okul veritabanında bu tablolar arasındaki ilişkiler açıkça görülüyor. 

![okul_vt_hrzafer](/img/blog/okul_vt_hrzafer.png)

Join türlerini örneklendirmek için yukarıdaki tablolardan Öğrenci ve Bölüm tablolarını kullanalım: 

**Inner Join** 

Inner join en çok kullanılan join türüdür ve her iki tablodaki ortak kayıtları döndürür. Bir başka ifade ile iki tablonun kesişimini döndürür. Mesela bölüm ve öğrenci tablolarını birleştirmek istersek

 
```sql
SELECT * FROM bolum b inner join ogrenci o on b.bid = o.bid
```
Sorgunun sonuç kümesi aşağıdaki gibi olacaktır. 

![bolum_ogrenci_inner](/img/blog/bolum_ogrenci_inner.png) 

Sonuç kümesindeki ilk 4 kolon bölüm tablosunda sonraki 5 kolon ise öğrenci tablosuna aittir. Her iki tablonun bid alanlarına bakarsanız bire-bir eşleştiklerini görürsünüz. Yani sorgu iki tablonun kesişimini döndürmüş oluyor. 

![kümeler_inner](/img/blog/kümeler_inner.png)

**Left ve Right Outer join** 

Eğer bir tablodaki tüm kayıtlar ile diğer tablodaki birleştirme koşulunu sağlayan kayıtları döndürmek istersek right ve veya left outer join kullanırız. Mesela tüm bölümleri (hiç öğrencisi olmayanlar da dahil) ve bir bölüme kayıtlı öğrencileri sorgulamak istersek:

 
```sql
SELECT * FROM bolum b left join ogrenci o on b.bid = o.bid
```
![bolum_ogrenci_left_outer](/img/blog/bolum_ogrenci_left_outer.png) 

Son kayıda dikkat ederseniz hiç öğrencisi olmayan bölüm de sonuç kümesinde mevcut.  Yani soldaki tablodan (bölüm) tüm kayıtlar, sağdaki tablodan ise sadece kesişen kayıtlar gelmiş oldu. 

![kumeler_left_outer](/img/blog/kumeler_left_outer.png)

Yukarıdaki sorguyuda  left (sol) yerine right (sağ) sözcüğünü kullanmış olsaydık, tüm öğrenciler ile en az bir öğrencisi olan bölümler seçilirdi. Yani left ve right tüm kayıtların seçileceği tablonun sağdaki mi yoksa soldaki mi olacağını belirtiyor yalnzıca.

 
```sql
SELECT * FROM bolum b right join ogrenci o on b.bid = o.bid
```
Bu sorguda tabloların yerini değiştirisek tekrar tüm bölümleri ve bir bölüme kayıtlı öğrencileri seçmiş oluruz.

 
```sql
SELECT * FROM ogrenci o right join bolum b  on b.bid = o.bid
```
Sadece sonuç kümesinde tabloların yeri değişmiş olur. Aşağıda görüldüğü gibi: 

![bolum_ogrenci_right_outer](/img/blog/bolum_ogrenci_right_outer.png) 

Eğer yalnızca hiç öğrencisi olmayan bölümleri seçmek istersek **where** ifadesi ile öğrenci tablosundaki tüm kayıtları aşağıdaki gibi eleyebiliriz.

 
```sql
SELECT * FROM bolum b left join ogrenci o ON b.bid = o.bid where o.bid is null
```
![bolum_ogrenci_left_only](/img/blog/bolum_ogrenci_left_only.png) 

Yaptığımız işlemi Venn şeması ile gösterecek olursak: 

![kumeler_left_only](/img/blog/kumeler_left_only.png)

**Full Outer Join** 

Tüm öğrencileri ve tüm bölümleri seçmek istersek full outer  join kullanırız.

 
```sql
SELECT * FROM bolum b full outer join ogrenci o on b.bid = o.bid
```

Full outer join çok da gerekli olmadığından MySQL'de mevcut değildir. Ancak aşağıdaki gibi bir sorgu ile (union kullanarak) aynı sonuç elde edilebilir.

```sql
SELECT * FROM bolum b left join ogrenci o on b.bid = o.bid
UNION
Select * FROM bolum b right join ogrenci o on b.bid = o.bid
```

Yaptığımız işlemi Venn şeması ile gösterecek olursak: 

![kumeler_full_outer](/img/blog/kumeler_full_outer.png) 

**Sintaks**

SQL join sintaksı ile ilgili olarak şunları hatırlatmakta yarar var. 

- **Inner Join** yerine sadece **Join** yazmamız yeterli 
- **Left Outer Join** yerine sadece **Left Join** yazmamız yeterli 
- **Right Outer Join** yerine sadece **Right Join** yazmamız yeterli **Natural Join** Bir de natural join var ki yazımda kolaylık sağladığı için öğrenciler tarafından tercih edilebiliyor.  Mesela aşağıdaki iki sorgu aynı işi yapar:

```sql
SELECT * FROM bolum b natural join ogrenci o
```
```sql
SELECT * FROM bolum b right join ogrenci o on b.bid = o.bid
```
Ancak gerçek hayatta Natural Join kullanımı sakıncalıdır.  Çünkü Natural Join iki tablodaki aynı isme sahip tüm alanların (kolonların) eşleşip eşleşmediğine bakar. Öğrenci ve Bölüm tablolarında sadece bid alanları aynı isme sahip olduğundan bir problem çıkarmıyor ancak Bölüm tablosunda bölümün ismini tutan için **badi** alanı **adi** şeklinde isimlendirilseydi Öğrenci tablosunda da aynı isimli bir alan bulunduğundan sorgu bu kez aşağıdaki sorgu ile eşdeğer olacaktı.

```sql
SELECT * FROM bolum b right join ogrenci o on b.bid = o.bid AND o.adi=b.adi
```
Kısacası natural join sorgusunda tam olarak hangi alanların karşılaştırıldığı belli değildir ve bu hata riskini artırtığı için profesyoneller tarafından tercih edilmez. [Buradan](/sql-17-ornek-okul-veritabani) okul veritabanını indirerek bu ve benzeri sorguları denemenizi öneririm. Umarım bu yazı sizler için faydalı olmuştur.

Herkese kolay gelsin

### İlgili Diğer Makaleler

- [SQL 14: Kümeleme Fonksiyonları](/sql-14-kumeleme-fonksiyonlari)
- [SQL 15: GROUP BY İfadesi](/sql-15-group-by-ifadesi)
- [SQL 16: HAVING İfadesi](/sql-16-having-ifadesi)
- [SQL 17: Örnek Okul Veritabanı](/sql-17-ornek-okul-veritabani)
