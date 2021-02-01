import _ from 'lodash';
import Vue from 'vue/dist/vue.js';
import {planszeA} from './planszeAdane.js'


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
       
      },
      video: {
        src:"./images/Dopalacze1_Wplyw_WERSJA2popr2-Ramsar_3000.mp4",
        seen: false
      },
      plansza1: {
      
        src:planszeA[0],
        seen: false
      },
      buttonforward:{
      seen: false
      },
      buttonreverse:{
        seen: false
      },
      planszeTypA:{
        src: planszeA
      },

      licznik:{
        planszeAlicz:0
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
      this.buttonreverse.seen = true;
      this.buttonforward.seen = true;
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
      this.appbackground.src="./images/pierwsza_pomoc1_2x.jpg";
      //this.appbackground.src="";
      //this.plansza1.src="./images/pierwsza_pomoc1_2x.jpg";
      this.plansza1.seen =false;
      this.ikon1.seen = false;
      this.ikon2.seen = false;
    },
    btnforA: function (){
      
      this.licznik.planszeAlicz++
      
      this.plansza1.src=planszeA[this.licznik.planszeAlicz];
      
      if( this.licznik.planszeAlicz===5)
      {
        this.planszeAlicz=0;
        this.plansza1.src=planszeA[this.licznik.planszeAlicz];
        this.ikon1.seen = true;
        this.appbackground.src="./images/glowna_Dopalacze1_2x.jpg";
        this.ikon2.seen = true;
        this.ikon3.seen = true;
        this.plansza1.seen = false;
        this.buttonreverse.seen =false;
        this.buttonforward.seen = false;
        this.licznik.planszeAlicz=0;
        this.plansza1.src=planszeA[this.licznik.planszeAlicz];
      }
    }

  }

})