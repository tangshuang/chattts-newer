<script setup lang="ts">
import 'highlight.js/styles/monokai.css';
import Markdown from 'vue3-markdown-it';
import content from './index.md?raw';
</script>

<template>
    <div class="markdown">
        <Markdown :source="content" />
    </div>
</template>

<style scoped>
.markdown {
    margin: 40px;
}
</style>