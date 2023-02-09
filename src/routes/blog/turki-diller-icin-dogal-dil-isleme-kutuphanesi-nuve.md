---
title: 'Türkî Diller için Doğal Dil İşleme Kütüphanesi: Nüve'
date: '2014-05-19'
subtitle: 'İnsan dili veya doğal dil günlük yaşantımızdaki en önemli iletişim kanalımız. Bilgiyi doğal dil biçiminde duyarak ya da okuyarak beynimize alır (input), beynimizde işler (processing) ve yazılı ya da sözlü olarak dışarı aktarırız (output).'
---

İnsan dili veya doğal dil günlük yaşantımızdaki en önemli iletişim kanalımız. Bilgiyi doğal dil biçiminde duyarak ya da okuyarak beynimize alır (input), beynimizde işler (processing) ve yazılı ya da sözlü olarak dışarı aktarırız (output). İletişim organlarımız ile birlikte beynimiz, bu işi mükemmel biçimde yerine getirirken bilgisayarlar doğal dili işleyebilme konusunda henüz emekleme aşamasındalar. Yine de son 10 yıldır günlük yaşantımızda giderek artan biçimde doğal dil işleme tabanlı uygulamalardan istifade ediyoruz. MS Word gibi kelime işlemciler imla denetimi yaparken, Google Translate gibi uygulamalar otomatik çeviri yapıyor. E-posta hizmeti sağlayıcıları e-postalarımızın istenmeyen (spam) olup olmadığını bizim okumamıza gerek kalmadan tespit edebiliyor. Milyonlarca kullanıcının tweet ya da yorumlarını tek tek okumak zorunda olmadan bir ürün, kişi ya da kurum hakkındaki genel kanaati otomatik olarak tespit edebiliyoruz. 

Yakın gelecekte bilgisayarlara klavye-fare yerine konuşma ile komut verebiliriz. Tuşlamak yerine “yaz kızım” diyebiliriz. Arama motorlarına “Türkiye’nin en kalabalık 3 ilindeki toplam nüfus ne kadar” gibi bir soru sorup, toplama-çıkarma yapmadan tek seferde cevap alabiliriz. Otomobilimizdeki navigasyon cihazıyla yoldaki dayıya adres sorar gibi samimi olabiliriz. 

### Doğal dil işleme (Natural Language Processing, NLP, DDİ)

bu ve benzeri pek çok uygulamayı mümkün kılmak için doğal dillerin bilgisayarlar tarafından işlenmeye müsait modellerini çıkarmaya, bu modellere en uygun veri yapılarını ve algoritmaları geliştirmeye çalışan bir **bilgisayar bilimi** alt alanıdır. Ancak dillerin yapısı birbirinden farklı olduğu için geliştirilen yöntemler de genelde bir veya bir grup dile uygun olmaktadır. Tahmin edeceğiniz gibi bu konuda yapılan çalışmalarda İngilizce açık ara başı çekmektedir. İngilizce için tasarlanmış modeller, veri yapıları, algoritmalar söz konusu Türkçe olduğunda etkisini çoğu zaman yitirmektedir. Yukarıda bahsettiğim mevcut ve muhtemel pek çok DDİ uygulamasının Türkçe için de yüksek başarımlı olarak çalışması, bu konuda Türkçe için yapılan çalışmaların sayısına ve kalitesine bağlıdır. Örnek vermek gerekirse MS Word İngilizce metinler için daha detaylı ve hatasız bir imla denetimi sunarken Türkçe metinler için sadece kelime bazında ve hata oranı daha yüksek imla denetimi sunmaktadır.

Özetle bilgisayar teknolojilerinin hayatımızdaki yeri her geçen gün artmakta. Bu teknolojilerden Türkçe konuşanların da yeterince istifade edebilmeleri ve Türkçenin dijital ortamda 2. sınıf vatandaş muamelesi görmemesi için ciddi ve uygulamaya dönük çalışmalara ihtiyacımız var. Aslında akademik manada bir çok dile göre daha fazla ilgi gören bir dil Türkçe. Hatta sonra eklemeli yapısı ve başka dilde bir cümle ile ancak ifade edilebilecek `osmanlılaştıramadıklarımızdanmışçasına` gibi abartılı örnekleri ile yabancı araştırmacıların da ilgisini çeken bir dil. Birçok üniversitede bu alanda çalışan hocalarımızdan ve öğrenci arkadaşlarımızdan müteşekkil DDİ çalışma grupları olduğunu hatırlatmak isterim. Ancak kişisel kanaatim bu çalışmaların genelde akademik seviyede kaldığı, gerçek uygulamalara alt yapı sağlamaktan uzak olduğu yönünde. 

