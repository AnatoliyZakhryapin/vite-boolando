<script>
  import PageHeader from './components/PageHeader.vue';
  import PageFooter from './components/PageFooter.vue';

  export default {
    components: {
      PageHeader,
      PageFooter
    }
  }
</script>

<template>
  <PageHeader/>
  <PageFooter/>
</template>

<style lang="scss">
  @use './styles/general.scss';
</style>
