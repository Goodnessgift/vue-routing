<script setup>
import RandomView from '@/components/RandomView.vue';


</script>

<template>
    <div class="container">
      <RouterLink to="/thirdview">
        <div class="btn">
          Third page
        </div>
      </RouterLink>
      
      <div class="random">
        <RandomView />
      </div>
      
    </div>
</template>

<style scoped>
    .container{
      display:flex;
      flex-direction: column;
    }
    
</style>
