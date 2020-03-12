
let character1 =
{
    id: 'mrGreen',
    first_name:   'Jacob',
    last_name:    'Green',
    color:        'green',
    description:  'He has a lot of connections',
    age:          45,
    image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation:   'Entrepreneur'
};

let character2 =
{
    id: 'drOrchid',
    first_name:  'Doctor',
    last_name:    'Orchid',
    color:        'white',
    description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age:          26,
    image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    ocupation:   'Scientist'
};

let character3 =
{
    id: 'profPlum',
    first_name:   'Victor',
    last_name:    'Plum',
    color:        'purple',
    description:  'Billionare video game designer',
    age:          22,
    image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation:   'Designer'
};

let character4 =
{
    id:     'missScarlet',
    first_name:   'Kasandra',
    last_name:    'Scarlet',
    color:        'red',
    description:  'She is an A-list movie star with a dark past',
    age:          31,
    image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation:   'Actor'
};

let character5 =
{
    id:     'missScarlet',
    first_name:   'Kasandra',
    last_name:    'Scarlet',
    color:        'red',
    description:  'She is an A-list movie star with a dark past',
    age:          31,
    image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation:   'Actor'
};

let character6 =
{
    id: 'mrsPeacock',
    first_name:   'Eleanor',
    last_name:    'Peacock',
    color:        'blue',
    description:  'She is from a wealthy family and uses her status and money to earn popularity',
    age:          36,
    image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation:   'Socialité'
};

let character7 = 
{
    id: 'mrMustard',
    first_name:   'Jack',
    last_name:    'Mustard',
    color:        'yellow',
    description:  'He is a former football player who tries to get by on his former glory',
    age:          62,
    image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation:   'Retired Football player'
};


// Characters Collection
let charactersArray = [];
charactersArray.push(character1);
charactersArray.push(character2);
charactersArray.push(character3);
charactersArray.push(character4);
charactersArray.push(character5);
charactersArray.push(character6);
charactersArray.push(character7);


// Rooms' Collection
let roomsArray = [ { name: 'Dinning Room'}, {name: 'Conservatory'}, {name:  'Kitchen'},  {name: 'Study'},
                    {name: 'Library'}, {name: 'Billiard Room'}, {name: 'Lounge'}, {name: 'Ballroom'},
                    {name: 'Hall'}, {name: 'Spa'}, {name: 'Living Room'}, {name: 'Observatory'},
                    {name: 'Theater'}, {name: 'Guest House'}, {name: 'Patio'} ];


let weapon1 = { name: 'rope',    weight: 10 };
let weapon2 = { name: 'knife',   weight: 8 };
let weapon3 = { name: 'candlestick', weight: 2};
let weapon4 = { name: 'dumbbell',    weight: 30};
let weapon5 = { name: 'poison',    weight: 2};
let weapon6 = { name: 'axe',    weight: 15};
let weapon7 = { name: 'bat',    weight: 13};
let weapon8 = { name: 'trophy', weight: 25};
let weapon9 = { name: 'pistol', weight: 20};

// Weapons Collection
let weaponsArray = [];
weaponsArray.push(weapon1);
weaponsArray.push(weapon2);
weaponsArray.push(weapon3);
weaponsArray.push(weapon4);
weaponsArray.push(weapon5);
weaponsArray.push(weapon6);
weaponsArray.push(weapon7);
weaponsArray.push(weapon8);
weaponsArray.push(weapon9);


function randomSelector(array)
{
    let ind = Math.floor(Math.random() * array.length)
    return array[ind];
}

function pickMistery()
{
    let misteryEnvelope = new Array();
    misteryEnvelope[0] = randomSelector(charactersArray);
    misteryEnvelope[1] = randomSelector(weaponsArray);
    misteryEnvelope[2] = randomSelector(roomsArray);
    
    return misteryEnvelope;

}

let misteryEnvelope = pickMistery();
console.log("probant la room: " + misteryEnvelope[2].room);


function revealMistery(misteryEnvelope)
{
    
    // **\<FIRST NAME\> \<LAST NAME\> killed Mr.Boddy using the \<WEAPON\> in the \<PLACE\>!!!!**
    // misteryEnvelope[0].first_name
    // misteryEnvelope[0].last_name
    // killed Mr.Boddy using the 
    // misteryEnvelope[1].name;
    // misteryEnvelope[2]
    let cadena = misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name + " killed Mr.Boddy using the " 
    + misteryEnvelope[1].name + " in the " + misteryEnvelope[2].name + "!!!!";
    console.log("Aquesta es la cadena: " + cadena);
    // return cadena;
    // return 'Victor Plum killed Mr.Boddy using the poison in the Billiard Room!!!!';
    return cadena;
}

revealMistery(misteryEnvelope);

