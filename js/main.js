
(function() { // IIFE ---> immediately invoked function expression ---> good practice
    // start
    console.info(document.getElementById("myHeading").innerHTML);
    console.info("Hello Console")
    console.dir(document) // shows object that represents DOM
    console.info(document.getElementById("myHeading")) // gets the html line for that ID
    console.info(document.getElementById("myHeading").innerHTML) // we get the value
    console.dir(document.getElementById("myHeading")) // looks up all properties and methodes for that element
    document.getElementById("myHeading").innerHTML = "Girts Jermacans"

    // document.querySelector("nav ul li").setAttribute("class", "currentPage") // finds first that match nav ul li - added css class "currentPage" to html tag
   
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

    // // challenge 1
    // document.querySelector(".red").addEventListener("click", function(){
    //     document.querySelector("body").setAttribute("class", "redBack")
    // })
    
    // // challenge 2
    // document.querySelector(".green").addEventListener("click", function(){
    //     document.querySelector("body").setAttribute("class", "greenBack")
    // })

    // // challenge 3
    // document.querySelector(".blue").addEventListener("click", function(){
    //     document.querySelector("body").setAttribute("class", "blueBack")
    // })

    // // challenge 4
    // document.querySelector(".reset").addEventListener("click", function(){
    //     document.querySelector("body").removeAttribute("class")
    // })

    // there is another way to do above challenges. See below
    var colorButtons = document.querySelectorAll(".colPicker")
    console.dir(colorButtons) // we can see this has now created a list with all the classes - redBack, greenBack, blueBack, reset

    for (var i = 0; i < colorButtons.length; i++){
        // console.dir(colorButtons[i])
        colorButtons[i].addEventListener("click", changeColur)
    }

    function changeColur(ev){
        console.info(ev.target.classList[0])
        var colourPicked = ev.target.classList[0] + "Back"
        var bodyElement = document.querySelector("body")
        if (colourPicked === "resetBack"){// triple equals means - value must match and also data type must match
            bodyElement.removeAttribute("class")
        }else{
            bodyElement.setAttribute("class", colourPicked)
        }
    }

    // image rotator
    var imageAr = [
        'images/view1.jpg',
        'images/view2.jpg', 
        'images/view3.jpg', 
        'images/view4.jpg', 
        'images/view5.jpg', 
        'images/view6.jpg'
    ];

    var counter = 0;
    changeImage()
    setInterval(changeImage, 2000)
    function changeImage(){
        counter++
        if (counter === imageAr.length){
            counter = 0
        }
        document.getElementById("myImages").setAttribute("src", imageAr[counter])
    }

    // console.dir(window.location.href)
    var url = window.location.href
    // console.dir(url.split("/").pop()) // pop gets the last value from array
    var fileName = url.split("/").pop()
    console.info(fileName)

    // Challenge 4
    var allLinks = document.querySelectorAll('nav ul li')
    console.info(allLinks)
    // lets retrieve the href value of each a link and compare it to window .html value - where is a match - apply right stuff
    console.dir(document.querySelector("a").attributes[0].nodeValue)
   /* for (var i = 0; i < allLinks.length; i++){
        var value = document.querySelector("a").attributes.nodeValue
        if (value === fileName){
            document.querySelector(allLinks[0]).setAttribute("class", "currentPage")
        }
    } CANT DO IT :(((( */ 

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