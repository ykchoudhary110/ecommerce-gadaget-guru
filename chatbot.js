function toggleChat() {
    const isUnderMaintenance = true; // Maintenance flag
    const chatContainer = document.getElementById('chatContainer');
    
    // Clear any previous content inside the chat container
    chatContainer.innerHTML = "";
    
    // Show the chat window
    if (chatContainer.classList.contains('chat-hidden')) {
      chatContainer.classList.remove('chat-hidden');
      chatContainer.classList.add('chat-visible');
    }
  
    // Display the "Hello" message first
    const helloMessage = document.createElement('div');
    helloMessage.textContent = "Hello!";
    helloMessage.style.padding = '10px';
    helloMessage.style.backgroundColor = '#f1f1f1';
    helloMessage.style.margin = '10px';
    chatContainer.appendChild(helloMessage);
  
    // After 2 seconds, display the maintenance message
    setTimeout(() => {
      const maintenanceMessage = document.createElement('div');
      maintenanceMessage.textContent = "I'm currently under maintenance, so I can't help you right now. Will be available soon.";
      maintenanceMessage.style.padding = '10px';
      maintenanceMessage.style.backgroundColor = '#f8d7da';
      maintenanceMessage.style.margin = '10px';
      maintenanceMessage.style.color = '#721c24';
      maintenanceMessage.style.border = '1px solid #f5c6cb';
      chatContainer.appendChild(maintenanceMessage);
    }, 2000); // Delay of 2 seconds
  }
  