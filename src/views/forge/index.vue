<script setup>
// import { ref, onMounted, onUnmounted } from 'vue';
// const media = window.matchMedia(' (prefers-color-scheme: dark)');
// const isDarkMode = ref(media.matches);

// const onChange = () => {
//   isDarkMode.value = media.matches;
// };

// onMounted(() => {
//   media.addEventListener('change', onChange);
// });

// onUnmounted(() => {
//   media.removeEventListener('change', onChange);
// });
</script>

<template>
    <div class="wrapper-box-container">
        <div class="wrapper-box-iframe-box">
            <keep-alive>
                <iframe :src="`https://lenml-chattts-forge.hf.space/?__theme=dark`" frameborder="0" class="wrapper-box-iframe"></iframe>
            </keep-alive>
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
.wrapper-box-iframe-box {
    min-width: 1300px;
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
