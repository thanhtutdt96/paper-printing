<script setup lang="ts">
import PrintingView from 'components/PrintingView.vue';
</script>

<template>
  <div class="container">
    <PrintingView class="printing-view" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: calc(100% - 2rem);
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}

.printing-view {
  width: 800px;
}
</style>
