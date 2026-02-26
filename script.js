document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    const messagesSection = document.getElementById('messages');

    /**
     * Appends a message to the chat
     * @param {string} text - The message text
     * @param {string} className - The CSS class name ('user-msg' or 'ai-msg')
     */
    function appendMessage(text, className) {
        const messageDiv = document.createElement('div');
        messageDiv.className = className;
        messageDiv.textContent = text;
        messagesSection.appendChild(messageDiv);
        
        // Auto-scroll to bottom
        messagesSection.scrollTop = messagesSection.scrollHeight;
    }

    /**
     * Simulated AI responses
     */
    const aiResponses = [
        "That's interesting! Tell me more about that.",
        "I see what you mean. How does that make you feel?",
        "That's a great question! Let me think about that...",
        "I'm intrigued by that. Can you elaborate?",
        "Thanks for sharing that with me!",
        "I appreciate your input on this topic.",
        "That makes sense. What would you like to do about it?",
        "Interesting perspective! I hadn't thought of it that way.",
        "I understand. Is there anything else on your mind?",
        "That's valuable feedback. Thank you for sharing!"
    ];

    /**
     * Gets a random simulated AI response
     */
    function getAIResponse() {
        return aiResponses[Math.floor(Math.random() * aiResponses.length)];
    }

    /**
     * Handles form submission
     */
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userMessage = messageInput.value.trim();

        if (userMessage === '') {
            return;
        }

        // Display user message
        appendMessage(userMessage, 'user-msg');

        // Clear input field
        messageInput.value = '';
        messageInput.focus();

        // Simulate AI response after a short delay
        setTimeout(() => {
            const aiMessage = getAIResponse();
            appendMessage(aiMessage, 'ai-msg');
        }, 500);
    });
});
