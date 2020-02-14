---
id: 478
title: 0.3 Eşitsizlikler
date: 2020-02-01T15:01:03+00:00
author: emkademy
layout: post
guid: http://emkademy.local/?p=478
permalink: /kalkulus_oncesi/esitsizlikler/
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
  - python
---
## Pozitif ve Negatif Sayılar

İlk derste çizdiğimiz reel doğruyu hatırlıyor musunuz (<a rel="noreferrer noopener" aria-label="buradan bakabilirsiniz (opens in a new tab)" href="http://emkademy.local/kalkulus_oncesi/gercek-sayilar#reel_dogru" target="_blank">buradan bakabilirsiniz</a>)? Eğer bir sayı bu doğruda &#8220;0&#8221;&#8216;ın sağına yazılıyorsa eğer bu sayı pozitif, sağına yazılıyorsa eğer bu sayı negatiftir. Bütün sayılar bu doğrunun üzerinde bulunduğu için, bütün sayılar ya pozitif ya negatif ya da 0&#8217;dır.

Aşağıda pozitif ve negatif sayıların bazı cebirsel özelliklerini görebilirsiniz. Eğer bu sayfadaki postları Python kullanarak takip ediyorsanız, aşağıdaki maddeleri test etmek için Python&#8217;da tanımlanan &#8220;m&#8221; ve &#8220;n&#8221; değişkenlerine istediğiniz değerleri atayabilirsiniz.

  * İki pozitif sayının toplamı yine bir pozitif sayıdır

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">m = 3
n = 2
print("Toplam pozitif" if m + n > 0 else "Toplam negatif")</pre>

  * İki negatif sayının toplamı yine bir negatif sayıdır.

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">m = -3
n = -2
print("Toplam pozitif" if m + n > 0 else "Toplam negatif")</pre>

  * Pozitif bir sayının toplamaya göre tersi negatif bir sayıdır.

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">m = 3
n = -m
print("n positif" if n > 0 else "n negatif")</pre>

  * Negatif bir sayının toplamaya göre tersi pozitif bir sayıdır.

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">m = -3
n = -m
print("n positif" if n > 0 else "n negatif")</pre>

  * İki pozitif sayının çarpımı yine bir pozitif sayıdır

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">m = 56
n = 12
print("Carpim pozitif" if m * n > 0 else "Carpim negatif")</pre>

  * İki negatif sayının çarpımı pozitiftir.

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">m = -156
n = -132
print("Carpim pozitif" if m * n > 0 else "Carpim negatif")</pre>

  * Bir pozitif bir negatif sayının çarpımı negatiftir.

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">m = 13
n = -26
print("Carpim pozitif" if m * n > 0 else "Carpim negatif")</pre>

  * Pozitif bir sayının çarpmaya göre tersi yine bir pozitif sayıdır

<pre class="EnlighterJSRAW" data-enlighter-language="generic" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">m = 3
n = 1/m
print("n positif" if n > 0 else "n negatif")</pre>

  * Negatif bir sayının çarpmaya göre tersi yine bir negatif sayıdır

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">m = 3
n = 1/m
print("n positif" if n > 0 else "n negatif")</pre>

## Küçüktür ve Büyüktür ifadeleri

