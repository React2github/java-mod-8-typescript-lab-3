var numberInput = document.getElementById("spacesNumber");
var stringInput = document.getElementById("stringToPrepend");
var prependButton = document.getElementById("prependButton");


prependButton.addEventListener("click", function () {
    var result = prepend(parseInt(numberInput.value), stringInput.value);
    console.log(result);
});
function prepend(numSpaces, inputString) {
    var spacesString = "";
    for (var i = 0; i < numSpaces; i++) {
        spacesString = spacesString + " ";
    }
    var resultString = spacesString + inputString;
    return resultString;
}
