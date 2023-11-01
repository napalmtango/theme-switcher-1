

$( document ).ready(function() {
  // localStorage.clear();
  console.log( localStorage.getItem("theme") )
  

});

let themeValue = ( localStorage.getItem("theme") )
  
if (themeValue === null)  {
  $(`body`).addClass( "blue" );
} 
if (themeValue === "blue")  {
  $(`body`).addClass( "blue" );
} 
if (themeValue === "pink")  {
  $(`body`).addClass( "pink" );
} 
if (themeValue === "green")  {
  $(`body`).addClass( "green" );
} 
  

$("#blue").click(function() {
  localStorage.setItem("theme" , "blue");
  console.log("new theme: "+localStorage.getItem("theme"));
  $(`body`).removeClass();
  $(`body`).addClass( "blue" );
})

$("#pink").click(function() {
  localStorage.setItem("theme" , "pink");
  console.log("new theme: "+localStorage.getItem("theme"));
  $(`body`).removeClass();
  $(`body`).addClass( "pink" );
})

$("#green").click(function() {
  localStorage.setItem("theme" , "green");
  console.log("new theme: "+localStorage.getItem("theme"));
  $(`body`).removeClass();
  $(`body`).addClass( "green" );

})


