//const numeroA = 555;
//const numeroB = 5;
//const result = numeroA + numeroB;
//console.log(result)

function sum(numeroA, numeroB){
    return numeroA + numeroB;
}

const herobrine = {
    name: "Herobrine",
    hp: 100,
    damage: 10,
    attack: 5,
}

const steve = {
    name: "Steve",
    hp: 100,
    damage: 1,
    attack: 2,
}

const cledonildo = {
    name: "Cledonildo",
    hp: 100,
    damage: 700,
    attack: 1,
}

const berbetilo = {
    name: "Berbetilo",
    hp: 100,
    damage: 15,
    attack: 10,
}

function doDamage(atc, atcd){
    const damage = atcd.hp - atc.damage
    if(damage <= 0) {
        return 0
    }
    return damage;
}

//const attack = doDamage(cledonildo, berbetilo)
//console.log(attack)

const firstCharacter = document.getElementById('first');
const secondCharacter  = document.getElementById('second');
const firstPercentage = document.getElementById('hp1');
const secondPercentage = document.getElementById('hp2');


function handleClickFirst() {
    const attack = doDamage(herobrine, steve)
    steve.hp = attack
    secondPercentage.style.width = steve.hp + '%'
    //console.log(steve)
}

function handleClickSecond() {
    const attack = doDamage(steve, herobrine)
    herobrine.hp = attack
    firstPercentage.style.width = herobrine.hp + '%'
    //conssole.log herobrine
}

firstCharacter.addEventListener('click', handleClickFirst)
secondCharacter.addEventListener('click', handleClickSecond)