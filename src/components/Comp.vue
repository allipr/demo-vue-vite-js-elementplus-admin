<template>
  <div>comp</div>
</template>

<script setup>
// export default {

// }

//请求mock api
fetch("/api/getUsers").then((res)=>res.json()).then((data)=>{
  console.log(data);
})
</script>

<style>

</style>