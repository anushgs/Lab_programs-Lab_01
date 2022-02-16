const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { redirect } = require("express/lib/response");
const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));

app.get("/plans", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/plans.html"));
});

app.get("/meetingDashBoard", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/meetingDashBoard.html"));
});

app.get("/createMeeting", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/createMeeting.html"));
});

app.get("/public/Json/meetings.json", (req, res) => {
  res.sendFile(path.join(__dirname, "public/Json/meetings.json"));
});

app.post("/createMeeting", (req, res) => {
  //   console.log(req.body.meetingId);
  //   console.log(req.body.title);
  //   console.log(req.body.date);
  //   console.log(req.body.total_attendes);
  //   console.log(req.body.created_by);

  let newData = {
    meeting_id: req.body.meetingId,
    title: req.body.title,
    date: req.body.date,
    total_attendes: req.body.total_attendes,
    link: "https://example.edu/",
    created_by: req.body.created_by,
  };
  updateMeetingsJsonUpdate(newData);

  res.sendFile(path.join(__dirname, "./public/createMeeting.html"));
});

const updateMeetingsJsonUpdate = (newData) => {
  const meetingsData = fs.readFileSync(
    path.join(__dirname, "public/Json/meetings.json")
  );
  //console.log(meetingsData);
  var myObject = JSON.parse(meetingsData);
  //console.log(myObject);
  myObject.meetings.push(newData);
  var newData = JSON.stringify(myObject);
  fs.writeFile("public/Json/meetings.json", newData, (err) => {
    // error checking
    if (err) throw err;

    console.log("New data added");
  });
};
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
