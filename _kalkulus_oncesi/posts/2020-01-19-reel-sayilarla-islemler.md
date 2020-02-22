---
title: '0.2 &#8211; Reel Sayılarla işlemler'
author: Kıvanç Yüksel
categories:
  - Kalkülüs Öncesi
tags:
  - kalkülüs öncesi
  - matematik
  - python
---

Rasyonel sayılarda olduğu gibi, reel sayılarada uygulanan dört işlemin sonucunda yine bir reel sayı elde edilir (0 ile bölümün dışında). 
Bu bölümde ileride işinize yarayacak ve bu sebepten dolayı iyice öğrenmeniz gereken reel sayılara ait bazı özellikleri göreceğiz. 

## Yer Değiştirme (Commutativity) ve Birleşme (Associativity) Özellikleri

Yer değiştirme özelliğinin bize söylediği şey; toplama ve çarpma işlemlerinde sayıların sırasının bir önemi olmadığıdır. Yani;

{% capture jumbotron-content %}
<h3>Yer değiştirme özelliği</h3>
$$a+b = b+a \ \ ve \ \ ab = ba$$
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}
 
Yanlız burada dikkat etmeniz gereken nokta; çıkarma ve bölme işlemlerinde yer değiştirme özelliğinin geçerli olmayışıdır. 
Bu özelliği kesinlikle ezberlemenize gerek yok. Çabucak aklınızdan bir örnek yapıp bu özelliği hatırlayabilirsiniz.
Mesela $3+5 = 8$, aynı zamanda $5+3 = 8$. Diğer bir örnek, $5-3 = 2$ ancak $3-5 = -2$.

Birleşme özelliğinin bize söylediği şey; toplama ve çarpma işlemlerinde parantez kullanılarak yapılan gruplamanın bir öneminin olmayışıdır. Yani;


$$(a+b)+c = a+(b+c) \ \ ve \ \ (ab)c = a(bc)$$

Normalde parantezler bir matematiksel ifadeye işlem önceliği özelliği katar. 
Yani, normalde, bir matematik işleminde parantez gördüğünüz zaman öncelikle bu parantezin içinde verilen işlemi yapmanız gerekmektedir. 
Ancak bu özellik bize bunun toplama ve çarpma işlemlerinde bir şey ifade etmediğini söylüyor. 
Yine hatırlamanız gereken nokta; aynı yer değiştirme özelliğinde olduğu gibi, çıkarma ve bölme işlemlerinde bu özellik geçersizdir. 
Mesela, $(10-5)-3 = 5-3 = 2$, ancak $10 - (5-3) = 8$.

Birleşme özelliği sayesinde toplama ve çarpma işlemlerinde parantezle yazılan ifadelerde parantezleri kaldırabiliriz:

{% capture jumbotron-content %}
<h3>Birleşme özelliği</h3> 
$$(a+b)+c = a+b+c \ \ ve \ \ (ab)c=abc$$
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}


## Matematiksel İşlemlerde İşlem Önceliği

Aşağıdaki ifadeye bir göz atın,

$$6 + 2 \cdot 3$$

Bu ifadede bize yol göstermesi için hiç bir parantez yok. Peki o zaman bu ifadede ilk önce 6 ile 2'yi toplayıp bunu 3'le mi çarpmamız gerekiyor? Yani:

$$(6+2) \cdot 3 = 8 \cdot 3 = 24$$

Yoksa ilk önce 2 ile 3'ü çarpıp bunun sonucunu 6 ile mi toplamalıyız? Yani:

$$6+(2 \cdot 3) = 6 + 6 = 12$$

Gördüğünüz gibi farklı matematiksel işlemleri farklı sırada uyguladığınız zaman sonuç değişiyor. 
Bu sebepten dolayı matematiksel işlemlerde tutarlılığı sağlamak için işlem önceliği ile ilgili matematikçilerin uyguladıkları kurallara bizimde uymamız gerekiyor.
Bunlardan ilki:

{% capture jumbotron-content %}
<h3>Çarpma ve bölme işlemleri, toplama ve çıkarma işlemlerinden önce uygulanır</h3>
<p>&mdash; Eğer parantezler aksini belirtmiyorsa çarpma ve bölme işlemleri toplama ve çıkarma işlemlerinden önce yapılır</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}


