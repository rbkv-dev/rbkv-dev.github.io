var sceneTL = document.getElementById("scene-top-left");
var sceneTR = document.getElementById("scene-top-right");
var sceneBR = document.getElementById("scene-bottom-right");
var sceneBC = document.getElementById("scene-bottom-center");
var sceneBL = document.getElementById("scene-bottom-left");

var parallaxTL = new Parallax(sceneTL);
var parallaxTR = new Parallax(sceneTR);
var parallaxBR = new Parallax(sceneBR);
var parallaxBC = new Parallax(sceneBC);
var parallaxBL = new Parallax(sceneBL);

sceneTL.removeAttribute("style");
sceneTR.removeAttribute("style");
sceneBR.removeAttribute("style");
sceneBC.removeAttribute("style");
sceneBL.removeAttribute("style");
