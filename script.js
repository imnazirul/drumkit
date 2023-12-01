const container = document.querySelector(".container");
const kits = ["crash", "kick", "snare", "tom"];

kits.forEach((txt) => {
  let btnEl = document.createElement("button");
  btnEl.className = "btn";
  btnEl.innerText = txt;
  btnEl.style.backgroundImage = "url('images/" + txt + ".png')";
  container.appendChild(btnEl);

  let audioEl = document.createElement("audio");
  audioEl.src = "./audios/" + txt + ".mp3";

  btnEl.addEventListener("click", () => {
    audioEl.play();
    btnEl.style.transform = "scale(0.9)";
    setTimeout(() => {
      btnEl.style.transform = "scale(1)";
    }, 100);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === txt.slice(0, 1)) {
      audioEl.play();
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});
