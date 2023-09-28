const { createApp } = Vue;

createApp({
  data(){
    return{
      posters:[
        './img/01.webp',
        './img/02.webp',
        './img/03.webp',
        './img/04.webp',
        './img/05.webp',
        './img/06.webp',
        './img/07.webp',
        './img/08.webp',
        './img/09.webp',
        './img/10.webp',
        './img/11.webp',
        './img/12.webp'
      ],
      counter: 0
    }
  }
}).mount('#app')