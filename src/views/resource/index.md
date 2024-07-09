## 概念介绍

### 文本控制

* **1. Input Text** : 需要转换的文本，支持中文和英文混杂
* **2. Refine text** : 是否对文本进行口语化处理
* **3. Text Seed** : 配置文本种子值，不同种子对应不同口语化风格
* **4. 🎲** : 随机产生文本种子值
* **5. Output Text** :  口语化处理后生成的文本

### 音色控制

* **6. Timbre** : 预设的音色种子值
* **7. Audio Seed** : 配置音色种子值，不同种子对应不同音色
* **8. 🎲** : 随机产生音色种子值
* **9. Speaker Embedding** : 音色码，详见 [音色控制](#音色控制)

### 情感控制

* **10. temperate** : 控制音频情感波动性，范围为 0-1，数字越大，波动性越大
* **11. top_P** ：控制音频的情感相关性，范围为 0.1-0.9，数字越大，相关性越高
* **12. top_K** ：控制音频的情感相似性，范围为 1-20，数字越小，相似性越高

### 系数控制

* **13. DVAE Coefficient** : 模型系数码
* **14. Reload** : 重新加载模型系数

### 播放控制

* **15. Auto Play** : 是否在生成音频后自动播放
* **16. Stream Mode** : 是否启用流式输出
* **17. Generate** : 点击生成音频文件
* **18. Output Audio** : 音频生成结果
* **19. ↓** : 点击下载音频文件
* **20. ▶️** : 点击播放音频文件

## 入门教程

### 中文教程

|                                                                    视频                                                                     | 亮点            |
|:-----------------------------------------------------------------------------------------------------------------------------------------:|---------------|
|                     [同济子豪兄](https://www.bilibili.com/video/BV1Ui421v7JU/?vd_source=b958002f14b88fc59432b810e4448b72)                      | 从入门到进阶的详细部署教程 |
|                      [ZTFS](https://www.bilibili.com/video/BV1nZ421p74z/?vd_source=6773fc664ee1e277b8a2290d66ebb7a3)                      | Mac M1 部署教程   |
| [王-寳寳](https://www.bilibili.com/video/BV1Ji421U74a/?spm_id_from=333.337.search-card.all.click&vd_source=6773fc664ee1e277b8a2290d66ebb7a3) | Windows 部署教程  |

### 英文教程

| 视频 | 亮点            |
|:--------:|--------|
| [Sam Witteveen](https://www.youtube.com/watch?v=L4klnZ5Lox8) | 英文版介绍         |

## 热门分支

### 功能增强

|                                   项目                                    |                                 Star                                  | 亮点                   |
|:-----------------------------------------------------------------------:|:---------------------------------------------------------------------:|----------------------|
|  [jianchang512/ChatTTS-ui](https://github.com/jianchang512/ChatTTS-ui)  | ![Star](https://img.shields.io/github/stars/jianchang512/ChatTTS-ui)  | 提供 API 接口，可在第三方应用中调用 |
|    [6drf21e/ChatTTS_colab](https://github.com/6drf21e/ChatTTS_colab)    |  ![Star](https://img.shields.io/github/stars/6drf21e/ChatTTS_colab)   | 提供流式输出，支持长音频生成和分角色阅读 |
|      [lenML/ChatTTS-Forge](https://github.com/lenML/ChatTTS-Forge)      |   ![Star](https://img.shields.io/github/stars/lenML/ChatTTS-Forge)    | 提供人声增强和背景降噪，可使用附加提示词 |
| [CCmahua/ChatTTS-Enhanced](https://github.com/CCmahua/ChatTTS-Enhanced) | ![Star](https://img.shields.io/github/stars/CCmahua/ChatTTS-Enhanced) | 支持文件批量处理，以及导出 SRT 文件 |
|  [HKoon/ChatTTS-OpenVoice](https://github.com/HKoon/ChatTTS-OpenVoice)  | ![Star](https://img.shields.io/github/stars/HKoon/ChatTTS-OpenVoice)  | 配合 OpenVoice 进行声音克隆  |

### 功能扩展

|                                      项目                                      |                                                 Star                                                 | 亮点                            |
|:----------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------:|-------------------------------|
| [6drf21e/ChatTTS_Speaker](https://github.com/6drf21e/ChatTTS_Speaker) |                 ![Star](https://img.shields.io/github/stars/6drf21e/ChatTTS_Speaker)                 | 音色角色打标与稳定性评估                  |
|         [AIFSH/ComfyUI-ChatTTS](https://github.com/AIFSH/ComfyUI-ChatTTS)          |                  ![Star](https://img.shields.io/github/stars/AIFSH/ComfyUI-ChatTTS)                  | ComfyUi 版本，可作为工作流节点引入         |
| [MaterialShadow/ChatTTS-manager](https://github.com/MaterialShadow/ChatTTS-manager) |            ![Star](https://img.shields.io/github/stars/MaterialShadow/ChatTTS-manager)             | 提供了音色管理系统和 WebUI 界面           |
