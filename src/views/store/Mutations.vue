<template>
  <div>{{ $store.state.counter }}</div>
  <button @click="$store.commit('add')">增加</button>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped></style>