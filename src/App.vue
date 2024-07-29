<script lang="ts" setup>
import { RouterLink } from 'vue-router';


</script>

<template>
  <body>
    <RouterView></RouterView>
    </body>
</template>

<style>
  .body{
    height: 100vh;
    display: flex;
    place-items: center;
  }
.container{
    display: flex;
    gap: 10px;
    place-items: center;
    
}
.btn{
    padding: 10px;
    /*background-color: aquamarine;
    color:black;*/
    border-radius: 10px;
    cursor: pointer;
    
  }


</style>
