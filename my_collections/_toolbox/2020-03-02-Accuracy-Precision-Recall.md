---
layout: post
title: 'Accuracy, Precision, Recall, F1 Score and ROC curve'
author: Kıvanç Yüksel
excerpt: In this post, we discuss some other metrics that can be used for classification problems instead of accuracy. By real-world examples, it is shown how crucial it is to think very carefully before choosing a metric to use.
    Because wrongly chosen metrics can potentially fool you to believe that your model is very good when in reality it is not.

tags: 
    - machine learning
    - classification 
    - metrics
    - precision
    - recall
    - f1 score
    - false positive rate
    - true positive rate
    - roc curve
    - auc
categories: [toolbox]
date: 2020-03-02 13:14:15
---

{% capture jumbotron-content %}
<h3>Objectives</h3>
<p>By the end of this post you should:</p>
<ul>
<li> understand why accuracy is not always the best metric of choice in classification tasks, </li>
<li> understand the difference between accuracy, precision, recall and F1 score and be able to choose the right metric for your needs,</li>
<li> be able to use Receiver Operating Characteristic (ROC) curve and Area Under the Curve (AUC) to make decisions about: </li>
    <ul>
    <li> which threshold (to classify a sample as positive) is better for your model, </li>
    <li> among all of the models you trained, which one is actually the best.</li>
    </ul>
</ul>

{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content left=true%}{% endcapture %}
{{ jumbotron-include | markdownify }}

---

One of the most important decisions that have to be made before starting a Machine Learning project is to decide which metric to use. 
It is so crucial, in a sense that the wrong metric can potentially trick you to believe that your model is good, or getting better when in reality it is not.

I have a feeling that *accuracy* sometimes might be considered as "one metric to rule them all". However, this is not the case. 
Choosing a metric should be done after asking a number of questions:  What is trying to be achieved? What is the output of the model? 
What is the consequence of its decision? What about your data? What kind of it do you have? Is it balanced? These are some 
essential questions that one should consider before doing anything else.

This post introduces four metrics, namely: *accuracy, precision, recall, and f1 score*. None of these metrics are better, 
or worse than the other. The point here is to choose the right one for the problem you are trying to solve. Alright, let's get started then... :)

To understand these metrics easier, I am going to use a tool called **Confusion Matrix**. It is simply a graph that shows us our model's performance.
For example, let's say that our model classifies emotions based on a face image. Our confusion matrix could look something like this:


{% assign collapse-unique-id = "how-to-draw-a-confusion-matrix" %}
{% assign collapse-btn-title = "How to Draw a Confusion Matrix?" %}
{% assign collapse-git-link = "https://github.com/kivancyuksel/emkademy/blob/master/research/toolbox/confusion_matrix.ipynb" %}
{% capture collapse-content %}
{% highlight python linenos %}
import itertools
import matplotlib.pyplot as plt
import numpy as np
from sklearn import metrics
from matplotlib.pyplot import figure

classes_to_labels = {
    "happy": 0.0,
    "sad": 1.0,
    "angry": 2.0
}

n = 100

# A dummy function used to create random "true labels"
def generate_random_labels(n):
    return np.random.choice(list(classes_to_labels.values()), n)

# A dummy function to simulate model predictions
def predict(n):
    return np.random.choice(list(classes_to_labels.values()), n)


def plot_confusion_matrix(confusion_matrix, class_names, title='Confusion matrix', cmap=plt.cm.Purples):
    plt.imshow(confusion_matrix, interpolation='nearest', cmap=cmap)
    plt.title(title)
    plt.colorbar()
    tick_marks = np.arange(len(class_names))
    plt.xticks(tick_marks, class_names, rotation=90, fontsize=20)
    plt.yticks(tick_marks, class_names, fontsize=20)

    fmt = 'd'
    thresh = confusion_matrix.max() / 2.
    for i, j in itertools.product(range(confusion_matrix.shape[0]), range(confusion_matrix.shape[1])):
        plt.text(j, i, format(confusion_matrix[i, j], fmt),
                 horizontalalignment="center",
                 color="white" if confusion_matrix[i, j] > thresh else "black", fontsize=20)

    plt.ylabel('Actual label', fontsize=20)
    plt.xlabel('Predicted label', fontsize=20)
    plt.tight_layout()
    plt.show()

y_true = generate_random_labels(n)
y_pred = predict(n)

class_names = list(classes_to_labels.keys())
labels = list(classes_to_labels.values())

