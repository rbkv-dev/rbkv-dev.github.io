var sceneUp1 = document.getElementById("scene-up-1");
var sceneUp2 = document.getElementById("scene-up-2");
var sceneDown1 = document.getElementById("scene-down-1");
var sceneDown2 = document.getElementById("scene-down-2");

var parallaxUp1 = new Parallax(sceneUp1);
var parallaxUp2 = new Parallax(sceneUp2);
var parallaxDown1 = new Parallax(sceneDown1);
var parallaxDown2 = new Parallax(sceneDown2);

sceneUp1.removeAttribute("style");
sceneUp2.removeAttribute("style");
sceneDown1.removeAttribute("style");
sceneDown2.removeAttribute("style");
