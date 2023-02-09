// This should be used if we include the jquery script in the head section
// $(document).ready(()=>{
    //     $("h1").css("color","red");
//});
    
//two ways to write the jQuery code
$("h1").css("color","red");
jQuery("h2").css("color","red");


//the best way to write the css code should be done in css file
$("h1").addClass("big-title margin-50"); // to add any class | to add two class leave a space between them

// $("h1").removeClass("big-title"); // to remove any class

//hasClass() this function can be used to see that the particular class is present or not
// $("h1").hasClass("margin-50");
//this will return true since the margin-50 is present

// to change the text of the any tag then use .text(this will ingnore the html tags inside the quotation mark)
// $("h1").text("Bye");
// is we want to add any html tag then use .html 
// $("h1").html("<em>Good</em>")

//how to manipulate attributes use(.attr);
// $(img).attr("src");  to get the value of attribute

//to set the attribute
// $("a").attr("href", "https://www.bing.com");  //this will change the google.com to bing.com


//to add the eventlistener using jQuery
// $("h1").click(()=>{
//     $("h1").css("color", "purple");
// })


//this wwill be code if we want to change the color of h1 when we click on the button  using Js
// for(let i=0; i<4;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",()=>{
//         document.querySelector("h1").style.color = "brown";
//     })
// }

//same code using jQuery
// $("button").click(()=>{
//     $("h1").css("color", "purple");
// })

//for keypress this will tell which key is entered it will print in the console
// $("input").keypress((event)=>{
//     console.log(event.key);
// });

//whatver you write in the input box the h1 tag will should be change to the keybind you pressed?
//this will change the h1 tag by text pressed by you
// $("input").keypress((event)=>{
//     $("h1").text(event.key);
// });

// instead of using .events for eventlistener we can use on function in which we will specify the event we want
// $("h1").on("mouseover",function(){
//     $("h1").css("color", "purple");
// });


// before() function can be used to add any tag we want 
// after() opposite of .before()

// prepend() will add any tag just before the main tag
// append() will add any tag just after the main tag

// remove() function can be used to remove the elements from the page


//website animation

//hide() function will hide the tag we want 
// $("button").click(()=>{
//     $("h1").hide();
// });

//similarly we will use show() to show the hided element

//toggle() will switch between hide and show 
// $("button").click(()=>{
//     $("h1").fadeToggle();
// });

//fadeOut() will slowly hide the element having slight transition
//fadeIn() will slowly get the element on the html with transition 
//fadeToggle() will do both fadeout() and fadein() simultaneously

//slideUp() used to collapse the element
//slideDowm() used to uncollapse the element
//slideToggle() used to toggle between up and down


//to create a custom animation we can use animate() function can only change having numeric value not the color the second input should be numeric
// $("button").click(()=>{
//     $("h1").animate({opacity:0.5});
// });


//this will run one by one
$("button").click(()=>{
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});

//remaining function can be seen from documentation