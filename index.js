
let counterOneHome = 0;


let counterOneGuests = 0;


function homeOne(){

counterOneHome += 1;
 document.getElementById("homePlusOne").innerText = counterOneHome;

}

function homeTwo(){
    document.getElementById("homePlusOne").innerText = counterOneHome +=2 ;
   }

function homeThree(){
    document.getElementById("homePlusOne").innerText = counterOneHome +=3 ;
}

function guestsOne(){
    counterOneGuests += 1;
    document.getElementById("guestsPlusOne").innerText = counterOneGuests;

}

function guestsTwo(){
    document.getElementById("guestsPlusOne").innerText = counterOneGuests +=2 ;
}

function guestsThree(){
    document.getElementById("guestsPlusOne").innerText = counterOneGuests +=3 ;
}

function homeClear(){
    document.getElementById("homePlusOne").innerText = 0;
    document.getElementById("winner").innerText = "";
}

function guestsClear(){
    document.getElementById("guestsPlusOne").innerText = 0;
    document.getElementById("winner").innerText = "";
}

function Totals(){
 let totalHome = document.getElementById("homePlusOne");
 let totalGuest = document.getElementById("guestsPlusOne");

 if (totalHome.innerText == 0 && totalGuest.innerText == 0){
    document.getElementById("winner").innerText = "";
 } else if (totalHome.innerText > totalGuest.innerText){
    document.getElementById("winner").innerText = "Home wins!";
 }else if(totalHome.innerText < totalGuest.innerText){
    document.getElementById("winner").innerText = "Guests win!";
} else {
    document.getElementById("winner").innerText = "Its a Draw!";
}
}

function guestMinus(){
    if (guestsPlusOne.innerText <= 0){
        document.getElementById("guestsPlusOne").innerText = "0";   
}else {
    document.getElementById("guestsPlusOne").innerText = counterOneGuests -=1 ;
}
}

function homeMinus(){
    if (homePlusOne.innerText <= 0){
        document.getElementById("homePlusOne").innerText = "0";   
}else {
    document.getElementById("homePlusOne").innerText = counterOneHome -=1 ;
}
}