function reverseVowels(str) {
    const vowels = str.replace(/[^aeuio]/gi, "").split("")
    return str.replace(/[aeuio]/gi, (_)=> vowels.pop())
}
