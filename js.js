var x = document.createElement("IMG");
  x.setAttribute("src", "https://images.unsplash.com/photo-1604050170221-aed634784f64");
  x.setAttribute("width", "370");
  x.setAttribute("height", "370");
  x.setAttribute("alt", "logo");
  x.setAttribute("display", "block");
  x.setAttribute("position", "relative	");
  x.setAttribute("padding", "50px");
  x.setAttribute("id", "photoone");
  x.style.padding = "50px";
  x.style.border = "3px solid black";
  x.style.cursor = "none";
  x.style.borderRadius = "30px";
  document.body.appendChild(x);
 
  var h = document.getElementById("photoone");
  h.insertAdjacentHTML('afterend', '<p id="textofsunset">This is the photo of the sunset</p>');
  var a = document.getElementById("textofsunset");
  a.style.marginLeft="130px";
  a.style.marginTop="-30px";
