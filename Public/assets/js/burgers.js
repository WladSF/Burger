//This code manages input from the front ed

$(function() {

    $(".change-devoured").on("click", function() {
        var id = $(this).data("id");
        var yesDevoured = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: yesDevoured
        }).then(function() {
            location.reload();
        });
    });

    $(".new-burger-form").on("submit", function(event) {
        event.preventDefault();
        
        var newBurger = {
            burger_name: $("#burg").val().trim()
        };

        $.ajax("api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added!");
            location.reload();
        })
    })

})