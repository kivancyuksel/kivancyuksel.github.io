---
id: 318
title: Kalkülüs Öncesine Giriş
date: 2020-01-07T18:58:51+00:00
author: emkademy
layout: post
guid: http://emkademy.local/?p=318
permalink: /kalkulus_oncesi/kalkulus-oncesine-giris/
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
ocean_post_title_style:
  - background-image
ocean_post_title_background:
  - "319"
ocean_header_style:
  - medium
ocean_post_title:
  - '0 - Kalkülüs Öncesine Giriş'
image: /wp-content/uploads/2020/01/pre_calculus.jpg
categories:
  - Kalkülüs Öncesi
tags:
  - derin sinir ağları
  - görüntü işleme
  - kalkülüs öncesi
  - makine öğrenimi
  - matematik
  - python
  - yapay zeka
---
Makine öğrenimi, fotoğraf işleme, derin sinir ağları, yapay zeka gibi konuları öğrenmek için 2 farklı yol seçebilirsiniz:

  1. Yüzüysel olarak, ayrıntılara çok önem vermeden sadece problem çözmeye yönelik,
  2. Derinlemesine, her bir ayrıntıya önem vererek.

<p class="has-text-align-left">
  <em>(Ancak zannedilmesinki bu sitedeki dersler sadece bu konuları öğrenmek için. Bu dersler size bu konularda yardımcı olacağı gibi diğer birçok konudada yardımcı olacaktır. Matematiğin kullanılamayacağı bir yer var mı? :))</em>
</p>

Bu seçeneklerden hangisini seçerseniz seçin, ilk olarak bir programlama diline iyi bir seviyede hakim olmanız gerekir. Bahsedilen konularda şu anda kullanılan programlama dillerinden (kişisel fikrim) en iyisi Python&#8217;dur. Bu blogdaki vereceğim derslerde de elimden geldiğince teori ve pratiği birleştirmek için, anlattığım konuların örneklerini Python&#8217;da yapacağım. Bu, öğrendiğiniz konularla programlama dili arasındaki bağlantıyı görmenizde size yardımcı olacak. Bu gerçekten çok önemli, çünkü genelde bir konunun teorisini öğrendikten sonra bu konuyu pratiğe dökmekte sıkıntı yaşıyoruz. Daha önceden gelen bir programlama alt yapınız yoksa eğer, yada daha önce Python kullanmadıysanız eğer, bu sitedeki kurslara başlamadan önce [buradan](https://www.youtube.com/channel/UC8QIX-TzWoF8CV9tgWYERqg?view_as=subscriber) Python öğrenebilirsiniz. Ancak sadece teoriye önem veriyor, yada herhangi bir programlama dilini öğrenmeye zaman harcamak istemiyorsanız eğer, derslerde verilen Python örneklerini geçebilirsiniz. Bunun konuları anlamanızda size hiçbir etkisi olmayacaktır.

Bunlardan ilkini seçerseniz eğer, çok daha hızlı bir şekilde ilerleyebilirsiniz. Birkaç ay içerisinde bu konularda projeler yapmaya başlayabilirsiniz. Bunun sebebi, yazılım (software) sektörünün bu konularda çok gelişmiş olmasından dolayı bir çok işlemi farklı kütüphaneler kullanarak sadece birkaç satır kodla, bu kodun içeriğini anlamadan yapabiliyor olmanızdır. Buna bir örnek vermek gerekirse (bu örneği şu anda kesinlikle anlamak zorunda değilsiniz. Sadece, birkaç satır kodla hemen başlayabileceğinizi göstermek istedim):

<pre class="EnlighterJSRAW" data-enlighter-language="python" data-enlighter-theme="" data-enlighter-highlight="" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-title="" data-enlighter-group="">from sklearn import datasets
from sklearn import svm

digits = datasets.load_digits()

classifier = svm.SVC(gamma=0.001, C=100.)
classifier.fit(digits.data[:-1], digits.target[:-1])
classifier.predict(digits.data[-1:])</pre>

