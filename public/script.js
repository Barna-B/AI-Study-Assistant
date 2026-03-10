async function askAI() {
    const input = document.getElementById("question");
    const question = input.value.trim();
    if (!question) return;

    // Add user message to chatbox
    addMessage(question, "user");

    // Clear input
    input.value = "";

    try {
        const response = await fetch("/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question })
        });

        const data = await response.json();

        // Add AI response to chatbox
        addMessage(data.answer, "ai");

    } catch (error) {
        addMessage("Error communicating with AI.", "ai");
        console.error(error);
    }
}

// Function to add messages
function addMessage(text, type) {
    const chatbox = document.getElementById("chatbox");
    const message = document.createElement("div");
    message.classList.add("message", type);
    message.textContent = text;
    chatbox.appendChild(message);

    // Scroll to bottom
    chatbox.scrollTop = chatbox.scrollHeight;
}