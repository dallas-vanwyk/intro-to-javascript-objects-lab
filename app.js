const pokemon = require('./data.js');

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
}

// display every item in the array
// console.dir(pokemon, { maxArrayLength: null });

// log JUST the name of the pokemon number 59
// console.log(pokemon[58].name);
// this could be improved by using array methods to find specifically the pokemon object with # 59, but this quick-and-dirty works for now

// familiarize with game
// console.log(game);


/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/


game.difficulty = "easy";
// console.log(game);


/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

// console.log(game.party);
game.party.push(pokemon[6]);
// this could be improved by using array methods to filter the pokemon array for the starter pokemon, but this quick-and-dirty works for now
// console.log(game.party);



/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

// I DID NOT REALIZE THIS WAS ASKING ME TO ADD ONLY STARTER POKEMON?? per exercise 7. Thaaaaaaat makes more sense but is definitely not clear here

// initial quick-and-dirty of just picking random pokemon because _student did not understand the assignment_
// game.party.push(pokemon[40]);
// game.party.push(pokemon[59]);
// game.party.push(pokemon[99]);
// console.log(game.party);
// not sure what part 2 of exercise 5 is asking for? The object for each pokemon includes all the attributes

// console.log(pokemon.length);

for (let i=0; i<pokemon.length; i++) {
    if(pokemon[i].starter) {
        console.log(pokemon[i].number);
        game.party.push(pokemon[i]);
    }
}
// need to make this exclude the pikachu that we added in exercise 






/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

// console.log(game.gyms);
// I'm going to do this with a quick-and-dirty for loop because I'm out of time. Note to self to practice forEach later
for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 3) {
        game.gyms[i].completed = true;
    };
}
// console.log(game.gyms);


/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

// console.log(game.party)

// again a quick and dirty for loop÷
for (let i = 0; i < game.party.length; i++) {
    console.log(game.party[i].number);
}