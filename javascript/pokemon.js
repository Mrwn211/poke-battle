// Pokemon Constructor
function Pokemon(name, health, avatar, sound) {
  this.name = name;
  this.health = health;
  this.avatar = avatar;
  this.sound = sound;
  this.attackCry = function() {
  };
}
Pokemon.prototype.attack = function(pokemon, hpbar) {
  var damage = Math.floor(Math.random() * pokemon.health);
  if (pokemon.health === 1) {
    damage = 1;
  }
  pokemon.health -= damage;
  var audio = new Audio(this.sound);
  audio.play();
  hpbar[0].style.width = pokemon.health + "%";
  if (pokemon.health > 1) {
    console.log(
      pokemon.name +
        " has received " +
        damage +
        " points of damage!" +
        "HP remaining : " +
        pokemon.health + "pt"
    );
    $(".battle-text").html(
      pokemon.name +
        " has received " +
        damage +
        " points of damage!" +
        "HP remaining : " +
        pokemon.health + "pt"
    );
  } else if (pokemon.health === 0) {
    console.log(pokemon.name + " has lost the battle!");
    $(".battle-text").html(pokemon.name + " has lost the battle!");
    return;
  }
};

// Pokemon Instances

var pikachu = new Pokemon(
  "pikachu",
  100,
  "./elements/sprites/pikachu.png",
  "./elements/sounds/Pikachu-attack-sound.mp3"
);
var charmander = new Pokemon(
  "charmander",
  100,
  "./elements/sprites/charmander.png",
  "./elements/sounds/Charmander-attack-sound.mp3"
);
var bulbasaur = new Pokemon(
  "bulbasaur",
  100,
  "./elements/sprites/squirtle.png",
  "./elements/sounds/Bulbasaur-attack-sound.mp3"
);
var squirtle = new Pokemon(
  "squirtle",
  100,
  "./elements/sprites/bulbasaur.png",
  "./elements/sounds/Squirtle-attack-sound.mp3"
);

var pokemons = [pikachu, charmander, squirtle, bulbasaur];
