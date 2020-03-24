---
title: "Mean, Variance, and Standard Deviation &ndash; Once and For All"
excerpt: "In this post, we talk about mean, variance and standard deviation. We try to answer the following questions: What are they? Where they are used? And why they are used?"
tags: 
    - mean
    - variance
    - standard deviation
    - histogram
    - statistical distribution
    - auc
categories: [Toolbox]
date: 2020-03-21 13:14:15
scrollspy_content: "Objectives,Mean,Variance,Putting All Together,Recap,Conclusions,References"
---

<span id="scrollspy-item-1"></span>
{% capture jumbotron-content %}
<h3>Objectives</h3>
<p>By the end of this post you should</p>
<ul>
    <li>understand what is mean, and why is it so useful,</li>
    <li>understand the importance of variance and what it is tell us,</li>
    <li>understand what is normal distribution, and why we use it.</li>
</ul>

{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content left=true %}{% endcapture %}
{{ jumbotron-include | markdownify }}

We all are a bit different, aren't we? It is mostly not a bad thing. If we were all the same color, we
wouldn't have any rainbow right? Some people are taller than others; some have blue eyes, some brown;
some people can eat anything they want and still don't gain any weight, and for some people, water is
enough. My point is: we all are a bit different, there is a diversity on earth, not only
on humans, on most of the things. What do you think about this question?: What is the height of humans? 
Isn't it absurd? Indeed it is. So, can't we have any idea about anything? We are living in an era that
information is very important. Businesses grow or sink depending on the information. The more you
know about your
target customers the more likely that your business will succeed. In this large diversity of things, how
do we collect information? How do we know more about something that isn't constant? This is what we are
going to discuss in this post.

Imagine you are in a carnival in Japan, and there is a very exciting contest: everybody needs to guess how tall a Japanese man is, and the person who guesses it right (or the one who gets the closest) wins a katana. This is the katana of your dreams, you really want it, but you have no idea how tall this person is. What to do? His height can be between $-\infty$ and $\infty$.
Wait a second, you know that height can't be negative or zero, it doesn't make any sense for these values. So, you have an **information** that the height can't be negative or zero, good, now you have reduced the possible number for this person's height into a 
range: $0 < height < \infty$. What else do you know? A quick check from the internet shows you that the tallest man has ever lived had 272cm [3]. You saw some pictures of him near some objects, and based on this you don't think this Japanese man is taller than him. Okayyy,
so you can reduce the range into $0 <height < 272$. With the same logic, you find the
shortest man has ever lived and you can further reduce the range into $54.6 < height < 272$
[6]. What more can you do after this moment? Let's see...

<div class="text-center">
<img src="{{site.url}}/assets/img/toolbox/mean_variance/guessing.png" class="img-fluid" alt="contest at a carnival">
    <p>Contest at a carnival</p>
</div>    

<span id="scrollspy-item-2"></span>
## Mean (Average)

Why do we even have something called mean? What information does it give us? When is it useful?
Well, we have already talked about the diversity on earth. We can't just say that humans
are 160cm tall. But, we can say that, for example, the average height of Japanese men is
172cm (on 2020 \[1\]). It gives us information about the **center** of diversity.

{% capture jumbotron-content %}
<h3>Mean</h3>
<p class="lead">Mean is a value that pinpoints the center location within a dataset.</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content left=false %}{% endcapture %}
{{ jumbotron-include | markdownify }}


First of all, how this number was found? There are 2 ways you can get it:

1) The first way is precise but very time-consuming. It includes measuring the height of every Japanese man (the *"population"* for this example), then summing all of the measurements and
dividing it to the number of measurements. There are around 62 million men in Japan (on 2020 \[2\]), so:

$$average_{male \ height} = \mu_{h_m} = \frac{h_1+h_2+h_3+\cdots+h_{62000000}}{62000000} $$

Where $h_n \ (n=1,2,\cdots,62000000)$ represents height of $n^{th}$  Japanese man, and $\mu$
represents *"population mean"*. The equation given above is specific to this example, and the
general equation of mean is as follows:

{% capture jumbotron-content %}
<h3 id="mean-equation">Population Mean</h3>
$$\mu = \frac{\sum_{i=1}^{N}x_i}{N}$$
<p>Where $N$ represents the number of items in a population</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content left=false %}{% endcapture %}
{{ jumbotron-include | markdownify }}


<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/mean_variance/population_height.jpg" class="img-fluid" alt="calculating mean height on the population">
    <p>Calculating mean height on the population</p>
</div>    

$$\mu_{h_m} = \frac{170 + 165 + 172 + 176 + \cdots + 174}{62000000} = 172$$


2) The second way is to *estimate* the mean value. What it is meant by estimate is: instead
of measuring the height of every Japanese man, we measure randomly selected subset (*sample*)
of them (I won't delve into randomness here, it is a subject of another post). As you can
imagine, this way is much less time consuming than the first one. It is not as precise as
the first one, however, in most of the cases, the error is negligible. This is how we calculate
the sample mean:

$$\bar{average_{male \ height}} = \bar{h_m} = \frac{h_1+h_2+h_3+\cdots+h_{n}}{n}$$

This equation is exactly like the one above it, with only one difference: this time
$0<n \ll 62000000$. Here, not every Japanese man was taken into account while calculating the
mean, but only a part of them. Bar (-) symbol is used above some letter to describe the 
*"sample"* mean (in this case $\bar{h_m}$).


{% capture jumbotron-content %}
<h3>Sample Mean</h3>
$$\bar{x} = \frac{\sum_{i=1}^{n}x_i}{n}$$
<p>Where $n$ represents the number of items in the sample</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content left=false %}{% endcapture %}
{{ jumbotron-include | markdownify }}


<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/mean_variance/sample_height.jpg" class="img-fluid" alt="calculating mean height on a sample taken from population">
    <p>Calculating mean height on a sample taken from population</p>
</div>    

$$\bar{h_m} = \frac{170 + 165 + 172 + 176 + 174 + 175 + 166 + 172}{8} = 171.25$$

As can be seen from the example above, we couldn't get the reel average value when we
used only a sample from our population, however, we get pretty close. It is up to you to
decide how many samples you are going to use, however, keep in mind that the more samples
you use, the less error you will have.

Getting back to the contest, now you know another information that can be useful to you
to better guess the heigh of this Japanese man: the mean value. A quick check from the internet
showed that it is 172cm. Now you have a better idea of how tall this person could be. 
Having no further information, you could still guess it as 172, and still have better than before chance of winning the contest. But, you are still worried that this information might not be very reliable. Why? Look at the graph below: 


<div class="text-center" id="low-high-variance">
    <img src="{{site.url}}/assets/img/toolbox/mean_variance/close_spread.jpg" class="img-fluid" alt="example heights with mean 172 where spread is low">
</div>    

Now look at this one:

<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/mean_variance/wide_spread.jpg" class="img-fluid" alt="">
    <p></p>
</div>    


<br>

{% assign collapse-unique-id = "why-guess-with-mean" %}
{% assign collapse-btn-title = "Why is it a good idea to guess with mean?" %}
{% assign collapse-git-link = "" %}
{% capture collapse-content %}
<p>For the sake of this explanation, let's imagine that all of the possible values of
height of this Japanese man in the carnival are the values shown in the figure below:</p>
<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/mean_variance/close_spread.jpg" class="img-fluid" alt="example heights with mean 172 where spread is low">
</div>    
<p>Let's say that, instead of guessing with the mean value (172cm), you want to try your change with 164cm. We still don't know the actual height of this person, however, we can make some possible error analysis:</p>
<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/mean_variance/why_guess_mean_1.jpg" class="img-fluid" alt="case when we guess 162cm">
</div>    

<p>There are 6 possible height values this person can have, hence we have 6 cases:</p> 