Evet, şu anda numaraları tanıyabilen bi model eğitmiş oldunuz&#8230;

Ancak bunun kötü tarafı, eninde sonunda size sağlanan bu kolaylıkların istediklerinizi yapmanız için size yetmeyecek olmasıdır. Eninde sonunde birşeyleri farklı bir yoldan, aklınızdaki fikirlere göre yapmak isteyeceksiniz. Bu duruma geldiğiniz zaman, ya size sağlanan methodları modifiye etmek ya da bunları baştan kendiniz yazmak isteyeceksiniz. Bu sebepten dolayı, ileride daha sağlam bi temelinizin olması için, başlarda biraz daha sabırlı olmanız ve üstteki listedeki 2 numarayı seçmeniz sizin yararınıza olacaktır. Ben elimden geldiğince bu yolculuğu sizin için eğlenceli ve anlaşılır yapmaya çalışacağım. 

Kalkülüs öncesi dersinin öncelikle &#8220;0.&#8221; bölümünde gördüğümüz konular hakkında yaa biz bunları nerede kullanacağız diye merak edebilirsiniz. Bu gayet doğal. Çünkü burada gösterilen başlıklarla gerçek hayat arasında bir bağlantı kuramıyor olabilirsiniz. Bu bölümü &#8220;0.&#8221; bölüm olarak değerlendirmemin sebebi, bu bölümde gösterilen konuların bize ileriki dersleri anlamamızda yardımcı olup, kendi başlarına pek birşey ifade etmemelerindendir. &#8220;1.&#8221; bölümden başlayarak her bir bölümde anlatılan şeylerle gerçek hayat arasında bağlantı kuracağım. Böylelikle burada gösterilen konuların sadece garip sembollerden oluşan ve derslerinizi geçmek için ezberlemeniz gereken konular olduğundan çok, gerçek hayatta neredeyse heryerde bir uygulamasının yapıldığı konular olduğunu göreceksiniz. Matematik yada herhangi bir bilimi öğretilirken yapılan en büyük yanlışlardan bir tanesi, anlatılan konularla gerçek hayat arasında bağlantı kurulmamasıdır. Öğrenci, anlatılan konuların soyutluğundan dolayı bir süre sonra ilgisini ve isteğini kaybeder ve hatta anlatılan derse nefret duymaya başlar. Öncelikle türev, integral, limit anlatmak yerine, bunların nerelerde kullanıldığı ve ne için kullanıldığı anlatılsaydı eğer ben inanıyorumki herkez bu konuları çok sever ve ilgi duyardı. Bu sebepten dolayı ben elimden geldiğince konuları bu şekilde anlatmaya çalışacağım.

Peki neden Kalkülüs öncesinden (Precalculus) başlıyoruz? İnanın daha iyi başlanabilecek bir yer yok. Burada öğreneceğiniz herşey, ileride göreceğimiz: Makina Öğrenimi (Machine Learning), Bilgisayarla Görme (Computer Vision), Dijital Fotoğraf İşleme (Digital Image Processing), Derin Sinir Ağları (Deep Neural Netwoks) gibi konuların hepsinde sizin çok işinize yarayacak. Bir konunun temellerini anlamadan bu konunun daha kompleks bir versiyonu kullanılarak yapılmış projeleri anlamak çok daha zor. Bu sebepten dolayı biraz daha fazla zaman harcayıp temelinizi iyi atarsanız eğer, ileride temeli sağlam olmayanlar kompleks konuları öğrenmek için daha çok zaman ve enerji harcarken, siz bu konuları neredeyse hiçbir enerji sarfetmeden öğreneceksinizdir.

Evet, lafı daha fazla uzatmadan başlayalım isterseniz&#8230; 🙂

## Bu Derslerı Hazırlarken Kullanılan Referanslar:

  * <http://precalculus.axler.net/>
  * <https://www.wolframalpha.com/>
  * <https://www.youtube.com/channel/UC8QIX-TzWoF8CV9tgWYERqg?view_as=subscriber>