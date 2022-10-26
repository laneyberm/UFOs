# UFO Sightings Webpage with Filter Capabilities

## Overview
Explain the purpose of this analysis.

Dana’s webpage and dynamic table are working as intended, but she’d like to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, you’ll add table filters for the city, state, country, and shape.

While JavaScript is clearly capable of a variety of tasks, Dana plans to start with something a bit more manageable. Instead of building an entire dashboard right away, first she'll create a filterable table to display the data. She decides to dig into the syntax of the language. It's very different from other languages Dana has encountered before, so she wants to be sure she understands the basics before she begins to build anything.

Dana has started to get into a JavaScript coding rhythm. But before she begins to create code for real and then commit scripts to her repo, she needs to organize it.

Building a page that contains JavaScript will require Dana to link additional JavaScript files to the index.html file that she'll be working on later. This means keeping track of multiple things at once: an HTML file, JavaScript files, images (for customizing the webpage) and a CSS style sheet. Therefore, it's a good idea for Dana to establish a solid folder structure now instead of when she's elbow deep in creating her JavaScript functions.

11.2.4 Dana's goal is to create an interactive webpage that allows readers to parse the data around UFO sightings. So, she essentially needs to build two things: the webpage that will allow users to view the data (HTML) and a dynamic table that will present it (JavaScript).

Dana wants to storyboard her website to have an idea of what her readers will see when they view the final product. Storyboarding is incredibly useful in determining the layout of a webpage, so it's important to complete this step early in order to save time later. It's like building a house. You need to know how it's all going to fit together before you start building!

Once the template has been created, Dana can begin to code the JavaScript portion by first importing the data and then referencing it with a variable.

Dana also has a solid idea of how she wants her webpage to look, but it's easy to get lost in the details of building a webpage without a visual reference. A visual reference such as a storyboard will help Dana outline all of the elements she wants included, such as the article title, a summary, and the table itself. Then, when she begins creating JavaScript code to include the table, she'll know exactly which HTML components she'll be connecting to her table. Dana already knows she'll have several individual components on the webpage, shown below

11.5.1The array containing UFO sightings is huge. Dana knows that iterating through it is inevitable, which means she will definitely need for loops. Feeling bolstered by her practice with arrow functions, Dana is ready to up the difficulty a bit by exploring how to create for loops in JavaScript.

Dana's code is somewhat modest right now, but it's about to get a lot more interesting. Now we're going to help her build the table to display all of the UFO sightings. We'll need to iterate through the array of objects in our data file and then append them to a table row. All of this will happen within a function, which makes the code self-contained.

Creating self-contained code makes it easier to reuse the code and keeps us organized: the code in this function will be used to fill the table with data only.

Let's get started by returning to our app.js file in the editor and, on a new line, creating a new function.

Typically, functions are named after what they do. We're building a table, so we'll name the function "buildTable." We'll also pass in "data" as the argument. Remember that we used the variable "data" earlier to import our array of UFO sightings? This is the first step in actually working with the data.

11.5.3
The code we helped create will add every object from our data.js file to the table. Bundled into one tidy package, every sighting will be available for Dana (and her readers) to view! There are a lot of objects, though, which will make the table huge! There will be hundreds of rows of sightings in the table, which is entirely too much for one person to reasonably look through and study. Therefore, the next step is to add the ability to filter the data. We'll be using D3.js to help Dana with this part.

Data-Driven Documents (D3 for short) is a JavaScript library that adds interactive functionality, such as when users click a button to filter a table. It works by "listening" for events, such as a button click, then reacts according to the code we've created.

Dana thinks that she would like to filter by date, so she'll add code to create a date filter.

 11.6.1
 With our help, Dana has assembled code that will not only build a functional table but will add the ability to filter it as well. That's definitely an accomplishment—JavaScript isn't an easy language to get the hang of. But even though she thinks her code is structurally sound and will work without a hitch, she still needs to test it. To do so, it's time to build the HTML page Dana will be showcasing her work on.

She'll need to keep the different ids she created in app.js in mind while she pieces this webpage together. There will be a button (#filter-btn) somewhere as well as a #datetime id nestled into some tags. She'll need to build the base of the table so that the code we helped construct knows where to put the table's data. This means that the columns and rows will all need to be defined manually.

Dana's page is starting to really come together. The layout from the storyboard has transferred directly to the HTML, making the construction fairly seamless. There was still quite a bit of nesting and manual entry going on, but the overall result is a clean page, ready to display data.

The next step in getting Dana's page viewer-ready is to link D3.js, app.js, and data.js to the HTML.

Dana wants to customize her page by adding specific CSS components to the stylesheet, such as applying a background color to the page and adding an image to the jumbotron. Although it's neat and tidy in its current form, it's not very attention-grabbing.


## Resources
- Data Source: https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js, app.js, data.js
- Software: Javascript 1.5, Bootstrap, Visual Studio Code 1.72.2 

## Results
Describe to Dana how someone might use the new webpage by walking her through the process of using the search criteria. Use images of your webpage during the filtering process to support your explanation. 

The Wikipedia scraped data wass especially messy. As much as editors try to be consistent, each page can be edited by a different person. Additionally, because the movie data comes from the sidebar, different movies can have different columns. We performed the following data-cleaning tasks:
- Created a process to turn our JSON data into a reasonable DataFrame
- Removed duplicate rows
- Ensured that every movie contained an unique IMDb ID to merge with the Kaggle data
- Extract the IMDb ID from the IMDb link

<img src="https://github.com/laneyberm/Movies-ETL/blob/main/Resources/competing_columns.png" width="450">


## Summary
In a summary statement, describe one drawback of this new design and two recommendations for further development.

