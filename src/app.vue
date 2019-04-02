<template>
    <div>
    <h2 class="color-red">{{ text }}</h2>
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                text: "Hello, Vue!"
            };
        }
    };
</script>

<style scoped>
    .color-red {
        color: green;
    }
</style>
