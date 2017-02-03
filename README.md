#Welcome!

This is the Study Group Event Reporting tool. It allows users to submit and browse through event reports, closely related the [Mozilla Clubs Events Site](https://github.com/mozilla/clubs-events/).

##This is a prototype

This is a work in progress and uses test data for now.

##Some Links

* [The Google Form](https://goo.gl/forms/S8mA5ifjJYnPGDsC2)
  * Used to submit event reports
* [The Spreadsheet](https://docs.google.com/spreadsheets/d/1d8ec26hMX-pTQmH5vNlmprXhrin9tYjJOcsEn3_hvRI/edit?usp=sharing)
  * This is where all the data lives
* [Event Report Dashboard](http://mozillascience.github.io/studyGroupEvents/)
  * Displays the reports

##How it works

1. Users submit an event report using the Google Form above
2. The data from the form is then added to the Spreadsheet
3. We access the spreadsheet using the [config file](js/config.js)
  * This gives us handy JSON data
4. We display the data on the Dashboard


##To Do:

* setup event tracking with linked spreadsheet
* compile less
