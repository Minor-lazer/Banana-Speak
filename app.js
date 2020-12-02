var btnTranslate=docment.getElementById("btn-translate");
var textInput=document.getElementById("input-txt");
var outputDiv=document.getElementById("output");


var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input)
{
    return serverURL + "?" + "text=" + input
}

function errorHandler(error)
{
    console.log("error occured",error);
    alert("Something went wrong with the server ,please try again after sometime");
}

function clickHandler()
{
    var inputText=txtInput.value;

    fetch(getTranslationsURL
        (inputText)).then(response=>response.json())
        .then(json=>{
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;

        })

        .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)