Bu kurala göre üstteki ifade $6+(2 \cdot 3)$ şeklinde yazılmış gibi düşünülmelidir. Ancak bu kural çok yaygın olarak bilindiği için, 
okunurluğu arttırmak için genellikle parantezler belirtilmeden $6 + 2 \cdot 3$ şeklinde yazılır.

Şimdide matematiksel işlemlerde parantezin etkisine bir göz atalım. Aşağıdaki ifadede iç içe geçmiş birden fazla parantez olduğunu görüyoruz:

$$6 \cdot 2 + 2 \cdot 3 +  (3 \cdot (4+5) + 4 \cdot 2)$$

Böyle bir ifadede, en içteki parantezdeki işlemlerin dışarıdaki parantezlere göre işlem önceliği var. Yani diğer kuralımız:

{% capture jumbotron-content %}
<h3> İçteki parantezdeki işlemler önce gelir </h3>
<p> &mdash; Bir ifadede iç içe geçmiş parantezler bulunuyorsa eğer. En içdeki parantezdeki işlemden başlayarak sırasıyla dışa doğru gidilir.</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}

Yukarıdaki ifade bu kurala göre şu şekilde çözülebilir:

$$\begin{eqnarray}
\left.\begin{aligned}
&6 \cdot 2 + 2 \cdot 3 +  (3 \cdot (4+5) + 4 \cdot 2) \nonumber = \\
&= 6 \cdot 2 + 2 \cdot 3 + (27 + 8) \nonumber \\
&= 6 \cdot 2 + 2 \cdot 3 + 35 \nonumber \\
&= 12 + 6 + 35 \nonumber \\
&= 53 \nonumber \\
\end{aligned}\right.
\end{eqnarray}$$


<span class="badge badge-primary">Not: </span> Bu ifadeyi Python&#8217;da yazıp sonucuna bakabilirsiniz. Python&#8217;un burada bahsedilen kuralların hepsine uyduğunu göreceksiniz.

{% highlight python linenos %}
print(6*2 + 2*3 + (3*(4+5)+4*2))
{% endhighlight %}


## Dağılma Özelliği

Dağılma özelliği toplama ile çarpmayı birbirine bağlar. Dağılma özelliği sayesinde bir toplamın çarpımını, çarpmaların toplamına dönüştürebilirsiniz ( tabikide bunun tam terside mümkün). 
Bu özellik bazı kompleks matematiksel işlemleri basitleştirmede kullanılabilir.

{% capture jumbotron-content %}
<h3>Dağılma özelliği</h3>
$$a(b+c) = ab + ac \ \ yada \ \ (a+b)c = ac + bc$$
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}

Burada yaptığımız işlem bu ifadeyi daha önce görmeyenler için biraz kafa karıştırıcı olabilir. Öncelikle gerçek sayıları kullanarak bu ifadenin doğruluğunu kontrol edelim:

$$3(4+5) = 3 \cdot 9 = 27 \ \ ve \ \ 3 \cdot 4 + 3 \cdot 5 = 27$$

Evet, yukarıda bu ifadenin doğru olduğunu bir örnekle göstermiş olduk. Adım adım yapılan işlemi incelersek eğer, parantezin dışındaki çarpanı parantezin içindeki 
sayılarla teker teker çarpıp aralarına da parantezin içindeki işlemi yerleştiriyoruz. Bazen de bu işlemi tersten yapmamız gerekebilir. 
Bu, bazen bize açık bir şekilde verilebileceği gibi bazen de biraz gözü açıklılık gerektirebilir. Ne demek istediğimi yine bir örnekle göstermek gerekirse:

$$3 \cdot 4 + 3 \cdot 5$$

Burda ilk farketmeniz gereken şey, toplamadaki ifadelerin her ikisindede ortak bir çarpan var: *3*. Böyle durumlarda bu ortak çarpanı dışarıya çekip kalan 
terimleri parantez içinde toplama olarak yazabiliriz (yukarıda gösterdiğimiz örneğin tam tersi):

$$3 \cdot 4 + 3 \cdot 5 = 3(4+5) = 27$$

Bu örnekde *3* ; çarpanı ayrı olarak verildiği için dağılma özelliğinin tersini daha rahat bir şekilde görebildik. Ancak aynı örnek daha kapalı bir biçimde de verilebilirdi:

$$12 + 15 = ?$$


