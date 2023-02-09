---
title: 'Netbeans, Java, MySQL: Örnek Veritabanı Uygulaması – 3'
date: '2010-01-30'
subtitle: 'İlk iki yazıyı okuduğunuzu kabul ederek başlıyorum. İlk yazıda veritabanı bağlantısını en başta açmış, en sonda da kapamıştık.'
---

<img align="left" style="margin-right: 30px;margin-bottom: 0px;"  src="img/blog/netbeans-java-mySQL.jpg">

İlk iki yazıyı okuduğunuzu kabul ederek başlıyorum. İlk yazıda veritabanı bağlantısını en başta açmış, en sonda da kapamıştık. Program çalıştığı müddetçe veritabanı bağlantısı açık kalmıştı. Bunun yanında yine programın en başında yalnızca bir defa ResultSet nesnemizi _"SELECT * FROM kisiler"_ SQL sorgusunu kullanarak, kisiler tablosundaki tüm kayıtlar ile doldurmuş ve programın kalanındaki ekle/sil/güncelle gibi işlemleri SQL sorgusu yazmadan gerçekleştirmiştik. 

İkinci örnekte ise seç/ekle/sil/güncelle gibi her veritabanı işlemi için gereken sorguyu kendimiz yazmış, her sorguyu çalıştırmadan önce veritabanı bağlantısını açıp sorgu çalıştıktan hemen sonra bağlantıyı kapatmıştık. 

Binlerce kullanıcının aynı anda kullandığı bir uygulama için, örneğin bir web uygulaması için ilk yaklaşımın pek de makul olmadığını belirtmiştim. Zira bu aynı anda binlerce veritabanı bağlantısının açık olması demek.

İkinci örneğin en büyük dez avantajı SQL sorgularını String olarak yazmadaki zorluk. Aşağıdaki koda bir bakın:

```java
public void KayitEkle(String ad, String soyad, String yas, String cinsiyet)  throws Exception{

    Statement st = baglantiAc();
    String sql = "INSERT INTO vt.kisiler (Ad, Soyad, Yas, Cinsiyet) VALUES ("
    \+ "'" \+ ad + "', "
    \+ "'" \+ soyad + "', "
    \+ "" \+ yas + ", "
    \+ "" \+ cinsiyet + ")";

    st.executeUpdate(sql); //sorguyu çalıştır
    baglantiKapat(); //bağlantıyı kapat
}
```

Yukarıdaki SQL sorgusunu yazmak gerçekten zahmetli bir iş. Ben şu ana kadar bir defada hatasız yazamadım. Tek tırnak, virgül, boşluk gibi karakterlerden birini unutmak sorgunun hatalı olmasına yetiyor. 

Şimdi bir de aşağıdaki koda bakın:

```java
public void preparedKayitEkle(String ad, String soyad, String yas, String cinsiyet)  throws Exception {

    String sql="insert into Kisiler (Ad, soyad, yas, cinsiyet) values (?,?,?,?)";

    PreparedStatement prepared = baglantiAc(sql);
    prepared.setString(1, ad);
    prepared.setString(2, soyad);
    prepared.setInt(3,Integer.parseInt(yas));
    if (cinsiyet.equals("1"))
        prepared.setBoolean(4, true);
    else
        prepared.setBoolean(4, false);

    prepared.executeUpdate(); //sorguyu çalıştır
}
```

Gördüğünüz gibi SQL sorgusunu String olarak yazmak çok daha kolay. Değer alanlarını birer "?" karakteri ile belirtip aşağıda sırası ile hangi soru işareti yerine hangi değerin geleceğini belirtiyoruz.

Yukarıdaki kodda Java'nın PreparedStatement (hazır ifade) sınıfını kullandık. PreparedStatement sınıfını kullanabilmemiz için `baglantıAc()` metodumuzda ufak bir değişiklik yapmamız gerekiyor:

```java
public PreparedStatement baglantiAc(String sql) throws Exception {
    Class.forName(driver).newInstance();
    conn = DriverManager.getConnection(url + dbName, userName, password);//bağlantı açılıyor

    return conn.prepareStatement(sql); //sorguya uygun hazır ifadeyi döndür
}
```

Herkese Kolay Gelsin