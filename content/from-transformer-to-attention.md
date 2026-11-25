---
title: "从直觉出发理解 Attention"
date: 2026-11-24
description: "不从公式开始，而是从信息检索的视角重新理解 Query、Key 与 Value。"
tags: [机器学习, 深度学习]
---

Attention 的核心问题很简单：**面对一组信息，当前这个位置应该关注谁？**

## 从一次检索开始

把输入序列想象成一个很小的数据库。每一个 token 同时提供一个 Key 和一个 Value，而当前 token 产生 Query。相关性由 Query 与 Key 的点积决定：

$$
\operatorname{Attention}(Q,K,V)=\operatorname{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

除以 $\sqrt{d_k}$ 并非装饰。当维度增大时，点积的方差也会增大，softmax 更容易进入梯度很小的饱和区域。

## 一个最小实现

下面这段 PyTorch 代码保留了最重要的计算路径：

```python
import torch

def attention(q, k, v):
    scale = q.size(-1) ** -0.5
    weights = torch.softmax(q @ k.transpose(-2, -1) * scale, dim=-1)
    return weights @ v
```

真正值得记住的不是 API，而是这条信息流：**用相关性生成权重，再对内容做加权汇总。**

> 好的抽象会压缩代码，也会压缩我们思考问题时所需的工作记忆。

## 接下来

理解单头 Attention 后，可以继续追问：多个头究竟带来了什么？位置编码为什么无法省略？这些会成为下一篇笔记的起点。
