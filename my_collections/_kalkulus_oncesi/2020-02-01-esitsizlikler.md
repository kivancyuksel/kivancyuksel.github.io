---
title: 0.3 Eşitsizlikler
author: Kıvanç Yüksel
categories:
  - Kalkülüs Öncesi
tags:
  - kalkülüs öncesi
  - matematik
  - python
excerpt: Bu postta positif ve negatif sayılar, bu sayıların özellikleri, eşitsizlikler, aralık ve mutlak değer konularını inceleceğiz
---
## Pozitif ve Negatif Sayılar

İlk derste çizdiğimiz reel doğruyu hatırlıyor musunuz 
(<a rel="noreferrer noopener" aria-label="buradan bakabilirsiniz (opens in a new tab)" href="{{site.url}}/kalkulus_oncesi/gercek-sayilar#reel_dogru" target="_blank">buradan bakabilirsiniz</a>)? 
Eğer bir sayı bu doğruda "0" ın sağına yazılıyorsa eğer bu sayı pozitif, sağına yazılıyorsa eğer bu sayı
negatiftir. Bütün sayılar bu doğrunun üzerinde bulunduğu için, bütün sayılar ya pozitif ya negatif ya da
0'dır.

Aşağıda pozitif ve negatif sayıların bazı cebirsel özelliklerini görebilirsiniz. Eğer bu sayfadaki postları
Python kullanarak takip ediyorsanız, aşağıdaki maddeleri test etmek için Python'da tanımlanan "m" ve "n"
değişkenlerine istediğiniz değerleri atayabilirsiniz.

  * İki pozitif sayının toplamı yine bir pozitif sayıdır

{% highlight python linenos %}
m = 3
n = 2
print("Toplam pozitif" if m + n > 0 else "Toplam negatif")
{% endhighlight %}


  * İki negatif sayının toplamı yine bir negatif sayıdır.
  
{% highlight python linenos %}
m = -3
n = -2
print("Toplam pozitif" if m + n > 0 else "Toplam negatif")
{% endhighlight %}

  * Pozitif bir sayının toplamaya göre tersi negatif bir sayıdır.
  
{% highlight python linenos %}
m = 3
n = -m
print("n positif" if n > 0 else "n negatif")
{% endhighlight %}

  * Negatif bir sayının toplamaya göre tersi pozitif bir sayıdır.

{% highlight python linenos %}
m = -3
n = -m
print("n positif" if n > 0 else "n negatif")
{% endhighlight %}

  * İki pozitif sayının çarpımı yine bir pozitif sayıdır

{% highlight python linenos %}
m = 56
n = 12
print("Carpim pozitif" if m * n > 0 else "Carpim negatif")
{% endhighlight %}

  * İki negatif sayının çarpımı pozitiftir.

{% highlight python linenos %}
m = -156
n = -132
print("Carpim pozitif" if m * n > 0 else "Carpim negatif")
{% endhighlight %}

  * Bir pozitif bir negatif sayının çarpımı negatiftir.

{% highlight python linenos %}
m = 13
n = -26
print("Carpim pozitif" if m * n > 0 else "Carpim negatif")
{% endhighlight %}

  * Pozitif bir sayının çarpmaya göre tersi yine bir pozitif sayıdır

{% highlight python linenos %}
m = 3
n = 1/m
print("n positif" if n > 0 else "n negatif")
{% endhighlight %}

  * Negatif bir sayının çarpmaya göre tersi yine bir negatif sayıdır

{% highlight python linenos %}
m = 3
n = 1/m
print("n positif" if n > 0 else "n negatif")
{% endhighlight %}

## Küçüktür ve Büyüktür ifadeleri

