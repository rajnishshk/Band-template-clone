let image = document.getElementById("image");
let images = ["nav-img-1.jpg", "nav-img-2.jpg", "nav-img-3.jpg"];

setInterval(function () {
  let random = Math.floor(Math.random() * 3);
  image.src = images[random];
}, 2000);