<ol>
    <li>his actual height is 164cm &#8594; you made 0cm error,</li>
    <li>his actual height is 168cm &#8594; you made 4cm error,</li>
    <li>his actual height is 170cm &#8594; you made 6cm error,</li>
    <li>his actual height is 174cm &#8594; you made 10cm error,</li>
    <li>his actual height is 176cm &#8594; you made 12cm error,</li>
    <li>his actual height is 178cm &#8594; you made 14cm error</li>
</ol>

So if you guessed 164cm, on average you would make 7.6cm error:
$$\mu_{error} = \frac{0+4+6+10+12+14}{6}=7.6$$

What would happen, if you guessed 176cm? Again we have 6 cases:

<ol>
    <li>his actual height is 164cm &#8594; you made 12cm error,</li>
    <li>his actual height is 168cm &#8594; you made 8cm error,</li>
    <li>his actual height is 170cm &#8594; you made 6cm error,</li>
    <li>his actual height is 174cm &#8594; you made 2cm error,</li>
    <li>his actual height is 176cm &#8594; you made 0cm error,</li>
    <li>his actual height is 178cm &#8594; you made 2cm error</li>
</ol>

<p>So, on average you would make 5cm error:</p>
$$\mu_{error} = \frac{12+8+6+2+0+2}{6} = 5$$

<b>Note:</b> Here we are taking the absolute value of the error.
The reason for that is because when the error is negative,
there is still an error, however, it reduces the average error.
If you think about it, the sign of the error doesn't matter here,
only its value matters.


<p>Now, one last time, let's do it for the mean value:</p>

<ol>
    <li>his actual height is 164cm &#8594; you made 8cm error,</li>
    <li>his actual height is 168cm &#8594; you made 4cm error,</li>
    <li>his actual height is 170cm &#8594; you made 2cm error,</li>
    <li>his actual height is 174cm &#8594; you made 2cm error,</li>
    <li>his actual height is 176cm &#8594; you made 4cm error,</li>
    <li>his actual height is 178cm &#8594; you made 6cm error</li>
</ol>

$$\mu_{error} = \frac{8+4+2+2+4+6}{6} = 4.3$$

You can verify by calculating the average error for each possible height value that you get
the smallest average error when you guess with the mean value. Repeating one last time: we
still don't know the height of this person, however, if we guess it with mean, we would make
the least average error. That is why it is a good idea to guess with mean.
This situation is not only limited to this example, it is general. Mean value will always 
give you the least average error.

{% endcapture %}

{% include collapse.html collapse-unique-id=collapse-unique-id collapse-content=collapse-content collapse-btn-title=collapse-btn-title collapse-git-link=collapse-git-link %}

<br>


As you can see from the figures above, although in both cases mean values are the same,
the diversity is very different. So, okay, we know that the center of our data is located at mean value, however how much the rest of the data are spread? If most
of the data are close to mean, you can have higher confidence in your guess, since it
is very unlikely to have a data point that is further away from the mean (e.g. a 200cm or
120cm tall Japanese man). However, if the data are spread widely, you wouldn't be very
confident that predicting the height with mean value would be beneficial, because of the high 
**variance**. Let's continue...


<span id="scrollspy-item-3"></span>
## Variance
Have you noticed something keep popping up here and there in this post? Probably you have:
diversity. Mean gives us information about the center of our data, and the variance tells us how it is spread around it. 

Looking at a histogram plot could be very informative when we want to see the variance in data:

<br>

{% assign collapse-unique-id = "what-is-a-histogram-plot" %}
{% assign collapse-btn-title = "What is a histogram?" %}
{% assign collapse-git-link = "" %}
{% capture collapse-content %}
<p>
A histogram is a graphical display of data using bars of different heights. Each bar shows how much of the data you have is in a predefined range (also called: bin, or bucket). To make a histogram, 
first of all, you need to decide how many bins you are going to use, and what range each of these bins is 
going to have. 
</p>
<p>
Let's say you want to draw a histogram for the data you have, which is the height of 1000 Japanese males.
First of all, you need to select several ranges that are going to make your bins. Let's say:
[155, 160), (160, 165), (160, 165), (165, 170), (170, 175), (175, 180), (180, 185) and (185, 190].
The x-axis on a histogram shows the ranges you have selected, and the y-axis shows how many items
you have in each bin. The way this works is as follows: whenever you have a data point in the range
of one of your bins, you increase the number of items that bin has by 1. If you have a height value
of 183cm in your data, then you increase the number of items in (180, 185) bin by 1, and continue
this procedure until you put all of the data you have into one of the bins. 
</p>

