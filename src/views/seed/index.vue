<template>
    <div class="wrapper-box-container">
        <div class="wrapper-box">
            <div class="wrapper-box-iframe-box">
                <keep-alive>
                    <iframe :src="`https://s5k.cn/inner/studio/gradio?backend_url=/api/v1/studio/ttwwwaa/ChatTTS_Speaker/gradio/&sdk_version=4.31.3&t=${Date.now()}`" frameborder="0" class="wrapper-box-iframe"></iframe>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper-box-container {
    width: 100%;
    height: 100%;
    overflow: auto;
    flex: 1;
}
.wrapper-box {
    width: 1030px;
    height: 100%;
    overflow: hidden;
}
.wrapper-box-iframe-box {
    height: 100%;
    width: 1500px;
    overflow: hidden;
}
.wrapper-box-iframe {
    width: 100%;
    height: 100%;
    margin-left: -470px;
    margin-top: -210px;
    height: calc(100% + 210px + 50px);
    /* margin-top: -210px;
    margin-left: -680px;
    height: calc(100% + 250px); */
    border: 0;
}
</style>
