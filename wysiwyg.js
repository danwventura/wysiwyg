"use strict";

let container = document.getElementById("container");
let input = document.getElementById("input");
let card = document.getElementsByClassName("card");
let bio = document.getElementsByClassName("bio");
let people = [
  {
    title: "Samurai ",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: "1747",
    death: "1797"
  
    }
  },

  {
  title: "Samurai ",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: "1747",
    death: "1797"
  }
},

{
    title: "Samurai ",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: "1747",
    death: "1797"
  
    }
  },

  {
  title: "Samurai ",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: "1747",
    death: "1797"
  }
},

{
    title: "Samurai ",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: "1747",
    death: "1797"
  
    }
  },

  {
  title: "Samurai ",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: "1747",
    death: "1797"
  }
}


];


//For loop to cycle through people and run buildCard for each person 
function populateDom(){
for (let i = 0; i < people.length; i++) {
  let person = people[i];

  buildCard(person);
}
  addClickEvent();
}

//Builds card for each person
  function buildCard(person){
    container.innerHTML += `<person class="card"><header>${person.title}${person.name}</header><section><p class="bio">${person.bio}</p><img src="${person.image}">
    </section><footer>${person.lifespan.birth} - ${person.lifespan.death}</footer></person>`

     }

//For loop to assign event listener for each card to run multiple functions
  function addClickEvent(currCard){
    for (let i = 0; i < card.length; i++) {
      let currCard = card[i];
      let currBio = bio[i];
    currCard.addEventListener("click", function(){
      removeSelected();      
      input.value = "";
      input.focus();
      currCard.classList.add("selected");
      keyEvent(currCard, currBio);

    })
  }
}
//Removes border from last selected card
  function removeSelected(){
    for (let i = 0; i < card.length; i++) {
      card[i].classList.remove('selected')
    
    }
  }

//Sets bio section in each card to text area input
  function keyEvent (currCard,currBio){
    input.addEventListener("keyup", function(event){
    if(currCard.classList.contains('selected')){
     let newBio = event.currentTarget.value
    currBio.innerHTML = newBio;
    
//Sets enter key to "clear" input text after inner-bios are changed
    if(event.keyCode === 13) {
      currBio.innerHTML = input.value;
      input.value = "";
    
       }
      }
     })
    }
  
  




populateDom();

