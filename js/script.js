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
      titles:[
        'Goku standard form',
        'Goku Super Sajan',
        'Goku Super Sajan II',
        'Goku Super Sajan II loading',
        'Goku Super Sajan II loading again',
        'Goku Super Sajan II loading again and again',
        'Goku Super Sajan II is transforming',
        'Goku\'s hair is getting longer',
        'Goku\'s trasformation in progress',
        'Goku Super Sajan III',
        'Goku Super Sajan III\'s gaze ',
        'Goku Super Sajan III\'s fury ',
      ],
      lores:[
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero nemo ex consequatur ducimus voluptatum nostrum officiis asperiores sunt. Dicta explicabo iste ex ullam in? Omnis fugiat corrupti ad eaque!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, culpa. Illo dolore enim obcaecati, temporibus earum suscipit iste beatae, quis distinctio, explicabo ab quos? Error.',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod consectetur quae veniam nam aliquid repellat provident deserunt mollitia debitis, sapiente qui ut. Asperiores ea consequatur dolores perferendis minus sequi libero laudantium cum porro, odio magni.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus alias in nobis eos rem tempore.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, molestias. Nostrum cupiditate repellat dolor consectetur dolores!',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum sit iste nisi corporis nemo illum provident ab libero.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus quas omnis dolores odio sunt totam sint officiis incidunt mollitia.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet corporis voluptas accusamus cupiditate, quam illum cumque nesciunt, excepturi hic itaque ipsa!',
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, quae explicabo.',
      ],
      counter: 0
    }
  },
  methods:{
    nextPrev(isNext){
      // incremento o decremento il counter con i bottoni
      isNext ? this.counter++ : this.counter--;

      // controllo validità del counter
      if(this.counter === this.posters.length){
        this.counter = 0;
      }
      else if(this.counter < 0){
        this.counter = this.posters.length - 1;
      }
    }
  },
  mounted() {
    // Avvia l'autoplay ogni 3 secondi
    setInterval(() => {
      this.nextPrev(true);
    }, 3000);
  }
}).mount('#app')