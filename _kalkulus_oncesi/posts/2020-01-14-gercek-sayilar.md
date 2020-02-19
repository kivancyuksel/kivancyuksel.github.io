---
id: 387
title: '0 &#8211; Gerçek (Reel) Sayılar'
date: 2020-01-14T19:58:19+00:00
author: emkademy
layout: post
guid: http://emkademy.local/?p=387
ocean_gallery_link_images:
  - 'off'
ocean_sidebar:
  - "0"
ocean_second_sidebar:
  - "0"
ocean_disable_margins:
  - enable
ocean_display_top_bar:
  - default
ocean_display_header:
  - default
ocean_center_header_left_menu:
  - "0"
ocean_custom_header_template:
  - "0"
ocean_header_custom_menu:
  - "0"
ocean_menu_typo_font_family:
  - "0"
ocean_disable_title:
  - default
ocean_disable_heading:
  - default
ocean_disable_breadcrumbs:
  - default
ocean_display_footer_widgets:
  - default
ocean_display_footer_bottom:
  - default
ocean_custom_footer_template:
  - "0"
ocean_link_format_target:
  - self
ocean_quote_format_link:
  - post
ocean_header_style:
  - medium
image: /wp-content/uploads/2020/01/pre_calculus.jpg
categories:
  - Kalkülüs Öncesi
tags:
  - kalkülüs öncesi
  - matematik
---
<blockquote class="wp-block-quote">
  <p>
    A Journey of a Thousand Miles Begins with a Single Step (Bin millik bir yolculuk tek bir adımla başlar) &#8211; Çin atasözü
  </p>
</blockquote>

En karmaşık konular bile bu konuların temellerine hakimseniz eğer size anlaması zor gelmeyecektir. Temelleri sağlam oturtmanın önemini ne kadar vurgulasam az. Öğrenmek istediğiniz herhangi bir konunun temellerini bilmeden, direk karmaşık kısımlarına balıklama atlayarak öğrenmeye çalışırsanız eğer, bu sizin için hem çok yorucu olur, hem de şevkinizi kırar. Bu sebepten dolayı, bu sitedeki bütün kurslar en temel konuların üstüne yavaş yavaş koyarak kompleks konulara geçiş yapıyor.

Bu bölümün numarasının &#8220;0&#8221; olmasının sebebi, bu bölümün kısa bir tekrar olmasıdır. Bu bölümde anlatılacak olan konuları anlamak bu kurs için çok önemli. Ancak bu posta şöyle bir göz gezdirip bu konuları zaten bildiğinizi farkederseniz, bir sonraki bölüme geçmeye çekinmeyin. Dediğim gibi bu bölüm sadece kısa bir tekrar.

**NOT:** Bazı terimlerden sonra gelen parantezlerin içinde bahsedilen terimlerin ingilizcelerini yazdım. Bunları bilmekte fayda olduğunu düşünüyorum.

## 0.1 Reel Doğru

&#8220;**Tam Sayılar (Integers)&#8221;** nelerdir?

<p class="has-text-align-center">
  , . . . , -3, -2, -1, 0, 1, 2, 3, . . . ,
</p>

Buradaki 3 nokta bu sayıların bir sonu olmadan bu şekilde devam ettiğini gösteriyor. Bu doğrudaki herhangi 2 sayıyı alıp toplarsak, çıkarırsak, çarparsak; elde edeceğimiz sayı yine bir tam sayı olacaktır. Bu cümle önemli bir noktaya parmak basıyor. Sayıları tam sayılar, rasyonel sayılar (birazdan göreceğiz) gibi gruplandırdığımız zaman bu grupdaki sayıların uyması gereken bazı kurallar var. Bu kurallardan ilki, biraz öncede bahsettiğimiz gibi, grubun içinden herhangi 2 sayıyı alıp bunları toplar, çıkarır yada çarparsak elde edeceğimiz sayının yine bu grubun bir elemanı olması gerekiyor.

Python&#8217;da tam sayılar herhangi özel bir sözdizimi gerekmeden tanımlanabilir:

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">tam_sayi1 = 3
tam_sayi2 = 123
toplam = tam_sayi1 + tam_sayi2
# toplam = 126</pre>

Eee peki 2 tane sayıyı bölmek istediğimizde ne olacak? Tam sayılar grubundaki sayılardan herhangi 2 tane seçersek, ve bu sayılardan birini diğerini bölersek; sonuç her zaman tam sayı olmayacaktır. 

**Örneğin**<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-c01df162e6575e153368704d6cacce18_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#102;&#114;&#97;&#99;&#123;&#51;&#125;&#123;&#53;&#125;" title="Rendered by QuickLaTeX.com" height="29" width="9" style="vertical-align: -8px;" /> işleminin sonucu, bölende bölünende tam sayı olmasına rağmen tam sayı değildir.

