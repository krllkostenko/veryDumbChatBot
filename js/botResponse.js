'use strict';
let createResponse = async (responses,message = responses[rand(0, responses.length - 1)]) => {
    return new Promise((resolve) => {
        if (message !== 'Bye') {

            let timeout = rand(1, 10);
            let chatBubble = $('<div>', {
                class: "speech-bubble response-bubble",
            });
            chatBubble.append('<p>' + message + '</p>');
            setTimeout(() => {
                resolve($('.received-message').append(chatBubble));
            }, timeout * 1000);
        }
    });
}
