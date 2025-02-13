function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    // Append user message
    let userMessage = document.createElement("p");
    userMessage.innerHTML = `<strong>You:</strong> ${userInput}`;
    chatbox.appendChild(userMessage);

    // Bot response logic
    let botMessage = document.createElement("p");
    botMessage.innerHTML = `<strong>Bot:</strong> ${getBotResponse(userInput)}`;
    chatbox.appendChild(botMessage);

    // Clear input field
    document.getElementById("userInput").value = "";
}

// Simple chatbot response system
function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("hello")) return "Hello! How can I help?";
    if (input.includes("services")) return "We offer backend Dev, cloud computing and bigdata analytics.";
    if (input.includes("contact")) return "You can reach us at support@itcompany.com.";
    return "I'm not sure how to respond to that.";
}


// Show chatbot
function startChat() {
    document.getElementById("chatbot").style.display = "block";
}

// Handle contact form submission
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message Sent Successfully!");
});