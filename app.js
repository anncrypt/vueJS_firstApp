new Vue({
  el: '#vue-app',
  data: {
    name: 'Shaun',
    job: 'Ninja'
  },
  methods: {
    greet: function(timeOfDay){
      return `Good ${timeOfDay} ${this.name}!`
    }
  }
});