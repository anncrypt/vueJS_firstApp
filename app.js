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

    // Two way data binding - Tutorial 8
    nameDataBinding: '',
    ageDataBinding: '',

    // Computed Properties - Tutorial 9
    a: 0,
    b: 0,
    ageForComputed: 20,

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
    },

    click: function() {
      alert('Cliiiickkked!');
    },

    // Keyboard Events - Tutorial 7
    logName: function() {
      console.log('NAMEEEE!');
    },

    logAge: function() {
      console.log('AGEEEE!');
    },


    // Computed Properties - Tutorial 9
    // addToA: function() {
    //   return this.a + this.ageForComputed;
    // },

    // addToB: function() {
    //   return this.b + this.ageForComputed;
    // }
  },

  computed: {
    // Computed Properties - Tutorial 9
    addToA: function () {
      return this.a + this.ageForComputed;
    },

    addToB: function () {
      return this.b + this.ageForComputed;
    }
  }
});