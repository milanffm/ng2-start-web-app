// JavaScript Document
if(window.navigator.systemLanguage && !window.navigator.language) {
  function hoverIE() {
    var LI = document.getElementById("Navigation").firstChild;
    do {
      if (sucheUL(LI.firstChild)) {
        LI.onmouseover=einblenden; LI.onmouseout=ausblenden;
      }
      LI = LI.nextSibling;
    }
    while(LI);
  }

  function sucheUL(UL) {
    do {
      if(UL) UL = UL.nextSibling;
      if(UL && UL.nodeName == "UL") return UL;
    }
    while(UL);
    return false;
  }

  function einblenden() {
    var UL = sucheUL(this.firstChild);
    UL.style.display = "block"; UL.style.paddingBotton = "0.4em";
  }
  function ausblenden() {
    sucheUL(this.firstChild).style.display = "none";
  }

  window.onload=hoverIE;
}