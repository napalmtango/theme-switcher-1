$(document).ready(function () {
  // localStorage.clear();
  console.log(localStorage.getItem("theme"));
});

let themeValue = localStorage.getItem("theme");

if (themeValue === null) {
  $(`body`).addClass("pigskin");
  $(`h1`).addClass("h1pigskin");
  $(`h2`).addClass("h2pigskin");
}
if (themeValue === "pigskin") {
  $(`body`).addClass("pigskin");
  $(`h1`).addClass("h1pigskin");
  $(`h2`).addClass("h2pigskin");
}

if (themeValue === "nfl") {
  $(`body`).addClass("nfl");
  $(`h1`).addClass("h1nfl");
  $(`h2`).addClass("h2nfl");
}
if (themeValue === "turf") {
  $(`body`).addClass("turf");
  $(`h1`).addClass("h1turf");
  $(`h2`).addClass("h2turf");
}

// buttons
$("#pigskin").click(function () {
  localStorage.setItem("theme", "pigskin");
  console.log("new theme: " + localStorage.getItem("theme"));
  $(`body`).removeClass("pigskin nfl turf");
  $(`h1`).removeClass("h1pigskin h1nfl h1turf");
  $(`h2`).removeClass("h2pigskin h2nfl h2turf");
  $(`body`).addClass("pigskin");
  $(`h1`).addClass("h1pigskin");
  $(`h2`).addClass("h2pigskin");
});

$("#nfl").click(function () {
  localStorage.setItem("theme", "nfl");
  console.log("new theme: " + localStorage.getItem("theme"));
  $(`body`).removeClass("pigskin nfl turf");
  $(`h1`).removeClass("h1pigskin h1nfl h1turf");
  $(`h2`).removeClass("h2pigskin h2nfl h2turf");
  $(`body`).addClass("nfl");
  $(`h1`).addClass("h1nfl");
  $(`h2`).addClass("h2nfl");
});

$("#turf").click(function () {
  localStorage.setItem("theme", "turf");
  console.log("new theme: " + localStorage.getItem("theme"));
  $(`body`).removeClass("pigskin nfl turf");
  $(`h1`).removeClass("h1pigskin h1nfl h1turf");
  $(`h2`).removeClass("h2pigskin h1nfl h2turf");
  $(`body`).addClass("turf");
  $(`h1`).addClass("h1turf");
  $(`h2`).addClass("h2turf");
});
