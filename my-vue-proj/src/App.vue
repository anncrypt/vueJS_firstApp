<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Ninja App'
    }
  }
}
</script>

<style scoped>

  h1 {
    color: purple;
  }

</style>
