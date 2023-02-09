---
title: 'Yazılım Versiyon Numaraları'
date: '2012-05-31'
subtitle: 'Bu yazıda geliştirdiğimiz yazılımların versiyonlarını numaralandırma konusunda bir iki satır kelam etmek istiyorum.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/versioning-1.jpg">

Bu yazıda geliştirdiğimiz yazılımların versiyonlarını numaralandırma konusunda bir iki satır kelam etmek istiyorum. Amatör bir heyecan ile geliştirmeye çalıştığım ve bundan büyük zevk aldığım [küçük, açık kaynak bir Java kütüphanesi](http://code.google.com/p/javanta/) var. Kütüphane küçük de olsa onu yayınlarken yazılım paketleme, lisanslama, versiyonlama ve versiyon numaralandırma (ikisi farklı şeyler) gibi konularda bayağı tecrübem oldu. Bu yazıyı da bu vesile ile yazıyorum. Konu ile ilgili yaptığım araştırmada bir [şöyle bir makale](http://www.codinghorror.com/blog/2007/02/whats-in-a-version-number-anyway.html) buldum ki, İngilizce biliyorsanız muhakkak okuyun. Oradan da bazı alıntılar yapacağım.  

Öncelikle yazılımcılar kendi içerisinde kullandıkları numaralandırma yöntemleri bir miktar karışık. Mesela aşağıdaki tip sıkça kullanılır: 

```
(Major version).(Minor version).(Revision number).(Build number)
``` 

Aşağıdaki gibi versiyon numaralarını sıkça görmüşsünüzdür.

```
7.0.6000.16386
8.1.0178.00
11.11
2.7.0.0
2.5.10 / build 6903
2.0 build 0930
0122.1848.2579.33475
2.0.50727.312
2.0.0.1
1.8.20061.20418
```

Ancak bahsettiğim yazıda da ifade edildiği gibi bunlar son kullanıcı için hiçbir şey ifade etmiyor. Hatta kafa karıştırıcı oluyor. Bu nedenle artık çoğu yazılım sadece ana versiyon numarasını kullanıyor. Firefox 2, Firefox 3 gibi. Yine aynı yazıda bahsedildiği üzere son kullanıcıya yönelik en mantıklı yöntem ise yazılımın geliştirildiği yılı versiyon numarası olarak kullanmak. Office 2003, Office 2007, Visual Studio 2010 gibi. Zira bu insanlar için çok daha manalı. Sonuç olarak söylemek istediğim son kullanıcıya hitap edecekseniz daha anlaşılır, kullanıcı dostu bir yöntem bulmanız gerekiyor. 

Gelelim biz yazılımcıların kendimiz için versiyon numaralama işini nasıl yapacağına. Bence aşağıdaki yöntem sade ve yeterli. `Ana versiyon.Ara versiyon.Düzeltme` Süreci örneklemek gerekirse; Sıfırdan bir projeye başladınız. Hedef ilk kararlı sürüm olacak olan 1.0.0 versiyonuna ulaşmak. Burada alfa, beta süreçlerine hiç girmiyorum.Öncelikle 1.0.0 versiyonu için gereksinimler yani yazılımın hangi özellikleri ihtiva etmesi gerektiği belirlenir. Amiyane tabirle "yazılımın ilk sürümü şunları ve şunları yapabilmeli" gibi bir karar almanız gerekiyor. Daha sonra eklenen her özellik için ortadaki numara, her düzeltme için sondaki numara artırılır. Bir numara artırıldığında sağında kalan numaralar sıfırlanır. Örnek süreç:

```
0.1.0 ilk özelliği ekledik.

0.1.1 bir iki düzeltme yaptık

0.1.2 bir düzeltme daha (bug fix mesela)

0.2.0 yeni bir özellik ekledik.
..
0.3.3
..
..
1.0.0 Hedeflenen ilk sürüme ulaştık.
```

Bu aşamadan sonra 2.0 için neler istediğimizi belirleyeceğiz. Aynı süreç baştan devam edecek. Burada önemli bir ticari nokta şu ki, 2.0'da görmek istediğiniz her özelliği 1.1, 1.2 diye ilk versiyona eklemek yerine bunları doğrudan 2.0 sürümü ile birlikte sunabilirsiniz. Bu da işin ticari strateji tarafı ki ayrı bir makale konusu, hatta yazılım mühendisliğinin konusu değil. Yine de mühendislerin ve mühendis adaylarının işin bu boyutunu da bilmelerinde yarar var.


Umarım faydalı olmuştur. 

Herkese kolay gelsin