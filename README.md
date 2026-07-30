# 欢迎来到我的技术手册

## GPU 图形与 AI 推理知识手册

本手册从一个**图形渲染工程师**的视角出发，系统性地梳理了从 GPU 图形管线到 AI 推理优化的知识体系。

## 点此阅读文档：
https://wukangmh2022-cmyk.github.io/my-learn-doc/

### 核心理念

> 你不是在"从零学习"AI 推理——你是在把已经掌握的 GPU 系统思维，**翻译**到 AI 领域。

### 手册结构
| 章节 | 内容 | 目标 |
| :--- | :--- | :--- |
| **第 1 章** | 图形渲染管线与 GPU 硬件基础 | 建立 GPU 硬件层认知 |
| **第 2 章** | GPU 并发模型与系统思维 | 打通图形→AI 的系统映射 |
| **第 3 章** | AI 模型与算子基础 | 理解 AI 核心计算模式 |
| **第 4 章** | AI 推理优化核心策略 | 掌握推理优化的四大支柱 |
| **第 5 章** | CUDA 编程与硬件执行模型 | 从 Shader 思维到 CUDA Kernel |
| **第 6 章** | 高性能算子实现模式 | 经典算子的 GPU 实现 |
| **第 7 章** | LLM 核心算子（推导 + CUDA 实现） | KQV Attention、RoPE、GEMM 等面试手写题 |
| **第 8 章** | vLLM 推理调优与多卡系统 | CUDA Graph、NCCL、量化、Roofline |
| **第 9 章** | 专用硬件加速单元 | Tensor Core、RT Core 等 |
| **第 10 章** | GPU 软件栈与驱动开发 | UMD/KMD、编译器、PTX/SASS |
| **第 11 章** | 推理引擎与算子实战 | 读源码（Nano-vLLM）、造轮子（Attention Kernel、PagedAttention + Continuous Batching、手搓 mini Transformer、Radix Cache）、上生产（Profiler、Runtime、后端移植） |
| **附录 A** | 学习与职业实践 | 岗位对比、技能证据、自检列表 |

## 推荐路径

1. **建立骨架**：第 1、2、5 章，理解硬件、提交/同步和 CUDA 执行模型。
2. **掌握模式**：第 3、4、6 章，理解算子分类、局部性与经典并行算法。
3. **进入 LLM**：第 7、8、9 章，连接数学、Kernel、推理运行时与专用硬件。
4. **补齐系统栈**：第 10 章，理解编译器、UMD/KMD 与硬件的边界。
5. **完成实战闭环**：第 11 章，从 CPU Reference、GPU Kernel、Runtime 到部署验证逐步实现。


祝你阅读愉快！🚀
