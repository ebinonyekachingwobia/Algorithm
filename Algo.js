function analyzeSentence(sentence) {
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";

    // Iterate through each character of the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        sentenceLength++;

        // Check for word boundaries (space)
        if (char === ' ') {
            wordCount++;
        }

        // Check for vowels
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    // Add 1 to word count for the last word
    wordCount++;

    return [sentenceLength, wordCount, vowelCount];
}

// Example usage
const inputSentence = prompt("Enter a sentence (end with a period): ");

// Check if the input ends with a period
if (inputSentence.endsWith('.')) {
    // Remove the period from the input
    const trimmedSentence = inputSentence.slice(0, -1);

    // Analyze the sentence
    const [length, words, vowels] = analyzeSentence(trimmedSentence);

    console.log("Length of the sentence:", length);
    console.log("Number of words in the sentence:", words);
    console.log("Number of vowels in the sentence:", vowels);
} else {
    console.log("Error: Please end the sentence with a period.");
}
