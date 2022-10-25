<template>
  <div>{{name}}</div>
  <a-radio v-model:checked="checked">Radio</a-radio>
</template>
<script type='text/ecmascript-6'>
  console.log(222)
  export default {
    name: 'TouHome',
    data () {
      return {
        name: 'TouList'
      }
    }
  }
</script>
<style lang='scss' scoped='' type='text/css'>

</style>