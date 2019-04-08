new Vue({
  el: '#vue-app',
  data: {
    name: 'Shaun',
    job: 'Ninja',
    website: 'http://annaionova.com',
    websiteTag: '<a href="http://annaionova.com">My Website</a>',

    age: 25,

    x: 0,
    y: 0,
  },
  methods: {
    greet: function(timeOfDay){
      return `Good ${timeOfDay} ${this.name}!`
    },

    add: function(inc) {
      this.age += inc;
    },

    subtract: function(dec) {
      this.age -= dec;
    },

    updateXY: function(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    }

  }
});