---
title: 'Türkçe İmla Denetimi Üzerine'
date: '2012-09-05'
subtitle: 'Geçenlerde üzerinde çalıştığım bir proje gereği kapsamlı bir Türkçe kelime listesine ihtiyaç duydum.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/spellcheck.png">


Geçenlerde üzerinde çalıştığım bir proje gereği kapsamlı bir Türkçe kelime listesine ihtiyaç duydum. Buradaki listeden kastım standart bir Türkçe sözlükte bulunan kelimelerin listesi değil bunların ek almış hallerinin de bulunduğu geniş bir listeydi. Mesela “ev” kelimesinin “evim”, “evimiz”, “evimdeki” gibi biçimlerini de içeren bir liste. Peki, böyle bir liste kaç kelime ihtiva eder?

Soruyu şu şekilde de sorabilirdik: Türkçedeki “mümkün” tüm kelimelerin sayısı nedir? Mümkün (imkân dâhilinde) kelimesi size garip geldiyse hemen birkaç örnek vereyim; “bardaklaşıyordum”, “dondurmalandırmacı”  gibi. Bu garip kelimeler teorikte mümkün ve Türkçenin gramer kuralları açısından doğru ancak hali hazırda anlamlı değiller ve kullanılmıyorlar. Ama ileride mesela “bardaklaşmak” deyimi geçerli bir anlam kazanabilir. Tıpkı bir zamanlar “havalandırmacı” kelimesinin bir anlam ifade etmediği gibi.

