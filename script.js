const pokemonGrid = document.getElementById("pokemon-grid");
const collectionGrid = document.getElementById("collection-grid");
const gallerySection = document.getElementById("gallery-section");
const collectionsSection = document.getElementById("collections");

const modal = document.getElementById("pokemon-modal");
const modalImg = document.getElementById("modal-img");
const modalDescription = document.getElementById("modal-description");

const caughtCount = document.getElementById("caught-count");

let currentPokemon = null;
let caughtPokemons = [];

const pokemonData = [
  { name: "Pikachu", img: "https://img.pokemondb.net/artwork/large/pikachu.jpg", desc: "Electric type Pokémon." },
  { name: "Eevee", img: "https://img.pokemondb.net/artwork/large/eevee.jpg", desc: "Normal type Pokémon with many evolutions." },
  { name: "Moltres", img: "https://img.pokemondb.net/artwork/large/moltres.jpg", desc: "Fire/Flying legendary Pokémon." },
  { name: "Charmander", img: "https://img.pokemondb.net/artwork/large/charmander.jpg", desc: "Fire-type starter Pokémon." },
  { name: "Snorlax", img: "https://img.pokemondb.net/artwork/large/snorlax.jpg", desc: "Very sleepy Pokémon." },
  { name: "Psyduck", img: "https://img.pokemondb.net/artwork/large/psyduck.jpg", desc: "Water-type Pokémon." },
  { name: "Sprigatito", img: "https://img.pokemondb.net/artwork/large/sprigatito.jpg", desc: "Grass-type cat Pokémon." },
  { name: "Bulbasaur", img: "https://img.pokemondb.net/artwork/large/bulbasaur.jpg", desc: "Grass/Poison starter." },
  { name: "Gengar", img: "https://img.pokemondb.net/artwork/large/gengar.jpg", desc: "Ghost/Poison Pokémon." },
  { name: "Vulpix", img: "https://img.pokemondb.net/artwork/large/vulpix.jpg", desc: "Fire-type fox Pokémon." },
  { name: "Jigglypuff", img: "https://img.pokemondb.net/artwork/large/jigglypuff.jpg", desc: "Sing you to sleep." },
  { name: "Dratini", img: "https://img.pokemondb.net/artwork/large/dratini.jpg", desc: "Dragon-type Pokémon." }
];

function renderGallery(pokemons) {
  pokemons.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <button class="details-btn">view details</button>
    `;
    card.querySelector("button").onclick = () => {
      currentPokemon = p;
      openModal(p);
    };
    pokemonGrid.appendChild(card);
  });
}

function openModal(pokemon) {
  modalImg.src = pokemon.img;
  modalDescription.textContent = pokemon.desc;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

function selectPokemon() {
  if (currentPokemon && !caughtPokemons.find(p => p.name === currentPokemon.name)) {
    caughtPokemons.push(currentPokemon);
    updateCollections();
    closeModal();
    showCollections();
  }
}

function updateCollections() {
  collectionGrid.innerHTML = "";
  caughtPokemons.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <button class="remove-btn">Remove</button>
    `;
    card.querySelector("button").onclick = () => {
      caughtPokemons = caughtPokemons.filter(cp => cp.name !== p.name);
      updateCollections();
    };
    collectionGrid.appendChild(card);
  });
  caughtCount.textContent = caughtPokemons.length;
}

function showCollections() {
  gallerySection.style.display = "none";
  collectionsSection.classList.remove("hidden");
}

function showGallery() {
  collectionsSection.classList.add("hidden");
  gallerySection.style.display = "block";
}

function loadMore() {
  const more = pokemonData.map(p => ({ ...p, name: p.name + " Clone" }));
  renderGallery(more);
}

// Initial render
renderGallery(pokemonData);
