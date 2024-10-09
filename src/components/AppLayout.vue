<template>
    <div class="app_layout">
        <slot name="app" />
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.app_layout {
    height: 100vh;
    background: #e6e6e6;
    display: flex;
    flex-direction: column;
    padding-inline: 15px;
}
</style>
