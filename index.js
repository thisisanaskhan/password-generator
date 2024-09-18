const inputSlider=document.querySelector("[slider]");
const inputSliderNum=document.querySelector("[slider-num ]");
const passwordDisplay =document.querySelector("#inputPassword");
const upprCase =document.querySelector("#Uppercase");
const lwrCase =document.querySelector("#Lowercase");
const radioNum =document.querySelector("#Number");
const radioSymbol =document.querySelector("#Symbol");
const generateBtn=document.querySelector("[generate-pass]");
const allCheckBox=document.querySelector("input[type-checkbox]");
const colorIndicator=document.querySelector(".colorindicator"); 

let password="";
let passwordLength=10;
let checkCount=1;
handelSlider();

//set password length

function handelSlider(){
    inputSlider.value=passwordLength;
    inputSliderNum.innerText=passwordLength;
}

//colorindicator
function setIndicator(color){

}

function getRndmInt(min,max)
{
    return Math.floor(Math.random()*(max-min))+min;
}

function generatemNum(){
    return  getRndmInt(0,9);
}
function generateLowerCase(){
    return String.fromCharCode( getRndmInt(97,123));
}
function generateUpperCase(){
    return String.fromCharCode( getRndmInt(55,91));
}
function generateSymbol(){

    const randonNum= getRndmInt(0,symbol.length);
    return Symbols.charat(random);
}
function calcStrength(){
     
}

