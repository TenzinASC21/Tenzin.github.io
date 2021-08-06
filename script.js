let divider = document.getElementById("content");
let arrows = document.getElementById("arrow");
let down = document.getElementById("down");

//bottom arrow interaction
down.onclick = function downClick(){
    down.remove();
    let up = document.createElement("img");
    up.setAttribute("id", "up")

    //arrow change
    up.src = "https://www.pngkit.com/png/full/255-2557792_up-arrow-top-image-png-white.png";
    up.style["width"] = "50px"
    up.onmouseover = function widthIncrease(){
        up.style["width"] = "120px"
    };
    up.onmouseout = function widthDecrease(){
        up.style["width"] = "50px"
    }
    arrows.appendChild(up);

     //adding content
    let addSpace = document.createElement("br");
    divider.appendChild(addSpace);

    divider.style["background-color"] = "plum";
    divider.style["display"] = "flex";
    divider.style["flex-direction"] = "column";
    divider.style["alignItems"] = "center";


    //codeHelp title
    let codeHelp = document.createElement("h3");
    codeHelp.innerHTML = "CODE HELP";
    codeHelp.style["font-family"] = "fantasy";
    codeHelp.style["font-size"] = "30px";
    codeHelp.style["text-align"] = "center";
    codeHelp.style["color"] = "white";
    divider.appendChild(codeHelp);
    divider.appendChild(addSpace);
    divider.appendChild(addSpace);

    let mdn = document.createElement("img");
    mdn.setAttribute("id", "mdn");
    mdn.src = "data:image/jpeg;base64,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";
    mdn.style["width"]= "300px"
    divider.appendChild(mdn);
    
    let mdnLink = document.createElement("a");
    mdnLink.href = "https://developer.mozilla.org/en-US/";
    mdnLink.target = "blank";
    mdnLink.innerHTML = "MDN WEB DOCS";
    mdnLink.style["font-size"] = "30px";
    divider.appendChild(mdnLink);

    let w3= document.createElement("img");
    w3.setAttribute("id","w3");
    w3.src = "https://media-exp1.licdn.com/dms/image/C4D0BAQHF7HLEYX6LSQ/company-logo_200_200/0/1607800000814?e=2159024400&v=beta&t=GhDf2E1ixnXHT2c4bQQE58T---2Mw86d6mi3lHAnzyA";
    w3.style["width"]= "300px"
    divider.appendChild(w3);

    let w3Link = document.createElement("a");
    w3Link.href = "https://www.w3schools.com/";
    w3Link.target = "blank";
    w3Link.innerHTML = "W3 SCHOOLS";
    w3Link.style["font-size"] = "30px";
    divider.appendChild(w3Link);


    let deleteContent = document.getElementById("up");
    deleteContent.onclick = function removeContent(){
       location.reload();
}
}

let FunTime = document.querySelector("h1");
let health = document.querySelector("p");
let topDivider = document.getElementById("top");

FunTime.onmouseover = function expandInfo(){
    health.remove();
    let description = document.createElement("h4");
    description.innerHTML = "This is a very fun website developed by an avid Shrek enthusiast. You have access to media such as streaming services and game libraries. There is additional code help at the bottom.";
    description.style["color"]="white";
    description.style["font-size"]="40px";
    topDivider.appendChild(description);
    topDivider.style["backgroundImage"] = "url('https://i.pinimg.com/originals/0b/59/34/0b5934b623f3c6f5377f221959d77982.gif')";
    topDivider.style["text-align"] = "center";
}

FunTime.onmouseout = function returnToOriginal(){
    location.reload();
}