Bu minvalde [Zemberek](https://github.com/ahmetaa/zemberek-nlp) Türkçe için geliştirilmiş bildiğim tek ciddi doğal dil işleme kütüphanesi. Zaten bugüne değin onlarca akademik çalışmada kullanılmış olması da bunun bir göstergesi. (Geliştiricisinden bir kaç ticari projede de kullanıldığını duymuştum ama net bir bilgim yok). 

Uzunca bir girişten sonra hala sıkılıp okumayı bırakmadıysanız artık sadede gelebiliriz: 

Nüve, başta Türkçe olmak üzere Türkî diller için **C# ile MS .Net platformu için** geliştirmekte olduğum bir doğal dil işleme kütüphanesidir. Yüksek lisans döneminde üzerinde çalıştığım Kazakça-Türkçe çeviri projesi ([ilgili yayın](http://eprints.ibu.edu.ba/85/1/FLTAL%202011%20Proceed%C4%B1ngs%20Book_1_p560-p564.pdf)) ve [Türkî diller için genel sözdizimsel çözümleyici](https://www.dropbox.com/s/yxcw35pt2vd48gt/A%20Generic%20Syntactic%20Parser%20for%20Turkic%20Languages.pdf) sayesinde başta Kazakça ve Türkmence olmak üzere birçok Türkî dili inceleme fırsatım olmuştu. O zamandan beri bu dillerin yapı olarak çok benzer olduğuna ve yüksek başarımlı bir Türkî diller arası çeviri uygulamasının mümkün olduğuna inanmaktayım.

Nüve "Bir şeyin özü" demek. Bilgisayarlı çeviri gibi şu anda hayal edebildiğim ve edemediğim pek çok DDİ uygulamasının özünde Nüve’yi kullanması uzun vadeli hedefim. Nüve’de dile bağımlı her şey dil paketleri içerisinde tanımlı. Şu anda yalnızca Türkçe için morfolojik çözümleme ve üretim yapılabiliyor. Nüve’nin açık kaynak olduğunu ve diğer diller için gerekli dil paketlerini hazırlayacak gönüllü arkadaşların memnuniyetle karşılanacağını belirtmek isterim. Nüve’nin temel yeteneklerini sergileyen bir demo uygulamasına [buradan](http://nuvedemo.apphb.com/) erişebilirsiniz. Demo uygulaması şimdilik yalnızca morfolojik çözümlemeyi gösteriyor ama yakın zaman içerisinde morfolojik üretim ve eklendikçe diğer yetenekler de sergilenecek. Nüve’yi alt yapı olarak kullanan ilk uygulama olan [fiil çekimleri](http://fiilcek.apphb.com/) morfojojik üretim için güzel bir örnek yine de. Nüve ile ilgili Türkçe dökümanlara blog’umdaki [Nüve](http://www.hrzafer.com/nuve) sayfasından İngilizce dökümanlara ise [GitHub](https://github.com/hrzafer/nuve)’daki [Wiki](https://github.com/hrzafer/nuve/wiki)’den erişebilirsiniz. Ancak henüz çok fazla doküman olmadığını belirteyim.

Nüve’nin en güncel sürümünü [NuGet](http://www.nuget.org/packages/Nuve/) üzerinden projenize ekleyebilirsiniz. Kaynak kodlara ise [GitHub](https://github.com/hrzafer/nuve) üzerinden erişebilirsiniz. Nüve ile ilgili problemleri yine GitHub üzerinden [issue](https://github.com/hrzafer/nuve/issues) girerek veya [iletişim](http://www.hrzafer.com/iletisim) sayfasından bana ulaşarak bildirebilir ve bu sayede projeye katkıda bulunabilirsiniz. 

### Projeye aşağıdaki şekillerde katkıda bulunabilirsiniz:

**Hata bildirimi:** Nüve'yi projelerinizde kullanırken karşılaştığınız hataları tercihen GitHub issue olarak veya iletişim sayfasından bana bildirebilirsiniz.  

**Eksiklik Bildirimi:** Şu da olsaydı güzel olurdu dediğiniz 

**ama kısa süre içerisinde kodlanabilecek** özellikler varsa aynı şekillerde bildirebilirsiniz. 

**Etiketleme:** Nüve şimdilik yalnızca kural tabanlı çalışsa da istatistik tabanlı çalışması kaçınılmaz bir gereksinim. Bunun için de insanlar tarafından etiketlenmiş yeterli miktarda veriye ihtiyaç var. Elinizdeki etiketlenmiş verileri sağlayarak veya elimdeki etiketlenmemiş verileri vakit ayırıp etiketleyerek katkıda bulunabilirsiniz. 

**Dil Dosyası Hazırlama:** Mevcut Türkçe dil dosyalarını örnek alarak diğer Türkî diller için dil dosyası hazırlayabilir, böylece Nüve'nin bu diller için de çalışır hale gelmesini sağlayabilirsiniz. Yapacağınız bu çalışmadan güzel bir akademik yayın da çıkabilir. 

**Test kümeleri hazırlama:** Kapsamlı test verileri hazırlayarak Nüve'nin daha kararlı çalışmasına olanak sağlayabilirsiniz. Ben de bu testlerden uygun olanları birim testlerine (unit test) dönüştürebilir ve geliştirme aşamasında daha rahat hareket edebilirim. 

**Doğrudan kütüphaneye katkıda bulunma:** Eğer iyi derecede C# biliyor ve DDİ çalışıyorsanız Nüve'de henüz bulunmayan bazı modülleri yazabilirsiniz. 

**Kütüphaneyi Himayeye Alma:** Ülkemiz şartlarında bunun gerçekleşme ihtimali zilyonda bir olsa da burada açıkça belirtmek isterim ki eğer Nüve'nin özelde projeniz, şirketiniz vs. ve genelde ülkemiz için önemli katkılarının olacağına inanıyorsanız projeyi himayenize alıp tüm vaktimi kütüphanenin geliştirilmesine ayırmama imkan sağlayabilirsiniz. 

Nüve'nin insanlığa faydalı olması dileğiyle