$a$ sayısı $b$ sayısından küçüktür ($a < b$ şeklinde yazılır) diyebilmemiz için, reel doğru üzerinde
$a$ sayısının $b$ sayısının soluna yazılıyor olması gerekir. Aynı şekilde, eğer
$a$ sayısı $b$ sayısından küçükse, o zaman $b-a$ 'nın pozitif olması gerekmektedir ($b-a > 0$). 
Aynı şekide, $b$ sayısı pozitiftir diyebilmemiz için $b$ sayısının 0'dan büyük olması ($0 < b$) gerekmektedir. 

Dur şimdi bir dakika, ne? $a, \ b$; aklım allak bullak oldu diyorsanız eğer, direk örnek verin derim.
Anlamadığınız matematiksel bir ifadeyle her karşılaştığınızda bu ifadedeki terimlerin yerlerine gerçek
sayılar koyarak kendi kendinize örnek yaparsanız eğer bu ifadeyi daha rahat anlayabilirsiniz.

{% highlight python linenos %}
a = 3
b = 5
print("a b'den küçük" if a &lt; b else "b a'dan küçük")
{% endhighlight %}

Mesela yukarıdaki ifadeyi anlamak için $a=3$ olsun. Herhangi bir $b$ sayısının $a$ 'dan büyük olması için,
reel doğrudan $a$ 'nın sağında bir değer seçmemiz gerekiyor. O zaman $b=5$ diyebiliriz mesela. Burdan yola
çıkarsak $b-a=5-3=2$ 'nin pozitif olduğunu görürüz.

Bir sayının diğer bir sayıdan küçük veya eşit olduğunu göstermek için $\leq$, büyük veya eşit olduğunu
göstermek için $\geq$ sembollerini kullanıyoruz.$a \leq b$ demektirki: $a$ sayısı $b$ sayısından ya daha
küçük bir sayıdır yada $b$ sayısına tamamen eşittir. Aynı şekilde $a \geq b$ demektirki: $a$ sayısı $b$
sayısından ya daha büyüktür yada $b$ sayısına tamamen eşittir.

{% highlight python linenos %}
a = 4
b = 4
c = 3
d = 5

print(a &lt; b)
print(a > b)
print(a &lt;= b)
print(a >= b)
print(c &lt; a)

# Bu şekilde başka varyasyonlarla da oynayabilirsiniz
{% endhighlight %}


{% capture jumbotron-content %}
<h3>Geçişlilik</h3>
$$ Eğer \ \ a < b \ \ ve \ \ b < c \ \ ise, \ o \ zaman \ \ a < c \ dir.$$
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}

Bu ifadenin neden doğru olduğunu görmek için reel doğruya bir daha bakalım.

<div class="text-center show-my-image">
    <img src="{{site.url}}/assets/img/kalkulus_oncesi/reel_sayilar/a_b_c_dogrusu.png" class="img-fluid" alt="a < b < c doğrusu"/>
    <p>Geçişlilik: $a<b$ ve $b<c$ ise $a<c$ 'dir</p>
</div>

$a$ 'nın $b$ 'den küçük olabilmesi için $b$ 'nin sol tarafına yazılmış olması gerekmektedir. 
Aynı şey $b$ ve $c$ için de geçerlidir. $a < b$ ve $b < c$ ifadeleri genellikle birleştirilip beraber
tek bir ifadede yazılırlar: $a < b < c$.

{% capture jumbotron-content %}
<h3>Eşitsizliklerde toplama</h3>
<p> $$a < b \ \ ve \ \ c < d \ \ ise, \ \ o \ \ zaman \ \ a+c < b+d \ 'dir$$</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}

Bunun neden doğru olduğunu göstermek için daha önceden öğrendiğimiz bilgilere göz atabiliriz. Eğer $a < b$
ve $c < d$ ise, o zaman $b-a$ ve $d-c$ sayılarının pozitif olması gerekiyor. İki tane pozitif sayının toplamı
yine bir pozitif sayı verdiği için $(b-a) + (d-c)$ 'nin de pozitif olması gerekiyor. Bu ifadeyi yeniden
düzenleyerek $(b+d) - (a+c)$ şeklindede yazabiliriz. Aynı şekilde bu ifadeninde pozitif olması gerekiyor. 
Son olarak elde ettiğimiz ifade demek oluyorki: $a+c < b+d$.

