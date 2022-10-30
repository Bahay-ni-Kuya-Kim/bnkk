const dates = document.querySelectorAll(".card-subtitle");
const txts = document.querySelectorAll(".card-text");

window.addEventListener("pageshow", async () => {
    const raw = await fetch("https://naynaypi.is-not-a.dev/api/announcements");
    const infoArr = await raw.json();
    let index1 = 0;
    let index2 = 0;
    console.log(infoArr[0])
    
    dates.forEach(date => {
        if (index1 > 4) return;
        let created = new Date(infoArr[index1].createdTimestamp);
        date.innerHTML = created.toDateString().substr(4);
        index1++;
    });
    
    txts.forEach(txt => {
        if (index2 > 4) return;
        txt.innerHTML = infoArr[index2].cleanContent;
        index2++;
    });
})
