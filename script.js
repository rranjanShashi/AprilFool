document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    sendBtn.addEventListener('click', function() {
        const userMessage = userInput.value;
        displayMessage('User', userMessage);
        userInput.value = '';
        setTimeout(function() {
            displayMessage('ChatGPT', getRandomResponse());
        }, 1000); // Simulate ChatGPT response delay
    });

    function displayMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getRandomResponse() {
        const responses = [
            "Haha, that's funny!",
            "I never thought of that before!",
            "You're quite the comedian!",
            "LOL! You crack me up!",
            "Nice try! But I'm onto you...",
            "You're in for a surprise!",
            "I'll have to consult my crystal ball for that one...",
            "Whoa! Mind blown!",
            "That's it! I'm calling the prank patrol!",
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
});
