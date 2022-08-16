const numberInput = document.getElementById("spacesNumber") as HTMLInputElement;
const stringInput = document.getElementById("stringToPrepend") as HTMLInputElement;
const prependButton = document.getElementById("prependButton") as HTMLButtonElement;

prependButton!.addEventListener("click", function () {
    console.log("Trigger working...")
    let prependResult = prepend(parseInt(numberInput!.value), stringInput!.value)
    console.log(prependResult)

});


function prepend(numSpaces: number, inputString: string) {
    let spacesString: String = ""
    for (let i=0; i < numSpaces; i++) {
        spacesString = spacesString + " "
    }
    let resultString: String = spacesString + inputString

    return resultString
}