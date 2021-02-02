import _, { fromPairs } from 'lodash';
import Vue from 'vue/dist/vue.js';
import { planszeA } from './planszeAdane.js';
import { backgrounds } from './backgroundData.js';
import { videoSources } from './videoData.js';
import {planszeB} from './planszeBdane';


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


        src: backgrounds[0]

      },
      video: {

        src: videoSources[0],
        seen: false
      },
      plansza1: {

        src: planszeA[0],
        seen: false
      },
      buttonforward: {
        seen: false
      },
      buttonreverse: {
        seen: false
      },
      buttonforwardkonc: {
        seen: false
      },
      buttonreversekonc: {
        seen: false
      },
      planszeTypA: {
        src: planszeA
      },
      planszeTypB:{
       src: planszeB
      },

      licznik: {
        planszeAlicz: 0,
        planszeBlicz: 0
      }



    }
  },
  methods: {
    ikon1change1: function () {
      this.ikon1.hover = false;
      this.appbackground.src = backgrounds[1];
      this.ikon2.seen = false;
      this.ikon3.seen = false;
      this.plansza1.seen = true;
      this.buttonreverse.seen = true;
      this.buttonforward.seen = true;
    },
    ikon2change1: function () {
      this.ikon2.hover = false;
      this.appbackground.src = backgrounds[2];
      this.ikon1.seen = false;
      this.ikon3.seen = false;
      this.video.seen = true;
    },
    ikon3change1: function () {
      this.ikon3.hover = false;
      //this.appbackground.src = "./images/pierwsza_pomoc1_2x.jpg";
      this.appbackground.src = planszeB[0];
      this.plansza1.seen = false;
      this.ikon1.seen = false;
      this.ikon2.seen = false;
      this.buttonreversekonc.seen = true;
      this.buttonforwardkonc.seen = true;
    },
    btnforA: function () {

      this.licznik.planszeAlicz++

      this.plansza1.src = planszeA[this.licznik.planszeAlicz];

      if (this.licznik.planszeAlicz === 5) {
        this.planszeAlicz = 0;
        this.plansza1.src = planszeA[this.licznik.planszeAlicz];
        this.ikon1.seen = true;
        this.appbackground.src = backgrounds[0];
        this.ikon2.seen = true;
        this.ikon3.seen = true;
        this.plansza1.seen = false;
        this.buttonreverse.seen = false;
        this.buttonforward.seen = false;
        this.licznik.planszeAlicz = 0;
        this.plansza1.src = planszeA[this.licznik.planszeAlicz];
      }
    },
    btnrevA: function(){
      if(this.licznik.planszeAlicz!=0){
        this.licznik.planszeAlicz--;
      }
      
      
      if(this.plansza1.src===planszeA[0]){
        
        this.ikon1.seen = true;
        this.appbackground.src = backgrounds[0];
        this.ikon2.seen = true;
        this.ikon3.seen = true;
        this.plansza1.seen = false;
        this.buttonreverse.seen = false;
        this.buttonforward.seen = false;
        this.licznik.planszeAlicz = 0;
        this.plansza1.src = planszeA[this.licznik.planszeAlicz];
               
      }
      this.plansza1.src = planszeA[this.licznik.planszeAlicz];
    },
    btnforB: function(){
      this.licznik.planszeBlicz++;
      this.appbackground.src=this.planszeTypB.src[this.licznik.planszeBlicz];

      if (this.licznik.planszeBlicz === 11){
        this.licznik.planszeBlicz=0;
        this.ikon1.seen = true;
        this.appbackground.src = backgrounds[0];
        this.ikon2.seen = true;
        this.ikon3.seen = true;
        this.plansza1.seen = false;
        this.buttonreversekonc.seen = false;
        this.buttonforwardkonc.seen = false;
      }
    },
    btnrevB: function(){
      if(this.licznik.planszeBlicz!=0)
      {
        this.licznik.planszeBlicz--;
        
      }
      
      this.appbackground.src=this.planszeTypB.src[this.licznik.planszeBlicz]
      if(this.appbackground.src===planszeB[0])
      {
        this.ikon1.seen = true;
        this.appbackground.src = backgrounds[0];
        this.ikon2.seen = true;
        this.ikon3.seen = true;
        this.plansza1.seen = false;
        this.buttonreversekonc.seen = false;
        this.buttonforwardkonc.seen = false;
        this.licznik.planszeBlicz = 0;
       
      }
      /*
      if(this.licznik.planszeBlicz!=0){
        this.appbackground.src=this.planszeTypB.src[this.licznik.planszeBlicz]
      }*/
      
      
    }

  }

})