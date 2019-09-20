# GifTastic!
Deployed at https://ehammons.github.io/GifTastic/
> Find gifs of your favorite animals or other user input topics.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
Add a new button to display new topic for gifs or use one of the preprogrammed buttons to explore gifs. Click on a GIF to switch from animation to still and back.

## Screenshots
![Screenshot](./img/screenshot.png)

## Technologies
* jQuery
* JavaScript
* GIPHY API

## Setup
Deployed at https://ehammons.github.io/GifTastic/

## Code Examples
    function renderButtons() {
        $("#buttons-view").empty();

        for (var i = 0; i < animals.length; i++) {
            var animal = animals[i];
            var button = $("<button>");
            button.addClass("animal");
            button.attr("data-animal", animal);
            button.text(animal);
            $("#buttons-view").append(button);
        }
    };

## Features
* Preprogrammed buttons for easy access to GIFs immediately
* Add button feature to customize GIFs returned
* Works with any added topic, not just animals

To-do list:
* Create transparent box to hold GIFs so text doesn't blend with background
* Improve responsiveness

## Status
Project is: _in progress_ so it can go in my portfolio

## Inspiration
Inspired by Coding Boot Camp homework and love of simple outlines

## Contact
Created by Elise Hammons - feel free to contact me!
<br>LinkedIn: https://www.linkedin.com/in/elise-h-01243258/