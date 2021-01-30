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
      ikon2: {
        src: "./images/D1_ikona2.png",
        src2: "./images/D1_ikona2b.png",
        seen: true,
        hover: false
      },
      ikon3: {
        src: "./images/D1_ikona3.png",
        src2: "./images/D1_ikona3b.png",
        seen: true,
        hover: false
      },
      appbackground: {
        src: "./images/glowna_Dopalacze1_2x.jpg",
        widthback: "1600px",
        heightback: "720px"
      },
      video: {
        src:"./images/Dopalacze1_Wplyw_WERSJA2popr2-Ramsar_3000.mp4",
        seen: false
      },
      plansza1: {
        src:"./images/grzyby_app.jpg",
        seen: false
      }

  

    }
  },
  methods: {
    ikon1change1: function () {
      this.ikon1.hover = false;
      this.appbackground.src="./images/grzyby1_tlo2.png";
      this.ikon2.seen = false;
      this.ikon3.seen = false;
      this.plansza1.seen = true;
    },
    ikon2change1: function (){
      this.ikon2.hover = false;
      this.appbackground.src="./images/film.png";
      this.ikon1.seen = false;
      this.ikon3.seen = false;
      this.video.seen = true;
    },
    ikon3change1: function (){
      this.ikon3.hover = false;
      //this.appbackground.src="./images/pierwsza_pomoc1_2x.jpg";
      this.appbackground.src="";
      this.plansza1.src="./images/pierwsza_pomoc1_2x.jpg";
      this.plansza1.seen =true;
      this.ikon1.seen = false;
      this.ikon2.seen = false;
    },
  }

})