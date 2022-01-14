function ldUpMeetingXML() {
  var upMtngXml = new XMLHttpRequest();

  upMtngXml.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
      // document.getElementById('upcomingMeeting_info').innerHTML = this.responseText;
      upMeetinginfo(this);
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
  var table = `<thead><tr>
          <th>Title</th>
         <th>Date</th>
         <th>Description</th>
         <th>Duration</th>
         <th>Total_Attendees</th>
         <th>Platform</th>
         <th>Link</th>
         <th>Created By</th>
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
      "</td></tr>";
  }
  document.getElementById("upcomingMeeting_info").innerHTML = table;
}

function removeNode() {
  // console.log(xmlDoc.getElementsByTagName('upcomming_meeting')[0]);
  // var x = xmlDoc.getElementsByTagName("upcomming_meeting")[0];
  x = xmlDoc.getElementsByTagName("upcomming_meeting")[0];
  xmlDoc.documentElement.removeChild(x);
  console.log(xmlDoc);
  alert('The 1st block of node from "upcomming_meeting" has been removed!');
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
  alert('The node element  "duration" has been removed!');
}

function changeNodeValue() {
  var j;
  for (j = 0; j < x.length; j++) {
    xmlDoc
      .getElementsByTagName("upcomming_meeting")
      [j].getElementsByTagName("title")[0].childNodes[0].nodeValue =
      "value changed";
  }
  console.log(xmlDoc);
  alert('The node value  "title" has been changed!');
}

function addNewElement() {
  var i;
  newEle = xmlDoc.createElement("other_info");
  newText = xmlDoc.createTextNode("some info");
  newEle.appendChild(newText);

  
    xmlDoc.getElementsByTagName("upcomming_meeting")[1].appendChild(newEle);
    
 
 
  
  console.log(xmlDoc);
  alert('The new node element "other info" has been added to the second node!');
}
