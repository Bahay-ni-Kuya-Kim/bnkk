const txt = document.querySelector("#typing");
const { Typed } = window;

    let words = ["bagtit",
                "gago", 
                "naz, yawn",
                "valo tayo",
                "tite",
                "pogi si james",
                "ukinnam"];
    const typing = new Typed("#typing", {
      strings: words,
      typeSpeed: 90,
      backSpeed: 70,
      smartBackspace: true,
      loop: true,
      shuffle: true,
      backDelay: 2000,
      startDelay: 3000,
      cursorChar: '█'
    });
