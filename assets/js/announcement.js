const dates = document.querySelectorAll(".card-subtitle");
const txts = document.querySelectorAll(".card-text");
const loading = document.querySelector("#annClose");
const ann = document.querySelector("#annOpen");
const text = 

window.addEventListener("pageshow", async () => {
    const raw = await fetch("https://naynaypi.is-not-a.dev/api/announcements");
    if (!raw.ok) window.location.reload();
    setTimeout(() => {
      loading.style.display = "none";
      ann.style.display = "block";
    }, 3000);
    
    const infoArr = await raw.json();
    let index1 = 0;
    let index2 = 0;
    
    dates.forEach(date => {
        if (index1 > 4) return;
        if (date.innerHTML === " ") window.location.reload();
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
