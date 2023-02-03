//Object Destructuring 1
//numPlanets = 8, yearNeptuneDiscovered = 1846

//Object Destructuring 2
//discoveryYears = [yearsNeptuneDiscovered: 1846, yearsMarsDiscovered: 1659]

//Object Destructuring 3
//Your name is Alejandro and you like purple
//Your name is Melissa and you like green
//Your name is undefined and you like green

//Array Destructuring 1
//Maya
//Marisa
//Chi

//Array Destructuring 2
//Rainsdrops on roses
//whiskers on kittens
//[Bright copper kettles, warm woolen mittens, Brown paper packages tied up with strings]

//Array Destructuring 3
//[10,30,20]

let obj = {
    numbers: {
        a: 1,
        b: 2
    }
}

let {a,b} = obj.numbers;
arr = [1,2]; 
[arr[0],arr[1]] = [arr[1], arr[0]];

function raceResults([first, second, third, ...rest]) {
    return {first, second, third, rest};
}

const raceResults2 = ([first, second, third, ...rest]) => ({first, second, third, rest});