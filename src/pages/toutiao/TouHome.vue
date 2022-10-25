<template>
  <div>{{name}}</div>
  <a-button type="primary" @Click="enterIconLoading">Primary Button</a-button>
</template>
<script type='text/ecmascript-6'>
  console.log(222)
  export default {
    name: 'TouHome',
    data () {
      return {
        name: 'TouHome'
      }
    },
    methods: {
      enterIconLoading  () {
        
        this.name = 'kkk'
        this.$router.push({path:'ttlist'})
      }
    },
  }
</script>
<style lang='scss' scoped='' type='text/css'>

</style>