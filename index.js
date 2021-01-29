import _ from 'lodash';
import Vue from 'vue/dist/vue.js';


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
      ikon2: "./images/D1_ikona2.png",
      appbackground: {
        src: "./images/glowna_Dopalacze1_2x.jpg",
        widthback: "1600px",
        heightback: "720px"
      }

    }
  },
  methods: {
    ikon1change1: function () {
      this.ikon1.hover = false;

    },

  }

})