function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function wishes() {
    console.log('Happy Birthday!');
}

module.exports = {
    generateRandomNumber,
    wishes,
} 