---
title: 'Nüve ile Türkçe Cümle Sonu Tespiti'
date: '2014-07-19'
subtitle: 'Önceki yazımda Türkî diller için bir doğal dil işleme kütüphanesi olan Nüve''den bahsetmiştim.'
---

Önceki yazımda Türkî diller için bir doğal dil işleme kütüphanesi olan [Nüve](/turki-diller-icin-dogal-dil-isleme-kutuphanesi-nuve)'den bahsetmiştim. Nüve [1.1 versiyonu](https://www.nuget.org/packages/Nuve/) ile birlikte cümle sonu tespit yeteneği de kazanmış durumda. Nüve'nin cümleleme modülü kural tabanlı çalışıyor ve mükemmel olduğu söylenemez ancak bir çok metin için iş görecek kadar başarılı olduğunu söyleyebilirim. Kullanacak arkadaşlar da gördükleri hataları bildirirerek başarımın artmasına yardımcı olabilir ve projeye katkıda bulunabilirler. 

Nüve'yi projenize 2 şekilde ekleyebilirsiniz. 

1-Visual Studio->Tools->Library Package Manager->Package Manager Console yolu ile açılan pencerede

```
PM> Install-Package Nuve
```

komutunu girmek. 

2- Solution Explorer'da projenizin References düğümüne sağ tıklayarak Manage Nuget packages'ı seçmek ve sağ üstteki arama çubuğuna Nuve yazarak "Install" düğmesine basmak. Nüve için cümleleme kod örneği ise şu şekilde:

 
 ```csharp
var paragraph = "Prof. Dr. Ahmet Bey 1.6 oranında artış var dedi 2. kez. E-posta adresi ahmet.bilir@prof.dr imiş! Doğru mu?";
Splitter splitter = new RegexSplitter(RegexSplitter.ClassicPattern);
var segmenter = new TokenBasedSentenceSegmenter(splitter);
var sentences = segmenter.GetSentences(paragraph);
foreach (string sentence in sentences)
{
    Console.WriteLine(sentence);
}
```

Faydalı olması dileğiyle. 

Herkese kolay gelsin