Bu sebepten dolayı &#8220;Rasyonel Sayılar (Rational Numbers)&#8221; denilen yeni bir gruba ihtiyaç duyuldu. Bu sayılar kesirli bir forma sahip olabilirler:

<p class="has-text-align-center">
  <img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-92cf9e9def45644c23c7d27b5d681b61_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#102;&#114;&#97;&#99;&#123;&#109;&#125;&#123;&#110;&#125;" title="Rendered by QuickLaTeX.com" height="25" width="16" style="vertical-align: -8px;" />
</p>

Bu gösterim biçimi matematikte oldukça yaygın bir biçimde kullanılır. Bu ve buna benzer ifadelerde, gerçek sayıların yerine genellikle alfabeden bir harf atanır. Bunun anlamı bu ifadelerde bu harflerin yerlerine, belirtilen şartlarda, herhangi bir sayının gelebileceğini göstermektir. Mesela bu örnekte &#8220;m&#8221; yada &#8220;n&#8221; yerine herhangi bir tam sayı gelebilir (10, 30, 123, 5, 3, &#8230; ). Bu Python&#8217;da tanımlanan değişkenlere benzer:

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">m = 3
n = 5</pre>

Burada 3 ve 5 sayısı sırasıyla &#8220;m&#8221; ve &#8220;n&#8221; değişkenine atanmış. Bundan sonra bu değişkenleri kullanarak istediğimiz işlemi gerçekleştirebileceğimiz gibi, bu değişkenlerin içlerinde değerleride istersek değiştirebiliriz:

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">rasyonel_sayi = m / n

m = 20
n = 30</pre>

Yanlız burada bir tane daha şartımız var:<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-db91b2e312d0104ac0c6e67f9f46471f_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#110;&#32;&#92;&#110;&#101;&#113;&#32;&#48;" title="Rendered by QuickLaTeX.com" height="22" width="56" style="vertical-align: -5px;" /> . Bölme işlemi çarpma işleminin tersi olduğu için, aşağıdaki eşitliğin sağlanması beklenir:

<p class="has-text-align-center">
  <img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-2ed4e5f9219a3a5a2ba96664c4fd2d3b_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#102;&#114;&#97;&#99;&#123;&#109;&#125;&#123;&#110;&#125;&#32;&#92;&#99;&#100;&#111;&#116;&#32;&#110;&#32;&#61;&#32;&#109;" title="Rendered by QuickLaTeX.com" height="25" width="100" style="vertical-align: -8px;" />
</p>

Bu ifade birçok sayı için doğrudur. Ancak örnek olarak _n_ &#8216; i &#8220;0&#8221; alırsak eğer ne olacağına bir bakalım. _m_ yerine ise herhangi bir sayıyı seçebiliriz:

<p class="has-text-align-center">
  <img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-5dd8799a498fd95a42a2f941c00a61c5_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#102;&#114;&#97;&#99;&#123;&#49;&#125;&#123;&#48;&#125;&#32;&#92;&#99;&#100;&#111;&#116;&#32;&#48;&#32;&#61;&#32;&#49;" title="Rendered by QuickLaTeX.com" height="29" width="80" style="vertical-align: -8px;" />
</p>

Bu ifade görüldüğü gibi _n_ = 0 olduğu zaman anlamsız bir ifadeye dönüşüyor. Çünkü bir sayının 0 ile çarpımının her zaman 0 vermesi gerekir. Bu sebepten dolayı 0 ile bölüm matematikte tanımsız olarak bırakılmıştır. Diğer bir değişle 0 ile bölmek yasak! 🙂

Tam sayıları topladığımız, çıkardığımız yada çarptığımız zaman yine bir tam sayı elde ediyorduk. Rasyonel sayılarda ise bunu _bölme_ ile de genişletebiliriz. Yani herhangi 2 tane Rasyonel sayı alıp, bu sayıları çarpar, toplar, çıkarır yada bölerseniz ( 0 ile bölüm dışında ) sonuç yine bir Rasyonel sayı olacaktır.

Rasyonel sayılar fiziksel hesaplarda kullanılabilir. Ancak geometri, cebir ve kalkülüs için bunlar yeterli olmayabilir. Rasyonel sayıların yetmediği yerde **&#8220;Gerçek (Reel) sayılar&#8221;** kullanılabilir. Rasyonel sayıların hangi durumlarda yetmeyebileceğine bir bakalım isterseniz.

## Reel Doğru oluşturuluşu {#reel_dogru}

Herhangi bir sınırı olmayan yatay bir doğru düşünün. Bu doğrunun üzerinde herhangi bir noktaya 0 değerini verin. Doğrunun üzerinde 0 yazdığınız yerin sağında herhangi bir nokta daha seçip bu noktaya da 1 değerini verin. Şu anda bu doğru üzerindeki 1 birimin ne kadar olduğuna karar vermiş oldunuz.<figure class="wp-block-image size-large">

