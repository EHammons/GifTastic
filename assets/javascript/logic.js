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

renderButtons();