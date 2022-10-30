const txt = document.querySelector("#typing");

window.addEventListener("pageshow", async () => {
    let words = ["Kagaguhan.", 
                "Sanctuary.",
                "Playroom.",
                "Dogshowan.",
                "Pogi si james."];
    let count = 1;
    let lpms = 200;
    typingWords(words[0], txt, lpms);
    setInterval(async () => {
        if (txt.innerHTML.includes("undefined")) count = 0;
        txt.innerHTML = "";
        typingWords(words[count], txt, lpms);
        if (count + 1 === words.length) {
            count = 0;
        } else {
            count++;
        }
    }, (lpms * 2) * words[count].length)
})

function typingWords(string, elementObj, speed = 100) {
    let arr = [...string];
    let index = 0;
    
    const interval = setInterval(async () => {
        elementObj.innerHTML += arr[index];
        index++;
        if (elementObj.innerHTML.length === arr.length) clearInterval(interval);
    }, speed);
}