<img src="http://emkademy.local/wp-content/uploads/2020/01/doğrunun_üzerinde_2_nokta.png" alt="" class="wp-image-421" srcset="http://emkademy.local/wp-content/uploads/2020/01/doğrunun_üzerinde_2_nokta.png 562w, http://emkademy.local/wp-content/uploads/2020/01/doğrunun_üzerinde_2_nokta-300x38.png 300w" sizes="(max-width: 562px) 100vw, 562px" /> </figure> 

Bu 2 noktayı seçtikten sonra, bundan sonra bu doğrunun üzerine koyacağınız her bir sayıyı bu 2 nokta arasındaki mesafeyi 1 birim olacak şekilde referans alarak yerleştirebilirsiniz. Mesela 2 sayısı 1 sayısının sağında olacak şekilde 1 birim daha giderek yerleştirilebilir. Negatif sayılar ise 0 ın soluna doğru giderek yerleştirilebilir. Mesela -1 sayısı 0 ın soluna, 1 birim gidilerek yerleştirilebilir. Aynı şekilde<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-3a522b6bdd3d68832df8af1bf213a4a8_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#102;&#114;&#97;&#99;&#123;&#49;&#125;&#123;&#110;&#125;" title="Rendered by QuickLaTeX.com" height="29" width="11" style="vertical-align: -8px;" /> rasyonel sayısı, 0 ile 1 in arasını _n_ eşit birime bölerek 0 ın sağına yerleştirilebilir. Bu şekilde devam ederek<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-07db6e4690edb7b143dae312671f22e3_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#102;&#114;&#97;&#99;&#123;&#50;&#125;&#123;&#110;&#125;" title="Rendered by QuickLaTeX.com" height="29" width="11" style="vertical-align: -8px;" /> sayısını<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-3a522b6bdd3d68832df8af1bf213a4a8_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#102;&#114;&#97;&#99;&#123;&#49;&#125;&#123;&#110;&#125;" title="Rendered by QuickLaTeX.com" height="29" width="11" style="vertical-align: -8px;" /> sayısının sağına aynı miktarda gidilerek yerleştirilebilir:<figure class="wp-block-image size-large">

<img src="http://emkademy.local/wp-content/uploads/2020/01/doğrunun_üzerinde_n_nokta.png" alt="" class="wp-image-422" srcset="http://emkademy.local/wp-content/uploads/2020/01/doğrunun_üzerinde_n_nokta.png 562w, http://emkademy.local/wp-content/uploads/2020/01/doğrunun_üzerinde_n_nokta-300x39.png 300w" sizes="(max-width: 562px) 100vw, 562px" /> </figure> 

Eğer bu doğrunun üzerinde hiç boşluk yoksa, yani akla gelebilecek bütün sayılar bu doğrunun üzerine yazıldığı zaman bu doğru kesintisiz bir doğru oluşturuyorsa eğer bu doğruya &#8220;Reel Doğru&#8221; diyebiliriz. Peki bu gerçektende böyle mi acaba? Sadece rasyonel sayılar kullanılarak bu bir reel doğru hiç boşluk kalmayacak şekilde doldurulabilir mi?

## Her Reel sayı aynı zamanda Rasyonel sayı mıdır?

Eğer başka yapacak işimiz olmadan en küçüğünden en büyüğüne bütün rasyonel sayıları bu doğrunun üzerine yazacak olsaydık, bu, kesintisiz bir doğru oluştururmuydu? Yani bütün reel sayılar aynı zamanda rasyonel bir sayımıdır?

Bu soruyu incelemek için gelin geometri dersinde öğretilen hipotenüs teoremine bir göz atalim. Bu teoreme göre; bir dik üçgenin dik açıyı oluşturan kenarlarının uzunluklarının karelerinin toplamı, dik açının karşısındaki kenarın uzunluğunun karesine eşittir. Yani;

<div class="wp-block-image">
  <figure class="aligncenter size-large"><img src="http://emkademy.local/wp-content/uploads/2020/01/pisagor_teoremi-1.png" alt="" class="wp-image-427" /></figure>
</div>

Bu teoremi temel alarak aşağıdaki üçgenin dik açısının karşısındaki kenarın uzunluğunu hesaplayalım;

<div class="wp-block-image">
  <figure class="aligncenter size-large"><img src="http://emkademy.local/wp-content/uploads/2020/01/pisagor_teoremi_ornek.png" alt="" class="wp-image-428" /></figure>
</div>