<p>
Histograms are good visualizations of the distribution of data. It helps you to see in a blink of an eye
variance in your data
</p>
{% endcapture %}

{% include collapse.html collapse-unique-id=collapse-unique-id collapse-content=collapse-content collapse-btn-title=collapse-btn-title collapse-git-link=collapse-git-link %}

<br>

<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/mean_variance/histogram_svariance.png" class="img-fluid" alt="histogram plot with low variance">
    <p>Histogram plot with low variance</p>
</div>    

You can see from the figure above that most of the data points are collected around mean. Because of
the variance is low, the number of extremes (both very low and very high values of heigh) cases are very rare. 
Because of the variance is not in the same units as values in this graph, we can't directly show it on the graph
(remember the square in its equation), however knowing the definition of variance allows us to imagine how our data would look like without even a need to look at its graph. As a side note, we can, and we will show the standard
deviation on the distribution graph when we talk about it.

Going back to the contest, now you know why knowing variation gives us the confidence boost on our guess with the mean
value. If we know that the data have low variance, there is a much higher chance that our guess with the mean value will be closer to the actual height of this Japanese gentleman.

<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/mean_variance/histogram_hvariance.png" class="img-fluid" alt="histogram plot with high variance">
    <p>Histogram plot with high variance</p>
</div>    

However, if you look at the figure above, you can see that the variance is very high. Although the mean
is still 172cm, the data looks completely random. It is (almost) equally spread into each bin.

{% capture jumbotron-content %}
<h3>Variance</h3>
<p class="lead">Variance is a measure of how much the data points are spread around the mean</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content left=false %}{% endcapture %}
{{ jumbotron-include | markdownify }}

So, now that we know what the variance is we can talk about how to calculate it. The number we are
trying to get is the average squared distance between a data point and the mean value. This
makes sense, doesn't it? Mean gives us the center of the data, and averaging the distance
each data point has to this point can inform us about the spread. Don't worry if it is still not so
clear, like we did before, we are going to make an example to better understand how it works.

But why are we taking the squared distance? We said that we want to get an average distance between
the data points and the mean. What happens when a distance is negative? Because we are summing all
distances up (for averaging), negative distances would
decrease the total summation. We don't want that. That's why we square the distances, the point
here is to get an idea about the spread, regardless of where the data point is located (here I mean if it
is located at the left or right side of the mean). Why not use absolute value then? I won't go into
details of explaining this question, but in short, while the absolute value is not differentiable, the square is.
And if you think about it, taking the square of a distance doesn't have any negative effect on investigating
the spread of data around the mean. So, as it was with mean, you can calculate the variance on a 
population, or estimate it on a sample taken from the population.


{% capture jumbotron-content %}
<h3>Population Variance</h3>
$$\sigma^2 = \frac{\sum_{i=1}^{N}{(x_i - \mu)^2}}{N}$$
<p class="lead">Where $N$ represents the number of items in the population</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content left=false %}{% endcapture %}
{{ jumbotron-include | markdownify }}

Where $\sigma^2$ represents the population variance. The equation of sample variance changes a little from population variance:

{% capture jumbotron-content %}
<h3>Sample Variance</h3>
$$s^2 = \frac{\sum_{i=1}^{n}{(x_i - \bar{x})^2}}{n-1}$$
<p class="lead">Where $n$ represents the number of items in the sample</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content left=false %}{% endcapture %}
{{ jumbotron-include | markdownify }}


<br>

