function validateInput() {
  // Write your code here.
  var donate = document.getElementById("donate").checked;
  var satisfied = document.getElementById("satisfied").checked;
  var notSatisfied = document.getElementById("not-satisfied").checked;
  var hasReason = document.getElementById("reason").value.length > 1;
  var errorMsg = document.getElementsByClassName("error-message")[0];

  var rule1 = donate ? satisfied : true;
  var rule2 = notSatisfied ? hasReason : true;

  errorMsg.innerHTML = '';

  if(!rule1 && !rule2) {
    errorMsg.innerHTML = 'BOTH RULES FAILED';
  } else if(!rule1) {
    errorMsg.innerHTML = 'RULE 1 FAILED';
  } else if(!rule2) {
    errorMsg.innerHTML = 'RULE 2 FAILED';
  }

  return rule1 && rule2;
}

validateInput();

console.log(document.getElementsByClassName("error-message")[0].innerHTML);
