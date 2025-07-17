## 项目介绍

 **ino['aino]**（谐音 “I know”）旨在成为用 Go 语言编写的终极大型语言模型（LLM）应用开发框架。它从开源社区中的诸多优秀 LLM 应用开发框架，如 LangChain 和 LlamaIndex 等获取灵感，同时借鉴前沿研究成果与实际应用，提供了一个强调简洁性、可扩展性、可靠性与有效性，且更符合 Go 语言编程惯例的 LLM 应用开发框架。

Eino 提供的价值如下：

- 精心整理的一系列 **组件（component）** 抽象与实现，可轻松复用与组合，用于构建 LLM 应用。
- 强大的 **编排（orchestration）** 框架，为用户承担繁重的类型检查、流式处理、并发管理、切面注入、选项赋值等工作。
- 一套精心设计、注重简洁明了的 **API**。
- 以集成 **流程（flow）** 和 **示例（example）** 形式不断扩充的最佳实践集合。
- 一套实用 **工具（DevOps tools）**，涵盖从可视化开发与调试到在线追踪与评估的整个开发生命周期。

借助上述能力和工具，Eino 能够在人工智能应用开发生命周期的不同阶段实现标准化、简化操作并提高效率：
![](assets/Pasted%20image%2020250717165956.png)

## 我的贡献

#### [feat: Add a configuration option IDGenerator to doc transformer](https://github.com/cloudwego/eino-ext/commit/8553b6952bf3fe32a1735fc9c60b4e04f4fbc351 "feat: Add a configuration option IDGenerator to doc transformer")
> 在使用Eino-ext中提供的Splitter进行文档分片的时候，分割出来的文本片段的ID，不是唯一，而是使用文档的ID，在存储到Milvus中的时候，会出现问题，因此，对Splitter进行修改，提供IDGenerator配置给切分产生的文档分配新 id ,可传入自定义ID生成函数，对每个文本片段设置ID。
#### [feat: Add docx file parsing function ](https://github.com/cloudwego/eino-ext/commit/4936951487dd7e36a7e006c9743daed082f55464)

> Eino-ext中的文件解析器只有PDF、HTML、TEXT三种，没有我们常用的Docx文件的解析器，我使用`github.com/carmel/gooxml/document`库，实现了一个Docx文档解析器

## 题外话

这是我第一次给开源框架贡献代码，虽然不是什么重要的贡献，也算是给开源社区做出了一点贡献，头像也出现在了Github仓库中，哈哈
![](assets/Pasted%20image%2020250717171923.png)