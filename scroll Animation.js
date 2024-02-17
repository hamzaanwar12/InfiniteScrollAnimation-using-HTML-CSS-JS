let div = document.querySelector(".container div")
let container = document.querySelector(".container")
let lastScroll = 0;
let count = 0;

document.body.offsetHeight = "100rem"
console.log(div)
console.log(container)

window.addEventListener("scroll", () => {

    if (document.documentElement.scrollTop >= (lastScroll + 75)) 
    {
        lastScroll = document.documentElement.scrollTop
        document.body.style.height += lastScroll;
        console.log("scrolled")
        
        if (count % 2 == 0) {
            container.insertAdjacentHTML("beforeend", `<div class="element left">
                <h1>Content</h1></div>`)
            count++;
        }
        else {
            container.insertAdjacentHTML("beforeend", `<div class="element right">
                <h1>Content</h1></div>`)
            count++;
        }
    }

    else if (document.documentElement.scrollTop <= (lastScroll - 25)) 
    {
        count--;
        lastScroll = document.documentElement.scrollTop
        document.body.style.height -= (lastScroll+25);
        document.body.style.overflowY = "scroll"
        
        let scrolledElements = Array.from(document.querySelectorAll(".element"))
        let list = scrolledElements[scrolledElements.length - 1].classList;
        console.log(scrolledElements)

        if(list.contains("left"))
            scrolledElements[scrolledElements.length-1].classList.add("leftReverse")
        else if(list.contains("right"))
            scrolledElements[scrolledElements.length-1].classList.add("rightReverse")
        
        setInterval(() => {
            scrolledElements[scrolledElements.length - 1].remove();
        }, 1200);
    }

})