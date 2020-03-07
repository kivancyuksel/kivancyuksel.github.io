---
layout: post
title: 'Accuracy, Precision, Recall and F1 Score'
excerpt: ''
tags: 
    - machine learning
    - classification 
    - metrics
categories: [toolbox]
date: 2019-06-25 13:14:15
---


One of the most important decisions that has to be made before starting a Machine Learning project is to decide which metric to use. 
It is so crucial, in a sense that wrong metric can potentially trick you to believe that your model is good, or getting better, when in reality it is not.

I have a feeling that *accuracy* sometimes might be considered as "one metric to rule them all". However, this is not the case. 
One should choose which metric to use based on the business needs. What is trying to be achieved? What is the output of the model? 
What is the impact of your model to say that something belongs to some particular class (what is the consequence of this decision)?
These are some essential questions that one should consider before doing anything else.

This post introduces four metrics that can be used for classification tasks, namely: *accuracy, precision, recall, and f1 score*. None of these metrics are better,
or worse then the other. The point here is to choose the right one for the problem you are trying to solve. Alright, let's get started then... :)

To understand these metrics easier, I am going to use a tool called **Confusion Matrix**. It is simply a graph that shows us our model's performance.
For example, let's say that our model classifies emotions based on a face image. Our confusion matrix could look something like this:

```python
import itertools
import matplotlib.pyplot as plt
import numpy as np
from sklearn.metrics import confusion_matrix
from matplotlib.pyplot import figure

classes_to_labels = {
    "happy": 0.0,
    "sad": 1.0,
    "angry": 2.0
}
n = 100

def generate_random_labels(n):
    return np.random.choice(list(classes_to_labels.values()), n)

def predict(n):
    return np.random.choice(list(classes_to_labels.values()), n)

def plot_confusion_matrix(cm, class_names, title='Confusion matrix', cmap=plt.cm.Blues):
    plt.imshow(cm, interpolation='nearest', cmap=cmap)
    plt.title(title)
    plt.colorbar()
    tick_marks = np.arange(len(class_names))
    plt.xticks(tick_marks, class_names, rotation=90)
    plt.yticks(tick_marks, class_names)

    fmt = 'd'
    thresh = cm.max() / 2.
    for i, j in itertools.product(range(cm.shape[0]), range(cm.shape[1])):
        plt.text(j, i, format(cm[i, j], fmt),
                 horizontalalignment="center",
                 color="white" if cm[i, j] > thresh else "black")

    plt.ylabel('True label')
    plt.xlabel('Predicted label')
    plt.tight_layout()
    plt.show()
    
y_true = generate_random_labels(n)
y_pred = predict(n)

class_names = list(classes_to_labels.keys())
labels = list(classes_to_labels.values())
figure(num=None, figsize=(16, 12), dpi=60, facecolor='w', edgecolor='k')
cm = confusion_matrix(y_true, y_pred, labels=labels)
plot_confusion_matrix(cm, class_names)
```

<div class="text-center show-my-image">
    <img src="{{site.url}}/assets/img/toolbox/confusion_matrix.png" class="img-fluid" alt="confusion matrix"/>
    <p>Confusion Matrix</p>
</div>    


Columns of this graph show us how many samples a particular class has ( in this case, we have: *happy=35, angry=35, sad=30* ), and rows show our model's predictions.
For example, we have 35 samples for the *happy* class, however our model predicted *happy=14, sad=10, angry=11*. If we had all of the entries of this matrix on its diagonal, we would have a perfect model.

Now that we know how confusion matrix work, let's come back to the main topic of this post. Imagine, our model's predictions are shown on the confusion matrix below,


<div class="text-center show-my-image">
    <img src="{{site.url}}/assets/img/toolbox/absurt_confusion_matrix.png" class="img-fluid" alt="absurt confusion matrix"/>
    <p>Another example of confusion matrix</p>
</div>    


Well, you need to be very careful now... If you didn't think carefully before you choose the metric you used, and directly picked accuracy as your metric, you might fool yourself to believing that your model is amazing. Look, it has %99 accuracy! There are a number of problems here. The first, and probably the most obvious, one is: the data is imbalanced. Your model can easly learn to output a single label no matter what its input is, and still have a very high accuracy. There are different methods you can use to solve this particular problem, and one of them is to choose a different metric then accuracy ( since this post is not specifically about this problem, I don't mention the other methods here ).

Another problem is have you actually thought about how important is your model's decision? What impact it has in real life? For example, what if your model predicts whether a person has cancer? or what if it predicts if a person is a terorist? ( From the confusion matrix above ) That 1 time your model predicted wrong can potentially change somebody's life drastically. From these examples, it could say that somebody is a terrorist which in reallty s/he is not. Or, it could predict with very high accuracy that somebody doesn't have a cancer which in reality s/he has. 

To deal with these problems, I would like to introduce some other metrics than accuracy.

## Precision 
Let's start with the mathematical formula of precision:

$$\frac{3}{5}$$

