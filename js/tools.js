'use strict';
let rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$(() => {
    $('.info').tooltip();
});
let onPressEnter = ()=>{
    let messageInput = $('#message-text');
    messageInput.on('keyup', (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            $('#sendMessage').click();
        }

    });
}