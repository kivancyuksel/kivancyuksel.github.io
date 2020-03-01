---
title: '0 &#8211; Gerçek (Reel) Sayılar'
author: Kıvanç Yüksel
categories:
  - Kalkülüs Öncesi
tags:
  - kalkülüs öncesi
  - matematik
excerpt: A Journey of a Thousand Miles Begins with a Single Step (Bin millik bir yolculuk tek bir adımla başlar) - Çin atasözü
---

<blockquote class="blockquote text-center">
  <p class="mb-0">A Journey of a Thousand Miles Begins with a Single Step</p>
  <p class="mb-0">(Bin millik bir yolculuk tek bir adımla başlar)</p> 
  <footer class="blockquote-footer"><cite title="Source Title">Çin atasözü</cite></footer>
</blockquote>

En karmaşık konular bile bu konuların temellerine hakimseniz eğer size anlaması zor gelmeyecektir. Temelleri sağlam oturtmanın önemini ne kadar vurgulasam az. Öğrenmek istediğiniz herhangi bir konunun temellerini bilmeden, direk karmaşık kısımlarına balıklama atlayarak öğrenmeye çalışırsanız eğer, bu sizin için hem çok yorucu olur, hem de şevkinizi kırar. Bu sebepten dolayı, bu sitedeki bütün kurslar en temel konuların üstüne yavaş yavaş koyarak kompleks konulara geçiş yapıyor.

Bu bölümün numarasının &#8220;0&#8221; olmasının sebebi, bu bölümün kısa bir tekrar olmasıdır. Bu bölümde anlatılacak olan konuları anlamak bu kurs için çok önemli. Ancak bu posta şöyle bir göz gezdirip bu konuları zaten bildiğinizi farkederseniz, bir sonraki bölüme geçmeye çekinmeyin. Dediğim gibi bu bölüm sadece kısa bir tekrar.

**NOT:** Bazı terimlerden sonra gelen parantezlerin içinde bahsedilen terimlerin ingilizcelerini yazdım. Bunları bilmekte fayda olduğunu düşünüyorum.

## 0.1 Reel Doğru

**"Tam Sayılar (Integers)"** nelerdir?

<p class="text-center">
   . . . , -3, -2, -1, 0, 1, 2, 3, . . . 
</p>

Buradaki 3 nokta bu sayıların bir sonu olmadan bu şekilde devam ettiğini gösteriyor. Bu doğrudaki herhangi 2 sayıyı alıp toplarsak, çıkarırsak, çarparsak; elde edeceğimiz sayı yine bir tam sayı olacaktır. Bu cümle önemli bir noktaya parmak basıyor. Sayıları tam sayılar, rasyonel sayılar (birazdan göreceğiz) gibi gruplandırdığımız zaman bu grupdaki sayıların uyması gereken bazı kurallar var. Bu kurallardan ilki, biraz öncede bahsettiğimiz gibi, grubun içinden herhangi 2 sayıyı alıp bunları toplar, çıkarır yada çarparsak elde edeceğimiz sayının yine bu grubun bir elemanı olması gerekiyor.

Python'da tam sayılar herhangi özel bir sözdizimi gerekmeden tanımlanabilir:

{% highlight python linenos %}
tam_sayi1 = 3
tam_sayi2 = 123
toplam = tam_sayi1 + tam_sayi2
# toplam = 126
{% endhighlight %}

Eee peki 2 tane sayıyı bölmek istediğimizde ne olacak? Tam sayılar grubundaki sayılardan herhangi 2 tane seçersek, ve bu sayılardan birini diğerini bölersek; sonuç her zaman tam sayı olmayacaktır. 

Örneğin $\frac{3}{5}$ işleminin sonucu, bölende bölünende tam sayı olmasına rağmen tam sayı değildir.


Bu sebepten dolayı "Rasyonel Sayılar (Rational Numbers)" denilen yeni bir gruba ihtiyaç duyuldu. Bu sayılar kesirli bir forma sahip olabilirler:

$$\frac{m}{n}$$

Bu gösterim biçimi matematikte oldukça yaygın bir biçimde kullanılır. 
Bu ve buna benzer ifadelerde, gerçek sayıların yerine genellikle alfabeden bir harf atanır. 
Bunun anlamı bu ifadelerde bu harflerin yerlerine, belirtilen şartlarda, herhangi bir sayının gelebileceğini göstermektir. 
Mesela bu örnekte "m" yada "n" yerine herhangi bir tam sayı gelebilir (10, 30, 123, 5, 3, ... ). Bu Python'da tanımlanan değişkenlere benzer:

