## 汪文<span style="float:right;">开发/算法</span>
---

**性别**: 女 | **年龄**: 31| **民族**：汉 

**Tel**: +86 18959209221 |   **Email**: <wwwangwenww@hotmail.com>  |  **微信**：wwwangwenww


 |     学校    | 时间    |            专业            | 学位 |
 | :---------: | :---:   |:------------------------: | :--: |
 | 中国海洋大学 | 2011-2015     |计算机科学与技术（保密方向）  | 工学学士 |
 |   厦门大学   | 2016-2019     |     计算机科学与技术       | 工学硕士 |

### 个人总结

---
- 具备AI Infra开发经验, 熟悉AI训练/推理工作流。
- 熟悉AI4SE/SE4AI, AI算法开发(NLP), 具备程序语言生成（大模型）相关背景和落地经验(python)。
- 参与过编译器编程语言开发, 具备llvm IR以及调试工具链开发经验(C++)。
- 具有良好的自我驱动能力和责任意识。

---

### 工作经历（2019-至今）
---
#### <ins>字节跳动 <span>(2023.11~至今) </span> </ins>
**AI Platform/infra**

负责coze workflow 到flowlang（python-based）编译。

#### <ins>自由量级 <span>(2023.09~2023.11) </span> </ins>
**AI inference**

负责大模型的推理优化，使用lmdeploy/tensorRT-llm 对大模型进行推理部署加速。使用continious batching等技术。

#### <ins> 阿里云智能/基础设施/服务器/编译与异构计算<span>(2022.11~2023.06) </span> </ins>

**AI基础设施** （大模型分布式模型推理）

**AI inference2.0**
- 管控面（AIOps）：
  - 项目开发：结合kubeDL（Controller-Manager）进行用户作业的抽象，除异构资源（GPU，PPU等）在K8S中的上报（Device-Plugins）外，进行虚拟算力设备的抽象定义，网络拓扑抽象。通过CRD进行池化资源的管理，结合虚拟化GPU设备能力，从而实现更好的弹性伸缩能力，解决CPU/GPU的灵活配比问题。
  - **发明专利**：通过定义一套算力原生CRDs，向上统一算力原生接口，屏蔽AI框架的差异；向下统一了资源的表达及其上报，屏蔽不同硬件及其虚拟化差异。通过CRD实例实现与pod的随航，能够建立pod间的CPU/GPU等网络的拓扑关系，实现更高的弹性伸缩能力、算力的智能适应和高可用。
 
- 数据面：参与torch分布式框架的调研，以及fasttransformer分布式框架（mpi和Slurm场景）在大模型推理中的使用。

#### <ins> 华为/2012/中央软件院/编译器与编程语言实验室<span>(2020.08 ~2022.11)</span> </ins>

**AI软件工程（智能代码补全）**

- <ins>智能代码补全本地化模型<span>(2020.08 ~2022.11)</span> </ins>

 <font color=Sienna>**从0-1完成智能代码补全的原型实现。并主导其实际落地，和团队获得杭研所长奖-先锋奖。**</font>

  - **从0-1端到端完成智能代码补全的IDE模型到插件的原型构建**。包括程序语言tokenizer适配，选用transformer-XL模型进行模型训练和测试，IDE插件补全触发，利用grpc进行IDEA插件和模型通信间通信，模型从pth到onnx本地化部署和优化，以及时延和体验优化。

  - **HMS SmartCoder项目**:  包括智能辅助编程以及代码搜索，片段推荐等功能。其中主要负责将智能代码补全落地到hms5.1，hms6.0，典型场景提升开发效率30%。
  
  - **MindSpore项目**:  集成智能补全和智能搜索等功能。将智能代码补全落地到MindSpore toolkit项目，已完成内部推广，商用版本发布。单一模型节省开发时间30%。

