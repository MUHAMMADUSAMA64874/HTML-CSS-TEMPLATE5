$(document).ready(function () {
    // Start carousel autoplay
    $('#carouselGallery').carousel({
        interval: 2000
    });

    // Show the order confirmation pop-up after 5 seconds
    setTimeout(function () {
        const { itemName, itemImageSrc } = getOrderDetails();
        showOrderConfirmationPopup(itemName, itemImageSrc);
    }, 5000);

    // Check if the order confirmation pop-up should be shown (not hidden by user)
    if (!localStorage.getItem('hideOrderConfirmationPopup')) {
        showOrderConfirmationPopup();
    }

    // Show the mailing list sign-up pop-up after 5 seconds
    setTimeout(function () {
        if (!localStorage.getItem('hideMailingListPopup')) {
            showMailingListPopup();
        }
    }, 5000);
});

function showOrderConfirmationPopup(itemName, itemImageSrc) {
    const popup = document.getElementById('orderConfirmation');
    const itemNameElement = document.getElementById('itemName');
    const itemImageElement = document.getElementById('itemImage');

    if (itemName && itemImageSrc) {
        itemNameElement.innerText = itemName;
        itemImageElement.src = itemImageSrc;
    }

    popup.style.display = 'block';
}

function closeOrderConfirmationPopup() {
    const popup = document.getElementById('orderConfirmation');
    popup.style.display = 'none';
}

function showMailingListPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function closeMailingListPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function submitForm() {
    const checkbox = document.getElementById('checkbox');
    const emailInput = document.getElementById('emailInput').value;

    if (checkbox.checked) {
        // Save to local storage to remember user preference
        localStorage.setItem('hideOrderConfirmationPopup', 'true');
        localStorage.setItem('hideMailingListPopup', 'true');
    }

    // Add code here to handle the form submission

    closeOrderConfirmationPopup();
    closeMailingListPopup();
}

// Attach event listeners
document.getElementById('orderConfirmationClose').addEventListener('click', closeOrderConfirmationPopup);
document.getElementById('popupClose').addEventListener('click', closeMailingListPopup);
document.getElementById('popupSubmit').addEventListener('click', submitForm);

const chatIcon = document.getElementById('chatIcon');
const chatWindow = document.getElementById('chatWindow');
const closeIcon = document.getElementById('closeIcon');

chatIcon.addEventListener('click', () => {
    chatWindow.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    chatWindow.style.display = 'none';
});


function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
  }
  
  function sendMessage() {
    // Add code here to handle sending messages
    const inputField = document.querySelector('.chat-input input');
    const message = inputField.value;
    // Add code here to process and display the message
    inputField.value = '';
  }
  

