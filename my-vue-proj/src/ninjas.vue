<template>
  <div>
    <h1>List of Ninjas</h1>
    <ol>
      <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ninjas: ['Yoshi', 'Mario', 'Ryu']
    }
  }
}
</script>

<style scoped>

h1 {
  color: green;
}

</style>
