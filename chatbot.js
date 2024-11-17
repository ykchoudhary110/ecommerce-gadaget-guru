let userName = ""; // To store user's name

function toggleChat() {
  const chatContainer = document.getElementById('chatContainer');
  
  // Clear any previous content inside the chat container
  chatContainer.innerHTML = "";
  
  // Show the chat window
  if (chatContainer.classList.contains('chat-hidden')) {
    chatContainer.classList.remove('chat-hidden');
    chatContainer.classList.add('chat-visible');
  }

  // Ask for the user's name
  const nameRequestMessage = document.createElement('div');
  nameRequestMessage.textContent = "Hello! What's your name?";
  nameRequestMessage.style.padding = '10px';
  nameRequestMessage.style.backgroundColor = '#f1f1f1';
  nameRequestMessage.style.margin = '10px';
  chatContainer.appendChild(nameRequestMessage);

  // Name input and submit button
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('placeholder', 'Enter your name');
  nameInput.style.padding = '5px';
  nameInput.style.margin = '10px';
  nameInput.style.width = '90%';
  chatContainer.appendChild(nameInput);

  const submitButton = document.createElement('button');
  submitButton.textContent = "Submit";
  submitButton.style.padding = '5px 10px';
  submitButton.style.margin = '10px';
  chatContainer.appendChild(submitButton);

  // Handle name submission
  submitButton.addEventListener('click', () => {
    userName = nameInput.value.trim(); // Get the user's name
    if (userName) {
      chatContainer.innerHTML = ""; // Clear the container
      displayProductOptions(); // Show product options
    } else {
      alert("Please enter your name to proceed."); // Prompt if no name is entered
    }
  });
}

// Function to display product options
function displayProductOptions() {
  const chatContainer = document.getElementById('chatContainer');
  
  const greetingMessage = document.createElement('div');
  greetingMessage.textContent = `Hello, ${userName}! What would you like to buy?`;
  greetingMessage.style.padding = '10px';
  greetingMessage.style.backgroundColor = '#f1f1f1';
  greetingMessage.style.margin = '10px';
  chatContainer.appendChild(greetingMessage);

  // Define items and their price options
  const items = {
    "Mouse": [200, 300, 1000],
    "Monitor": [2000, 3000, 10000],
    "Graphics Card": [8000, 16000, 40000],
    "PC Cabinet": [4000, 5000, 6000],
    "Power Supply Unit": [2000, 5000, 7000],
    "Network Card": [2000, 3000, 5000],
    "Keyboard": [200, 2000, 5000],
    "CPU": [1000, 50000, 2000]
  };

  // Display choices for each item
  for (const item in items) {
    const itemButton = document.createElement('button');
    itemButton.textContent = item;
    itemButton.style.margin = '5px';
    itemButton.style.padding = '8px';
    itemButton.style.borderRadius = '5px';
    itemButton.style.backgroundColor = '#007185';
    itemButton.style.color = 'white';
    itemButton.style.cursor = 'pointer';
    itemButton.onclick = () => showPriceOptions(item, items[item]);
    chatContainer.appendChild(itemButton);
  }
}

// Function to show price options for the selected item
function showPriceOptions(item, prices) {
  const chatContainer = document.getElementById('chatContainer');
  
  // Clear previous options
  chatContainer.innerHTML = "";

  // Display the selected item and price options
  const priceMessage = document.createElement('div');
  priceMessage.textContent = `Select a price for ${item}:`;
  priceMessage.style.padding = '10px';
  priceMessage.style.backgroundColor = '#f1f1f1';
  priceMessage.style.margin = '10px';
  chatContainer.appendChild(priceMessage);

  // Display each price option as a button
  prices.forEach(price => {
    const priceButton = document.createElement('button');
    priceButton.textContent = `₹${price}`;
    priceButton.style.margin = '5px';
    priceButton.style.padding = '8px';
    priceButton.style.borderRadius = '5px';
    priceButton.style.backgroundColor = '#007185';
    priceButton.style.color = 'white';
    priceButton.style.cursor = 'pointer';
    priceButton.onclick = () => showUsageOptions(item, price);
    chatContainer.appendChild(priceButton);
  });
}

