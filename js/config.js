// Your Google Drive Spreadsheet URL

// original sheet id
// var sheetID = "1QHl2bjBhMslyFzR5XXPzMLdzzx7oeSKTbgR5PM8qp64";
// sheet id for https://docs.google.com/spreadsheets/d/1d8ec26hMX-pTQmH5vNlmprXhrin9tYjJOcsEn3_hvRI/pubhtml
var sheetID = "1d8ec26hMX-pTQmH5vNlmprXhrin9tYjJOcsEn3_hvRI";
var sheetURL = "https://spreadsheets.google.com/feeds/cells/"+sheetID+"/ohaibtm/public/values?alt=json";

// Name of column and what element classname to insert the data into.
var dataKeys = {
  "Status" : "report-status",
  "Timestamp" : "event-timestamp",
  "Date of Event" : "event-date",
  "Your Name" : "sg-organizer",
  "Your Twitter Handle (Optional)" : "sg-contact-details",
  "Study Group Name" : "sg-name",
  "Study Group Link" : "sg-link",
  "City" : "event-city",
  "Country" : "sg-country",
  "City" : "event-city",
  "Country" : "event-country",
  "Attendance" : "event-attendance",
  "Event Description" : "event-description",
  "Event Cover Photo" : "event-photo",
  "Event Creations" : "event-creations",
  "Study Group Skills" : "event-skills",
  "Links to Curriculum (Optional)" : "event-links-curriculum",
  "Links to Photos (Optional)" : "event-links-photos",
  "Links to Blogpost (Optional)" : "event-links-blogpost",
  "Links to Video (Optional)" : "event-links-video",
  "Feedback from Attendees" : "event-feedback-attendees",
  "Your Feedback" : "event-feedback-organizer"
}
