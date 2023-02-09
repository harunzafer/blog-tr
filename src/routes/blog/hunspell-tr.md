---
title: 'Hunspell-tr'
date: '2014-12-29'
subtitle: 'Hunspell-tr projesi imla denetimi için Hunspell''i kullanan Firefox, OpenOffice, LibreOffice, Mac OS X, Safari gibi pek çok yazılım için Hunspell uyumlu Türkçe imla denetimi sözlük dosyaları üretmeyi amaçlar.'
---

### Hunspell-tr Nedir

[Hunspell-tr](https://github.com/hrzafer/hunspell-tr) projesi imla denetimi için Hunspell'i kullanan Firefox, OpenOffice, LibreOffice, Mac OS X, Safari gibi [pek çok yazılım](http://en.wikipedia.org/wiki/Hunspell#Uses) için Hunspell uyumlu Türkçe imla denetimi sözlük dosyaları üretmeyi amaçlar. Bu sözlük dosyaları sayesinde tüm bu yazılımlarda etkili ve verimli Türkçe imla denetimi desteği mümkün olmaktadır.

### Nasıl Çalışır

Hunspell C++ ile kodlanmış, dilden bağımsız, hızlı ve bellekte az yer kaplayan bir imla denetimi aracıdır. Hunspell her hangi bir dilde imla denetimi yapmak için 2 sözlük dosyasına ihtiyaç duyar. 1- Kökler sözlüğü (.dic uzantılı) 2- Ekler sözlüğü   (.aff uzantılı) Mesela bir dil için sözlük dosyamız aşağıdaki gibi olsun:

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

İngilizce gibi birçok dil için bu dosyalar el ile hazırlanabilirken; Türkçe gibi karmaşık morfolojiye sahip, sondan eklemeli diller için bu dosyaların elle hazırlanması mümkün görünmemektedir. Hunspell-tr bu dosyaların [bir morfolojik çözümleyici](https://github.com/hrzafer/nuve) yardımı ile otomatik olarak üretilmesini sağlayan araçtır.

### Ne İşe Yarar

Üretilen sözlük dosyaları yukarıda bahsedilen bir çok yazılımda Türkçe imla denetiminin etkinleştirilmesi için yeterlidir. Hunspell-tr ile üretilen sözlük dosyaları kullanılarak şu ana kadar hazırlanan imla denetimi eklentileri şöyledir:

* [Mozilla Firefox için imla denetimi eklentisi](https://addons.mozilla.org/en-US/firefox/addon/t%C3%BCrk%C3%A7e-imla-denetimi/)
* [Apache OpenOffice için imla denetimi eklentisi](http://extensions.openoffice.org/en/project/turkish-spellcheck-dictionary)
* [LibreOffice için imla denetimi eklentisi](http://extensions.libreoffice.org/extension-center/turkish-spellcheck-dictionary)

Hunspell-tr projesi geliştikçe, kullanıcı geri bildirimleri geldikçe ve sözlüğü üretmek için kullanılan [derlem](http://tr.wiktionary.org/wiki/derlem) genişledikçe daha kapsamlı ve başarılı sözlük dosyaları üretilecektir. Sözlük dosyaları yenilendikçe yukarıda bahsedilen eklentiler de güncellenerek yeni sürüm numaraları ile yayınlanacaktır.

### Mevcut Durum ve Yapılacaklar

Sözlük dosyaları yeterince büyük olmayan bir derlemdeki kelimeler analiz edilerek üretildiklerinden, bazı doğru kelimeler yanlış olarak tanımlanabiliyor. Yukarıdaki eklentileri kullanıyorsanız bu tür kelimeleri [bildirerek](http://www.hrzafer.com/iletisim) katkıda bulunabilirsiniz. Mevcut sözlük dosyaları yanlış tespitinde başarılı sayılabilir. Ancak yanlış kelimeler için yapılan öneriler konusunda biraz daha mesafe almak gerekiyor. Hunspell OpenOffice gibi metin düzenleme araçları için "eş ve yakın anlamlı kelimeler" ve "kesme işareti" desteği de veriyor. Bunlar için bahsedilen 2 sözlük dosyasından ayrı olarak birer dosya hazırlanması gerekiyor.