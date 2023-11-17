const crypto = require('crypto');
const fs = require('fs');

// Replace 'mysecretkey' with your own secret key
const secretKey = '12345';

// Function to encrypt a file
const encryptFile = (inputPath, outputPath) => {
    const inputBuffer = fs.readFileSync(inputPath);
    const cipher = crypto.createCipher('aes-256-cbc', secretKey);
    const encryptedBuffer = Buffer.concat([cipher.update(inputBuffer), cipher.final()]);
    fs.writeFileSync(outputPath, encryptedBuffer);
    console.log('File encrypted successfully.');
};

// Function to decrypt a file
const decryptFile = (inputPath, outputPath) => {
    const encryptedBuffer = fs.readFileSync(inputPath);
    const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
    const decryptedBuffer = Buffer.concat([decipher.update(encryptedBuffer), decipher.final()]);
    fs.writeFileSync(outputPath, decryptedBuffer);
    console.log('File decrypted successfully.');
};

// Example usage:
const inputFile = 'encrypt.mp4';
const encryptedFile = 'encrypt2.mp4';
const decryptedFile = 'encrypt3.mp4';

// Encrypt the file
// encryptFile(inputFile, encryptedFile);

// Decrypt the file
decryptFile(encryptedFile, decryptedFile);