figure(num=None, figsize=(16, 12), dpi=60, facecolor='w', edgecolor='k')
confusion_matrix = metrics.confusion_matrix(y_true, y_pred, labels=labels)
plot_confusion_matrix(confusion_matrix, class_names)
{% endhighlight %}
{% endcapture %}

{% include collapse.html collapse-unique-id=collapse-unique-id collapse-content=collapse-content collapse-btn-title=collapse-btn-title collapse-git-link=collapse-git-link %}


<div class="text-center show-my-image">
    <img src="{{site.url}}/assets/img/toolbox/precision_recall/confusion_matrix.png" class="img-fluid" alt="confusion matrix"/>
    <p>Confusion Matrix</p>
</div>    


Columns of this graph show us how many samples a particular class has ( in this case, we have: *happy=33, angry=29, sad=38* ), and rows show our model's predictions.
For example, we have 33 samples for the *happy* class, however, our model predicted *happy=12, sad=15, angry=6*. If we had all of the entries of this matrix on its diagonal, we would have a perfect model.

Now that we know how confusion matrix works, let's come back to the main topic of this post. Imagine, our model's predictions are as shown on the confusion matrix below,


<div class="text-center show-my-image">
    <img src="{{site.url}}/assets/img/toolbox/precision_recall/absurt_confusion_matrix.png" class="img-fluid" alt="absurt confusion matrix"/>
    <p>Another example of confusion matrix</p>
</div>    