{% assign collapse-unique-id = "why-do-we-divide-with-n-1" %}
{% assign collapse-btn-title = "Why denominator is n-1?" %}
{% assign collapse-git-link = "" %}
{% capture collapse-content %}
<p>In short, $n$ in the denominator underestimates the variance.</p>
$$\frac{\sum_{i=1}^{n}{(x_i-\bar{x})^2}}{n} < \frac{\sum_{i=1}^{n}{(x_i-\bar{x})^2}}{n-1}$$

<p>
To understand the reason behind this, we first need to remember that we are estimating
both mean and variance. And, we use <b>estimated</b> mean to calculate the variance. To see
why this is an issue, let's make an example. For this example, we are going to assume that
our population is as shown in the figure below:
</p>

<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/mean_variance/why_n_1_population.png" class="img-fluid" alt="example population">
    <p>Example population</p>
</div>    

<p>
From the figure above, we know that the population mean is 172. However, in reality, we rarely have the information about the whole population. Mostly, we work on samples that
are taken from a population. Because of this reason, in reality, we would have a plot like
this:
</p>

<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/mean_variance/why_n_1_sample.png" class="img-fluid" alt="">
    <p>Example sample taken from the population</p>
</div>    

<p>
In this case, the estimated mean is 172.8. The thing to keep in mind is that, if different
samples had been sampled from the population, a different value for the estimated mean
would have been found.  So, let's investigate what happens to variance with
different values of the mean (here we use population variance's formula):

<h6>Mean is 164:</h6>
$$\sigma^2 = \frac{(164-164)^2+(168-164)^2+(174-164)^2+(178-164)^2+(180-164)^2}{5} = 113.6$$

<h6>Mean is 168:</h6>
$$\sigma^2 = \frac{(164-168)^2+(168-168)^2+(174-168)^2+(178-168)^2+(180-168)^2}{5} = 59.2$$

<h6>Mean is 172 (population mean):</h6>
$$\sigma^2 = \frac{(164-172)^2+(168-172)^2+(174-172)^2+(178-172)^2+(180-172)^2}{5} = 36.6$$

<h6>Mean is 172.8 (sample mean):</h6>
$$\sigma^2 = \frac{(164-172.8)^2+(168-172.8)^2+(174-172.8)^2+(178-172.8)^2+(180-172.8)^2}{5} = 36.16$$

<h6>Mean is 174:</h6>
$$\sigma^2 = \frac{(164-174)^2+(168-174)^2+(174-174)^2+(178-174)^2+(180-174)^2}{5} = 37.6$$

<h6>Mean is 178:</h6>
$$\sigma^2 = \frac{(164-178)^2+(168-178)^2+(174-178)^2+(178-178)^2+(180-178)^2}{5} = 63.2$$

<h6>Mean is 180:</h6>
$$\sigma^2 = \frac{(164-180)^2+(168-180)^2+(174-180)^2+(178-180)^2+(180-180)^2}{5} = 93.6$$

Now, let's plot these values:
</p>

<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/mean_variance/why_n_1_variance_plot.png" class="img-fluid" alt="plot of variance for different mean values">
    <p>Variance for different mean values</p>
</div>    

<p>
Not only for this example, if you plot this graph for any example you will notice 2 
important things: 
</p>

<ol>
    <li>the lowest variance value is get when the sample mean is used,</li>
    <li>population variance is always bigger than sample variance</li>
</ol>

Because of this situation is general, not only specific to this example, we use $n-1$ in 
the denominator to compensate for the change in the estimated variance.


{% endcapture %}

{% include collapse.html collapse-unique-id=collapse-unique-id collapse-content=collapse-content collapse-btn-title=collapse-btn-title collapse-git-link=collapse-git-link %}

<br>




To illustate how to calculate the variance we have the following data:

<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/mean_variance/variance_calculation.png" class="img-fluid" alt="example of variance calculation">
    <p>Example of variance calculation</p>
</div>    

There are 6 data points in the figure above, and the mean value for these 6 points is 172.

$$\sigma^2 = \frac{-8^2+-4^2+-2^2+2^2+4^2+6^2}{6} = 23.33$$

I didn't think it was necessary to make another section about **standard deviation**, because after you
know how to calculate variance it is very easy to find it. It is just the square root of the variance:

$$Standard \ deviation = \sqrt{Variance} = \sqrt{\sigma^2} = \sigma$$

<span id="std-table"></span>
Sometimes it is useful to think in terms of standard deviation. Because, it is proven [4] that, for all
distributions for which the standard deviation is defined, the amount of data within a number of standard
deviations of the mean is at least as much as given in the following table [5]:


| **Distance from mean** | **Minimum population** |
|:----------------------:|:----------------------:|
|    $\sqrt(2)\sigma$    |           50%          |
|        $2\sigma$       |           75%          |
|        $3\sigma$       |           89%          |
|        $4\sigma$       |           94%          |
|        $5\sigma$       |           96%          |
|        $6\sigma$       |           97%          |
|        $k\sigma$       |    $1-\frac{1}{k^2}$   |
|  $\frac{1}{1-l}\sigma$ |            l           |
{:.my-table}

You can look at [figure]({{page.url}}#normal-curve) below for visualization.


<span id="scrollspy-item-4"></span>
## Putting All Together
Now that we know both mean and variance, we can start talking about the normal distribution, and
fitting a *curve* on our data to calculate some probabilities. There are many different
probability distributions, however, I just want to make a gentle introduction to normal distribution
to have an idea about how to use mean and variance. A curve gives us the same information that a 
histogram does. However, it has some advantages over a histogram. Namely:

<span id="advantages-of-curve"></span>
1. When we sample from a population, because of the way we selected those samples, some bins in the
histogram might be unoccupied. So, what happens when we need to calculate that probability with the histogram? Since there are no values in that bin, does that mean that it is impossible to get a 
probability for the values belong to that bin? It is possible when we use a curve,
2. We know that we have to choose several ranges to calculate the number of elements in a bin and to draw a histogram. Let's say one of the ranges we have chosen for height distribution is (160, 165). 
But what happens if we want to calculate the probability of having a height between 163.24 and 164.95?
How to calculate this with a histogram? Well, we cannot, but we can do it if we had a curve that fits
onto that histogram.
3. If we don't have enough time or money to collect a lot of measurements (samples), the histogram of the
data might not be enough to make deductions. In that case, fitting a curve on the histogram using mean and
variance (or standard deviation), could save us a lot of time and money.


However, remember that both the histogram and the curve are **distributions**, and they show us how the 
probabilities of samples are distributed.

To draw a normal distribution, knowing only the mean and the variance is
sufficient. Important things to know about normal distribution are:

1. the total area under its curve is equal to 1.
2. It is a continuous distribution, hence probabilities are calculated for a specific range,
(e.g. probability of height being in the range 170-180) and the probability of a single point
(e.g. probability of height being 170) is 0.

I don't want to go into so many details about the normal distribution, because this is a
post mainly about mean and variance and how to use them. However, I am sure that many of you
will wonder how this curve was drawn. In continuous probability distributions
(where values are specified with *ranges* instead of singular values), probability density
functions are used to describe these distributions. And, the probability density function
for the normal distribution is as follows:

$$f(x) = \frac{1}{\sigma \sqrt{2\pi}}e^{\frac{1}{2}(\frac{x-\mu}{\sigma})^2}$$

I don't want you to try so hard to understand what is this equation, how it was found and
why it is like that. Instead, if you noticed that the only unknowns in this equation are the mean and the variance (the standard deviation can be found through variance), it is sufficient. And, if you plot this equation, you get the curve shown below.

Here we have an example of a normal distribution that is drawn using randomly generated
data that are representing the height of a Japanese man.


<div class="text-center" id="normal-curve">
    <img src="{{site.url}}/assets/img/toolbox/mean_variance/fitted_curve_normal.png" class="img-fluid" alt="randomly generated normal distribution representing height of Japanese male">
    <p>Randomly generated normal distribution representing height of Japanese men</p>
</div>    

Now we are ready to go back to the contest and make some educated guess. You are planning to guess 172cm (the mean value) as this person's height, 
but you also want to be sure that you have a good enough probability of winning that katana. You decide that if the probability of height is in the range $168 < height < 176$ is more than 25%, you are going to go with the mean value. So, the next thing you do is to calculate this probability.

As we said before, we calculate probability in a range by calculating the area under
the curve that is covering that range:

<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/mean_variance/calculate_auc.png" class="img-fluid" alt="area under the curve in the range 168-176cm">
    <p>Area Under the Curve in the range 168-176cm</p>
</div>    

<br>

{% assign collapse-unique-id = "how-to-plot-normal-and-calculate-auc" %}
{% assign collapse-btn-title = "How to plot a normal distribution and calculate AUC?" %}
{% assign collapse-git-link = "https://github.com/kivancyuksel/emkademy/blob/master/research/toolbox/normal_distribution_and_auc_score.ipynb" %}
{% capture collapse-content %}

{% highlight python linenos %}
from matplotlib.pyplot import figure
import matplotlib.pyplot as plt
import numpy as np
import scipy.stats as stats
from sklearn.metrics import auc


class Normal:
  def __init__(self, mean, std):
    self.mean = mean
    self.std = std
    self.variance = std**2
    self.bins = None
  
  def pdf(self, x):
    return 1/(self.std * np.sqrt(2 * np.pi))*\
           np.exp(-(x - self.mean)**2 / (2 * self.variance))

  def plot_on_histogram(self, n_samples, std_xticks=False):
    samples = np.random.normal(self.mean, self.std, n_samples)

    figure(figsize=(16,12))
    count, self.bins, ignored = plt.hist(samples, 30, density=True)
    mean_x, mean_y = self.get_mean_line_coordinates()    
    plt.plot(self.bins, self.pdf(self.bins), linewidth=2, color='r')
    plt.plot(mean_x, mean_y)
    self.show_variance()
    plt.legend(["distribution curve", "mean", "variance"], fontsize=20)
    if std_xticks:
      plt.xticks([self.mean+n*self.std for n in range(-3, 4)], 
                 [str(n) + r'$\sigma$' if n != 0 else str(self.mean) for n in range(-3, 4)],
                 fontsize=20)
    plt.show()

  def show_variance(self):
    std_right = self.mean+self.std
    std_left = self.mean-self.std
    std_x = [std_left, std_right]
    std_y_value = self.pdf(std_right)
    std_y = [std_y_value, std_y_value]

    plt.plot(std_x, std_y)

  def calculate_auc_in_range(self, a, b, step=0.0001, plot=False):
    section = np.arange(a, b, step)
    auc_score = auc(section, self.pdf(section))

    if plot:
      assert self.bins is not None
      figure(figsize=(16,12))
      plt.plot(self.bins, self.pdf(self.bins), linewidth=2, color='r')
      plt.fill_between(section, self.pdf(section), facecolor="blue")
      plt.show()
    return auc_score

  def get_mean_line_coordinates(self):
    mean_x = [self.mean, self.mean]
    mean_y = [0, self.pdf(self.mean)]
    return mean_x, mean_y


mean = 172
std = 10
n_samples = 1000
normal_dist = Normal(mean, std)

normal_dist.plot_on_histogram(n_samples, std_xticks=True)

a = 168
b = 176
auc_score = normal_dist.calculate_auc_in_range(a, b, plot=True)

print("AUC score: ", auc_score)
{% endhighlight %}

{% endcapture %}

{% include collapse.html collapse-unique-id=collapse-unique-id collapse-content=collapse-content collapse-btn-title=collapse-btn-title collapse-git-link=collapse-git-link %}

<br>

Based on this distribution, the probability that the height of a Japanese man is between 168-176cm is 0.31. 
Considering there are many more possible height values, you think this is a pretty good 
probability, and make your final guess with 172cm.

Congrulations! You won the katana!

<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/mean_variance/you_won.png" class="img-fluid" alt="you won the katana">
</div>    


<span id="scrollspy-item-5"></span>
## Recap
* **Mean** gives us information about the center location within a dataset. If measurements for all population is known (e.g. height values of every Japanese male), it can be calculated as follows:

$$Population \ Mean = \mu = \frac{\sum_{i=1}^{N}{x_i}}{N}$$

Where $N$ is the number of items in the population.

If we have measurements for only a part of the population (because, for example, we didn't have enough
time or money to collect measurements for the whole population), we can still *estimate* mean as follows:

$$Sample \ Mean = \bar{x} = \frac{\sum_{i=1}^{n}{x_i}}{n}$$

Where $n$ is the number of items in the sample that is taken from the population.

* **Variance** is a measure of how much the data points are spread around the mean. As it was with 
the mean, we can calculate variance for both a population or a sample that is taken from a population.

$$Population \ Variance = \sigma^2 = \frac{\sum_{i=1}^{N}{(x_i - \mu)^2}}{N}$$

Where $N$ is the number of items in the population

The equation for estimating the variance with a sample taken from the population, we use slightly 
different equation:

$$Sample \ Variance = s^2 = \frac{\sum_{i=1}^{n}{(x-\bar{x})^2}}{n-1}$$

Where $n$ is the number of items in the sample.

* **Standard Deviation** is equal to the square root of variance. It is sometimes useful to think in terms
of standard deviation, because of [this]({{page.url}}#std-table)

$$Standard \ Deviation = \sigma = \sqrt{\sigma^2}$$

* Both histogram and curve are distributions, and they show us how the probabilities of
samples are distributed. However the curve has some [advantages]({{page.url}}#advantages-of-curve)
over a histogram. 

* Normal distribution is a continues probability distribution, hence it is represented with a 
probability density function:

$$f(x) = \frac{1}{\sigma \sqrt{2\pi}}e^{\frac{1}{2}(\frac{x-\mu}{\sigma})^2}$$

As can be seen from the equation above, knowing mean and variance is enough to use the
normal distribution. In continuous distributions, probabilities of events are calculated
within specific ranges (instead of actual values), and AUC is used to calculate these
probabilities.

<span id="scrollspy-item-6"></span>
## Conclusions
There is diversity on earth, and most of the things are non deterministic. 
That's why, to better understand things around us, we need models that might explain them to us. Statistical models are widely used to describe different
populations and natural phenomena. Whether you are interested in having a clue about who
might win the next election in your country, or you are trying to learn how much
variations you should expect in measuring current in a copper wire, or something completely
different; I hope that the things you learned in this blog post will help you to achieve that.


<span id="scrollspy-item-7"></span>
## References

1. [https://worldpopulationreview.com/countries/average-height-by-country/](https://worldpopulationreview.com/countries/average-height-by-country/){:target="_blank"}
2. [https://worldpopulationreview.com/countries/japan-population/](https://worldpopulationreview.com/countries/japan-population/){:target="_blank"}
3. [https://www.guinnessworldrecords.com/news/2019/2/a-history-of-record-breaking-giants-100-years-after-the-tallest-man-in-the-world-511577/](https://www.guinnessworldrecords.com/news/2019/2/a-history-of-record-breaking-giants-100-years-after-the-tallest-man-in-the-world-511577/){:target="_blank"}
4. [https://en.wikipedia.org/wiki/Chebyshev%27s_inequality](https://en.wikipedia.org/wiki/Chebyshev%27s_inequality){:target="_blank"}
5. [https://en.wikipedia.org/wiki/Standard_deviation](https://en.wikipedia.org/wiki/Standard_deviation){:target="_blank"}
6. [https://en.wikipedia.org/wiki/List_of_the_verified_shortest_people](https://en.wikipedia.org/wiki/List_of_the_verified_shortest_people){:target="_blank"}