{% capture jumbotron-content %}
<h3>Eşitsizliklerde çarpma</h3>
<p>Eğer  $a < b$  ise, o zaman;</p>
<p>$c > 0$  ise  $ac < bc$</p>
<p>$c < 0$  ise  $ac > bc$</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}

Bunun neden doğru olduğunu aynı bir önceki örnekte yaptığımız gibi adım adım giderek gösterebiliriz. 
Ancak bu sefer (ve bundan sonra gösterilecek örneklerde) bu adımları yapmayı size bırakıyorum 
(aynı şekilde a, b ve c değişkenlerine örnek sayılar vererekte bunu yapabilirsiniz.


{% capture jumbotron-content %}
<h3>Eşitsizlerin toplamaya göre tersi</h3>
<p>Eğer &nbsp; $a < b$ &nbsp; ise, o zaman &nbsp; $-a > -b$</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}


Üstteki açıklamada $a$ ve $b$ sayılarının $-1$ ile çarpıldığını düşürseniz eğer, aslında bu açıklamanın 
bir önceki açıklamayla benzer olduğunu görebilirsiniz.


{% capture jumbotron-content %}
<h3>Eşitsizliklerin çarpmaya göre tersi</h3>
<p>Eğer &nbsp; $a<b$ &nbsp; ise, o zaman;</p>
<p>Eğer &nbsp; $a$ &nbsp;  ile &nbsp; $b$ &nbsp;'nin ikiside pozitif yada ikiside negatifse &nbsp; $\frac{1}{a}>\frac{1}{b}$</p>
<p>Eğer &nbsp; $a<0<b$ &nbsp; ise &nbsp; $\frac{1}{a}<\frac{1}{b}$</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}


Eğer bu ifadelerden herhangi biri aklınıza yatmadıysa, lütfen biraz zaman ayırarak bu ifadelerdeki değiştenlere örnek olarak rasgele sayılar vererek bu ifadelerin doğruluğunu test edin.

## Aralık

Şimdi basit gibi görünen, ancak tanımının iyi bir şekilde anlaşılmasının oldukça önemli olduğu bir konuya
geldik: Aralık. Aralığın tanımını vermeden önce *"Küme"* nedir onu bi öğrenelim.


{% capture jumbotron-content %}
<h3>Küme</h3>
<p>Nesneler topluluğuna ve yığınına küme denir</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}


Kümelere negatif sayılar topluluğu, pozitif tek sayılar, negatif çift sayılar gibi örnekler verilebilir.
Konumuz matematik olduğu için kümenin tanımındaki "nesne" ifadesindeki belirsizliği kaldırıp, 
bunun yerine reel sayıları koyabiliriz. Vikipedi tanımına göre: **Nesne**, belirli bir kütlesi ve hacmi olan
her türlü cansız varlıktır. Bu tanıma göre araba, bilgisayar, kalem de nesnelere birer örnektir. 
Ancak şu anda bu nesneler bizim ilgimizi çekmiyor. Belirli bir kütlesi ve hacmi olmamasına rağmen biz bu
tanımdaki nesne ifadesinin reel sayıları ifade ettiğini varsayacağız.

Eğer bir küme sınırlı sayıda nesneler içeriyorsa, bu küme içinde barındırdığı nesleler süslü parantez içine
yazılarak gösterilebilir. Mesela, elimizde 3, 4 ve 9 sayılarından oluşan bir küme varsa, bu kümeyi aşağıdaki
gibi gösterebiliriz:

$$\{3, 4, 9\}$$

Python kullanarak dersi takip edenler için, Python'da da küme oluşturabilirsiniz: 

{% highlight python linenos %}
benim_kumem = {3, 4, 9}
{% endhighlight %}