Dilbilimci [Hankamer’e göre](http://dl.acm.org/citation.cfm?id=86174) Türkçede bu şekilde **200 milyar** farklı kelime üretmek mümkün. Gerçek hayatta ise bunların yaklaşık 2-3 milyon kadarını kullandığımızı sanıyorum ben. Zira ODTÜ’nün 1990 ve sonrası pek çok Türkçe metni bir araya getirerek oluşturduğu derlemde 2 milyon farklı kelime var. Ben de aslında aşağı yukarı bu uzunlukta bir liste arıyordum.

Diyelim ki elimizde böyle bir liste var. Bu listeye dayanarak imla denetimi yapabilir miyiz? Mesela yazılan bir kelime listemizde yoksa, yani bu 2 milyon kelimeden biri değilse altını kırmızı ile çizelim ve yanlış olarak kabul edelim. O halde yukarıdaki “bardaklaşmak” kelimesi muhtemelen yanlış sayılacaktır. Peki ya fantastik edebiyat türünde eser veren bir yazar “tabaklar bardaklaşıyordu” gibi bir cümle kuruyorsa ve bu cümle eser içerisinde gayet anlamlıysa? Sonuç olarak bu tür bir liste ile Türkçe imla denetimi yapmak ideal bir çözüm olmasa da çoğu zaman işimizi göreceğini de kabul etmek gerekir.

Aslında çoğu imla denetim sistemi bir dildeki mümkün bütün kelimeleri üretmek ve yeni gelen kelimelerin bunlardan biri olup olmadığını kontrol etmek mantığı üzerine kuruludur. Açık kaynak yazılımların neredeyse tamamı, hatta kapalı kaynak yazılımların da bir çoğu imla denetimi için [Hunspell](http://hunspell.sourceforge.net/) ve benzeri sistemleri (aspell, ispell, myspell vs) kullanıyorlar. Apple Mac OS X, Firefox, Chrome, Open Office ve [daha pek çok yazılım](http://en.wikipedia.org/wiki/Hunspell#Uses) Hunspell aracılığıyla imla denetimi yapıyor. 

Hunspell bir dilde imla denetimi yapabilmek, yani o dildeki mümkün olan tüm kelimeleri oluşturabilmek için 2 dosyaya ihtiyaç duyuyor. Bunlar: 

1. Sözlük (.dic uzantılı dictionary dosyası)
2. Ekler (.aff uzantılı affix dosyası)

Mesela bir dil için sözlük dosyamız aşağıdaki gibi olsun:

```
merhaba
gel/MEK
araba/LAR
ev/LER
```

Ek dosyamız da böyle olsun:

```
SFX LAR N 1
SFX LAR 0 lar .
SFX LER N 1
SFX LER 0 ler .
SFX MEK N 1
SFX MEK 0 mak .
```

Bu dildeki mümkün tüm kelimeler aşağıdaki gibidir:

```
merhaba, gel, gelmek, araba, arabalar, ev, evler
```

Bu kelimelerin dışında kalan bütün kelimeler ise geçersiz yani yanlış sayılacaktır. Hunspell ve benzeri (aspell, myspell, ispell vs.) sistemler tasarlanırlen her ne kadar tüm dilleri kapsamaları hedeflenmiş olsa da, Türkçe gibi eklerin ardı ardına geldiği dillerde dil paketi hazırlamak çok ama çok zahmetli bir iş. Hatta Türkçe için bu sistemde ideale yakın bir imla denetiminin mümkün olup olmadığı tartışılır. Zira henüz bunu becerebilen yok. Bendeniz de yaklaşık 4 yıl kadar önce bir heves ile bunu denemiş ancak işin zorluğunu fark edince tek başıma yapamayacağıma kanaat getirmiştim. Beni işten asıl soğutan ise sistemin aslında Türkçe'nin yapısına uygun olmayışı idi. Yani ne kadar zorlarsam zorlayayım muhtemelen muvaffak olamayacaktım.

Motivasyonum ise Türkçe için bu 2 dosya -yani dil paketi- hazırlandığında yukarıda saydığım yazılımlar ve daha birçoğunun Türkçe imla denetimi yeteneği kazanacak olmalarıydı. En fazla da Firefox’ta ihtiyaç duyuyordum. Aynı ihtiyacı benden bir kaç yıl önce Open Office için hissedenler ise [Zemberek](http://zemberek-web.appspot.com/) ekibiydi. Onlar da sanırım bir müddet [kastırdıktan](https://code.google.com/p/tr-spell/) sonra Hunspell ile etkili ve verimli bir Türkçe imla denetiminin mümkün olmadığına karar kıldılar ve bunun yerine Zemberek'i kodlamaya başladılar. Daha sonra da bir eklenti olarak Open Office'e entegre edildi Zemberek. Ancak Zemberek'i her yazılıma kolayca entegre etmek mümkün değil. Hatta bazıları için imkansız.

Sonuç olarak Hunspell Türkçe dil paketi önemli bir ihtiyaç olarak duruyordu. Sonunda Zemberek ekibi derledikleri Türkçe metinlerden elde ettikleri 1,4 milyon farklı kelimeyi tanıyabilecek bir Hunspell dil paketi oluşturmayı başardılar. Bu da bir [Firefox eklentisi](https://addons.mozilla.org/en-US/firefox/addon/turkce-imla-denetimi/) olarak yayınlanmış durumda. Bu paket Zemberek yazılımı tarafından otomatik olarak hazırlanmış durumda. Sözlük dosyasında 250 bin kelime, ek dosyasında ise 20 bin ek var. Ve sistemin %97-98 oranında doğru çalıştığını söyleyebiliriz. Yüksek bir oran gibi gelebilir ancak tersinden baktığımızda %2-3 hata payı var. Yani yazdığımız her 100 kelimeden ikisi-üçü hatalı olarak denetleniyor. Neticede ideal bir çözüm olmasa da oldukça işe yaradığını söylemeliyim. Özellikle e-posta yazarken yapılan küçük hataları büyük oranda yakalıyor ki imlası bozuk bir e-postanın yazıştığınız insanlar nazarındaki saygınlığınızı [azaltacağına](http://bitsandpieces1.blogspot.com/2007/11/spellcheck.html) inananlardanım. Bu paketi hazırlayanlara teşekkürlerimi de ileteyim buradan.

Mevcut Hunspell dil paketini incelemek, üzerinde çalışmak ve başarımını yükseltmek isteyenler pakete [buradan](download/dict.zip) erişebilirler. Ayrıca paketin tanıdığı tüm kelimelerin listesi de [burada](download/kelimeler_test.zip). 

Yazıyı bitirirken, Türkçe için imla denetimi yapan mevcut yazılımlar içerisinde en oturmuş olanın yine de MS Word olduğunu belirtelim. Zemberek ise onun hemen ardından geliyor. Aralarındaki temel farklılık Zemberek’in teorikte mümkün olan tüm kelimeleri doğru kabul etme eğiliminde yatıyor. Zembereğin [saçmala](http://zemberek-web.appspot.com/) butonuna bastığınızda bu teorikte doğru ama çoğu pratikte kullanılmayan yeterince kelime göreceksiniz. Mesela “bardaklaşmak” kelimesini MS Word yanlış kabul ederken Zemberek doğru kabul ediyor. Ben birinci yaklaşımın gerçek hayatta daha çok işe yarayacağını düşünüyorum ama Zemberek’in sadece bir imla denetim yazılımı olmadığını ve pek çok bilimsel çalışmada kullanıldığını hatırlatalım. Yani Zemberek için ikinci yaklaşım daha doğru aslında.

Umarım faydalı bir yazı olmuştur. Herkese kolay gelsin.

### İlgili Yazılar

- [Hunspell-tr Nedir](/hunspell-tr)