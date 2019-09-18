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
});

renderButtons();