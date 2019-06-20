function appendChildren(decorateDivFunction) {
  let allDivs = document.getElementsByTagName("div")
      parents = allDivs.length;

  for (var i = 0; i < parents; i++) {
    var newDiv = document.createElement("div");
    decorateDivFunction(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}

decorateDiv = (div) => {
  div.innerHTML = div.innerHTML + '<p>Div got decorated.</p>';
}

appendChildren(decorateDiv);

//appendChildren(function(div) {});
console.log(document.body.innerHTML);
