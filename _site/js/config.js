// Your Google Drive Spreadsheet URL

// original sheet id
// var sheetID = "1QHl2bjBhMslyFzR5XXPzMLdzzx7oeSKTbgR5PM8qp64";
// sheet id for https://docs.google.com/spreadsheets/d/1d8ec26hMX-pTQmH5vNlmprXhrin9tYjJOcsEn3_hvRI/pubhtml
var sheetID = "1vBP7CnFS7tl1lvSZtZ9X-Wy9UdfHOCjwKKHt-mf8Po0";
var sheetURL = "https://spreadsheets.google.com/feeds/cells/"+sheetID+"/os1ha2u/public/full?alt=json";

// Name of column and what element classname to insert the data into.
var dataKeys = {
  "Timestamp" : "event-timestamp",
  "Date of the Event" : "event-date",
  "Study Group Name" : "sg-organizer",
  "Study Group Event" : "sg-name",
  "Event Location" : "event-city",
  "Event Location" : "sg-city",
  "Event Location" : "sg-country",
  "Event Description" : "event-description",
  "Start Time" : "event-links-photos",
  "End Time" : "event-links-blogpost",
  "Study Group Name" : "event-links-video"
}
