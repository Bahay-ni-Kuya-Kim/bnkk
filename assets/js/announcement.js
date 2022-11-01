const dates = document.querySelectorAll(".card-subtitle");
const txts = document.querySelectorAll(".card-text");
const loading = document.querySelector("#annClose");
const ann = document.querySelector("#annOpen");

window.addEventListener("pageshow", async () => {
    const raw = await fetch("https://naynaypi.is-not-a.dev/api/announcements");
    if (!raw.ok) history.go(0);
    setTimeout(() => {
      loading.style.display = "none";
      loading.classList.remove("d-md-flex");
      loading.classList.add("d-md-none");
      ann.style.display = "flex";
      ann.classList.remove("d-md-none");
      ann.classList.add("d-md-flex");
    }, 3000);
    
    const infoArr = await raw.json();
    let index1 = 0;
    let index2 = 0;
    
    dates.forEach(date => {
        if (index1 > 4) return;
        let created = new Date(infoArr[index1].createdTimestamp);
        date.innerHTML = created.toDateString().substr(4);
        index1++;
    });
    
    txts.forEach(txt => {
        if (index2 > 4) return;
        txt.innerHTML = infoArr[index2].content;
        index2++;
    });
})