{% highlight python linenos %}
m = 3
n = 5
{% endhighlight %}

Burada 3 ve 5 sayısı sırasıyla "m" ve "n" değişkenine atanmış. 
Bundan sonra bu değişkenleri kullanarak istediğimiz işlemi gerçekleştirebileceğimiz gibi, bu değişkenlerin içlerinde değerleride istersek değiştirebiliriz:

{% highlight python linenos %}
rasyonel_sayi = m / n
m = 20
n = 30
{% endhighlight %}

Yanlız burada bir tane daha şartımız var: $n \neq 0$. Bölme işlemi çarpma işleminin tersi olduğu için, aşağıdaki eşitliğin sağlanması beklenir:

$$\frac{m}{n} \cdot n = m$$

Bu ifade birçok sayı için doğrudur. Ancak örnek olarak $n=0$ alırsak eğer ne olacağına bir bakalım. $m$ yerine ise herhangi bir sayıyı seçebiliriz:

$$\frac{1}{0} \cdot 0 = 1$$

Bu ifade görüldüğü gibi $n=0$ olduğu zaman anlamsız bir ifadeye dönüşüyor. 
Çünkü bir sayının 0 ile çarpımının her zaman 0 vermesi gerekir. 
Bu sebepten dolayı 0 ile bölüm matematikte tanımsız olarak bırakılmıştır. Diğer bir değişle 0 ile bölmek yasak! 🙂

Tam sayıları topladığımız, çıkardığımız yada çarptığımız zaman yine bir tam sayı elde ediyorduk. 
Rasyonel sayılarda ise bunu *bölme* ile de genişletebiliriz.
Yani herhangi 2 tane Rasyonel sayı alıp, bu sayıları çarpar, toplar, çıkarır yada bölerseniz ( 0 ile bölüm dışında ) sonuç yine bir Rasyonel sayı olacaktır.

Rasyonel sayılar fiziksel hesaplarda kullanılabilir. 
Ancak geometri, cebir ve kalkülüs için bunlar yeterli olmayabilir. 
Rasyonel sayıların yetmediği yerde **"Gerçek (Reel) sayılar"** kullanılabilir. Rasyonel sayıların hangi durumlarda yetmeyebileceğine bir bakalım isterseniz.

## Reel Doğru oluşturuluşu {#reel_dogru}

Herhangi bir sınırı olmayan yatay bir doğru düşünün. Bu doğrunun üzerinde herhangi bir noktaya 0 değerini verin.
Doğrunun üzerinde 0 yazdığınız yerin sağında herhangi bir nokta daha seçip bu noktaya da 1 değerini verin. 
Şu anda bu doğru üzerindeki 1 birimin ne kadar olduğuna karar vermiş oldunuz.

<div class="text-center">
  <img src="{{site.url}}/assets/img/kalkulus_oncesi/reel_sayilar/dogrunun_uzerinde_2_nokta.png" class="rounded" alt="doğrunun üzerinde iki nokta">
</div>

Bu 2 noktayı seçtikten sonra, bundan sonra bu doğrunun üzerine koyacağınız her bir sayıyı bu 2 nokta arasındaki mesafeyi 1 birim 
olacak şekilde referans alarak yerleştirebilirsiniz. Mesela 2 sayısı 1 sayısının sağında olacak şekilde 1 birim daha giderek yerleştirilebilir. 
Negatif sayılar ise 0 ın soluna doğru giderek yerleştirilebilir. Mesela -1 sayısı 0 ın soluna, 1 birim gidilerek yerleştirilebilir. 
Aynı şekilde $\frac{1}{n}$ rasyonel sayısı, 0 ile 1 in arasını $n$ eşit birime bölerek 0 ın sağına yerleştirilebilir. 
Bu şekilde devam ederek $\frac{2}{n}$ sayısını $\frac{1}{n}$ sayısının sağına aynı miktarda gidilerek yerleştirilebilir:

<div class="text-center">
  <img src="{{site.url}}/assets/img/kalkulus_oncesi/reel_sayilar/dogrunun_uzerinde_n_nokta.png" class="rounded" alt="doğrunun üzerinde n nokta">
</div>

