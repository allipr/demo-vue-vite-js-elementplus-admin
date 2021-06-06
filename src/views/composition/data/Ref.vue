<template>
  <div id="id">我是ref:{{ name }}</div>
</template>

<script>
    export default {
        setup() {
            const {
                ref
            } = Vue;
            let name = ref("WO");
            return {
                name,
            };
        },
    };
</script>

<style scoped></style>