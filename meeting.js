setCookies = () => {
  const bgColorVal = document.getElementById("bgColor").value;
  if (bgColorVal !== "default") {
    //console.log(value);
    document.body.style.background = bgColorVal;
    document.cookie =
      "bgColor=" + bgColorVal + ";expires=Fri,2 Feb 2022 01:00:00 UTC;";
  }
  const fontVal = document.getElementById("font-style").value;
  if (fontVal !== "default font") {
    document.body.style.fontFamily = fontVal;
    document.cookie =
      "fontFamily=" + fontVal + ";expires=Fri,2 Feb 2022 01:00:00 UTC;";
  }
  if (bgColorVal !== "default" && fontVal !== "default font") {
    localStorage.setItem("userId", "101145");
    document.getElementById("modal-btn").className = "btn btn-dark show";
  }
};

window.onload = () => {
  if (document.cookie.length !== 0) {
    document.getElementById("modal-btn").className = "btn btn-primary show";
    // console.log(document.cookie);
    let value = document.cookie.split(";");
    // console.log(value);
    // console.log(value[0].split("="));
    // console.log(value[0].split("=")[0]);
    // console.log(value[0].split("=")[1]);
    // console.log(value[1].split("="));
    // console.log(value[1].split("=")[0]);
    // console.log(value[1].split("=")[1]);

    //console.log(value[1].split("="));

    if (value[0].split("=")[0] === "bgColor") {
      document.getElementById("bgColor").value = value[0].split("=")[1];
      document.body.style.background = value[0].split("=")[1];
      console.log("done");
    }

    if (value[1].split("=")[0] === " fontFamily") {
      document.getElementById("font-style").value = value[1].split("=")[1];

      document.body.style.fontFamily = value[1].split("=")[1];
    }
  }
};

createSession = () => {
  let value = document.getElementById("select meetings").value;
  //console.log(value);

  sessionStorage.setItem("meeting", value);
  if (value === "scrum-meeting") {
    document.getElementById("scrum-meeting").className = "scrum-meeting show";
    document.getElementById("sprint-meeting").className = "sprint-meeting";
  } else {
    document.getElementById("sprint-meeting").className = "sprint-meeting show";
    document.getElementById("scrum-meeting").className = "scrum-meeting";
  }
  if (value === "select meetings") {
    document.getElementById("scrum-meeting").className = "scrum-meeting";
    document.getElementById("sprint-meeting").className = "sprint-meeting";
  }
};

clearCookies = () => {
  document.cookie = "bgColor=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie =
    "fontFamily=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.getElementById("bgColor").value = "default";
  document.body.style.background = "#ffffff";
  document.body.style.fontFamily = "";
  document.getElementById("font-style").value = "default font";
  document.getElementById("modal-btn").className = "btn btn-dark hide";
};

showCookiesInfo = () => {
  if (document.cookie.length !== 0) {
    const myCookies = document.cookie;
    const userId = localStorage.getItem("userId");
    let cookie1 = myCookies.split(";")[0];
    let cookie2 = myCookies.split(";")[1];
    //console.log(cookie1);
    //console.log(cookie2);
    let cookie1Info = cookie1.split("=")[1];
    let cookie2Info = cookie2.split("=")[1];

    //console.log(cookie1Info);
    //console.log(cookie2Info);

    const myModal = document.getElementById("modal-body");
    myModal.innerText =
      "UserId: " +
      userId +
      "\n" +
      "BackGround color is " +
      cookie1Info +
      "\n" +
      "Font family is " +
      cookie2Info;
  }
};
