function burgah() {
    var x = document.getElementById("damenu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
}