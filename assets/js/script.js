const numbers = document.querySelectorAll(".number");
const rates = document.querySelectorAll(".rate");
/*

numbers.forEach(function (number, index) {
    console.log(number);
        number.addEventListener("click", function () {
            for (var i = 0; i < index; i++) {
                //numbers[i].classList.toggle("selected");
                numbers[i].classList.add("gray");
                //numbers[i].classList.toggle("gray");
                
                console.log(numbers[i])
                
            }
            numbers[index].classList.toggle("selected");
            
            for (var i = index; i <= index ; i++) {
                numbers[i].classList.remove("selected");
                numbers[i].classList.toggle("gray");
            }
            
        });
    });
*/

document.addEventListener("DOMContentLoaded", function () {
    console.log(numbers);
    console.log(rates);

    var number1 = document.querySelectorAll(".list1");
    var number2 = document.querySelectorAll(".list2");
    var number3 = document.querySelectorAll(".list3");
    var number4 = document.querySelectorAll(".list4");
    var number5 = document.querySelectorAll(".list5");

    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", function () {
            this.classList.toggle("selected");
        });

    }
});

/*
    number1.addEventListener("click", selectnumber(number1));
    number2.addEventListener("click", selectnumber(number2));
    number3.addEventListener("click", selectnumber(number3));
    number4.addEventListener("click", selectnumber(number4));
    number5.addEventListener("click", selectnumber(number5));

    var miDiv = document.getElementById("numberdiv");
  
    miDiv.addEventListener("click", function () {
      
      miDiv.classList.toggle("selected");
    });
*/
function rating(numero) {
    var numero = numero;
    var number = numero.id;
    var convertido = JSON.stringify(number);
    var final = convertido.charAt(convertido.length - 2);
    console.log(final);

    //recovery of all the data that i will need to create the thanks message
    const btn = document.querySelector("button");
    const thanks = document.querySelector(".thanks");
    const rate = document.querySelector(".numbers");
    const title = document.querySelector(".title");
    const paragraph = document.querySelector(".paragraph");
    const icon = document.querySelector(".icon");
    const note = document.getElementById("note");
    btn.addEventListener("click", function () {
        console.log("numbers");
        rate.classList.add("hidden");
        title.classList.add("hidden");
        paragraph.classList.add("hidden");
        icon.classList.add("hidden");
        thanks.classList.remove("hidden");
        var newDiv = document.createElement("div");
        var content = document.createTextNode("You select " + final + " out of 5 stars");
        newDiv.appendChild(content); //añade texto al div creado.
        note.appendChild(content);
        document.body.insertBefore(newDiv, note);

    });
}