- <ins> 鸿蒙项目代码行补全模型重构<span>(2022.04~2022.11)</span></ins>
- 完成复旦合作项目原始代码补全模型（TF1.14，GGNN图模型）重构。
  
  - 使能模型并行训练，有效提升训练效率。并构建docker镜像。
  
- 完成模型onnx转化以及部署。

- <ins>编程语言大模型项目 <span> (2021.07~2022.07) </span></ins>
  - 代码生成式相关任务：完成plbart, gpt2, codeparrot等模型在生成式任务上的实验及测试（包括对程序语言的预处理及编码等）。
  
  - 调研tree-sitter语言解析工具：工具使用及其对代码结构信息的提取效率。分析在构建代码表示模型时与IDEA PSI的效率差异。
  
  - 代码搜索任务：代码搜索模型，利用milvus完成特定领域（代码搜索）的搜索服务demo构建。

#### <ins> 华为/2012/中央软件院/编译器与编程语言实验室<span>(2019.07 ~2020.08) </span> </ins>

**编译器与编程语言开发（调试器相关)**

- <ins> XX编译器<span>(2019.07~2020.02) </span> </ins>
  - **使能xx编译器Java的静态化调试**。Java被xx编译器静态化编译后，通常需要借助于传统的静态化调试工具gdb或者lldb进行调试。gdb/lldb本身不支持Java，不认识xxIR；gdb/lldb不识别xx的内存模型；所以需要分析xx编译器内存模型，新增gdb命令，适配maple模型。
  
  - **编译器中调试信息生成模块中Dwarf信息重构**。参与《xx编译器 DWARF调试信息转译》的特性开发，发现生成调试信息体积过大的原因，将so中dwarf信息体积缩小87%(debuginfo字段缩小82%，debugstr字段缩小93%)。独立完成了将xx编译器中mangled名称进行转换demangled的核心API。

- <ins> XX编程语言<span>(2020.02~2020.08) </span> </ins>

    主要工作内容为编程语言LLVM IR中调试信息的生成，从编译器前端到编译器中端，协助SE进行xx语言IR调试信息生成的框架设计，打通xx语言编码程序的调试流程。

  - 作为主要开发者，进行xx语言IR调试信息生成的特性开发。完成基本类型调试信息的生成；打通复合类型(String, Function, Record, Tuple)xx语言IR调试信息的生成流程；还包括控制语句(if, else ,while)以及引用类型(Class, Array)类型的IR的调试信息生成。使能ImportModule。支撑Enum类型，和lambda表达式调试信息的生成。
  
  - CodeGen模块重构后对调试信息进行两次重构。
  
  - 支撑xx语言AI代码（forknet）在带调试信息模式下的编译过程，保证其编译成功。

---

### Publications

---
[1]. X. Zeng, W. Wang, C. Chen and G. G. Yen, "A Consensus Community-Based Particle Swarm Optimization for Dynamic Community Detection," in *IEEE Transactions on Cybernetics*, vol. 50, no. 6, pp. 2502-2513, June 2020, doi: 10.1109/TCYB.2019.2938895. （**2020 IF= 11.079/Q1**，学生一作）

基于共识社区的动态网络社区发现

[2] .X. Zeng, W. Wang, G. Deng, J. Bing, Q. Zou. Prediction of Potential Disease-Associated MicroRNAs by Using Neural Networks[J]. Molecular Therapy - Nucleic Acids. 2019.16:566 – 575. ISSN 2162-2531. （中科院二区，学生一作）

基于链接预测的miRNA疾病相关性研究（通过神经网络的非线性特征提取来实现从不同的数据源构建的异构网络的邻域信息。然后更新节点嵌入。最后保持拓扑结构的node-embedding。应用保存网络拓扑结构的学习过程来加强所提取的Micro-RNA与疾病的特征表示，以匹配所观察的网络。）

<style>
ins {color: Sienna; font-weight: bold; font-size:16}
span {float:right; border-bottom:1px Sienna}
</style>
