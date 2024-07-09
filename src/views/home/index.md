> 本软件为想要使用ChatTTS作为生产力工具的新手准备，主要目的是让新手能够快速上手，并且能够快速了解ChatTTS的运行效果。如果你是开发者，请移步ChatTTS主页：https://github.com/2noise/ChatTTS

ChatTTS是一个基于AI的语音播报软件，与传统的TTS软件不同，ChatTTS一方面可以对声音进行可能，使我们的创作拥有更丰富的音色，另一方面它具备通过文本来控制播报时的停顿、情绪等能力，是目前市面上开源免费的优秀作品。

本软件作为一款学习软件，旨在帮助新手快速上手，并且能够快速了解ChatTTS的运行效果。
因此，软件中提供的内容主要用于学习和上手如何使用ChatTTS，而不是用于商业用途。

对于新手而言，想要上手ChatTTS，只需要完成如下使用过程，基本上即可掌握。

- 通过chatTTS webui，输入想要生成的语音文本，点击生成按钮，获得生成的语音文件。
- 通过“内置音色”了解chatTTS中的音色情况，并将音色的序号（数字）填入webui的“Audio Seed”中，点击生成按钮，获得基于该音色生成的语音文件。
- 通过“声音克隆”，上传录制好的人声文件，点击提交按钮，生成pt文件，下载pt文件(Used in ChatTTS-Forge)，并进入chatTTS Forge界面，在选择音色时，切换到“上传”选项，将pt文件拖入界面，点击“生成”按钮，获得基于该人声克隆的语音文件。

以上就是新手入门chatTTS最基本的玩法。之后，你可以通过本软件提供的各种工具，自己探索更多玩法。

限于服务能力，本软件内嵌套了其他开发者部署好的服务工具界面，在此特别鸣谢：

- ChatTTS: https://github.com/2noise/ChatTTS
- WebUI: https://chattts.com/#Demo
- Forge: https://github.com/lenML/ChatTTS-Forge
- 音色种子工具：https://github.com/6drf21e/ChatTTS_Speaker
- 声音克隆：(未知项目)

本项目源码托管在 https://github.com/tangshuang/chattts-newer 如果你发现本软件中存在的问题，可以通过github issues进行反馈，也欢迎参与补充学习资料。