Well, you need to be very careful now... If you didn't think carefully before you choose the metric you used, and directly picked accuracy as your metric, you might fool yourself to believing that your model is amazing. Look, it has 99% accuracy! But... There are a number of problems here. The first, and probably the most obvious, one is: the data is imbalanced. Your model can easily learn to output a single label no matter what its input is and still have very high accuracy. There are different methods you can use to solve this particular problem,
and one of them is to choose a different metric then accuracy ( since this post is not specifically about this problem, I don't mention the other methods here ).

Another problem is: have you actually thought about how important is your model's decision? What impact it has in real life? For example, what if your model predicts whether a person has cancer? or what if it predicts if a person is a terrorist? ( From the confusion matrix above )
That 2 times your model predicted wrong could potentially change somebody's life drastically. In one of those cases, there is an individual who is not a terrorist, but your model says that s/he is. Furthermore, although your model's accuracy is 99%, it wasn't able to detect any
terrorist, even though there is one. Or, if this was a model which is used to classify if a patient has an infectious virus, what do you think the consequence would be when our model says with 99% confidence that a person doesn't have a virus when in reality s/he has? 

To deal with these problems, let's check some other metrics than accuracy.

## Precision 
Let's start with the mathematical formula of precision:

<div class="my-equation">
$$precision = \frac{True \ Positives}{True \ Positives + False \ Positives}$$
</div>

Let's think about this equation a little bit. What benefit do we get using precision as our metric? 

As long as there are no *False Positives* your model's accuracy is $1$ (assuming *True Positives $\geq$ 0*). 
The moment you start having some *False Positives*, the precision starts decreasing. We had 99% accuracy on 
above example, let's check what precision we have:

<div class="my-equation">
$$precision = \frac{0}{0+1} = 0.0$$
</div>

Now we are getting somewhere. So, based on precision, our model is not that good after all... But, when to use precision? If the number of 
*False Positives* are crucial to you, then you should use precision. For example, if your model predicts whether an email is a spam, you would be very concerned with the number of *False Positives* you have. 
 Because a *False Positive* would mean that an email is spam, and maybe a user would miss a very 
 important email because of that decision.

{% capture jumbotron-content %}
<h3>When to use precision?</h3>
<p class="lead">If the number of false positives your model makes is very crucial to you, and you don't mind a lot about false negatives, then precision could be the metric you should consider using.</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}


## Recall
What about recall then? Again, let's check the equation:

<div class="my-equation">
$$recall = \frac{True \ Positives}{True \ Positives + False \ Negatives}$$
</div>

This time, as long as there is no *False Negative*, we are home. Whenever the cost of having *False Negatives*
 is too high, maybe you should consider using recall as your metric. As an example, we can think of a model that predicts if a patient has an infectious virus. When we have a *False Negative*, we say, okay, this patient doesn't have a virus, when in reality s/he has and the cost of having a *False Positive* is more people infected by the disease. 

{% capture jumbotron-content %}
<h3>When to use recall?</h3>
<p class="lead">Recall punishes false negatives, hence it could be the metric of choice when the thing you care the most is false negatives your model make, and you don't worry too much about false positives.</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}

## F1 Score

Before we delve into *F1 Score's* equation, I would like you to imagine a situation where things can go wrong, let's look at *recall's* equation again:

<div class="my-equation">
$$recall=\frac{True \ Positives}{True \ Positives + False \ Negatives}$$
</div>

What could possibly go wrong here? Well, considering the classification problem we discussed earlier; what happens if we classify everyone as a terrorist? Let's see:

<div class="my-equation">
$$recall = \frac{1}{1+0} = 1$$
</div>

As you can see, even though our model has very little value in reality (because we classify everybody as a terrorist!), it has a perfect *recall* score. Of course, there is a reverse proportion in between *precision* and *recall*, when we increase *recall* we decrease *precision*.
But, do we need to keep track of both of these metrics when both are important to us? The answer is no because we have *F1 Score* to do that for us. Now let's check its equation:

<div class="my-equation">
$$F1 = 2 * \frac{precision*recall}{precision+recall}$$
</div>

F1 score combines both precision and recall, so that our metric considers both of them. The reason why F1 score uses harmonic mean instead 
of averaging both values ( $\frac{precision+recall}{2}$ ) is because harmonic mean punishes extreme values. When we have &nbsp; 
$precision=1.0$ &nbsp; and &nbsp; $recall=0.0$ &nbsp; average of them is &nbsp; $0.5$ &nbsp;, however, the harmonic mean is  &nbsp; $0.0$.

{% capture jumbotron-content %}
<h3>When to use F1 Score?</h3>
<p class="lead">When both precision and recall is important for you, you can consider using F1 Score as you metric.</p>
{% endcapture %}

{% capture jumbotron-include %}{% include jumbotron.html content=jumbotron-content %}{% endcapture %}
{{ jumbotron-include | markdownify }}

## Receiver Operating Characteristic (ROC) Curve

ROC curve is a very useful visualization tool that can help us infer our model's performance. It shows us the relationship between precision and recall as we vary a threshold for selecting positives. To be a bit more clear: if our model is trying to predict if a person is smiling from
a given image, it could output a score between 0 and 43. We can then choose a threshold to decide when we have a positive (smile) sample. Like I said before, the ROC curve helps us
to see our model's performance with different thresholds.

In the ROC curve, we plot *"False Positive Rate (FPR)"* on the x-axis, and *"True Positive Rate (TPR)"* on the y-axis. We have already seen true positive rate in this post, it is recall. And the false positive rate is the probability of a false alarm: how many times our model wrongly classified an actual negative sample as positive?

<div class="my-equation">
$$True \ Positive \ Rate = \frac{True \ Positives}{True \ Positives + False \ Negatives}$$
</div>

<br>

<div class="my-equation">
$$False \ Positive \ Rate = \frac{False \ Positives}{False \ Positives + True \ Negatives}$$
</div>

<br>

{% assign collapse-unique-id = "how-to-draw-a-roc-curve" %}
{% assign collapse-btn-title = "How to draw a ROC curve and calculate AUC?" %}
{% assign collapse-git-link = "https://github.com/kivancyuksel/emkademy/blob/master/research/toolbox/roc_curve_and_auc_score.ipynb" %}
{% capture collapse-content %}
{% highlight python linenos %}
import matplotlib.pyplot as plt
from sklearn.metrics import auc
from matplotlib.pyplot import figure

# Since this is just an example, the values are selected manually
# values: [TP, FP, TN, FN]
threshold_to_values = {
    0.0: [500, 500, 0, 0],
    0.1: [480, 460, 40, 20],
    0.2: [470, 430, 70, 30],
    0.3: [450, 380, 120, 50],
    0.4: [440, 320, 180, 60],
    0.5: [400, 270, 230, 100],
    0.6: [360, 180, 320, 140],
    0.7: [320, 120, 380, 180],
    0.8: [270, 80, 420, 230],
    0.9: [140, 40, 460, 360],
    1.0: [0, 0, 500, 500],
}

actual_labels = [0] * 500 + [1] * 500
true_positive_rate = []
false_positive_rate = []

# true_positive_rate = true_positives / (true_positives + false_negatives)
# false_positive_rate = false_positives / (false_positives + true_negatives)
for threshold, values in threshold_to_values.items():
  true_positive_rate.append(values[0] / (values[0] + values[3]))
  false_positive_rate.append(values[1] / (values[1] + values[2]))

thresholds = list(threshold_to_values.keys())

figure(num=None, figsize=(16, 12), dpi=60, facecolor='w', edgecolor='k')
plt.plot(false_positive_rate, true_positive_rate, linestyle="--", marker="o")
# The diagonal line
plt.plot(thresholds, thresholds, linestyle="--", marker="o")
plt.xlabel('False Positive Rate', fontsize=20)
plt.ylabel('True Positive Rate', fontsize=20)
plt.xticks(fontsize=20)
plt.yticks(fontsize=20)
plt.title("Receiver Operating Characteristic (ROC) Curve", fontsize=20)
plt.legend(["trained model", "random model"], fontsize=20)
for threshold, t, f in zip(thresholds, true_positive_rate, false_positive_rate):
  plt.annotate(threshold, (f-0.04, t+0.02), fontsize=20)
plt.show()

auc_score = auc(false_positive_rate, true_positive_rate)
auc_diagonal = auc(thresholds, thresholds)

print("AUC DIAGONAL LINE: ", auc_diagonal)
print("AUC FOR THE OTHER CURVE: ", auc_score)
{% endhighlight %}
{% endcapture %}

{% include collapse.html collapse-unique-id=collapse-unique-id collapse-content=collapse-content collapse-btn-title=collapse-btn-title collapse-git-link=collapse-git-link %}

<br>

The figure above shows an example of a ROC curve. Each curve drawn on the graph represents a model. When we move along a curve, we walk through different values of threshold. As it can be
seen from the graph, each curve starts at the origin and ends at the right top corner of the graph. This is because of the extremes of the threshold value, namely 0 and 1. When the threshold is "0", our model classifies everything as *positive*, so, both the *True Positive Rate* and *False Positive Rate* becomes 1 ( in true positive rate case we don't have any "False Negatives", and in false positive rate case we don't have any "True Negatives" ). On the other hand, when the threshold is "1", we classify everything as *negative*, so, both
*True Positive Rate*, and *False Positive Rate* becomes 0. From this logic, we can see that the threshold decreases on a curve in the direction from top-right to bottom-left.

The black diagonal line shows the case when we have an equally true and false positive rate for each threshold value. This means that the model doesn't have any ability to distinguish between
positive and negative cases, it is a random model. We expect our trained model to draw a curve above the diagonal line.

To measure which model we train has a higher value to us, we use a method called *" Area Under the Curve"* shortly **AUC**. The value of AUC also ranges between 0 and 1, and the higher is the better. As its name suggests, it is calculated by calculating the *area* under a drawn ROC curve. As an example, the AUC of the diagonal line is 0.5.

## Putting All Together -- An Example

Let's make an example to put everything we learned together. In this example, we want our model to classify if a person has an infectious virus. On its output, it gives us some score between $0.0-1.0$ (note that the score doesn't need to be between $0.0-1.0$, it
could be in another range) that we can use to predict if a patient is ill.