// Function to show usage options after selecting a price
function showUsageOptions(item, price) {
  const chatContainer = document.getElementById('chatContainer');

  // Clear previous content and display usage question
  chatContainer.innerHTML = "";
  
  const usageMessage = document.createElement('div');
  usageMessage.textContent = `For what purpose do you need the ${item} priced at ₹${price}?`;
  usageMessage.style.padding = '10px';
  usageMessage.style.backgroundColor = '#f1f1f1';
  usageMessage.style.margin = '10px';
  chatContainer.appendChild(usageMessage);

  // Define usage options
  const usages = ["Performance", "Professional", "Normal"];

  // Display usage options as buttons
  usages.forEach(usage => {
    const usageButton = document.createElement('button');
    usageButton.textContent = usage;
    usageButton.style.margin = '5px';
    usageButton.style.padding = '8px';
    usageButton.style.borderRadius = '5px';
    usageButton.style.backgroundColor = '#007185';
    usageButton.style.color = 'white';
    usageButton.style.cursor = 'pointer';
    usageButton.onclick = () => confirmSelection(item, price, usage);
    chatContainer.appendChild(usageButton);
  });
}

// Function to confirm the selection, display a confirmation, and recommend the selected item with purchase option
function confirmSelection(item, price, usage) {
  const chatContainer = document.getElementById('chatContainer');
  
  // Clear previous content and show confirmation
  chatContainer.innerHTML = "";
  
  const confirmationMessage = document.createElement('div');
  confirmationMessage.textContent = `You selected ${item} for ₹${price} for ${usage} usage.`;
  confirmationMessage.style.padding = '10px';
  confirmationMessage.style.backgroundColor = '#d4dbd9';
  confirmationMessage.style.margin = '10px';
  chatContainer.appendChild(confirmationMessage);

  // Recommendation message with description based on price range
  const recommendationMessage = document.createElement('div');
  recommendationMessage.textContent = `We recommend this ${item} in the ₹${price} range for ${usage} purposes. Here's a description for this range:`;
  recommendationMessage.style.padding = '10px';
  recommendationMessage.style.backgroundColor = '#f1f1f1';
  recommendationMessage.style.margin = '10px';
  chatContainer.appendChild(recommendationMessage);

  // Add product description based on price range
  const description = document.createElement('div');
  description.textContent = getRecommendationComment(item, price, usage);
  description.style.padding = '10px';
  description.style.backgroundColor = '#f8f9fa';
  description.style.margin = '10px';
  chatContainer.appendChild(description);

  // Purchase button with link to an e-commerce website
  const purchaseButton = document.createElement('button');
  purchaseButton.textContent = "Purchase on Amazon";
  purchaseButton.style.margin = '5px';
  purchaseButton.style.padding = '8px';
  purchaseButton.style.borderRadius = '5px';
  purchaseButton.style.backgroundColor = '#ff9900';
  purchaseButton.style.color = 'white';
  purchaseButton.style.cursor = 'pointer';
  purchaseButton.onclick = () => {
    window.open(`https://www.amazon.in/s?k=${item}`, "_blank");
  };
  chatContainer.appendChild(purchaseButton);
}

// Helper function to generate unique recommendations for every selection
function getRecommendationComment(item, price, usage) {
  const comments = {
    Performance: `This ${item} in the ₹${price} range delivers top-notch performance for demanding tasks and intensive use.`,
    Professional: `Ideal for professionals, this ${item} is tailored for reliability and efficient workflows in the ₹${price} range.`,
    Normal: `A budget-friendly option, this ${item} is perfect for everyday use and casual tasks in the ₹${price} range.`
  };
  return comments[usage] || "Great choice!";
}
