'use strict';
let chat = (responses) => {
    let randomValue = rand(1, 100);
    let botActivity = true;
    $('#sendMessage').click(async () => {
        await sendMessage();
        let message = $('#message-text').val();
        $('#message-text').val('');
        if (message === 'Bye') {
            await createResponse(responses, 'See you later!');
            botActivity = false;
        }
        if (botActivity) {
            if (randomValue > 19) {
                await createResponse(responses);
                randomValue = rand(1, 100);
            } else {
                await createResponse(responses, 'I can\'t talk right now...');
                botActivity = false;
            }
        }
    });
    onPressEnter();
}

let sendMessage = async () => {
    return new Promise(resolve => {
        let chatBubble = $('<div>', {
            class: "speech-bubble",
        });
        let flag = true;
        if (flag) {
            let message = $('#message-text').val();
            chatBubble.append('<p>' + message + '</p>');
            resolve($('.sent-message').append(chatBubble));
        }
    })
}