///4
    let div = document.querySelector("div");

        let text = div.firstChild.nextSibling.nextSibling.nextSibling.textContent.trim();

        console.log(text);
///5 
    document.addEventListener("click", function (e) {
    console.log(`This Is "${e.target.tagName}"`);
    });
          