Bu durumda gözünüzün biraz daha açık olup ortak bir çarpan aramanız gerekmektedir. Yani, bu işlemdeki ifadeleri $12=3\cdot4$ ve $15=3\cdot5$ şeklinde yazarsak eğer *3* 'lerin ortak olduğunu görüp,
bu ifadeyi toplamın çarpımı şeklinde yazabiliriz. Tabikide $12+15$ çok kolay bir işlem ve bunu hiçbir şekilde değiştirmeden de çözebiliriz. 
Ancak ileride karşılaşabileceğiniz daha kompleks matematiksel ifadeleri çözebilmek için bu kural her zaman aklınızın bir köşesinde bulunsun.

Daha fazla ileriye gitmeden birkaç tane örnek yapalım.

### Örnek

$4(5m+2x) + 10x$ ifadesininin basitleştirilmiş halini bulun.

### Çözüm

İlk önce dağılma özelliğini kullanıp $4(5m+2x)$ ifadesini $20m+8x$ 'e dönüştürelim:

$$4(5m+2x) + 10x = 20m+8x+10x$$

Şimdi dağılma özelliğini tersten uygulayıp $8x+10x$ ifadesini $(8+10)x$ ifadesine dönüştürelim:

$$20m + 8x + 10x = 20m + (8+10)x$$

Evet gördüğünüz gibi dağılma özelliğini kullanarak $4(5m+2x)+10x$ ifadesini $20m+18x$ ifadesine dönüştürmüş olduk. Bu yeterli bir sonuçtur, ancak daha da ileriye gitmek isterseniz eğer bu ifadeyi:

$$20m + 18x = 2 \cdot 10 \cdot m + 2 \cdot 9 \cdot x = 2(10m + 9x)$$

Şeklinde de yazabilirsiniz.

### Örnek

$(a+b)(c+d)$ ifadesini genişletin.

### Çözüm

Eğer $(a+b)$ ifadesini tek bir sayıymış gibi düşünürsek, bu ifadeyi dağılma özelliğini kullanarak aşağıdaki gibi yazabiliriz:

$$(a+b)(c+d) = (a+b)c + (a+b)d$$

Bu ifadeyi dağılma özelliğini kullanarak bir daha genişletirsek eğer:

$$(a+b)c + (a+b)d = ac + bc + ad + bd$$

Sonucunu elde etmiş oluruz.

Dağılma özelliğini kullanarak bir çoğunuzun aşina olduğu $(a+b)^2$ matematiksel ifadesi de elde edilebilir:

$$(a+b)^2 = (a+b)(a+b) = a^2 + 2ab + b^2$$

## Toplamanın Tersi ve Çıkarma Arasındaki Bağlantı

Toplama işleminde etkisiz eleman "0" dır. Bunun sebebi, herhangi bir sayıyı "0" ile topladığınız zaman sonucun değişmediğidir. Herhangi bir reel sayının toplamaya göre tersi, 
bu sayıyla toplandığı zaman bu sayıyı toplama işlemine göre etkisiz hale getiren sayıdır. Yani, herhangi bir $a$ reel sayısının toplamaya göre tersi $-a$ reel sayısıdır.

$$a + (-a) = 0$$

Burada çıkarma işlemiyle toplama işleminin tersi arasında bir bağlantı olduğu görülür:

$$a - b = a + (-b)$$

Yukarıdaki ifade çıkarma işleminin tanımı olarak bile düşünülebilir. Aşağıda bu özelliği kullanarak oluşturulan bazı matematiksel ifadeler göreceksiniz. Devam etmeden önce bu ifadeleri iyice anladığınıza emin olun.

{% capture jumbotron-content %}
<h3>Toplamanın tersi ve çıkarma içeren bazı matematiksel ifadeler</h3>
$$-(-a) = a$$
$$-(a+b) = -a-b$$
$$(-a)(-b) = ab$$
$$(-a)b = a(-b) = -(ab)$$
$$(a-b)c = ac-bc$$
$$a(b-c) = ab-ac$$
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}

<span class="badge badge-primary">Not: </span> Yukarıdaki ifadeleri Python'da deneyip sonuçlarına bakabilirsiniz.

{% highlight python linenos %}
a = 3
b = 4
c = 5

def dogru_mu_yanlis_mi(ifade):
    if ifade == True:
        print("Karsilastirilan ifade dogru")
    else:
        print("Karsilastirilan ifade yanlis")

