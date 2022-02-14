$(function () {
  let $qus = $(".qus");
  let $ans = $(".ans");

  $qus.click(function () {
    $(this).next().slideToggle("slow");
    $(this).toggleClass("active");

    $(this).parent().siblings().find(".qus").removeClass("active");
    $(this).parent().siblings().find(".ans").slideUp("slow");
  });

  $(".menu p").click(function () {
    $(this)
      .parent()
      .siblings(".item-container")
      .children(".hide")
      .addClass("hide-mark");
    $(this)
      .parent()
      .siblings(".item-container")
      .children(".hide-mark")
      .fadeToggle("slow");

    if ($(this).html() == "+ More") {
      $(this).html("- Hide");
    } else {
      $(this).html("+ More");
    }
  });
});

var tl = gsap.timeline({ paused: "true" });

tl.to(".menu-hidden", {
  duration: 1,
  x: "0%",
  ease: Expo.easeInOut,
});

tl.fromTo(
  ".li",
  {
    y: "-100%",
    opacity: 0,
  },
  {
    duration: 0.5,
    opacity: 1,
    y: "0%",
    stagger: 0.15,
  }
);

tl.fromTo(
  ".social-li",
  {
    y: "-50%",
    opacity: 0,
  },
  {
    duration: 0.8,
    opacity: 1,
    stagger: 0.15,
    ease: Expo.easeOut,
  },
  "-=0.5"
);

function toggle() {
  tl.play();
}
function togglec() {
  tl.reverse();
}

let form = document.getElementById("login");
let username, password, region;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  document.querySelector(".preloader").style.display = "flex";

  username = document.getElementById("riotid").value;
  password = document.getElementById("pswrd").value;
  region = document.getElementById("region").value;

  async function getWeapons(url, data) {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    let loginData = await response;
    return loginData;
  }

  let url = "https://api.checkvalorant.com/login/login";
  let data = {
    RitoID: username,
    RitoPass: password,
    Region: region,
  };

  let dateNow = parseFloat(Math.floor(new Date().getTime() / 1000));
  let expiresAt = localStorage.getItem("expiresAt");
  let isExpired = dateNow > expiresAt;

  if (username === localStorage.getItem("username") && !isExpired) {
    window.open("/weapons", (target = "_self"));
    document.querySelector(".preloader").style.display = "none";
  } else {
    getWeapons(url, data)
      .then((wep) => {
        // console.log(wep);
        if (wep.status === 200) {
          localStorage.setItem("username", username);
          window.open("/weapons", (target = "_self"));
          document.querySelector(".preloader").style.display = "none";
        } else if (wep.status === 429) {
          alert("Rate Limit Exceeded, Plz Contact Us🙃");
          form.reset();
          document.querySelector(".preloader").style.display = "none";
        } else if (wep.status === 501) {
          alert(
            "You might have activated MFA on your Riot Account. We haven't added suppport for it yet due to limited funds😔. Consider Donating🙂"
          );
          form.reset();
          document.querySelector(".preloader").style.display = "none";
        } else if (wep.status === 401) {
          alert("Wrong Credentials 🥺 , Plz Try Again 🤓");
          form.reset();
          document.querySelector(".preloader").style.display = "none";
        } else {
          alert("its not u, it's ME🥺. Don't give up on ME Just Yet.💖");
          form.reset();
          document.querySelector(".preloader").style.display = "none";
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something Went Wrong 😥 , Plz Try Again 🤓");
        document.querySelector(".preloader").style.display = "none";
      });
  }
});