Ancak elimizde sınırsız sayıda nesneden oluşan bir küme varsa, bunu biraz daha değişik bir biçimde
gösteriyoruz. Mesela, 2'den büyük reel sayılardan oluşan bir küme aşağıdaki gibi gösterilebilir:

$$\{x:x>2\}$$

Bu ifade: reel sayı kümesi x öyledir ki, 2'den büyük sayılardan oluşur, şeklinde okunur. Burada x harfinin
herhangi bir önemi yoktur. Sadece bu ifadeyi olabildiğince kısa ve anlaşılır biçimde yazabilmek için
kullanılmıştır.&nbsp; \{$3, 4, 5, \dots, \infty$\} &nbsp; yazmaktansa, kısaca &nbsp; {$x:x>2$} &nbsp;
şeklinde yazıyoruz. Ancak dediğim gibi burada x harfinin herhangi bir önemi yoktur. Bunun yerine,
&nbsp; {$t:t>2$} &nbsp; yada &nbsp; {$z:z>2$} &nbsp;'da yazabilirdik.

Matematikte çok yoğun bir şekilde kullanılan özel bir tip küme vardırki, bu kendine özel bir isim almıştır.


{% capture jumbotron-content %}
<h3>Aralık</h3>
<p>Aralık herhangi ili sayının arasındaki bütün reel sayılardan oluşan bir kümedir.</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}


Aralığa bir örnek vermek gerekirse, negatif sayılar bir aralıktır. Çünkü negatif iki sayının arasındaki her
sayı yine bir negatif sayıdır. Aralığın dahada pekişmesi için şimdide aralık olmayan bazı örnekler görelim.
Mesela tam sayılar kümesi bir aralık değildir. Çünkü, 4 ve 5 bu kümenin içinde olmasına rağmen
&nbsp; $\frac{9}{2}$ &nbsp; (yani 4 ile 5 in arasında olan 4.5 sayısı) bu kümenin içinde değildir. Diğer bir
örnekse rasyonel sayılar kümesidir. Bu kümede bir aralık değildir. Çünkü 1 ile 2 bu kümenin içinde olmasına
rağmen &nbsp; $\sqrt{2}$ &nbsp; bu kümenin içinde değildir.

Aralıklar matematikte çok kullanışlı olduğu için bunlara özel bir yazım şekli belirlenmiştir. 
Aşağıdaki ifadelerde &nbsp; $a$ &nbsp; ve &nbsp; $b$ &nbsp; birer reel sayı ve &nbsp; $a < b$ &nbsp;'dir.


{% capture jumbotron-content %}
<h3>Aralık gösteriliş biçimleri</h3>
<p>Açık aralık (a, b), a ile b arasındaki sayılar kümesini gösterir. Ancak bu kümeye a ile b dahil değildir:</p>
$$(a, b) = \{x: a<x<b \}$$

<p>Kapalı aralık [a,b], a ile b arasındaki sayılar kümesini gösterir ve bu kümeye a ile b'de dahildir:</p>
$$[a, b] = \{x: a \leq x \leq b \}$$

<p>Yarı açık aralık [a, b), a ile b arasındaki sayılar kümesini gösterir. Bu kümeye a dadahilken b değildir:</p>
$$[a, b) = \{x: a \leq x < b \}$$

<p>Yarı açık aralık (a, b], a ile b arasındaki sayılar kümesini gösterir. Bu kümeye a dahilken b değildir:</p>
$$(a, b] = \{x: a < x \leq b \}$$
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}


Bu ifadelerde parantezler belirtilen sınırların aralığa dahil olmadığını
belirtirken, köşeli parantezler sınırların aralığı dahil olduğunu belirtir.
Eğer ucu bir aralık belirtmek istersek (yani pozitif yada negatif sonsuza
giden), bu ifadeyi aşağıdaki gibi gösterebiliriz:


