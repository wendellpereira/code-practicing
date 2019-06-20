function registerHandlers(idx) {
  return function () {
    alert(idx);
    return false;
  }
}

var as = document.getElementsByTagName('a');
for (var idx = 0; idx < as.length; idx++) {
  as[idx].onclick = registerHandlers(idx);
}

registerHandlers();
