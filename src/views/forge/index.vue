<template>
    <div class="wrapper-box-container">
        <div class="wrapper-box-iframe-box">
            <keep-alive>
                <iframe src="https://lenml-chattts-forge.hf.space/" frameborder="0" class="wrapper-box-iframe"></iframe>
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
    min-width: 1200px;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.wrapper-box-iframe {
    width: 100%;
    margin-top: -20px;
    height: calc(100% + 60px + 0px);
    border: 0;
}
</style>