<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-96b10cee1ae5e05c6877e776c0292bb3_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;" title="Rendered by QuickLaTeX.com" height="10" width="12" style="vertical-align: 0px;" /> sayısı<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6a7aeb96d3f662e3a7a33caadb745be8_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;" title="Rendered by QuickLaTeX.com" height="16" width="9" style="vertical-align: 0px;" /> sayısından küçüktür (<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-bab0a348a4756a3bfc9b6bced2747a7d_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#32;&#60;&#32;&#98;" title="Rendered by QuickLaTeX.com" height="17" width="53" style="vertical-align: -1px;" /> şeklinde yazılır) diyebilmemiz için, reel doğru üzerinde<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-96b10cee1ae5e05c6877e776c0292bb3_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;" title="Rendered by QuickLaTeX.com" height="10" width="12" style="vertical-align: 0px;" /> sayısının<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6a7aeb96d3f662e3a7a33caadb745be8_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;" title="Rendered by QuickLaTeX.com" height="16" width="9" style="vertical-align: 0px;" /> sayısının soluna yazılıyor olması gerekir. Aynı şekilde, eğer<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-96b10cee1ae5e05c6877e776c0292bb3_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;" title="Rendered by QuickLaTeX.com" height="10" width="12" style="vertical-align: 0px;" /> sayısı<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6a7aeb96d3f662e3a7a33caadb745be8_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;" title="Rendered by QuickLaTeX.com" height="16" width="9" style="vertical-align: 0px;" /> sayısından küçükse, o zaman<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-88f6439a77be99705414150d29c0b052_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;&#45;&#97;" title="Rendered by QuickLaTeX.com" height="16" width="49" style="vertical-align: 0px;" /> &#8216;nın pozitif olması gerekmektedir. Aynı şekide,<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6a7aeb96d3f662e3a7a33caadb745be8_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;" title="Rendered by QuickLaTeX.com" height="16" width="9" style="vertical-align: 0px;" /> sayısı pozitiftir diyebilmemiz için<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6a7aeb96d3f662e3a7a33caadb745be8_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;" title="Rendered by QuickLaTeX.com" height="16" width="9" style="vertical-align: 0px;" /> sayısının 0&#8217;dan büyük olması (<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-7cf19b69814848a364e11bd8c07c8d59_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#48;&#60;&#98;" title="Rendered by QuickLaTeX.com" height="17" width="53" style="vertical-align: -1px;" />) gerekmektedir. 

Dur şimdi bir dakika, ne?<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-b997a631c0937828f1191f135095ab61_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#44;&#32;&#98;" title="Rendered by QuickLaTeX.com" height="20" width="33" style="vertical-align: -4px;" /> aklım allak bullak oldu diyorsanız eğer, direk örnek verin derim. Anlamadığınız matematiksel bir ifadeyle her karşılaştığınızda bu ifadedeki terimlerin yerlerine gerçek sayılar koyarak kendi kendinize örnek yaparsanız eğer bu ifadeyi daha rahat anlayabilirsiniz.

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">a = 3
b = 5
print("a b'den küçük" if a &lt; b else "b a'dan küçük")</pre>

Mesela yukarıdaki ifadeyi anlamak için<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-66819edfe8af4246a3c503c486e9d348_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#61;&#51;" title="Rendered by QuickLaTeX.com" height="15" width="54" style="vertical-align: 0px;" /> olsun. Herhangi bir<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6a7aeb96d3f662e3a7a33caadb745be8_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;" title="Rendered by QuickLaTeX.com" height="16" width="9" style="vertical-align: 0px;" /> sayısının<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-96b10cee1ae5e05c6877e776c0292bb3_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;" title="Rendered by QuickLaTeX.com" height="10" width="12" style="vertical-align: 0px;" /> &#8216;dan büyük olması için, reel doğrudan<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-96b10cee1ae5e05c6877e776c0292bb3_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;" title="Rendered by QuickLaTeX.com" height="10" width="12" style="vertical-align: 0px;" /> &#8216;nın sağında bir değer seçmemiz gerekiyor. O zaman<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-b1a57cca8e19da803abddc3d5fff7b86_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;&#61;&#53;" title="Rendered by QuickLaTeX.com" height="16" width="51" style="vertical-align: 0px;" /> diyebiliriz mesela. Burdan yola çıkarsak<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-8d7658cd86253d0b81a349ccd6ab174b_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;&#45;&#97;&#32;&#61;&#32;&#53;&#45;&#51;&#32;&#61;&#32;&#50;" title="Rendered by QuickLaTeX.com" height="16" width="174" style="vertical-align: 0px;" /> &#8216;nin pozitif olduğunu görürüz.

Bir sayının diğer bir sayıdan küçük veya eşit olduğunu göstermek için<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-0646d52df605583e7d2cc62197e6f6ad_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#108;&#101;&#113;" title="Rendered by QuickLaTeX.com" height="18" width="16" style="vertical-align: -3px;" /> , büyük veya eşit olduğunu göstermek için<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-f6a74581cd44d92bfb400e184229a6f1_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#103;&#101;&#113;" title="Rendered by QuickLaTeX.com" height="18" width="16" style="vertical-align: -3px;" /> sembollerini kullanıyoruz.<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-c9091d99dc55642c7abc86182e0a7a62_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#32;&#92;&#108;&#101;&#113;&#32;&#98;" title="Rendered by QuickLaTeX.com" height="19" width="53" style="vertical-align: -3px;" /> demektirki: a sayısı b sayısından ya daha küçük bir sayıdır yada b sayısına tamamen eşittir. Aynı şekilde<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6dc3bdeaaf31ed4223a2897eec8b1fa3_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#32;&#92;&#103;&#101;&#113;&#32;&#98;" title="Rendered by QuickLaTeX.com" height="19" width="53" style="vertical-align: -3px;" /> demektirki: a sayısı b sayısından ya daha büyüktür yada b sayısına tamamen eşittir.

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">a = 4
b = 4
c = 3
d = 5

print(a &lt; b)
print(a > b)
print(a &lt;= b)
print(a >= b)
print(c &lt; a)

# Bu şekilde başka varyasyonlarla da oynayabilirsiniz</pre><figure class="wp-block-pullquote" style="border-color:#fcb900">

><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-0ebb7a63f571addc2dd32487b7cbb154_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#69;ğ&#101;&#114;&#125;&#32;&#92;&#32;&#92;&#32;&#97;&#60;&#98;&#32;&#92;&#32;&#92;&#32;&#118;&#101;&#32;&#92;&#32;&#92;&#32;&#98;&#60;&#99;&#32;&#32;&#92;&#32;&#92;&#32;&#105;&#115;&#101;&#44;&#32;&#92;&#32;&#92;&#32;&#111;&#32;&#92;&#32;&#92;&#32;&#122;&#97;&#109;&#97;&#110;&#32;&#92;&#32;&#92;&#32;&#32;&#97;&#60;&#99;&#32;&#92;&#32;&#92;&#32;&#100;&#105;&#114;&#46;" title="Rendered by QuickLaTeX.com" height="20" width="506" style="vertical-align: -4px;" /> 
> 
> <cite>Geçişlilik</cite></figure> 

<div style="height:50px" aria-hidden="true" class="wp-block-spacer">
</div>

Bu ifadenin neden doğru olduğunu görmek için reel doğruya bir daha bakalım.

<div class="wp-block-image">
  <figure class="aligncenter size-large is-resized"><img src="http://emkademy.local/wp-content/uploads/2020/01/a_b_c_dogrusu.png" alt="" class="wp-image-489" width="580" height="35" srcset="http://emkademy.local/wp-content/uploads/2020/01/a_b_c_dogrusu.png 682w, http://emkademy.local/wp-content/uploads/2020/01/a_b_c_dogrusu-300x18.png 300w" sizes="(max-width: 580px) 100vw, 580px" /><figcaption>Geçişlilik: <img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-5f405ee6551f45f4d7a05f1dc6568da2_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#60;&#98;" title="Rendered by QuickLaTeX.com" height="17" width="53" style="vertical-align: -1px;" /> ve <img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-5101f45d3258935f7b63a90b3321e9ee_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;&#60;&#99;" title="Rendered by QuickLaTeX.com" height="17" width="50" style="vertical-align: -1px;" /> ise <img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-d4c65e321b3db92fef63a991f1ecff67_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#60;&#99;" title="Rendered by QuickLaTeX.com" height="14" width="53" style="vertical-align: -1px;" /> dir.</figcaption></figure>
</div>

<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-96b10cee1ae5e05c6877e776c0292bb3_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;" title="Rendered by QuickLaTeX.com" height="10" width="12" style="vertical-align: 0px;" /> &#8216;nın<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6a7aeb96d3f662e3a7a33caadb745be8_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;" title="Rendered by QuickLaTeX.com" height="16" width="9" style="vertical-align: 0px;" /> &#8216;den küçük olabilmesi için<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6a7aeb96d3f662e3a7a33caadb745be8_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;" title="Rendered by QuickLaTeX.com" height="16" width="9" style="vertical-align: 0px;" /> &#8216;nin sol tarafına yazılmış olması gerekmektedir. Aynı şey<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6a7aeb96d3f662e3a7a33caadb745be8_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;" title="Rendered by QuickLaTeX.com" height="16" width="9" style="vertical-align: 0px;" /> ve<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-2c407ad5f24dd046cf6f5d67ede6dd5a_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#99;" title="Rendered by QuickLaTeX.com" height="10" width="10" style="vertical-align: 0px;" /> için de geçerlidir.<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-5f405ee6551f45f4d7a05f1dc6568da2_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#60;&#98;" title="Rendered by QuickLaTeX.com" height="17" width="53" style="vertical-align: -1px;" /> ve<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-5101f45d3258935f7b63a90b3321e9ee_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;&#60;&#99;" title="Rendered by QuickLaTeX.com" height="17" width="50" style="vertical-align: -1px;" /> ifadeleri genellikle birleştirilip beraber tek bir ifadede yazılırlar:<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-642f5446cc65766fb23c5b2af21598dd_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#60;&#98;&#60;&#99;" title="Rendered by QuickLaTeX.com" height="17" width="94" style="vertical-align: -1px;" /> <figure class="wp-block-pullquote" style="border-color:#fcb900">

><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-cef3f439164179620252ac0ef85b4b95_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#32;&#92;&#32;&#97;&#60;&#98;&#32;&#92;&#32;&#92;&#32;&#118;&#101;&#32;&#92;&#32;&#92;&#32;&#99;&#60;&#100;&#32;&#92;&#32;&#92;&#32;&#105;&#115;&#101;&#44;&#32;&#92;&#32;&#92;&#32;&#111;&#32;&#92;&#32;&#92;&#32;&#122;&#97;&#109;&#97;&#110;&#32;&#92;&#32;&#92;&#32;&#97;&#43;&#99;&#60;&#98;&#43;&#100;&#32;&#92;&#32;&#92;&#32;&#100;&#105;&#114;&#46;" title="Rendered by QuickLaTeX.com" height="20" width="525" style="vertical-align: -4px;" /> 
> 
> <cite>Eşitsizliklerde Toplama</cite></figure> 

<div style="height:50px" aria-hidden="true" class="wp-block-spacer">
</div>

Bunun neden doğru olduğunu göstermek için daha önceden öğrendiğimiz bilgilere göz atabiliriz. Eğer<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-5f405ee6551f45f4d7a05f1dc6568da2_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#60;&#98;" title="Rendered by QuickLaTeX.com" height="17" width="53" style="vertical-align: -1px;" /> ve<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6c52e53e115eede16fa4b6605cba74af_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#99;&#60;&#100;" title="Rendered by QuickLaTeX.com" height="17" width="53" style="vertical-align: -1px;" /> ise, o zaman<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-88f6439a77be99705414150d29c0b052_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;&#45;&#97;" title="Rendered by QuickLaTeX.com" height="16" width="49" style="vertical-align: 0px;" /> ve<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-ee3e65860aea3d6b43538a6b650c8419_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#100;&#45;&#99;" title="Rendered by QuickLaTeX.com" height="16" width="50" style="vertical-align: 0px;" /> sayılarının pozitif olması gerekiyor. İki tane pozitif sayının toplamı yine bir pozitif sayı verdiği için<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-459cb373fd82da220dde0caa26798772_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#40;&#98;&#45;&#97;&#41;&#32;&#43;&#32;&#40;&#100;&#45;&#99;&#41;" title="Rendered by QuickLaTeX.com" height="23" width="161" style="vertical-align: -6px;" /> &#8216;nin de pozitif olması gerekiyor. Bu ifadeyi yeniden düzenleyerek<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-d0f2a780e7a6047eea014693c32820ec_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#40;&#98;&#43;&#100;&#41;&#32;&#45;&#32;&#40;&#97;&#43;&#99;&#41;" title="Rendered by QuickLaTeX.com" height="23" width="161" style="vertical-align: -6px;" /> şeklindede yazabiliriz. Aynı şekilde bu ifadeninde pozitif olması gerekiyor. Son olarak elde ettiğimiz ifade demek oluyorki:<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-b2d7097572d14d51eb8246b50d254d0b_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#43;&#99;&#32;&#60;&#32;&#98;&#43;&#100;" title="Rendered by QuickLaTeX.com" height="18" width="132" style="vertical-align: -2px;" /> <figure class="wp-block-pullquote" style="border-color:#fcb900">

><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-b1ad3b6eb0a4d8708c2b48df0338dec0_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#69;ğ&#101;&#114;&#125;&#32;&#92;&#32;&#92;&#32;&#97;&#60;&#98;&#32;&#92;&#32;&#92;&#32;&#105;&#115;&#101;&#44;&#32;&#92;&#32;&#92;&#32;&#111;&#32;&#92;&#32;&#92;&#32;&#122;&#97;&#109;&#97;&#110;&#59;" title="Rendered by QuickLaTeX.com" height="20" width="287" style="vertical-align: -4px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-796df331baea9c45830291f872006249_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#99;&#62;&#48;&#32;&#92;&#32;&#92;&#32;&#105;&#115;&#101;&#32;&#92;&#32;&#92;&#32;&#97;&#99;&#60;&#98;&#99;" title="Rendered by QuickLaTeX.com" height="17" width="186" style="vertical-align: -1px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-032e6768fe253e572923dc9aa0b05920_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#99;&#60;&#48;&#32;&#92;&#32;&#92;&#32;&#105;&#115;&#101;&#32;&#92;&#32;&#92;&#32;&#97;&#99;&#62;&#98;&#99;" title="Rendered by QuickLaTeX.com" height="17" width="186" style="vertical-align: -1px;" /> 
> 
> <cite>eşitsizliklerde çarpma</cite></figure> 

<div style="height:50px" aria-hidden="true" class="wp-block-spacer">
</div>

Bunun neden doğru olduğunu aynı bir önceki örnekte yaptığımız gibi adım adım giderek gösterebiliriz. Ancak bu sefer (ve bundan sonra gösterilecek örneklerde) bu adımları yapmayı size bırakıyorum (aynı şekilde a, b ve c değişkenlerine örnek sayılar vererekte bunu yapabilirsiniz.<figure class="wp-block-pullquote" style="border-color:#fcb900">

><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-53306e0c9efb04fa380ab8631585e1d5_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#69;ğ&#101;&#114;&#125;&#32;&#92;&#32;&#92;&#32;&#97;&#60;&#98;&#32;&#92;&#32;&#92;&#32;&#105;&#115;&#101;&#44;&#32;&#92;&#32;&#92;&#32;&#111;&#32;&#92;&#32;&#92;&#32;&#122;&#97;&#109;&#97;&#110;&#32;&#92;&#32;&#92;&#32;&#45;&#97;&#62;&#45;&#98;" title="Rendered by QuickLaTeX.com" height="20" width="398" style="vertical-align: -4px;" /> 
> 
> <cite>Eşitsizliklerin toplamaya göre tersi</cite></figure> 

<div style="height:50px" aria-hidden="true" class="wp-block-spacer">
</div>

Üstteki açıklamada<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-96b10cee1ae5e05c6877e776c0292bb3_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;" title="Rendered by QuickLaTeX.com" height="10" width="12" style="vertical-align: 0px;" /> ve<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6a7aeb96d3f662e3a7a33caadb745be8_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;" title="Rendered by QuickLaTeX.com" height="16" width="9" style="vertical-align: 0px;" /> sayılarının<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6b5bb72324dc71b7b87cf39f61d3ec5d_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#45;&#49;" title="Rendered by QuickLaTeX.com" height="17" width="27" style="vertical-align: -1px;" /> ile çarpıldığını düşürseniz eğer, aslında bu açıklamanın bir önceki açıklamayla benzer olduğunu görebilirsiniz.<figure class="wp-block-pullquote" style="border-color:#fcb900">

><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-b1ad3b6eb0a4d8708c2b48df0338dec0_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#69;ğ&#101;&#114;&#125;&#32;&#92;&#32;&#92;&#32;&#97;&#60;&#98;&#32;&#92;&#32;&#92;&#32;&#105;&#115;&#101;&#44;&#32;&#92;&#32;&#92;&#32;&#111;&#32;&#92;&#32;&#92;&#32;&#122;&#97;&#109;&#97;&#110;&#59;" title="Rendered by QuickLaTeX.com" height="20" width="287" style="vertical-align: -4px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-369340f0bf8784b37c3c0e9752e479f4_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#69;ğ&#101;&#114;&#125;&#32;&#92;&#32;&#92;&#32;&#97;&#32;&#92;&#32;&#92;&#32;&#105;&#108;&#101;&#32;&#92;&#32;&#92;&#32;&#98;&#32;&#92;&#32;&#92;&#32;&#32;&#39;&#110;&#105;&#110;&#32;&#92;&#32;&#92;&#32;&#105;&#107;&#105;&#115;&#105;&#100;&#101;&#32;&#92;&#32;&#92;&#32;&#112;&#111;&#122;&#105;&#116;&#105;&#102;&#32;&#92;&#32;&#92;&#32;&#121;&#97;&#100;&#97;&#32;&#92;&#32;&#92;&#32;&#32;&#105;&#107;&#105;&#115;&#105;&#100;&#101;&#32;&#92;&#32;&#92;&#32;&#110;&#101;&#103;&#97;&#116;&#105;&#102;&#115;&#101;&#32;&#92;&#32;&#92;&#32;&#92;&#102;&#114;&#97;&#99;&#123;&#49;&#125;&#123;&#97;&#125;&#62;&#92;&#102;&#114;&#97;&#99;&#123;&#49;&#125;&#123;&#98;&#125;" title="Rendered by QuickLaTeX.com" height="29" width="711" style="vertical-align: -8px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-0de4263c92d91fe39c88f0e62ecd2a4c_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#69;ğ&#101;&#114;&#125;&#32;&#92;&#32;&#92;&#32;&#97;&#60;&#48;&#60;&#98;&#32;&#92;&#32;&#92;&#32;&#105;&#115;&#101;&#32;&#92;&#32;&#92;&#32;&#32;&#92;&#102;&#114;&#97;&#99;&#123;&#49;&#125;&#123;&#97;&#125;&#60;&#92;&#102;&#114;&#97;&#99;&#123;&#49;&#125;&#123;&#98;&#125;" title="Rendered by QuickLaTeX.com" height="29" width="275" style="vertical-align: -8px;" /> 
> 
> <cite>eşitsizliklerin çarpmaya göre tersi</cite></figure> 

<div style="height:50px" aria-hidden="true" class="wp-block-spacer">
</div>

Eğer bu ifadelerden herhangi biri aklınıza yatmadıysa, lütfen biraz zaman ayırarak bu ifadelerdeki değiştenlere örnek olarak rasgele sayılar vererek bu ifadelerin doğruluğunu test edin.

## Aralık

Şimdi basit gibi görünen, ancak tanımının iyi bir şekilde anlaşılmasının oldukça önemli olduğu bir konuya geldik: Aralık. Aralığın tanımını vermeden önce &#8220;Küme&#8221; nedir onu bi öğrenelim.<figure class="wp-block-pullquote" style="border-color:#fcb900">

> Nesneler topluluğuna ve yığınına küme denir
> 
> <cite>küme</cite></figure> 

<div style="height:50px" aria-hidden="true" class="wp-block-spacer">
</div>

Kümelere negatif sayılar topluluğu, pozitif tek sayılar, negatif çift sayılar gibi örnekler verilebilir. Konumuz matematik olduğu için kümenin tanımındaki &#8220;nesne&#8221; ifadesindeki belirsizliği kaldırıp, bunun yerine reel sayıları koyabiliriz. Vikipedi tanımına göre: **Nesne**, belirli bir kütlesi ve hacmi olan her türlü cansız varlıktır. Bu tanıma göre araba, bilgisayar, kalem de nesnelere birer örnektir. Ancak şu anda bu nesneler bizim ilgimizi çekmiyor. Belirli bir kütlesi ve hacmi olmamasına rağmen biz bu tanımdaki nesne ifadesinin reel sayıları ifade ettiğini varsayacağız.

Eğer bir küme sınırlı sayıda nesneler içeriyorsa, bu küme içinde barındırdığı nesleler süslü parantez içine yazılarak gösterilebilir. Mesela, elimizde 3, 4 ve 9 sayılarından oluşan bir küme varsa, bu kümeyi aşağıdaki gibi gösterebiliriz:

<p class="ql-center-displayed-equation" style="line-height: 24px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-ed97e829b6632e54e667c1bb4bdacbf8_l3.png" height="24" width="76" class="ql-img-displayed-equation quicklatex-auto-format" alt="&#92;&#91;&#92;&#123;&#51;&#44;&#52;&#44;&#57;&#92;&#125;&#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

Python kullanarak dersi takip edenler için, Python&#8217;da da küme oluşturabilirsiniz: 

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">benim_kumem = {3, 4, 9}</pre>

Ancak elimizde sınırsız sayıda nesneden oluşan bir küme varsa, bunu biraz daha değişik bir biçimde gösteriyoruz. Mesela, 5&#8217;den reel sayılardan oluşan bir küme aşağıdaki gibi gösterilebilir:

<p class="ql-center-displayed-equation" style="line-height: 24px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-fdafd9014061b61c87b9270b9844c50d_l3.png" height="24" width="109" class="ql-img-displayed-equation quicklatex-auto-format" alt="&#92;&#91;&#92;&#123;&#120;&#58;&#32;&#120;&#62;&#50;&#32;&#92;&#125;&#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

Bu ifade: reel sayı kümesi x öyledir ki, 2&#8242; den büyük sayılardan oluşur, şeklinde okunur. Burada x harfinin herhangi bir önemi yoktur. Sadece bu ifadeyi olabildiğince kısa ve anlaşılır biçimde yazabilmek için kullanılmıştır.<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-e547efd853e1fbb59cf58875acb1a81a_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#123;&#51;&#44;&#52;&#44;&#53;&#44;&#54;&#44;&#55;&#44;&#56;&#44;&#46;&#46;&#46;&#44;&#32;&#92;&#105;&#110;&#102;&#116;&#121;&#32;&#92;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="205" style="vertical-align: -6px;" /> yazmaktansa, kısaca<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-58ed6e534f139aae24172e54169f055d_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#123;&#120;&#58;&#32;&#120;&#62;&#50;&#92;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="109" style="vertical-align: -6px;" /> şeklinde yazıyoruz. Ancak dediğim gibi burada x harfinin herhangi bir önemi yoktur. Bunun yerine,<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-ce76d7f169d0db02be47351a36533264_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#123;&#116;&#58;&#32;&#116;&#62;&#50;&#92;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="100" style="vertical-align: -6px;" /> yada<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-fa8d11862daa4df888c90e152620a239_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#123;&#122;&#58;&#32;&#122;&#62;&#50;&#92;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="106" style="vertical-align: -6px;" /> &#8216;da yazabilirdik.

Matematikte çok yoğun bir şekilde kullanılan özel bir tip küme vardırki, bu kendine özel bir isim almıştır.<figure class="wp-block-pullquote" style="border-color:#fcb900">

> Aralık herhangi iki sayının arasındaki bütün reel sayılardan oluşan bir kümedir
> 
> <cite>Aralık</cite></figure> 

<div style="height:50px" aria-hidden="true" class="wp-block-spacer">
</div>

Aralığa bir örnek vermek gerekirse, negatif sayılar bir aralıktır. Çünkü negatif iki sayının arasındaki her sayı yine bir negatif sayıdır. Aralığın dahada pekişmesi için şimdide aralık olmayan bazı örnekler görelim. Mesela tam sayılar kümesi bir aralık değildir. Çünkü, 4 ve 5 bu kümenin içinde olmasına rağmen<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-e40584909ce5fb70bece52411149c0e2_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#102;&#114;&#97;&#99;&#123;&#57;&#125;&#123;&#50;&#125;" title="Rendered by QuickLaTeX.com" height="29" width="9" style="vertical-align: -8px;" /> (yani 4 ile 5 in arasında olan 4.5 sayısı) bu kümenin içinde değildir. Diğer bir örnekse rasyonel sayılar kümesidir. Bu kümede bir aralık değildir. Çünkü 1 ile 2 bu kümenin içinde olmasına rağmen<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-de139b6fd9336e44c0cd5540d27b6f3d_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#115;&#113;&#114;&#116;&#123;&#50;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="30" style="vertical-align: -4px;" /> bu kümenin içinde değildir.

Aralıklar matematikte çok kullanışlı olduğu için bunlara özel bir yazım şekli belirlenmiştir. Aşağıdaki ifadelerde<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-96b10cee1ae5e05c6877e776c0292bb3_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;" title="Rendered by QuickLaTeX.com" height="10" width="12" style="vertical-align: 0px;" /> ve<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6a7aeb96d3f662e3a7a33caadb745be8_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;" title="Rendered by QuickLaTeX.com" height="16" width="9" style="vertical-align: 0px;" /> birer reel sayı ve<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-5f405ee6551f45f4d7a05f1dc6568da2_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#60;&#98;" title="Rendered by QuickLaTeX.com" height="17" width="53" style="vertical-align: -1px;" /> dir.<figure class="wp-block-pullquote" style="border-color:#fcb900">

><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-06ab9a903d9edd953347dd0da0568770_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#65;&ccedil;ı&#107;&#32;&#97;&#114;&#97;&#108;ı&#107;&#32;&#40;&#97;&#44;&#98;&#41;&#44;&#32;&#97;&#32;&#105;&#108;&#101;&#32;&#98;&#32;&#97;&#114;&#97;&#115;ı&#110;&#100;&#97;&#107;&#105;&#32;&#115;&#97;&#121;ı&#108;&#97;&#114;&#32;&#107;&uuml;&#109;&#101;&#115;&#105;&#110;&#105;&#32;&#103;&ouml;&#115;&#116;&#101;&#114;&#105;&#114;&#46;&#32;&#65;&#110;&#99;&#97;&#107;&#32;&#98;&#117;&#32;&#107;&uuml;&#109;&#101;&#121;&#101;&#32;&#97;&#32;&#105;&#108;&#101;&#32;&#98;&#32;&#100;&#97;&#104;&#105;&#108;&#32;&#100;&#101;ğ&#105;&#108;&#100;&#105;&#114;&#125;" title="Rendered by QuickLaTeX.com" height="23" width="1016" style="vertical-align: -6px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-17903fff41cc8bbd63da8c0d4dccfc7d_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#40;&#97;&#44;&#32;&#98;&#41;&#32;&#61;&#32;&#92;&#123;&#120;&#58;&#32;&#97;&#32;&#60;&#32;&#120;&#32;&#60;&#32;&#98;&#32;&#92;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="231" style="vertical-align: -6px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-cefcc5d9b9659a5e8756cc433f8d9884_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#75;&#97;&#112;&#97;&#108;ı&#32;&#97;&#114;&#97;&#108;ı&#107;&#32;&#91;&#97;&#44;&#98;&#93;&#44;&#32;&#97;&#32;&#105;&#108;&#101;&#32;&#98;&#32;&#97;&#114;&#97;&#115;ı&#110;&#100;&#97;&#107;&#105;&#32;&#115;&#97;&#121;ı&#108;&#97;&#114;&#32;&#107;&uuml;&#109;&#101;&#115;&#105;&#110;&#105;&#32;&#103;&ouml;&#115;&#116;&#101;&#114;&#105;&#114;&#32;&#118;&#101;&#32;&#98;&#117;&#32;&#107;&uuml;&#109;&#101;&#121;&#101;&#32;&#97;&#32;&#105;&#108;&#101;&#32;&#98;&#39;&#100;&#101;&#32;&#100;&#97;&#104;&#105;&#108;&#100;&#105;&#114;&#125;" title="Rendered by QuickLaTeX.com" height="23" width="956" style="vertical-align: -6px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-565ce8358c76b9c2e65461888723092b_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#91;&#97;&#44;&#98;&#93;&#32;&#61;&#32;&#92;&#123;&#120;&#58;&#32;&#97;&#32;&#92;&#108;&#101;&#113;&#32;&#120;&#32;&#92;&#108;&#101;&#113;&#32;&#32;&#98;&#32;&#92;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="226" style="vertical-align: -6px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-552dfa9de66fe41d45b6fdcfd8d8c08b_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#89;&#97;&#114;ı&#32;&#97;&ccedil;ı&#107;&#32;&#97;&#114;&#97;&#108;ı&#107;&#32;&#91;&#97;&#44;&#98;&#41;&#44;&#32;&#97;&#32;&#105;&#108;&#101;&#32;&#98;&#32;&#97;&#114;&#97;&#115;ı&#110;&#100;&#97;&#107;&#105;&#32;&#115;&#97;&#121;ı&#108;&#97;&#114;&#32;&#107;&uuml;&#109;&#101;&#115;&#105;&#110;&#105;&#32;&#103;&ouml;&#115;&#116;&#101;&#114;&#105;&#114;&#46;&#32;&#66;&#117;&#32;&#107;&uuml;&#109;&#101;&#121;&#101;&#32;&#97;&#32;&#100;&#97;&#104;&#105;&#108;&#107;&#101;&#110;&#32;&#98;&#32;&#100;&#101;ğ&#105;&#108;&#100;&#105;&#114;&#125;" title="Rendered by QuickLaTeX.com" height="23" width="994" style="vertical-align: -6px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-d73259ffa7c20f91eb7e10caa9f223b9_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#91;&#97;&#44;&#98;&#41;&#32;&#61;&#32;&#123;&#120;&#58;&#32;&#97;&#32;&#92;&#108;&#101;&#113;&#32;&#120;&#32;&#60;&#32;&#98;&#32;&#125;" title="Rendered by QuickLaTeX.com" height="23" width="207" style="vertical-align: -6px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-d5cc08156940cd60bac5413570f0c38b_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#89;&#97;&#114;ı&#32;&#97;&ccedil;ı&#107;&#32;&#97;&#114;&#97;&#108;ı&#107;&#32;&#40;&#97;&#44;&#98;&#93;&#44;&#32;&#97;&#32;&#105;&#108;&#101;&#32;&#98;&#32;&#97;&#114;&#97;&#115;ı&#110;&#100;&#97;&#107;&#105;&#32;&#115;&#97;&#121;ı&#108;&#97;&#114;&#32;&#107;&uuml;&#109;&#101;&#115;&#105;&#110;&#105;&#32;&#103;&ouml;&#115;&#116;&#101;&#114;&#105;&#114;&#46;&#32;&#66;&#117;&#32;&#107;&uuml;&#109;&#101;&#121;&#101;&#32;&#98;&#32;&#100;&#97;&#104;&#105;&#108;&#107;&#101;&#110;&#32;&#97;&#32;&#100;&#101;ğ&#105;&#108;&#100;&#105;&#114;&#125;" title="Rendered by QuickLaTeX.com" height="23" width="994" style="vertical-align: -6px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-9b1b76232324501e699c0a25702381c3_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#40;&#97;&#44;&#98;&#93;&#32;&#61;&#32;&#123;&#120;&#58;&#32;&#97;&#32;&#60;&#32;&#120;&#32;&#92;&#108;&#101;&#113;&#32;&#98;&#32;&#125;" title="Rendered by QuickLaTeX.com" height="23" width="207" style="vertical-align: -6px;" /> 
> 
> <cite>aralık gösteriliş biçimleri</cite></figure> 

<div style="height:50px" aria-hidden="true" class="wp-block-spacer">
</div>

Bu ifadelerde parantezler belirtilen sınırların aralığa dahil olmadığını belirtirken, köşeli parantezler sınırların aralığı dahil olduğunu belirtir. Eğer ucu bir aralık belirtmek istersek (yani pozitif yada negatif sonsuza giden), bu ifadeyi aşağıdaki gibi gösterebiliriz:<figure class="wp-block-pullquote" style="border-color:#fcb900">

><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-7602bad0b284453234ad558391747862_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#65;&#114;&#97;&#108;ı&#107;&#32;&#125;&#40;&#97;&#44;&#92;&#105;&#110;&#102;&#116;&#121;&#41;&#32;&#92;&#116;&#101;&#120;&#116;&#123;&#32;&#97;&#39;&#100;&#97;&#110;&#32;&#98;&uuml;&#121;&uuml;&#107;&#32;&#115;&#97;&#121;ı&#108;&#97;&#114;ı&#110;&#32;&#107;&uuml;&#109;&#101;&#115;&#105;&#110;&#105;&#32;&#103;&ouml;&#115;&#116;&#101;&#114;&#105;&#114;&#125;" title="Rendered by QuickLaTeX.com" height="23" width="540" style="vertical-align: -6px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-85459b676a6ad4b47f34bc3bda24295d_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#40;&#97;&#44;&#32;&#92;&#105;&#110;&#102;&#116;&#121;&#41;&#32;&#61;&#32;&#92;&#123;&#120;&#58;&#32;&#120;&#32;&#62;&#32;&#97;&#92;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="203" style="vertical-align: -6px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-fe1f1e078d663afc6ce4d672d0b28fc2_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#65;&#114;&#97;&#108;ı&#107;&#32;&#125;&#91;&#97;&#44;&#92;&#105;&#110;&#102;&#116;&#121;&#41;&#32;&#92;&#116;&#101;&#120;&#116;&#123;&#32;&#97;&#39;&#100;&#97;&#110;&#32;&#98;&uuml;&#121;&uuml;&#107;&#32;&#121;&#97;&#100;&#97;&#32;&#97;&#39;&#121;&#97;&#32;&#101;ş&#105;&#116;&#32;&#115;&#97;&#121;ı&#108;&#97;&#114;ı&#110;&#32;&#107;&uuml;&#109;&#101;&#115;&#105;&#110;&#105;&#32;&#103;&ouml;&#115;&#116;&#101;&#114;&#105;&#114;&#125;" title="Rendered by QuickLaTeX.com" height="23" width="684" style="vertical-align: -6px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-a5968667a8db763c34f5dedcd9d3e19e_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#91;&#97;&#44;&#32;&#92;&#105;&#110;&#102;&#116;&#121;&#41;&#32;&#61;&#32;&#92;&#123;&#120;&#58;&#32;&#120;&#32;&#92;&#103;&#101;&#113;&#32;&#97;&#92;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="200" style="vertical-align: -6px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-1e68fd4c214b92f28447b9b96b8f1caf_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#65;&#114;&#97;&#108;ı&#107;&#32;&#125;&#40;&#45;&#92;&#105;&#110;&#102;&#116;&#121;&#44;&#32;&#97;&#41;&#32;&#92;&#116;&#101;&#120;&#116;&#123;&#32;&#97;&#39;&#100;&#97;&#110;&#32;&#107;&uuml;&ccedil;&uuml;&#107;&#32;&#115;&#97;&#121;ı&#108;&#97;&#114;ı&#110;&#32;&#107;&uuml;&#109;&#101;&#115;&#105;&#110;&#105;&#32;&#103;&ouml;&#115;&#116;&#101;&#114;&#105;&#114;&#125;" title="Rendered by QuickLaTeX.com" height="23" width="556" style="vertical-align: -6px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-db1c649cebeb3909330a1f6183ab309b_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#40;&#45;&#92;&#105;&#110;&#102;&#116;&#121;&#44;&#32;&#97;&#41;&#32;&#61;&#32;&#92;&#123;&#120;&#58;&#32;&#120;&#32;&#60;&#32;&#97;&#92;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="221" style="vertical-align: -6px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-1d1a7904cecbd07c38a0bd8a2d69dff2_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#65;&#114;&#97;&#108;ı&#107;&#32;&#125;&#40;&#45;&#92;&#105;&#110;&#102;&#116;&#121;&#44;&#32;&#97;&#93;&#32;&#92;&#116;&#101;&#120;&#116;&#123;&#32;&#97;&#39;&#100;&#97;&#110;&#32;&#107;&uuml;&ccedil;&uuml;&#107;&#32;&#121;&#97;&#100;&#97;&#32;&#97;&#39;&#121;&#97;&#32;&#101;ş&#105;&#116;&#32;&#115;&#97;&#121;ı&#108;&#97;&#114;ı&#110;&#32;&#107;&uuml;&#109;&#101;&#115;&#105;&#110;&#105;&#32;&#103;&ouml;&#115;&#116;&#101;&#114;&#105;&#114;&#125;" title="Rendered by QuickLaTeX.com" height="23" width="699" style="vertical-align: -6px;" /> 
> 
><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-c481a053cc312f170c4de6d47f81750a_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#40;&#45;&#92;&#105;&#110;&#102;&#116;&#121;&#44;&#32;&#97;&#93;&#32;&#61;&#32;&#92;&#123;&#120;&#58;&#32;&#120;&#32;&#92;&#108;&#101;&#113;&#32;&#97;&#92;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="218" style="vertical-align: -6px;" /> 
> 
> <cite>Ucu açık aralıklar</cite></figure> 

<div style="height:50px" aria-hidden="true" class="wp-block-spacer">
</div>

Buradaki<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-d89c1124847f259e3961afbbba947316_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#105;&#110;&#102;&#116;&#121;" title="Rendered by QuickLaTeX.com" height="12" width="21" style="vertical-align: -1px;" /> işaretine &#8220;sonsuz&#8221; işareti denir. Bu işaret sadece yazım kolaylığı olması için kullanılmaktadır ve bu işaret herhangi bir reel sayıya eşit değildir.<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-dc5dc76b8c567d6bf76691d2bfb2a2bb_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#40;&#50;&#44;&#32;&#92;&#105;&#110;&#102;&#116;&#121;&#41;" title="Rendered by QuickLaTeX.com" height="23" width="59" style="vertical-align: -6px;" /> ikiden büyük reel sayıları göstermektedir ve<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-1a544ed9d84ad2800db6c69242c42f46_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#123;&#120;&#58;&#32;&#120;&#32;&#62;&#32;&#50;&#32;&#92;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="109" style="vertical-align: -6px;" /> ifadesinden daha kolay yazılır.

Sonsuz sembolünü içeren hiçbir aralıkta sonsuz işaretinin olduğu sınırda köşeli parantez göremezsiniz. Böyle bir ifade yanlış olurdu çünkü köşeli parantez bulunduğu taraftaki sınırın aralığa dahil olduğunu belirtir ancak<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-d89c1124847f259e3961afbbba947316_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#105;&#110;&#102;&#116;&#121;" title="Rendered by QuickLaTeX.com" height="12" width="21" style="vertical-align: -1px;" /> herhangi bir sayıyı ifade etmemektedir. 

İleriki derslerde aralıkların &#8220;birleşimi&#8221;&#8216;ni oldukça sık bir şekilde kullanacağız. Bu sebepten dolayı hazır buradayken birleşimin de tanımını yapalım.<figure class="wp-block-pullquote">

><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-c5049bdcd668437488149c44ab44d9e1_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#65;&#32;&#118;&#101;&#32;&#66;&#32;&#107;&uuml;&#109;&#101;&#108;&#101;&#114;&#105;&#110;&#105;&#110;&#32;&#98;&#105;&#114;&#108;&#101;ş&#105;&#109;&#105;&#125;&#32;&#65;&#32;&#92;&#99;&#117;&#112;&#32;&#66;&#32;&#92;&#116;&#101;&#120;&#116;&#123;&#32;ş&#101;&#107;&#108;&#105;&#110;&#100;&#101;&#32;&#103;&ouml;&#115;&#116;&#101;&#114;&#105;&#108;&#105;&#114;&#32;&#118;&#101;&#32;&#65;&#32;&#121;&#97;&#100;&#97;&#32;&#66;&#32;&#107;&uuml;&#109;&#101;&#108;&#101;&#114;&#105;&#110;&#100;&#101;&#110;&#32;&#101;&#110;&#32;&#97;&#122;&#32;&#98;&#105;&#114;&#105;&#110;&#100;&#101;&#32;&#98;&#117;&#108;&#117;&#110;&#97;&#110;&#32;&#110;&#101;&#115;&#110;&#101;&#108;&#101;&#114;&#105;&#110;&#32;&#107;&uuml;&#109;&#101;&#115;&#105;&#100;&#105;&#114;&#125;" title="Rendered by QuickLaTeX.com" height="21" width="1253" style="vertical-align: -5px;" /> 
> 
> <cite>birleşim</cite></figure> 

Yani<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6e871ba3079035912f153235c85ecc22_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#65;&#32;&#92;&#99;&#117;&#112;&#32;&#66;" title="Rendered by QuickLaTeX.com" height="17" width="61" style="vertical-align: -1px;" /> genellikle A&#8217;da B&#8217;de yada hem A&#8217;da hem de B&#8217; de bulunan nesnelerden oluşur. Bunu bir örnekle gösterelim:

### Örnek

<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-a47f36901d12a4d69dcfe5c307bc96a8_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#40;&#50;&#44;&#32;&#54;&#41;&#32;&#92;&#99;&#117;&#112;&#32;&#40;&#52;&#44;&#32;&#56;&#93;" title="Rendered by QuickLaTeX.com" height="23" width="122" style="vertical-align: -6px;" /> ifadesini aralık şeklinde yazınız.

### Çözüm

<div class="wp-block-image">
  <figure class="aligncenter size-large"><img src="http://emkademy.local/wp-content/uploads/2020/02/union.png" alt="" class="wp-image-557" srcset="http://emkademy.local/wp-content/uploads/2020/02/union.png 482w, http://emkademy.local/wp-content/uploads/2020/02/union-300x46.png 300w" sizes="(max-width: 482px) 100vw, 482px" /><figcaption>Üstte <img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-760a4ecae6cbaf811f67073096f5ac02_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#40;&#50;&#44;&#32;&#54;&#41;" title="Rendered by QuickLaTeX.com" height="23" width="48" style="vertical-align: -6px;" />, altta <img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-af491701c31dd0a5251ba66e0e2bf751_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#40;&#51;&#44;&#56;&#93;" title="Rendered by QuickLaTeX.com" height="23" width="45" style="vertical-align: -6px;" /></figcaption></figure>
</div>

Yukarıdaki figürden de yardım alırsak eğer, (2,8] aralığındaki sayıların hepsinin ya<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-9a5d1bec521f1d8636ea215066239c29_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#40;&#50;&#44;&#54;&#41;" title="Rendered by QuickLaTeX.com" height="23" width="48" style="vertical-align: -6px;" /> aralığında ya<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-af491701c31dd0a5251ba66e0e2bf751_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#40;&#51;&#44;&#56;&#93;" title="Rendered by QuickLaTeX.com" height="23" width="45" style="vertical-align: -6px;" /> aralığında yada her iki aralıkta birden bulunduğunu görürüz. Yani;

<p class="ql-center-displayed-equation" style="line-height: 23px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-20bd68ed74a2f819cd1ea6365bba52fc_l3.png" height="23" width="202" class="ql-img-displayed-equation quicklatex-auto-format" alt="&#92;&#91;&#40;&#50;&#44;&#32;&#54;&#41;&#32;&#92;&#99;&#117;&#112;&#32;&#40;&#51;&#44;&#32;&#56;&#93;&#32;&#61;&#32;&#40;&#50;&#44;&#32;&#56;&#93;&#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

Bu örneği Python&#8217;da da yapıp cevabı kontrol edebilirsiniz:

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">kume1 = {3, 4, 5}
kume2 = {4, 5, 6, 7, 8}

# Burada union kelimesi "birlesim" anlamina geliyor
print(kume1.union(kume2)) </pre>

### Örnek

0&#8217;a eşit olmayan reel sayıları iki aralığın birleşimi biçiminde yazınız.

### Çözüm

<p class="ql-center-displayed-equation" style="line-height: 23px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-078f81497815b24fcd93bea9f5311a52_l3.png" height="23" width="166" class="ql-img-displayed-equation quicklatex-auto-format" alt="&#92;&#91;&#40;&#45;&#92;&#105;&#110;&#102;&#116;&#121;&#44;&#32;&#48;&#41;&#32;&#92;&#99;&#117;&#112;&#32;&#40;&#48;&#44;&#32;&#92;&#105;&#110;&#102;&#116;&#121;&#41;&#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

## Mutlak değer

Mutlak değer bir sayının 0&#8217;dan olan uzaklığını gösteren bir değerdir. Burada her bir sayıyı daha önceden de kullandığımız reel sayı doğrusu üzerinde birer nokta olarak düşünebilirsiniz. Bu şekilde düşünürseniz eğer, mesela, 4 sayısının 0&#8217;dan olan uzaklığının 4 (birim) olduğunu görürsünüz. Aynı şekilde -4 sayısının 0&#8217;dan uzaklığıda 4 (birim)&#8217;dir. Burada herhangi bir sayının 0&#8217;ın sağında veya solunda olması farketmez, biz her zaman için 0&#8217;a olan uzaklığının kaç olduğuna bakıyoruz, ve uzaklık negatif bir sayı olamaz. Siz Ankara&#8217;dan İzmir&#8217;e 700km gittikten sonra İzmir&#8217;den Ankara&#8217;ya -700km var demezsiniz. Mesafe yine 700km&#8217;dir, ancak yön farklıdır.

Bir<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-96b10cee1ae5e05c6877e776c0292bb3_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;" title="Rendered by QuickLaTeX.com" height="10" width="12" style="vertical-align: 0px;" /> sayısı alırsak eğer, bu sayının mutlak değeri<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-7f47cd1b7f907b8d9906092c8bb17678_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#124;&#97;&#124;" title="Rendered by QuickLaTeX.com" height="23" width="20" style="vertical-align: -6px;" /> şeklinde gösterilir. Bu sebepten dolayı<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-fca2812aa637268aa09f40919eef5fb4_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#124;&#92;&#102;&#114;&#97;&#99;&#123;&#53;&#125;&#123;&#51;&#125;&#124;&#32;&#61;&#32;&#92;&#102;&#114;&#97;&#99;&#123;&#53;&#125;&#123;&#51;&#125;" title="Rendered by QuickLaTeX.com" height="29" width="67" style="vertical-align: -8px;" /> ve<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-2f55303b7ab8749e1a9d4fc12c92fdc2_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#124;&#45;&#92;&#102;&#114;&#97;&#99;&#123;&#53;&#125;&#123;&#51;&#125;&#124;&#32;&#61;&#32;&#92;&#102;&#114;&#97;&#99;&#123;&#53;&#125;&#123;&#51;&#125;" title="Rendered by QuickLaTeX.com" height="29" width="96" style="vertical-align: -8px;" /> . Mutlak değerin resmi tanımını verirsek eğer:<figure class="wp-block-pullquote" style="border-color:#fcb900">

><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-d2ee9d8ad115f0d9901958bceb028f2f_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#116;&#101;&#120;&#116;&#123;&#72;&#101;&#114;&#104;&#97;&#110;&#103;&#105;&#32;&#98;&#105;&#114;&#32;&#97;&#32;&#115;&#97;&#121;ı&#115;ı&#110;ı&#110;&#32;&#109;&#117;&#116;&#108;&#97;&#107;&#32;&#100;&#101;ğ&#101;&#114;&#105;&#32;&#125;&#32;&#124;&#97;&#124;&#32;&#92;&#116;&#101;&#120;&#116;&#123;&#32;ş&#101;&#107;&#108;&#105;&#110;&#100;&#101;&#32;&#103;&ouml;&#115;&#116;&#101;&#114;&#105;&#108;&#105;&#114;&#32;&#118;&#101;&#32;&#97;ş&#97;ğı&#100;&#97;&#107;&#105;&#32;&#103;&#105;&#98;&#105;&#32;&#116;&#97;&#110;ı&#109;&#108;&#97;&#110;ı&#114;&#125;" title="Rendered by QuickLaTeX.com" height="23" width="891" style="vertical-align: -6px;" /> 
> 
> <p class="ql-center-displayed-equation" style="line-height: 70px;">
>   <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-96125ae25a6150e7e2369916dad81bf3_l3.png" height="70" width="222" class="ql-img-displayed-equation quicklatex-auto-format" alt="&#92;&#91;&#124;&#98;&#124;&#32;&#61;&#92;&#98;&#101;&#103;&#105;&#110;&#123;&#99;&#97;&#115;&#101;&#115;&#125;&#98;&#32;&#38;&#32;&#92;&#116;&#101;&#120;&#116;&#123;&#101;ğ&#101;&#114;&#32;&#125;&#32;&#98;&#32;&#92;&#103;&#101;&#113;&#32;&#48;&#32;&#92;&#92;&#45;&#98;&#32;&#38;&#32;&#92;&#116;&#101;&#120;&#116;&#123;&#101;ğ&#101;&#114;&#32;&#125;&#32;&#98;&#32;&#60;&#32;&#48;&#92;&#101;&#110;&#100;&#123;&#99;&#97;&#115;&#101;&#115;&#125;&#92;&#93;" title="Rendered by QuickLaTeX.com" />
> </p>
> 
> <cite>Mutlak deger</cite></figure> 

<div style="height:50px" aria-hidden="true" class="wp-block-spacer">
</div>

Bu kurala göre yukarıdaki örneği tekrar yapacak olursak:<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-c0bf8c8698829fd2c6b53a3871cf3b79_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#45;&#92;&#102;&#114;&#97;&#99;&#123;&#53;&#125;&#123;&#51;&#125;&#32;&#60;&#32;&#48;" title="Rendered by QuickLaTeX.com" height="29" width="73" style="vertical-align: -8px;" /> bu sebepten dolayı,<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-f047783a5da469263efaebbc0867fcc1_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#124;&#45;&#92;&#102;&#114;&#97;&#99;&#123;&#53;&#125;&#123;&#51;&#125;&#124;&#32;&#61;&#32;&#45;&#40;&#45;&#92;&#102;&#114;&#97;&#99;&#123;&#53;&#125;&#123;&#51;&#125;&#41;&#32;&#61;&#32;&#92;&#102;&#114;&#97;&#99;&#123;&#53;&#125;&#123;&#51;&#125;" title="Rendered by QuickLaTeX.com" height="29" width="195" style="vertical-align: -8px;" /> 

Mutlak değer kavramı aslında oldukça kolay &#8212; eğer bir numara negatifse, eksiyi at gitsin. Ancak lütfen unutmayınki bu kural sadece numaralara uygulanabilir. Eğer bize<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-64953df39f52e9ed50c92f8a8b28eaf4_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#124;&#45;&#40;&#97;&#43;&#98;&#41;&#124;" title="Rendered by QuickLaTeX.com" height="23" width="105" style="vertical-align: -6px;" /> gibi bir ifade verilirse eğer, direk eksiden kurtulup bunu<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6eafe4a632ba275e5b38e1b8189c5ae0_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#43;&#98;" title="Rendered by QuickLaTeX.com" height="18" width="51" style="vertical-align: -2px;" /> şeklinde yazamayız.<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-96b10cee1ae5e05c6877e776c0292bb3_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;" title="Rendered by QuickLaTeX.com" height="10" width="12" style="vertical-align: 0px;" /> ile<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6a7aeb96d3f662e3a7a33caadb745be8_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#98;" title="Rendered by QuickLaTeX.com" height="16" width="9" style="vertical-align: 0px;" /> &#8216;nin değerlerini bilmediğimiz için, bu ifadenin sonucunun pozitifmi negatifmi olduğunu da bilmiyoruz. Eğer<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-0d14229881b88bcbc12941bb17e1d40e_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#43;&#98;&#32;&#92;&#103;&#101;&#113;&#32;&#48;" title="Rendered by QuickLaTeX.com" height="19" width="92" style="vertical-align: -3px;" /> o zaman bu ifadeyi<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6eafe4a632ba275e5b38e1b8189c5ae0_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#43;&#98;" title="Rendered by QuickLaTeX.com" height="18" width="51" style="vertical-align: -2px;" /> şeklinde basitleştirebiliriz. Ancak<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-850976ea35323c1588bad01ffc7e7350_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#43;&#98;&#32;&#60;&#32;&#48;" title="Rendered by QuickLaTeX.com" height="18" width="92" style="vertical-align: -2px;" /> ise<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-d5d717b17cbdbb475dcd5d3d3e119905_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#124;&#45;&#40;&#97;&#43;&#98;&#41;&#124;&#32;&#61;&#32;&#45;&#40;&#97;&#43;&#98;&#41;" title="Rendered by QuickLaTeX.com" height="23" width="223" style="vertical-align: -6px;" /> &#8216;dir ve &#8220;-&#8221; işaretini bu ifadeden atmak yanlış olacaktır. Kafanız karıştıysa eğer bu örneğin gerçek sayılar kullanarak çözümüne bir göz atın:

Diyelimki<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-518ad0dac914d6db56e3ff896b13142d_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#43;&#98;&#32;&#61;&#32;&#51;" title="Rendered by QuickLaTeX.com" height="18" width="92" style="vertical-align: -2px;" /> . O zaman<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-e9c087e1108390ef072d312239ba9835_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#124;&#45;&#40;&#97;&#43;&#98;&#41;&#124;&#32;&#61;&#32;&#124;&#45;&#51;&#124;&#32;&#61;&#32;&#51;" title="Rendered by QuickLaTeX.com" height="23" width="233" style="vertical-align: -6px;" /> , yani sonuç<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-6eafe4a632ba275e5b38e1b8189c5ae0_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#43;&#98;" title="Rendered by QuickLaTeX.com" height="18" width="51" style="vertical-align: -2px;" /> &#8216; ye eşit. Ancak<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-bd227ec7c8b3ff4063297a0df22029d1_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;&#43;&#98;&#32;&#61;&#32;&#45;&#51;" title="Rendered by QuickLaTeX.com" height="18" width="110" style="vertical-align: -2px;" /> olsaydı eğer,<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-53435e6c76825126c0929c9b23021966_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#124;&#45;&#40;&#97;&#43;&#98;&#41;&#124;&#32;&#61;&#32;&#124;&#45;&#40;&#45;&#51;&#41;&#124;&#32;&#61;&#32;&#124;&#51;&#124;&#32;&#61;&#32;&#51;" title="Rendered by QuickLaTeX.com" height="23" width="325" style="vertical-align: -6px;" /> , sonuç değişmedi ancak bu sefer sonuç -(a+b)&#8217; ye eşit 🙂

Matematikte semboller oldukça önemli bir yere sahiptir. Gerçek sayılar kullanmaktansa sembollerin tercih edilmesinin sebebi, gerçek sayılarla yazılamayacak komplex matematik formullerinin, sembollerle çok rahat bir şekilde yazılabiliyor olmasıdır. Bu sebepten dolayı matematikte sembollerin kullanımına yavaş yavaş alışsanız iyi olur. Bir sürü sembolden oluşan karmaşık bir matematiksel konsept gördüğünüz zaman unutmayınki her zaman burada belirtilen sembollerin yerine gerçek sayılar koyup bu ifadeyi daha rahat bir şekilde anlayabilirsiniz.

Evet, şimdide biraz daha soyut olan (sadece sembollerden oluşan) bir örnek yapmak istiyorum. Ancak bu örnekten önce, bu örneği daha iyi anlayabilmeniz için gelin bu örneğin soyut olmayan versiyonunu çözelim.

### Örnek

  *<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-fbd114b7c04ea70451927935f8aceddf_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#124;&#120;&#124;&#32;&#60;&#32;&#53;" title="Rendered by QuickLaTeX.com" height="23" width="66" style="vertical-align: -6px;" /> ifadesini mutlak değer kullanmadan bir eşitsizlik halinde yazın.
  *<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-1a10a0ad5fd663613f86433376c82d5e_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#92;&#123;&#120;&#58;&#32;&#124;&#120;&#124;&#32;&#60;&#32;&#53;&#32;&#92;&#125;" title="Rendered by QuickLaTeX.com" height="24" width="122" style="vertical-align: -6px;" /> kümesini bir aralık şeklinde yazın

### Çözüm

  * Bir sayının mutlak değerinin 5&#8217;den küçük olabilmesi için, bu sayının 0&#8217;a olan uzaklığının 5&#8217;den küçük olması lazım. Bu koşul ancak ve ancak eğer bu sayı -5 ile 5 arasındaysa gerçekleşebilir. Bu sebepten dolayı yukarıdaki ifade aşağıdaki gibi yazılabilir:

<p class="ql-center-displayed-equation" style="line-height: 23px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-7258d24d8468a926e9c7e28171df9d7b_l3.png" height="23" width="214" class="ql-img-displayed-equation quicklatex-auto-format" alt="&#92;&#91;&#124;&#120;&#124;&#32;&#60;&#32;&#53;&#32;&#61;&#32;&#45;&#53;&#32;&#60;&#32;&#120;&#32;&#60;&#32;&#53;&#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

  * İlk maddeyi çözdükten sonra zannediyorumki bu maddeyi kolayca çözmüşsünüzdür. 

<p class="ql-center-displayed-equation" style="line-height: 23px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-cd68f07d845dfe5987c8c15f6d5df4e1_l3.png" height="23" width="200" class="ql-img-displayed-equation quicklatex-auto-format" alt="&#92;&#91;&#123;&#120;&#58;&#32;&#124;&#120;&#124;&#32;&#60;&#32;&#53;&#32;&#125;&#32;&#61;&#32;&#40;&#45;&#53;&#44;&#32;&#53;&#41;&#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

Eveeet, şimdi şu korkunç, sadece sembollerden oluşam soruya gelirsek eğer 🙂

### Örnek

<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-96b10cee1ae5e05c6877e776c0292bb3_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;" title="Rendered by QuickLaTeX.com" height="10" width="12" style="vertical-align: 0px;" /> &#8216;nin bir reel sayı ve<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-d12bbabba6b71791f92895d5a95a74d2_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#108;&#32;&#62;&#32;&#48;" title="Rendered by QuickLaTeX.com" height="17" width="48" style="vertical-align: -1px;" /> olduğunu varsayarsak eğer,

  *<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-af0845ddae4c9060e77dd81427d1aab9_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#124;&#120;&#45;&#97;&#124;&#32;&#60;&#32;&#108;" title="Rendered by QuickLaTeX.com" height="23" width="102" style="vertical-align: -6px;" /> ifadesini mutlak değer kullanmadan bir eşitsizlik halinde yazın.
  *<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-8c38cbee1949a78170fcc09c310efa2c_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#123;&#120;&#58;&#32;&#124;&#120;&#32;&#45;&#32;&#97;&#124;&#32;&#60;&#32;&#108;&#32;&#125;" title="Rendered by QuickLaTeX.com" height="23" width="136" style="vertical-align: -6px;" /> setini bir aralık şeklinde yazın

### Çözüm

  * Bu örnek sizi hiç korkutmasın. Bu örnek aslında yukardaki örneğin aynısı. Sadece burada numaralar yerine semboller kullılmış. Bir sayının mutlak değerinin<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-a92097df6ec1f63ebadf09039abbc734_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#108;" title="Rendered by QuickLaTeX.com" height="16" width="5" style="vertical-align: 0px;" /> &#8216;den küçük olabilmesi için, bu sayının<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-639fd5a2dff677ff98628bd2d0e80bfc_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#45;&#108;" title="Rendered by QuickLaTeX.com" height="16" width="23" style="vertical-align: 0px;" /> ile<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-a92097df6ec1f63ebadf09039abbc734_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#108;" title="Rendered by QuickLaTeX.com" height="16" width="5" style="vertical-align: 0px;" /> arasında olması gerekmektedir. O zaman: 

<p class="ql-center-displayed-equation" style="line-height: 23px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-0cd72504768f0e7c3528d9b536d12f2e_l3.png" height="23" width="281" class="ql-img-displayed-equation quicklatex-auto-format" alt="&#92;&#91;&#124;&#120;&#45;&#97;&#124;&#32;&#60;&#32;&#108;&#32;&#61;&#32;&#45;&#108;&#32;&#60;&#32;&#120;&#45;&#97;&#32;&#60;&#32;&#108;&#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

Üstteki ifadenin herbir kısmına<img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-96b10cee1ae5e05c6877e776c0292bb3_l3.png" class="ql-img-inline-formula quicklatex-auto-format" alt="&#97;" title="Rendered by QuickLaTeX.com" height="10" width="12" style="vertical-align: 0px;" /> eklersek eğer, bu ifadeyi aşağıdaki gibi yazabiliriz (aynı sayıyı herbir kısma eklediğimiz için eşitsizlik bozulmaz):

<p class="ql-center-displayed-equation" style="line-height: 23px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-d8981bcc0f55e9478ac87f6b4192b92a_l3.png" height="23" width="303" class="ql-img-displayed-equation quicklatex-auto-format" alt="&#92;&#91;&#124;&#120;&#45;&#97;&#124;&#32;&#60;&#32;&#108;&#32;&#61;&#32;&#97;&#45;&#108;&#32;&#60;&#32;&#120;&#32;&#60;&#32;&#97;&#43;&#108;&#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

  * Aynı üstteki örnekte olduğu gibi ilk maddeyi çözdükten sonra ikinci madde oldukça kolaylaşıyor:

<p class="ql-center-displayed-equation" style="line-height: 24px;">
  <span class="ql-right-eqno"> &nbsp; </span><span class="ql-left-eqno"> &nbsp; </span><img src="http://emkademy.local/wp-content/ql-cache/quicklatex.com-417b42d6758273d6250b2b68f20d1fa1_l3.png" height="24" width="302" class="ql-img-displayed-equation quicklatex-auto-format" alt="&#92;&#91;&#92;&#123;&#120;&#58;&#32;&#124;&#120;&#45;&#97;&#124;&#32;&#60;&#32;&#108;&#32;&#125;&#32;&#61;&#32;&#40;&#97;&#45;&#108;&#44;&#32;&#97;&#43;&#108;&#41;&#92;&#93;" title="Rendered by QuickLaTeX.com" />
</p>

Bu dersle bu bölümü bitirmiş olduk. Bu bölümün &#8220;0.&#8221; bölüm olmasının nedeni, aslında burada gösterilen konuların tekrar amaçlı olmasındandır. Bir sonraki bölümde bu bölümde gösterilen konuları yoğun bir biçimde kullanacağız. Artık fonksiyonları görmeye hazırız 🙂 Matematikte fonksiyonlar herşeydir. Bu konunun neden bu kadar önemli olduğunu ileriki derslerde derin derin konuşacağız 🙂