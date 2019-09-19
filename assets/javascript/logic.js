var animals = ["dog", "cat", "bird"];

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

$("#add-animal").on("click", function(event) {
    event.preventDefault();

    var animal = $("#animal-input").val().trim();
    animals.push(animal);
    renderButtons();
    $("#animal-input").val("");
});

$(document).on("click", "button", function() {
    var animal = $(this).attr("data-animal");
    console.log(animal);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=q6mqgFplDJRCDJsdFupOB05a6VWXakpM&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response) {
            console.log(response);
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                if (results[i].rating !== "r") {
                    var animalDiv = $("<div>");
                    var animalImg = $("<img>");
                    var h = $("<h4>").text("Rating: " + results[i].rating.toUpperCase());
                    animalImg.attr("src", results[i].images.fixed_height_still.url);
                    animalImg.attr("data-still", results[i].images.fixed_height_still.url);
                    animalImg.attr("data-animate", results[i].images.fixed_height.url);
                    animalImg.attr("data-state", "still");
                    animalImg.addClass("gif");
                    animalDiv.append(h);
                    animalDiv.append(animalImg);
                    $("#images").append(animalDiv);
                }
            }
        })
});

renderButtons();