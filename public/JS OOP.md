# JS 面向对象基础理论

[OOP:The general theory](http://dmitrysoshnikov.com/ecmascript/chapter-7-1-oop-general-theory/)
    
[OOP:ECMAScript implementation](http://dmitrysoshnikov.com/ecmascript/chapter-7-2-oop-ecmascript-implementation/)

[TOC]

## 简介

在这篇文章里面，我们考虑 [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) 的主要部分。这篇文章不像大多数讨论过这个话题的其他文章一样，我们会更关注深入浅出的解释理论部分。特别地，我们会考虑对象创建的理论，包括继承在内的对象之间的关系怎么实现的，以及给出一些合适的定义。

## 基本规定，范式和思想

在分析 ECMAScript 中间的 OOP 部分时，有必要明确一系列词汇以及概括一下基本理论的主要部分。

es 支持很多种编程范式，包括结构式，面向对象，函数式，命令式以及某些情况下面向切面。但是这篇文章致力于面向对象，让我们给 es 中间的面向对象部分作一个定义：

> ESMAScript 是基于原型实现的面向对象编程语言。

基于原型的 OOP 与 基于静态类的 OOP 有很多的不同。让我们来看看详细的看看这些不同之处。

### 基于原型和基于类的两种面向对象模型的特征

注意到，上文中提到了基于静态类这个关键点。静态这个词就意味着强制类型。

这种情况被注意到，因为大量的文章和论坛