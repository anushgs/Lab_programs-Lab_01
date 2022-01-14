function ldUpMeetingXML() {
  var upMtngXml = new XMLHttpRequest();

  console.log(upMtngXml.readyState);

  upMtngXml.onreadystatechange = function () {
    console.log(upMtngXml.readyState);
    if (this.readyState == 4 && this.status == 200) {
      // document.getElementById('upcomingMeeting_info').innerHTML = this.responseText;
      upMeetinginfo(this);
      // console.log(upMtngXml.readyState);
    }
  };

  upMtngXml.open("GET", "upcomingMeeting.xml", "TRUE");

  upMtngXml.send();
}

var xmlDoc;
var table;
var x;

function upMeetinginfo(info) {
  var i;
  xmlDoc = info.responseXML;
  // console.log(xmlDoc);
  displayTable(xmlDoc);
}
function displayTable(xmlDoc) {
  table = `<thead><tr>
          <th>Title</th>
         <th>Date</th>
         <th>Description</th>
         <th>Duration</th>
         <th>Total_Attendees</th>
         <th>Platform</th>
         <th>Link</th>
         <th>Created By</th>
         <th>Remove Meeting</th>
        </tr></thead>`;

  x = xmlDoc.getElementsByTagName("upcomming_meeting");

  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td data-label='title'>" +
      x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
      "</td><td data-label='date'>" +
      x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue +
      "</td><td data-label='description'>" +
      x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
      "</td><td data-label='duration'>" +
      x[i].getElementsByTagName("duration")[0].childNodes[0].nodeValue +
      "</td><td data-label='total_attendees'>" +
      x[i].getElementsByTagName("total_attendees")[0].childNodes[0].nodeValue +
      "</td><td data-label='platform'>" +
      x[i].getElementsByTagName("platform")[0].childNodes[0].nodeValue +
      "</td><td data-label='link' >" +
      x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue +
      "</td><td data-label='createby'>" +
      x[i].getElementsByTagName("created_by")[0].childNodes[0].nodeValue +
      "</td><td><i type = 'button' class='fas fa-trash' onclick='removeMeet()'></i></td></tr>";
  }
  document.getElementById("upcomingMeeting_info").innerHTML = table;
}

function removeMeet() {
  // console.log(xmlDoc.getElementsByTagName('upcomming_meeting')[0]);
  // var x = xmlDoc.getElementsByTagName("upcomming_meeting")[0];

  var index,
    table = document.getElementById("upcomingMeeting_info");

  for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      index = this.rowIndex;

      x = xmlDoc.getElementsByTagName("upcomming_meeting")[index - 1];
      xmlDoc.documentElement.removeChild(x);
      console.log(xmlDoc);
      displayTable(xmlDoc);
    };
  }
  alert("The meeting removed!");
}

function removeNodeElement() {
  var i;

  for (i = 0; i < x.length; i++) {
    a = xmlDoc
      .getElementsByTagName("upcomming_meeting")
      [i].getElementsByTagName("duration")[0];
    b = a.childNodes[0];
    a.removeChild(b);
  }
  console.log(xmlDoc);
  table = `<thead><tr>
  <th>Title</th>
 <th>Date</th>
 <th>Description</th>
 <th>Total_Attendees</th>
 <th>Platform</th>
 <th>Link</th>
 <th>Created By</th>
 <th>Remove Meeting</th>
</tr></thead>`;
var some = xmlDoc;
x = xmlDoc.getElementsByTagName("upcomming_meeting");

for (i = 0; i < x.length; i++) {
table +=
"<tr><td data-label='title'>" +
x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
"</td><td data-label='date'>" +
x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue +
"</td><td data-label='description'>" +
x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
"</td><td data-label='total_attendees'>" +
x[i].getElementsByTagName("total_attendees")[0].childNodes[0].nodeValue +
"</td><td data-label='platform'>" +
x[i].getElementsByTagName("platform")[0].childNodes[0].nodeValue +
"</td><td data-label='link' >" +
x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue +
"</td><td data-label='createby'>" +
x[i].getElementsByTagName("created_by")[0].childNodes[0].nodeValue +
"</td><td><i type = 'button' class='fas fa-trash' onclick='removeMeet()'></i></td></tr>";
}
document.getElementById("upcomingMeeting_info").innerHTML = table;
  alert('The node element  "duration" has been removed!');

  
}

function changeNodeValue() {
  var j;
  for (j = 0; j < x.length; j++) {
    xmlDoc
      .getElementsByTagName("upcomming_meeting")
      [j].getElementsByTagName("platform")[0].childNodes[0].nodeValue = "Zoom";
  }
  console.log(xmlDoc);
  alert("The meeting platform has been changed zoom!");
  displayTable(xmlDoc);
}

function addNewElement() {
  var i;
  newEle = xmlDoc.createElement("other_info");
  newText = xmlDoc.createTextNode("some info");
  newEle.appendChild(newText);
  xmlDoc.getElementsByTagName("upcomming_meeting")[0].appendChild(newEle);
  console.log(xmlDoc);
  alert('The new node element "other info" has been added to the second node!');
  var table = `<thead><tr>
          <th>Title</th>
         <th>Date</th>
         <th>Description</th>
         <th>Duration</th>
         <th>Total_Attendees</th>
         <th>Platform</th>
         <th>Link</th>
         <th>Created By</th>
         <th>Other info</th>
        </tr></thead>`;

  x = xmlDoc.getElementsByTagName("upcomming_meeting");

  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td data-label='title'>" +
      x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
      "</td><td data-label='date'>" +
      x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue +
      "</td><td data-label='description'>" +
      x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
      "</td><td data-label='duration'>" +
      x[i].getElementsByTagName("duration")[0].childNodes[0].nodeValue +
      "</td><td data-label='total_attendees'>" +
      x[i].getElementsByTagName("total_attendees")[0].childNodes[0].nodeValue +
      "</td><td data-label='platform'>" +
      x[i].getElementsByTagName("platform")[0].childNodes[0].nodeValue +
      "</td><td data-label='link' >" +
      x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue +
      "</td><td data-label='createby'>" +
      x[i].getElementsByTagName("created_by")[0].childNodes[0].nodeValue +
      "</td><td data-label='otherinfo'>" +
      x[0].getElementsByTagName("other_info")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
  document.getElementById("upcomingMeeting_info").innerHTML = table;
}