We have data of 1000 patients. This data contains some test results as well as the actual status of the patient (if s/he has the virus
or not). Let's say we trained a model, tested it on different thresholds, and the results are as shown in the table below:

| **Threshold** | **TP** | **FP** | **TN** | **FN** |
|:-------------:|:------:|:-------:|:------:|:------:|
|      0.0      |   500  |   500   |    0   |    0   |
|      0.1      |   480  |   460   |   40   |   20   |
|      0.2      |   470  |   430   |   70   |   30   |
|      0.3      |   450  |   380   |   120   |   50   |
|      0.4      |   440  |   320   |   180  |   60   |
|      0.5      |   400  |   270   |   230  |   100  |
|      0.6      |   360  |   180   |   320  |   140  |
|      0.7      |   320  |   120   |   380  |   180  |
|      0.8      |   270  |    80   |   420  |   230  |
|      0.9      |   140  |    40   |   460  |   360  |
|      1.0      |    0   |    0    |   500  |   500  |
{:.my-table}

**Note:** Since it would take me more time to actually train a model and draw this table, I manually picked the values that are visible in the table. The point here is to understand how everything works, and I don't think doing this causes any harm, but saves me some time :).

Based on this table, let's calculate everything we learned so far. Because of each calculation shown below is exactly the same for each threshold, I am going to choose only 1 threshold for demonstration purposes, let's say it is: $0.5$

<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/precision_recall/th_05_confusion_matrix.png" class="img-fluid" alt="">
    <p>Confusion matrix for threshold=0.5</p>
</div>    

<br/>

<div class="my-equation">
$$precision = \frac{TP}{TP+FP} = \frac{400}{400+270} = 0.59$$
</div>

<br/>

<div class="my-equation">
$$recall = \frac{TP}{TP+FN} = \frac{400}{400+100} = 0.8$$
</div>

<br/>

<div class="my-equation">
$$F1 = 2*\frac{precision*recall}{precision+recall} = 2*\frac{0.59*0.8}{0.59+0.8} = 0.67$$
</div>

