setCookies = () => {
  const bgColorVal = document.getElementById("bgColor").value;
  if (bgColorVal !== "select color") {
    //console.log(value);
    document.body.style.background = bgColorVal;
    document.cookie = "bgColor=" + bgColorVal;
  } else {
    document.body.style.background = "#ffffff";
  }
  const fontVal = document.getElementById("font-style").value;
  if (fontVal !== "select font") {
    document.body.style.fontFamily = fontVal;
    document.cookie = "fontFamily=" + fontVal;
  } else {
    document.body.style.fontFamily = "Montserrat, sans-serif";
  }
};

window.onload = () => {
  if (document.cookie.length !== 0) {
    console.log(document.cookie);
    let value = document.cookie.split(";");
    console.log(value);
    console.log(value[0].split("="));
    console.log(value[0].split("=")[0]);
    console.log(value[0].split("=")[1]);
    console.log(value[1].split("="));
    console.log(value[1].split("=")[0]);
    console.log(value[1].split("=")[1]);

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
  console.log(value);
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

clearCookies = () => {};
