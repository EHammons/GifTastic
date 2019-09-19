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

$("button").on("click", function() {
    var animal = $(this).attr("data-animal");
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
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    animalImg.attr("src", results[i].images.fixed_height.url);
                    animalDiv.append(p);
                    animalDiv.append(animalImg);
                    $("#images").append(animalDiv);
                }
            }
        })
});

renderButtons();