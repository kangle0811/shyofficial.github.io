if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready(){
    var submittedButton = document.getElementsByClassName("submitted");
    console.log(submittedButton);
    for (var i = 0; i < submittedButton.length; i++){
        var button = submittedButton[i];
        button.addEventListener("click", submittedButton);
    }
    document
    .getElementsByClassName("submitted")[0]
    .addEventListener("click", notedButtonClicked);
}

function notedButtonClicked(){
    alert("Aloha! Dear valued member really welcome you visit our store agian, enjoy it!")

}