{% capture jumbotron-content %}
<h3>Ucu açık aralıklar</h3>
<p>Aralık &nbsp; $(a, \infty)$ &nbsp; a'dan büyük sayıların kümesini gösterir:</p>
$$(a, \infty) = \{x: x>a \}$$
<p>Aralık &nbsp; $[a, \infty)$ &nbsp; a'dan büyük yada a'ya eşit sayıların kümesini gösterir:</p>
$$[a, \infty) = \{ x: x \geq a \}$$
<p>Aralık &nbsp; $(-\infty, a)$ &nbsp; a'dan küçük sayıların kümesini gösterir:</p>
$$(-\infty, a) = \{x: x < a \}$$
<p>Aralık &nbsp; $(-\infty, a]$ &nbsp; a'dan küçük yada a'ya eşit sayıların kümesini gösterir:</p>
$$(-\infty, a] = \{x: x \leq a \}$$
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}

Buradaki &nbsp; $\infty$ &nbsp; işaretine "sonsuz" işareti denir. Bu işaret
sadece yazım kolaylığı olması için kullanılmaktadır ve bu işaret herhangi bir
reel sayıya eşit değildir. &nbsp; $(2, \infty)$ &nbsp; ikiden büyük reel
sayıları göstermektedir ve &nbsp; {$x: x>2$} &nbsp; ifadesinden daha kolay
yazılır.

Sonsuz sembolünü içeren hiçbir aralıkta sonsuz işaretinin olduğu sınırda köşeli
parantez göremezsiniz. Böyle bir ifade yanlış olurdu çünkü köşeli parantez
bulunduğu taraftaki sınırın aralığa dahil olduğunu belirtir ancak 
&nbsp; $\infty$ &nbsp; herhangi bir sayıyı ifade etmemektedir. 

İleriki derslerde aralıkların "birleşimi"ni oldukça sık bir şekilde
kullanacağız. Bu sebepten dolayı hazır buradayken birleşimin de tanımını yapalım.


{% capture jumbotron-content %}
<h3>Birleşim</h3>
<p>A ve B kümelerinin birleşimi &nbsp; $A \cup B$ &nbsp; şeklinde gösterilir ve A yada B kümelerinden en az birinde bulunan nesnelerin kümesidir</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}


Yani &nbsp; $A \cup B$ &nbsp; genellikle A'da B'de yada hem A'da hem de B'de
bulunan nesnelerden oluşur. Bunu bir örnekle gösterelim:

### Örnek

&nbsp; $(2, 6) \cup (4, 8]$ &nbsp; ifadesini aralık şeklinde yazınız.

### Çözüm


<div class="text-center show-my-image">
    <img src="{{site.url}}/assets/img/kalkulus_oncesi/reel_sayilar/union.png" class="img-fluid" alt="Doğru üzerinde union örneği"/>
    <p>üstte &nbsp; $(2, 6)$ &nbsp;, altta &nbsp; $(3, 8]$ &nbsp;</p>
</div>    


Yukarıdaki figürden de yardım alırsak eğer, &nbsp; $(2, 8]$ &nbsp; aralığındaki
sayıların hepsinin ya &nbsp; $(2, 6)$ &nbsp; aralığında ya 
&nbsp; $(3, 8]$ &nbsp; aralığında yada her iki aralıkta birden bulunduğunu
görürüz. Yani;

$$(2, 6) \cup (3, 8] = (2, 8]$$

Bu örneği Python'da da yapıp cevabı kontrol edebilirsiniz:

{% highlight python linenos %}
kume1 = {3, 4, 5}
kume2 = {4, 5, 6, 7, 8}
# Burada union kelimesi "birlesim" anlamina geliyor
print(kume1.union(kume2)) 
{% endhighlight %}

### Örnek

0'a eşit olmayan reel sayıları iki aralığın birleşimi biçiminde yazınız.

### Çözüm

$$(-\infty, 0) \cup (0, \infty)$$


## Mutlak değer