ifade1 = -(-a) == a
ifade2 = -(a+b) == -a - b
ifade3 = (-a)*(-b) == a*b
ifade4 = (-a)*b == a*(-b) == -(a*b)
ifade5 = (a-b)*c == a*c - b*c
ifade6 = a*(b-c) == a*b - a*c

dogru_mu_yanlis_mi(ifade1)
dogru_mu_yanlis_mi(ifade2)
dogru_mu_yanlis_mi(ifade3)
dogru_mu_yanlis_mi(ifade4)
dogru_mu_yanlis_mi(ifade5)
dogru_mu_yanlis_mi(ifade6)
{% endhighlight %}


### Soru

$(a+b)(a-b)$ ifadesini genişletin. 

Yukarıdaki soruyu alıştırma olması için kendiniz çözmeye çalışırsanız eğer sizin faydanıza olacaktır.
Bulduğunuz sonucu bu sayfanın yorumlar kısmına yazabilirsiniz.

## Çarpmanın Tersi ve Bölme Arasındaki Bağlantı

Çarpma işleminde etkisiz eleman "1" dir. Bunun sebebi, herhangi bir sayıyı "1" ile çarptığınız zaman sonucun
değişmediğidir. Herhangi bir reel sayının çarpmaya göre tersi, bu sayıyla çarpıldığı zaman bu sayıyı çarpma
işlemine göre etkisiz hale getiren sayıdır. Yani, herhangi bir $a$ reel sayısının çarpmaya göre tersi
$\frac{1}{a}$ reel sayısıdır.

$$a \cdot \frac{1}{a} = 1$$

Burada bölme işlemiyle çarpma işleminin tersi arasında bir bağlantı olduğu görülür:

$$\frac{a}{b} = a \cdot \frac{1}{b}$$

Yukarıdaki ifade bölme işleminin tanımı olarak bile düşünülebilir. Aşağıda bu özelliği kullanarak oluşturulan
bazı matematiksel ifadeler göreceksiniz. Devam etmeden önce bu ifadeleri iyice anladığınıza emin olun.


{% capture jumbotron-content %}
<h3>Çarpmanın tersi ve Bölme içeren bazı matematiksel ifadeler</h3>
$$\frac{a}{b} + \frac{c}{d} = \frac{ad+bc}{bd}$$
$$\frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd}$$
$$\frac{ac}{ad} = \frac{c}{d}$$
$$\frac{a}{\frac{b}{c}} = a\frac{c}{b}$$
$$\frac{-a}{b} = \frac{a}{-b} = -\frac{a}{b}$$
$$\frac{-a}{-b} = \frac{a}{b}$$
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}


<span class="badge badge-primary">Not: </span> Yukarıdaki ifadeleri Python&#8217;da deneyip 
sonuçlarına bakabilirsiniz.

{% highlight python linenos %}
from math import isclose

a = 5
b = 6
c = 7
d = 8

def dogru_mu_yanlis_mi(ifade):
    if ifade == True:
        print("Karsilastirilan ifade dogru")
    else:
        print("Karsilastirilan ifade yanlis")

# İşin içene bölme girdiği için biraz daha dikkatli olmamız gerekiyor.
# Kesirlerin hassasiyetinden dolayı bazı ifadeler bazen yanlış döndürebilir 
# (13.5555555555554 == 13.5555555555553 gibi sonuçlardan dolayı mesela).
# Bu sebepten dolayı isclose() fonksiyonunu kullanıyoruz burada.
# "isclose()" fonksiyonunun ilk parametresi ikinci parametresine çok yakın 
# bir değere sahipse bu fonsiyon bize doğru döndürüyor.
ifade1 = isclose(a/b + c/d, (a*d + b*c) / (b*d))
ifade2 = isclose(a/b * c/d, (a*c) / (b*d))
ifade3 = isclose((a*c) / (a*d), c/d)
ifade4 = isclose(a/(b/c), a*c/b)
ifade5 = -a/b == a/-b == -(a/b)
ifade6 = -a/-b == a/b

dogru_mu_yanlis_mi(ifade1)
dogru_mu_yanlis_mi(ifade2)
dogru_mu_yanlis_mi(ifade3)
dogru_mu_yanlis_mi(ifade4)
dogru_mu_yanlis_mi(ifade5)
dogru_mu_yanlis_mi(ifade6)
{% endhighlight %}

Evet bu derslikte bu kadar :blush: . Bir sonraki derste matematikteki "eşitsizlikler" konusu hakkında
konuşacağız...
