

let number = document.getElementsByClassName("number");
let input = document.getElementById("input");
let deleteAc = document.getElementById("delete");
let result = document.getElementById("result");
let display = document.getElementById("display");
let deleteElement = document.getElementById("deleteElement");


for( let i = 0; i < number.length; i++ ) {
    number[i].addEventListener("click",() => {
        input.value += number[i].innerHTML;
    });
}

deleteAc.addEventListener( "click", () => {
    input.value = "";
})

result.addEventListener( "click", () => {
    let string = input.value;
  
  
    if( string.lastIndexOf( "*" ) !== -1 ) {
        nhan();
    } else if (string.lastIndexOf( "+" ) !== -1 )  {
        cong();
    } else if (string.lastIndexOf( "-" ) !== -1) {
       tru();
    } else if (string.lastIndexOf( "/" ) !== -1){
        chia();
    } else {
        display.innerHTML =  input.value ;
        input.value = "";
    }
})


deleteElement.addEventListener('click', () => {
    let resultValue = input.value;
    input.value = resultValue.slice(0, resultValue.length -1);
})

 let cong = () => {
    let string = input.value;
    let value = 0;
    let value2 = 0;
    let resultNumberString = string.lastIndexOf( "+" );
    value = string.slice( 0, resultNumberString);
    value2 = string.slice ( resultNumberString +1);
    display.innerHTML =  parseInt(value) + parseInt(value2) ;
    input.value = parseInt(value) + parseInt(value2);
 }

 let tru = () => {
    let string = input.value;
    let value = 0;
    let value2 = 0;
    let resultNumberString = string.lastIndexOf( "-" );
    value = string.slice( 0, resultNumberString);
    value2 = string.slice ( resultNumberString +1);
    display.innerHTML =  parseInt(value) - parseInt(value2) ;
    input.value = parseInt(value) - parseInt(value2);
 }

 let nhan = () => {
    let string = input.value;
    let value = 0;
    let value2 = 0;
    let resultNumberString = string.lastIndexOf( "*" );
    value = string.slice( 0, resultNumberString);
    value2 = string.slice ( resultNumberString +1);
    display.innerHTML =  parseInt(value) * parseInt(value2) ;
    input.value = parseInt(value) * parseInt(value2);
 }

 let chia = () => {
    let string = input.value;
    let value = 0;
    let value2 = 0;
    let resultNumberString = string.lastIndexOf( "/" );
    value = string.slice( 0, resultNumberString);
    value2 = string.slice ( resultNumberString +1);
    display.innerHTML =  parseInt(value) / parseInt(value2) ;
    input.value = parseInt(value) / parseInt(value2);
 }