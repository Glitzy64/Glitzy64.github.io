const messages = [
    "Talaga ba Cass?",
    "Luh, ayos",
    "Trippings ka ba",
    "Weh",
    "Just think about it",
    "BADIIINGGGG!!!",
    "Umayos ka nga",
    "Magyes kana",
    "Panget mo ka bonding",
    "Balakajan iyak ako..."
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yesPage.html";
}
