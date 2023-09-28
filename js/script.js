// Ottieni riferimenti agli elementi HTML
const itemsWrapper = document.querySelector('.items-wrapper');
const btnPrev = document.querySelector('.up');
const btnNext = document.querySelector('.down');
const ThubsWrapper = document.querySelector('.thubs-wrapper');

// Array di percorsi delle immagini
const images = [
  {
    image: 'img/01.webp',
    title: 'Goku standard form',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero nemo ex consequatur ducimus voluptatum nostrum officiis asperiores sunt. Dicta explicabo iste ex ullam in? Omnis fugiat corrupti ad eaque!',
  },
  {
    image: 'img/02.webp',
    title: 'Goku Super Sajan',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, culpa. Illo dolore enim obcaecati, temporibus earum suscipit iste beatae, quis distinctio, explicabo ab quos? Error.',
  },
  {
    image: 'img/03.webp',
    title: 'Goku Super Sajan II',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod consectetur quae veniam nam aliquid repellat provident deserunt mollitia debitis, sapiente qui ut. Asperiores ea consequatur dolores perferendis minus sequi libero laudantium cum porro, odio magni.',
  },
  {
    image: 'img/04.webp',
    title: 'Goku Super Sajan II loading',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus alias in nobis eos rem tempore.',
  },
  {
    image: 'img/05.webp',
    title: 'Goku Super Sajan II loading again',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.',
  },
  {
    image: 'img/06.webp',
    title: 'Goku Super Sajan II loading again and again',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi.',
  },
  {
    image: 'img/07.webp',
    title: 'Goku Super Sajan II is transforming',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, molestias. Nostrum cupiditate repellat dolor consectetur dolores!',
  },
  {
    image: 'img/08.webp',
    title: 'Goku\'s hair is getting longer',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum sit iste nisi corporis nemo illum provident ab libero.',
  },
  {
    image: 'img/09.webp',
    title: 'Goku\'s trasformation in progress',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem doloribus quas omnis dolores odio sunt totam sint officiis incidunt mollitia.',
  },
  {
    image: 'img/10.webp',
    title: 'Goku Super Sajan III',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet corporis voluptas accusamus cupiditate, quam illum cumque nesciunt, excepturi hic itaque ipsa!',
  },
  {
    image: 'img/11.webp',
    title: 'Goku Super Sajan III\'s gaze ',
    text: 'Lorem ipsum dolor sit amet.',
  },
  {
    image: 'img/12.webp',
    title: 'Goku Super Sajan III\'s fury ',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, quae explicabo.',
  }
];

// Inizializza un contatore per l'immagine attuale
let counterImg = 0;
let htmltext = ''

// Ciclo per creare dinamicamente le immagini e le miniature
for (let i = 0; i < images.length; i++) {
  const image = images[i].image;
  const title = images[i].title;
  const text = images[i].text;

  // Crea codice html da inserire (immagine, titolo e testo)
  htmltext = `<div class="item hide">`;
  htmltext += `<img src="${image}">`;
  htmltext += `<div class="bottom-right-title">${title}</div>`;
  htmltext += `<div class="bottom-right-text">${text}</div>`;
  htmltext += `</div>`;

  // Aggiungi codice inserito all'HTML
  itemsWrapper.innerHTML += htmltext;

  // Crea una nuova miniatura e imposta il percorso dell'immagine
  const thub = new Image();
  thub.src = image;
  thub.classList.add('thub');

  // Aggiungi la miniatura al contenitore delle miniature
  ThubsWrapper.append(thub);
}

// Ottieni una collezione di tutte le immagini
const itemsCollection = document.getElementsByClassName('item');

// Rendi visibile la prima immagine
itemsCollection[counterImg].classList.remove('hide');

// Ottieni una collezione di tutte le miniature
const thubCollection = document.getElementsByClassName('thub');

// Imposta la prima miniatura come attiva
thubCollection[counterImg].classList.add('active');

// Gestisci l'evento di clic sul pulsante "Avanti"
btnNext.addEventListener('click', function () {
  // Nascondi l'immagine e la miniatura correnti
  itemsCollection[counterImg].classList.add('hide');
  thubCollection[counterImg].classList.remove('active');

  // Passa all'immagine successiva
  counterImg++;
  if (counterImg === images.length) counterImg = 0;

  // Mostra la nuova immagine e la nuova miniatura
  itemsCollection[counterImg].classList.remove('hide');
  thubCollection[counterImg].classList.add('active');
});

// Gestisci l'evento di clic sul pulsante "Indietro"
btnPrev.addEventListener('click', function () {
  // Nascondi l'immagine e la miniatura correnti
  itemsCollection[counterImg].classList.add('hide');
  thubCollection[counterImg].classList.remove('active');

  // Passa all'immagine precedente
  counterImg--;
  if (counterImg < 0) counterImg = images.length - 1;

  // Mostra la nuova immagine e la nuova miniatura
  itemsCollection[counterImg].classList.remove('hide');
  thubCollection[counterImg].classList.add('active');
});