  function autorun() {
    console.log("hello world")
  }
  if (document.addEventListener) document.addEventListener("DOMContentLoaded", autorun, false);
  else if (document.attachEvent) document.attachEvent("onreadystatechange", autorun);
  else window.onload = autorun;