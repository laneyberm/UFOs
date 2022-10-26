# UFO Sightings Webpage with Filter Search Capabilities

## Overview
Dana's goal was to create an interactive webpage that allows readers to parse the data around UFO sightings. We built two things: the webpage that will allow users to view the data using HTML and a dynamic table that will present it using JavaScript. Additionally, we added table filters for the date, city, state, country, and shape. Dana wants an analysis of her website and it's usability.


## Resources
- Data Source: https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js, app.js, data.js
- Software: Javascript 1.5, Bootstrap 4.0, Visual Studio Code 1.72.2 

## Results
The below image is the initial webpage without using the filters. The user can re-itialize the webpage by clicking the "UFO Sightings" at the top of the page. 

<img src="https://github.com/laneyberm/UFOs/blob/main/static/images/index.png" width="800">

The below image is a storyboard of the webpage and the locations on the webpage of the data.

<img src="https://github.com/laneyberm/UFOs/blob/main/static/images/storyboard.png" width="500">

Users will enter their search in the "Filter Search" shown below. They can filter the data down by date, city, state, country, and shape. Users need to utilize lower case letters with typing in the search. In the search inputs, there is an example of the format needed for each search category. 

<img src="https://github.com/laneyberm/UFOs/blob/main/static/images/filter_search.png" width="250">

An example of filtering the data by the date, 1/13/2010, is shown below with its results.

<img src="https://github.com/laneyberm/UFOs/blob/main/static/images/filtered_date.png" width="800">

## Summary
Dana’s webpage and dynamic table are working as intended. A drawback to the usabilty of the filters is the search is case-sensitive. For example, to search for Arkansas, the user must type "ar" to find all the Arkansas search results. Typing "AR" or "Arkansas" will not return any results. 

I would recommend adding drop down menus to all the search categories that would include the filterable data per category. Additionally, I would recommend removing the case sensitivity of the search inputs. 