<br/>

<div class="my-equation">
$$TPR = recall = 0.8$$
</div>

<br/>

<div class="my-equation">
$$FPR = \frac{FP}{FP+TN} = \frac{270}{270+230} = 0.54$$
</div>

<br/>

<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/precision_recall/roc_curve.png" class="img-fluid" alt="an example roc curve">
    <p>ROC curve for threshold=0.5</p>
</div>    

<div class="text-center">
    <img src="{{site.url}}/assets/img/toolbox/precision_recall/all_results.png" class="img-fluid" alt="">
    <p>Calculations for each threshold value</p>
</div>    

Things to remember about ROC curve are as follows: 

1. One curve describes one model. So, if we had different models, we would have as many curves as the models we have,
2. Moving along a curve gets us a model's *TPR* and *FPR* values for different thresholds.
3. ROC curve helps us to see all of the concepts we learned in this post together. 

When the threshold is 0.0 the model has perfect *recall*, however since it classifies everything as positive (so, everyone has the virus), the number of *False Positives* are very high, 
thus it's *precision* is very low (hence the *F1 Score* is low). On the other hand, when the threshold is 1.0, the model predicts everything as negative (hence, nobody has the virus), 
so, both the model's *precision* and *recall* is 0. When we move along the line and decrease the threshold, the model starts to classify more and more positives, hence *recall* 
starts increasing. However, together with *True Positives*, *False Positives* increases as well, this causes *precision* to decrease. 

So in the end, we can play with different values of threshold and choose one that maximizes the metric of our choice. For example, if we want to use *F1 Score* as our metric, based
on the given table above, we would choose 0.4 as our threshold, and use it whenever we want to make a prediction with our model.

## Recap

* **Precision** helps you to answer the following question: Among all of the positives my model predicted, how many percent of it was actually right? So when it is crucial for you to 
have a low amount of *False Positives* (e.g. if you classify an email as spam when your model outputs a positive), and "the negative cases (both false and true)" are less important 
for you, this could be the metric of your choice,

<div class="my-equation">
$$precision = \frac{True \ Positives}{True \ Positives + False \ Positives}$$
</div>

* **Recall** helps you to answer the following question: Among all of the actual positives I have, how many percent of it my model could actually predict right? So when it is crucial 
for you to have a low amount of *False Negatives* (e.g. a patient has an infectious virus and a false negative means that your model says that s/he doesn't have).

<div class="my-equation">
$$recall = \frac{True \ Positives}{True \ Positives + False \ Negatives}$$
</div>

* **F1 Score** is the metric of choice when both *precision* and *recall* is important for you. Because this metric combines both together and punishes extreme values for each.

<div class="my-equation">
$$F1 = 2 * \frac{precision*recall}{precision+recall}$$
</div>

* **Receiver Operating Characteristic (ROC)** curve is obtained by plotting *False Positive Rate (FPR)* on the x-axis, and *True Positive Rate (TPR)* on the y-axis. A single curve represents a single model, and moving along it represents changing the threshold. ROC curve is very informative, in a sense that, it puts everything we learned in this post together and gives 
us a very nice visualization

<div class="my-equation">
$$True \ Positive \ Rate = \frac{True \ Positives}{True \ Positives + False \ Negatives}$$
</div>

<br>

<div class="my-equation">
$$False \ Positive \ Rate = \frac{False \ Positives}{False \ Positives + True \ Negatives}$$
</div>

<br>

* **Area Under the Curve** help you to answer the following question: Among all of the models I trained, which one is actually is the best? As its name suggests, 
it is calculated by calculating the area under the curve. In this blog post, we used ROC as our graph, so we calculated the area below the curves that were drawn on it.

## Conclusions

It is very crucial to understand that the metric you choose meters a lot. A wrongly chosen metric can fool you to think that the model you trained is much better than it is in reality. This,
in return, potentially harm your business or maybe even worse. 

You should keep in mind that accuracy is not the only metric that exists. While deciding which metric to use, you should ask yourself the following questions:
1. What my model is actually doing?
2. What is the consequence of my model's decision?
3. What is the most important thing I want from my model? Is it a low number of *False Positives*? Low number of *False Negatives*? or both are important?
4. How do my data look like? Is it balanced?

After asking these questions, hopefully, you can come up with a metric that best suits your needs.

Please leave a comment below if you have any feedback, criticism, or something that you would like to discuss. I can also be reached on social media:  [@kivanc_yuksel](https://twitter.com/kivanc_yuksel)
