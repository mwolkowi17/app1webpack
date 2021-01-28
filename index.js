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
         //ikon1:"./images/D1_ikona1_wersja2.png",
         //ikon1seen:true,
         ikon1:{
           src: "./images/D1_ikona1_wersja2.png",
           seen:true
         },
         ikon2:"./images/D1_ikona2.png"
        //ikon1:"https://picsum.photos/id/1005/600/200"
      }
    },
    /*render: function(createElement) {
      return createElement('div', 'Hello world vue');
    }*/
  })