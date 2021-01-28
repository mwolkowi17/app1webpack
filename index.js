import _ from 'lodash';
import Vue from 'vue/dist/vue.js';

/*function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());*/

var app = new Vue({
  el: '#app',
  data: () => {
    return {
      message: "hello vue",

      ikon1: {
        src: "./images/D1_ikona1_wersja2.png",
        src2: "./images/D1_ikona1_wersja2b.png",
        seen: true,
        hover: false
      },
      ikon2: "./images/D1_ikona2.png"
    

    }
  },
  methods: {
    ikon1change1: function() {
      this.ikon1.hover=false;

    },

  }

})