Eğer bu doğrunun üzerinde hiç boşluk yoksa, yani akla gelebilecek bütün sayılar bu doğrunun üzerine yazıldığı zaman bu doğru 
kesintisiz bir doğru oluşturuyorsa eğer bu doğruya "Reel Doğru" diyebiliriz. Peki bu gerçektende böyle mi acaba? 
Sadece rasyonel sayılar kullanılarak bu bir reel doğru hiç boşluk kalmayacak şekilde doldurulabilir mi?

## Her Reel sayı aynı zamanda Rasyonel sayı mıdır?

Eğer başka yapacak işimiz olmadan en küçüğünden en büyüğüne bütün rasyonel sayıları bu doğrunun üzerine yazacak olsaydık, bu, 
kesintisiz bir doğru oluştururmuydu? Yani bütün reel sayılar aynı zamanda rasyonel bir sayımıdır?

Bu soruyu incelemek için gelin geometri dersinde öğretilen hipotenüs teoremine bir göz atalim. 
Bu teoreme göre; bir dik üçgenin dik açıyı oluşturan kenarlarının uzunluklarının karelerinin toplamı, 
dik açının karşısındaki kenarın uzunluğunun karesine eşittir. Yani;


<div class="text-center">
  <img src="{{site.url}}/assets/img/kalkulus_oncesi/reel_sayilar/pisagor_teoremi.png" class="rounded" alt="pisagor teoremi">
</div>

Bu teoremi temel alarak aşağıdaki üçgenin dik açısının karşısındaki kenarın uzunluğunu hesaplayalım;

<div class="text-center">
  <img src="{{site.url}}/assets/img/kalkulus_oncesi/reel_sayilar/pisagor_teoremi_ornek.png" class="rounded" alt="pisagor teoremi ornek">
</div>

Eee tamam işte nolduki yani? 🙂 Diye soruyorsanız eğer daha önce bahsettiğimiz kuralı hatırlayalım: 
Rasyonel sayıların üzerine uygulanan 4 işlemin (toplama, çıkarma, çarpma, bölme) yine bir rasyonel sayı vermesi gerekiyordu. 
Bu demek oluyorki, bu kurala göre ve yukarıdaki örneğe göre, karesi (yani kendisiyle çarpımı) 2 olan bir rasyonel sayı olması gerekiyor. 
Biraz zaman ayırıp bu rasyonel sayıyı bulmaya çalışın isterseniz. 

Sizi bu dertten kurtarayım: Böyle bir rasyonel sayı yok...

Karesi 2 ye yakın olan bir raksyonel sayı var, mesela $\frac{9369319}{6625109}=1.9999999999992$ , ancak karesi tam olarak 2 olan bir rasyonel sayı yok. 
Belki biraz daha derine inersek karesi tam olarak 2 olan bir rasyonel sayı bulabiliriz diye düşünebilirsiniz. 
Ancak karesi 2 olan herhangi bir rasyonel sayı olmadığı kanıtlanmıştır. 
Bunun kanıtını burada vermeyeceğim, ancak merak edenler internetten bakabilirler. Bu sebepten dolayı, 

{% capture jumbotron-content %}
<p class="lead">Her rasyonel sayı bir reel sayı değildir.</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}

Rasyonel olmayan bir reel sayıya "İrrasyonel Sayı" denir. Rasyonel olmayan bir reel sayı bulduk ($\sqrt{2}$), aynı zamanda ilerki 
derslerde de karşılaşacağımız $\pi$ ve $e$ sayılarıda irrasyonel sayılara birer örnektir.

### Örnek:

$7 + \sqrt{2}$ sayısının irrasyonel bir sayı olduğunu gösteriniz.

### Çözüm:

Eğer $7 + \sqrt{2}$ sayısı bir rasyonel sayı ise, bu sayı ile başka bir rasyonel sayıyı kullanarak başka bir rasyonel sayı elde edebiliriz demektir,

$$\sqrt{2} = (7 + \sqrt{2}) - 7$$

$7 + \sqrt{2}$ ifadesinin rasyonel bir sayı olduğunu varsaydık ve başka bir rasyonel sayı kullanarak (7) 
bu sayıyı dört işlemden biri olan çıkarma işlemine tabi tuttuk. Ancak sonuç olarak bir irrasyone sayı elde ettik 
($\sqrt{2}$ sayısının irrasyonel olduğunu biliyoruz). Bu mümküm olmadığı için $7 + \sqrt{2}$ sayısının rasyonel bir sayı olmadığını kanıtlamış olduk.

Evet, ilk dersimiz bitti. Umarım çok sıkılmamışsınızdır 🙂
