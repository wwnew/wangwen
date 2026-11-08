## 汪文<span style="float:right;">Agent Harness / Agent Infrastructure</span>
---

**性别**: 女 | **年龄**: 32 | **民族**：汉

**Tel**: +86 18959209221 |   **Email**: <wwwangwenww@hotmail.com>  |  **微信**：wwwangwenww


 |     学校    | 时间    |            专业            | 学位 |
 | :---------: | :---:   |:------------------------: | :--: |
 | 中国海洋大学 | 2011-2015     |计算机科学与技术（保密方向）  | 工学学士 |
 |   厦门大学   | 2016-2019     |     计算机科学与技术       | 工学硕士 |

### 个人总结

---
- 2019 年起从事编译器、代码智能与 AI 基础设施研发。近一年在字节跳动主要从事 **Agent Runtime** 开发，完成 **工具调用效果优化、上下文压缩策略与模型切换管理** 的线上落地。
- 此前负责 Coze Workflow 到 Flowlang 的编译与代码生成，具备从任务表达、可执行代码到 Agent 运行时的工程经验。
- 曾从 **0 到 1** 完成智能代码补全原型并主导产品落地，覆盖模型训练、推理部署与 IDE 集成，应用于 HMS SmartCoder 和 MindSpore Toolkit。
- 具备 **Python / C++** 开发背景，以及大模型推理、异构算力管理和编译器调试工具链经验；曾将生成共享库中的 **DWARF 调试信息体积缩小 87%**。

---

### 工作经历（2019-至今）

---

#### <ins>字节跳动 <span>(2023.11~至今)</span></ins>

**Agent Infrastructure / AI Platform**

<ins>Agent Harness <span>(近一年)</span></ins>

重点为 Agent Runtime 开发，围绕任务执行、工具调用、上下文管理与模型切换完善 Agent 执行框架。

- **工具调用效果优化**：参与运行时的工具调用流程与能力接入建设，完成工具调用效果优化并上线。
- **上下文管理与压缩**：完成 Agent 上下文压缩策略的开发与上线；对比不同 Agent 的压缩方案，研究摘要放置位置、消息语义保留，以及压缩对缓存的影响。
- **模型切换管理**：完成 Agent Runtime 中模型切换管理能力的开发与上线。

<ins>Workflow <span>(2023/11-2026/01)</span></ins>

- **Workflow 编译**：负责 Coze Workflow 到 Flowlang（Python-based）的编译，将 Workflow 节点、依赖关系与执行逻辑转换为可运行代码，连接产品侧任务编排与底层执行环境。

#### <ins>自由量级 <span>(2023.09~2023.11)</span></ins>

**AI Inference**

- 负责大模型部署与推理优化，使用 LMDeploy、TensorRT-LLM 及 Continuous Batching 等技术进行推理加速。

#### <ins>阿里云智能/基础设施/服务器/编译与异构计算 <span>(2022.11~2023.06)</span></ins>

**AI 基础设施（大模型分布式推理）**

**AI Inference 2.0**

- **异构资源管理**：参与 AI Inference 2.0 管控面开发，基于 KubeDL Controller Manager、Kubernetes Device Plugin 与 CRD，抽象用户作业、异构设备、虚拟算力及网络拓扑，支持池化资源管理与 CPU/GPU 灵活配比。
- **算力原生接口**：参与算力原生 CRD 设计，统一 AI 框架接口及不同硬件、虚拟化资源的表达与上报；关联 Pod 与算力资源，描述跨 Pod 的 CPU/GPU 网络拓扑。相关工作涉及发明专利。
- **分布式推理**：参与 PyTorch 分布式框架调研，以及 MPI / Slurm 场景下的分布式大模型推理实践。

#### <ins>华为/2012/中央软件院/编译器与编程语言实验室 <span>(2020.08~2022.11)</span></ins>

**AI 软件工程（智能代码补全）**

<ins>智能代码补全本地化模型 <span>(2020.08~2022.11)</span></ins>

- **智能代码补全产品化**：从 0 到 1 完成原型并主导实际落地，覆盖程序语言 Tokenizer 适配、Transformer-XL 模型训练与测试、IDEA 插件补全触发、gRPC 通信及 ONNX 本地部署优化；与团队获得杭研所长奖—先锋奖。
- **HMS SmartCoder**：负责智能代码补全在 HMS 5.1、6.0 中的落地，典型场景开发效率提升 **30%**。
- **MindSpore Toolkit**：推动智能代码补全落地，完成内部推广及商用版本发布；单一模型节省开发时间 **30%**。

<ins>鸿蒙项目代码行补全模型重构 <span>(2022.04~2022.11)</span></ins>

- **代码补全模型重构**：重构基于 TensorFlow 1.14 / GGNN 的代码行补全模型，支持模型并行训练，完成 Docker 镜像构建、ONNX 转换与部署。

<ins>编程语言大模型项目 <span>(2021.07~2022.07)</span></ins>

- **代码生成与搜索**：完成 PLBART、GPT-2、CodeParrot 等模型的代码生成任务实验；比较 tree-sitter 与 IDEA PSI 的代码结构提取效率，并基于 Milvus 构建代码搜索服务原型。

#### <ins>华为/2012/中央软件院/编译器与编程语言实验室 <span>(2019.07~2020.08)</span></ins>

**编译器与编程语言开发（调试器相关）**

<ins>XX 编译器 <span>(2019.07~2020.02)</span></ins>

- **调试信息体积优化**：参与编译器 DWARF 调试信息生成模块重构，定位体积过大的原因，将生成共享库中的 DWARF 信息体积缩小 **87%**；独立完成符号名称反修饰（Demangling）核心 API。
- **Java 静态编译调试**：分析静态编译器的内存模型，扩展 GDB 命令，适配编译后的对象布局与调试需求，支持 Java 程序的静态编译调试。

<ins>XX 编程语言 <span>(2020.02~2020.08)</span></ins>

- **新语言调试支持**：作为主要开发者参与 LLVM IR 调试信息生成框架与特性开发，覆盖基本与复合类型、引用类型、控制语句、模块导入、枚举和 Lambda；完成 CodeGen 重构后的适配，打通从编译器前端到调试器的调试链路。

---

### Publications

---

[1]. X. Zeng, W. Wang, C. Chen and G. G. Yen. "A Consensus Community-Based Particle Swarm Optimization for Dynamic Community Detection." *IEEE Transactions on Cybernetics*, 50(6): 2502–2513, 2020. DOI: [10.1109/TCYB.2019.2938895](https://doi.org/10.1109/TCYB.2019.2938895)。（学生一作）

基于共识社区的动态网络社区发现

[2]. X. Zeng, W. Wang, G. Deng, J. Bing, Q. Zou. "Prediction of Potential Disease-Associated MicroRNAs by Using Neural Networks." *Molecular Therapy — Nucleic Acids*, 16: 566–575, 2019。（学生一作）

神经网络与 miRNA 疾病关联预测

<style>
ins {color: Sienna; font-weight: bold; font-size:16}
span {float:right; border-bottom:1px Sienna}
</style>
