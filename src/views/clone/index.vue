<template>
    <div class="wrapper-box-container">
        <div class="wrapper-box-iframe-box">
            <keep-alive>
                <iframe src="http://region-9.autodl.pro:41137/" frameborder="0" class="wrapper-box-iframe"></iframe>
            </keep-alive>
        </div>
    </div>
</template>

<style scoped>
.wrapper-box-container {
    width: 100%;
    height: 100%;
    flex: 1;
}
.wrapper-box-iframe-box {
    width: 100%;
    height: 690px;
    min-width: 800px;
    overflow: hidden;
}
.wrapper-box-iframe {
    width: 100%;
    margin-top: -240px;
    height: calc(100% + 60px + 900px);
    border: 0;
}
</style>
