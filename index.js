function vowelCounter(string) {
    let res = 0;
    const vowels = ['a', 'e', 'i', 'u', 'o'];
    const splited = string.split('');
    splited.forEach((e) => {
        if (vowels.includes(e.toLowerCase())) {
            res += 1;
        }
    });
    return res;
}

function countSpaces(string) {
    let res = 0;
    for (let index = 0; index < string.length; index++) {
        if (string[index] === ' ') {
            res += 1;
        }
    }
    return res;
}

function main(string) {
    const words = countSpaces(string) + 1; 
    const characters = string.length;
    const vowels = vowelCounter(string);
    return { words: words, characters: characters, vowels: vowels };
}

console.log(main('ur mom gay'));
