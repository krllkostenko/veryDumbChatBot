'use strict';
let getData = () => {
    $.ajax({
        type: "GET",
        url: "data/responses.json",
    }).done(function (responses) {
        console.log("Ok ");
        chat(responses);
    }).fail(msg => {
        console.log("Error");
    }).always(msg => {
        console.log("Complete");
    });
}