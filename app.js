function favMovie (movie = 'Howls Moving Castle', name = 'Sofi') {
        console.log(`my name is ${name} and my favorite movie is ${movie}`)
    }


favMovie();

let favMovie = (movie = 'Howls Moving Castle', name = 'Sofi') => {console.log(`my name is ${name} and my favorite movie is ${movie}`)};

favMovie();



let getFirstName = (name) => {
    let nameArray = name.split(" ");
    console.log(nameArray[0]);
};

let getFirstNameConcise = (name) => {console.log(name.split(" ")[0])};


getFirstName('Sofi Engobor');
getFirstNameConcise('Sofi Engobor');

console.log('%cSOFI', 'background:red; color:white; border:3px solid blue; padding:5px;');

const doMath = (x, y) => {
    
    let product = (x*y);
    let exponential = Math.pow(x, y);

    const doneMath = (`the product is ${product} and the exponential is ${exponential}`);
    console.log(doneMath);
}

doMath(4, 6);


const someThings = (name, location, favFoods) => {console.log([name, location, favFoods])};
    let arr = ["Paul", "Birmingham", "Kimchi"];
   
someThings(...arr);

let myName = 'Bobs Burger'

const name = (str) => {
    
    let array = [...str];

    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
};

name(myName);