Eee tamam işte nolduki yani? 🙂 Diye soruyorsanız eğer daha önce bahsettiğimiz kuralı hatırlayalım: Rasyonel sayıların üzerine uygulanan 4 işlemin (toplama, çıkarma, çarpma, bölme) yine bir rasyonel sayı vermesi gerekiyordu. Bu demek oluyorki, bu kurala göre ve yukarıdaki örneğe göre, karesi (yani kendisiyle çarpımı) 2 olan bir rasyonel sayı olması gerekiyor. Biraz zaman ayırıp bu rasyonel sayıyı bulmaya çalışın isterseniz. 

Sizi bu dertten kurtarayım: Böyle bir rasyonel sayı yok&#8230;

Karesi 2 ye yakın olan bir raksyonel sayı var, mesela<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-7a7e36a1379b12fbb767dd4d2b8a9936_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#102;&#114;&#97;&#99;&#123;&#57;&#51;&#54;&#57;&#51;&#49;&#57;&#125;&#123;&#54;&#54;&#50;&#53;&#49;&#48;&#57;&#125;&#61;&#49;&#46;&#57;&#57;&#57;&#57;&#57;&#57;&#57;&#57;&#57;&#57;&#57;&#57;&#50;" title="Rendered by QuickLaTeX.com" height="30" width="265" style="vertical-align: -9px;" /> , ancak karesi tam olarak 2 olan bir rasyonel sayı yok. Belki biraz daha derine inersek karesi tam olarak 2 olan bir rasyonel sayı bulabiliriz diye düşünebilirsiniz. Ancak karesi 2 olan herhangi bir rasyonel sayı olmadığı kanıtlanmıştır. Bunun kanıtını burada vermeyeceğim, ancak merak edenler internetten bakabilirler. Bu sebepten dolayı, <figure class="wp-block-pullquote" style="border-color:#fcb900">

> Her rasyonel sayı bir reel sayı değildir.</figure> 

Rasyonel olmayan bir reel sayıya &#8220;İrrasyonel Sayı&#8221; denir. Rasyonel olmayan bir reel sayı bulduk (<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-de139b6fd9336e44c0cd5540d27b6f3d_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#115;&#113;&#114;&#116;&#123;&#50;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="30" style="vertical-align: -4px;" />), aynı zamanda ilerki derslerde de karşılaşacağımız<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-5a546145dc34cd8addf616aabbb9719e_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#112;&#105;" title="Rendered by QuickLaTeX.com" height="10" width="14" style="vertical-align: 0px;" /> ve<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-7c995ca1cb11d1f8d04d66e7c17f3c3a_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#101;" title="Rendered by QuickLaTeX.com" height="10" width="9" style="vertical-align: 0px;" /> sayılarıda irrasyonel sayılara birer örnektir.

### Örnek:

<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-e2f4d97df1dab9e63e5d261b62b38821_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#55;&#43;&#92;&#115;&#113;&#114;&#116;&#123;&#50;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="70" style="vertical-align: -4px;" /> sayısının irrasyonel bir sayı olduğunu gösteriniz.

### Çözüm:

Eğer<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-e2f4d97df1dab9e63e5d261b62b38821_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#55;&#43;&#92;&#115;&#113;&#114;&#116;&#123;&#50;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="70" style="vertical-align: -4px;" /> sayısı bir rasyonel sayı ise, bu sayı ile başka bir rasyonel sayıyı kullanarak başka bir rasyonel sayı elde edebiliriz demektir,

<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-de139b6fd9336e44c0cd5540d27b6f3d_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#115;&#113;&#114;&#116;&#123;&#50;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="30" style="vertical-align: -4px;" /> =<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-88ee7064175daf37648293de5ad8d6b7_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#40;&#55;&#43;&#92;&#115;&#113;&#114;&#116;&#123;&#50;&#125;&#41;" title="Rendered by QuickLaTeX.com" height="26" width="85" style="vertical-align: -6px;" /> &#8211; 7

<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-e2f4d97df1dab9e63e5d261b62b38821_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#55;&#43;&#92;&#115;&#113;&#114;&#116;&#123;&#50;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="70" style="vertical-align: -4px;" /> ifadesinin rasyonel bir sayı olduğunu varsaydık ve başka bir rasyonel sayı kullanarak (7) bu sayıyı dört işlemden biri olan çıkarma işlemine tabi tuttuk. Ancak sonuç olarak bir irrasyone sayı elde ettik (<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-de139b6fd9336e44c0cd5540d27b6f3d_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#115;&#113;&#114;&#116;&#123;&#50;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="30" style="vertical-align: -4px;" /> sayısının irrasyonel olduğunu biliyoruz). Bu mümküm olmadığı için<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-e2f4d97df1dab9e63e5d261b62b38821_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#55;&#43;&#92;&#115;&#113;&#114;&#116;&#123;&#50;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="70" style="vertical-align: -4px;" /> sayısının rasyonel bir sayı olmadığını kanıtlamış olduk.

Evet, ilk dersimiz bitti. Umarım çok sıkılmamışsınızdır 🙂