Mutlak değer bir sayının 0'dan olan uzaklığını gösteren bir değerdir. 
Burada her bir sayıyı daha önceden de kullandığımız reel sayı doğrusu üzerinde
birer nokta olarak düşünebilirsiniz. Bu şekilde düşünürseniz eğer, mesela,
4 sayısının 0'dan olan uzaklığının 4 (birim) olduğunu görürsünüz. 
Aynı şekilde -4 sayısının 0'dan uzaklığıda 4 (birim)'dir. Burada herhangi bir
sayının 0'ın sağında veya solunda olması farketmez, biz her zaman için 0'a olan
uzaklığının kaç olduğuna bakıyoruz, ve uzaklık negatif bir sayı olamaz. Siz
Ankara'dan İzmir'e 700km gittikten sonra İzmir'den Ankara'ya -700km var
demezsiniz. Mesafe yine 700km'dir, ancak yön farklıdır.

Bir &nbsp; $a$ &nbsp; sayısı alırsak eğer, bu sayının mutlak değeri
&nbsp; $|a|$ &nbsp; şeklinde gösterilir. Bu sebepten dolayı
&nbsp; $|\frac{5}{3}|=\frac{5}{3}$ &nbsp; ve 
&nbsp; $|-\frac{5}{3}| = \frac{5}{3}$ &nbsp;. Mutlak değerin resmi tanımını
verirsek eğer:


{% capture jumbotron-content %}
<h3>Mutlak değer</h3>
<p>Herhangi bir a sayısının mutlak değeri &nbsp; $|a|$ &nbsp; şeklinde 
gösterilir ve aşağıdaki gibi tanımlanır:</p>

\[

|b| =

\begin{cases}

b & \text{eğer } b \geq 0 \\

-b & \text{eğer } b < 0

\end{cases}

\]
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}


Bu kurala göre yukarıdaki örneği tekrar yapacak olursak: &nbsp; $-\frac{5}{3}<0$
&nbsp; bu sebepten dolayı, &nbsp; $|-\frac{5}{3}|=-(-\frac{5}{3})=\frac{5}{3}$
&nbsp; 

Mutlak değer kavramı aslında oldukça kolay &#8212; eğer bir numara negatifse,
eksiyi at gitsin. Ancak lütfen unutmayınki bu kural sadece numaralara
uygulanabilir. Eğer bize &nbsp; $|-(a+b)|$ &nbsp; gibi bir ifade verilirse,
direk eksiden kurtulup bunu &nbsp; $a+b$ &nbsp; şeklinde yazamayız.
&nbsp; $a$ &nbsp; ile &nbsp; $b$ &nbsp;'nin değerlerini bilmediğimiz için, 
bu ifadenin sonucunun pozitifmi negatifmi olduğunu da bilmiyoruz. 
Eğer &nbsp; $a+b \geq 0$ &nbsp; o zaman bu ifadeyi
&nbsp; $a+b$ &nbsp; şeklinde basitleştirebiliriz. Ancak
&nbsp; $a+b < 0$ &nbsp; ise &nbsp; $|-(a+b)| = -(a+b)$ &nbsp;'dir ve 
"-" işaretini bu ifadeden atmak yanlış olacaktır. Kafanız karıştıysa eğer bu
örneğin gerçek sayılar kullanarak çözümüne bir göz atın:

Diyelimki &nbsp; $a+b=3$ &nbsp;. O zaman &nbsp; $|-(a+b)| = |-3| = 3$ &nbsp;,
yani sonuç &nbsp; $a+b$ &nbsp;'ye eşit. Ancak &nbsp; $a+b=-3$ &nbsp;
olsaydı eğer, &nbsp; $|-(a+b)| = |-(-3)| = 3$ &nbsp;, sonuç değişmedi ancak bu
sefer sonuç &nbsp; $-(a+b)$ &nbsp;'ye eşit 🙂

