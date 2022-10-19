
const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://img.freepik.com/premium-photo/fun-dinosaur-3d-illustration_183364-109144.jpg?w=996"
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://assets.dragoart.com/images/4264_501/how-to-draw-a-cute-dinosaur_5e4c8137d81996.59879101_19287_3_3.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://img.freepik.com/premium-vector/dinosaur-cute-baby-character-isolated-object-vector-illustration_514903-541.jpg?w=740"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://i.etsystatic.com/17052224/r/il/7605ee/1921932878/il_570xN.1921932878_j3bi.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://image.petmd.com/files/2187242989_2eacb23b1e_z-slide1.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://image.similarpng.com/very-thumbnail/2020/08/Hand-drawn-dinosaur-playing-guitar-on-transparent-background-PNG.png"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://static.boredpanda.com/blog/wp-content/uploads/2020/03/5e6782b89ee19_1nyn34drl0l31__700.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/008/132/085/small_2x/dinosaur-cartoon-play-a-game-video-games-controller-nerd-geek-gamer-t-rex-cartoon-free-vector.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://icatcare.org/app/uploads/2018/07/Elderly-cats.png"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://www.rover.com/blog/wp-content/uploads/2018/05/shy-karaoke-dog-is-all-of-us-HERO-960x540.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://variety.com/wp-content/uploads/2013/06/keanu-2.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://cdn.pixabay.com/photo/2016/04/01/09/29/cartoon-1299393__340.png"
    }
  ];

  // *NOTE* The for loop below is obsolete now that I have the petsOnDom function that renders dynamically

   //const app = document.querySelector("#app");

//    for (let i = 0; i < pets.length; i++) {
//      app.innerHTML += 
//    `<div class="card text-center">
//         <div class="card-header">
//            ${pets[i].name}
//          </div>
//      <div class="card-body">
//        <img src=${pets[i].imageUrl} alt="Picture of pet for adoption">
//        <p class="card-text">${pets[i].color}</p>
//        <p>${pets[i].specialSkill}</p>
//        <a href="#" class="btn btn-primary">${pets[i].type}</a>
//      </div>
//    </div>`
//  }

 // dynamically rendering to the DOM

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const petsOnDom = (array) => {
  let domString = "";
  for (const animal of array) {
    domString += 
      `<div class="card text-center card-container">
          <div class="card-header">${animal.name}
          </div>
          <div class="card-body">
            <img src=${animal.imageUrl} alt="Picture of pet for adoption>
            <div class="text-container">
              <p class="card-text">${animal.color}</p>
              <p>${animal.specialSkill}</p>
            </div>
            <div class="card-button-container">
              <a href="#" class="btn btn-primary">${animal.type}</a>
              <button type="button" class="btn btn-danger" id="delete--${animal.id}">delete</button>
            </div>
          </div>
       </div>`;
  }

  renderToDom("#app", domString);
}

petsOnDom(pets);

// filtering with buttons

const filter = (array, petTypeString) => {
  const petTypeArray = [];

  for (const animal of array) {
    if (animal.type === petTypeString) {
      petTypeArray.push(animal);
    }
  }

  return petTypeArray;
}

const allPetsButton = document.querySelector("#all-button");
const catsButton = document.querySelector("#cat-button");
const dogsButton = document.querySelector("#dog-button");
const dinosButton = document.querySelector("#dino-button");

allPetsButton.addEventListener('click', () => {
  petsOnDom(pets);
});

catsButton.addEventListener('click', () => {
  const petsAreCats = filter(pets, 'cat');
  petsOnDom(petsAreCats);
});

dogsButton.addEventListener('click', () => {
  const petsAreDogs = filter(pets, 'dog');
  petsOnDom(petsAreDogs);
});

dinosButton.addEventListener('click', () => {
  const petsAreDinos = filter(pets, 'dino');
  petsOnDom(petsAreDinos);
});

// adding a form to create new cards 

const form = document.querySelector('form');

const createPet = (e) => {
  e.preventDefault();

  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
    imageUrl: document.querySelector("#imageUrl").value
  }

  pets.push(newPetObj);
  petsOnDom(pets);
  form.reset();
}

const submitButton = document.querySelector("#submit-button");

form.addEventListener('submit', createPet);

// adding delete buttons

const app = document.querySelector("#app");

app.addEventListener('click', (e) => {

  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");

    const index = pets.findIndex(e => e.id === Number(id));

    pets.splice(index, 1);

    petsOnDom(pets);
  }
});

const startApp = () => {
  petsOnDom(pets);
}

startApp();
