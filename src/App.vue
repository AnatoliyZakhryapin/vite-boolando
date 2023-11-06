<script>
  import PageHeader from './components/PageHeader.vue';
  import PageFooter from './components/PageFooter.vue';
  import PageMain from './components/PageMain.vue';

  export default {
    components: {
      PageHeader,
      PageMain,
      PageFooter,
    }
  }
</script>

<template>
  <PageHeader/>
  <PageMain/>
  <PageFooter/>
 
</template>

<style lang="scss">
  @use './styles/general.scss';
</style>