Matematikte semboller oldukça önemli bir yere sahiptir. Gerçek sayılar
kullanmaktansa sembollerin tercih edilmesinin sebebi, gerçek sayılarla
yazılamayacak komplex matematik formullerinin, sembollerle çok rahat bir şekilde
yazılabiliyor olmasıdır. Bu sebepten dolayı matematikte sembollerin kullanımına
yavaş yavaş alışsanız iyi olur. Bir sürü sembolden oluşan karmaşık bir
matematiksel konsept gördüğünüz zaman unutmayınki her zaman burada belirtilen
sembollerin yerine gerçek sayılar koyup bu ifadeyi daha rahat bir şekilde
anlayabilirsiniz.

Evet, şimdide biraz daha soyut olan (sadece sembollerden oluşan) bir örnek
yapmak istiyorum. Ancak bu örnekten önce, bu örneği daha iyi anlayabilmeniz için
gelin bu örneğin soyut olmayan versiyonunu çözelim.

### Örnek

  * &nbsp; $\|x\| < 5$ &nbsp; ifadesini mutlak değer kullanmadan bir eşitsizlik halinde yazın.
  * &nbsp; {$x: \|x\| < 5$} &nbsp;kümesini bir aralık şeklinde yazın

### Çözüm

  * Bir sayının mutlak değerinin 5'den küçük olabilmesi için, bu sayının 
  0'a olan uzaklığının 5'den küçük olması lazım. Bu koşul ancak ve ancak 
  eğer bu sayı -5 ile 5 arasındaysa gerçekleşebilir. Bu sebepten dolayı
  yukarıdaki ifade aşağıdaki gibi yazılabilir:

$$|x| < 5 = -5 < x < 5$$

  * İlk maddeyi çözdükten sonra zannediyorumki bu maddeyi kolayca
  çözmüşsünüzdür. 

$$\{x: |x| < 5\} = (-5, 5)$$

Eveeet, şimdi şu korkunç, sadece sembollerden oluşam soruya gelirsek eğer 🙂

### Örnek

&nbsp; $a$ &nbsp;'nin bir reel sayı ve &nbsp; $l > 0$ &nbsp; olduğunu
varsayarsak eğer,

  * &nbsp; $\|x-a\| < l$ &nbsp; ifadesini mutlak değer kullanmadan bir
  eşitsizlik halinde yazın.
  * &nbsp; {$x: \|x-a\| < l$} &nbsp; setini bir aralık şeklinde yazın.

### Çözüm

  * Bu örnek sizi hiç korkutmasın. Bu örnek aslında yukardaki örneğin aynısı.
  Sadece burada numaralar yerine semboller kullılmış. Bir sayının mutlak
  değerinin &nbsp; $l$ &nbsp;'den küçük olabilmesi için, bu sayının
  &nbsp; $-l$ &nbsp; ile &nbsp; $l$ &nbsp; arasında olması gerekmektedir. 
  O zaman: 

$$|x-a| < l = -l < x-a < l$$

Üstteki ifadenin herbir kısmına &nbsp; $a$ &nbsp; eklersek eğer, bu ifadeyi
aşağıdaki gibi yazabiliriz (aynı sayıyı herbir kısma eklediğimiz için eşitsizlik
bozulmaz):

$$|x-a| < l = a-l < x < a+l$$

  * Aynı üstteki örnekte olduğu gibi ilk maddeyi çözdükten sonra ikinci madde
  oldukça kolaylaşıyor:


$$\{x: |x-a| < l\} = (a-l, a+l)$$

Bu dersle bu bölümü bitirmiş olduk. Bu bölümün "0" bölüm olmasının nedeni,
aslında burada gösterilen konuların tekrar amaçlı olmasındandır. Bir sonraki
bölümde bu bölümde gösterilen konuları yoğun bir biçimde kullanacağız. Artık
fonksiyonları görmeye hazırız 🙂 Matematikte fonksiyonlar herşeydir. Bu konunun
neden bu kadar önemli olduğunu ileriki derslerde derin derin konuşacağız 🙂
