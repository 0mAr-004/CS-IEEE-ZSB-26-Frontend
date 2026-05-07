//86 to 93
    //1
    document.getElementById("elzero");
    document.getElementsByClassName("element");
    document.getElementsByTagName("div")[0];
    document.querySelector("#elzero");
    document.querySelector(".element");

    //2
    let img=document.querySelectorAll("img");
    for (let i = 0; i < img.length; i++) {
    img[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    img[i].alt = "Elzero Logo";
    }
    //3

    let input = document.querySelector("[name='dollar']");
    let resultDiv = document.querySelector(".result");


    input.oninput = function () {

    let dollarValue = input.value;
    let exchangeRate = 15.6;
    let egpResult = (dollarValue * exchangeRate).toFixed(2);
    
    if (dollarValue > 0) {
        resultDiv.innerHTML = `{${dollarValue}} USD Dollar = {${egpResult}} Egyptian Pound`;
    } else {

        resultDiv.innerHTML = `{0} USD Dollar = {0} Egyptian Pound`;
    }
    };
// 4
    let divs = document.querySelectorAll("div");

    let firstText = divs[0].textContent;
    let secondText = divs[1].textContent;

    let firstTitle = divs[0].title;
    let secondTitle = divs[1].title;

    divs[0].textContent = secondText;
    divs[1].textContent = firstText;

    divs[0].title = secondTitle;
    divs[1].title = firstTitle;

    divs[1].textContent += " " + divs.length;
    //
    
    


