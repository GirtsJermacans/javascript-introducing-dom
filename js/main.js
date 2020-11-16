
(function() { // IIFE ---> immediately invoked function expression ---> good practice
    // start
    console.info(document.getElementById("myHeading").innerHTML);
    console.info("Hello Console")
    console.dir(document) // shows object that represents DOM
    console.info(document.getElementById("myHeading")) // gets the html line for that ID
    console.info(document.getElementById("myHeading").innerHTML) // we get the value
    console.dir(document.getElementById("myHeading")) // looks up all properties and methodes for that element
    document.getElementById("myHeading").innerHTML = "Girts Jermacans"

    document.querySelector("nav ul li").setAttribute("class", "currentPage") // finds first that match nav ul li - added css class "currentPage" to html tag
   
    // JS is event driven scripting language
    // inline events - onclick="do something" or onload="init()"

    // document.querySelector("nav ul li a").setAttribute("href", "http://www.google.co.uk");
    
    // document.getElementById("myTestEvent").onclick = function(){
        // console.info("DOM event")
    // }

    /* document.getElementById("myTestEvent").addEventListener("click", function(){
        console.info("Addlistener event")
    }) // function here we took in as parameters - can be written in a different name, see below */

    function myFunction(ev){
        console.info("Addlistener event")
        console.dir(ev)
    } // ev represents event object - allows to look what type of event object took place

    document.getElementById("myTestEvent").addEventListener("click", myFunction)

    // challenge 1
    document.querySelector(".red").addEventListener("click", function(){
        document.querySelector("body").setAttribute("class", "redBack")
    })
    
    // challenge 2
    document.querySelector(".green").addEventListener("click", function(){
        document.querySelector("body").setAttribute("class", "greenBack")
    })

    // challenge 3
    document.querySelector(".blue").addEventListener("click", function(){
        document.querySelector("body").setAttribute("class", "blueBack")
    })

    // challenge 4
    document.querySelector(".reset").addEventListener("click", function(){
        document.querySelector("body").removeAttribute("class")
    })

    // end
})();

/// alert("Hellow from up here")
/*
<body onload="init()">
function init()
{
    // do something
}
*/