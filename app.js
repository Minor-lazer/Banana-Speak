var btnTranslate=docment.querySelectr("#btnTranslate");
var textInput=document.querySelector("#input-txt");
var outputDiv=document.querySelector("#output");


var serveURL="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input)
{
    return serveURL + "?" + "text=" + input
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
