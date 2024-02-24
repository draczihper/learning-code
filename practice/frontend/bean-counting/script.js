let countChar = (str, ch) => {
    let counted = 0
    for (let i = 0; i < str.length; i++){
        if (str[i] == ch) {
            counted += 1;
        }
}
    return counted;
};

let countBs = (str) => {
    return countChar(str, "B")
}
console.log(countBs("BooBieBoBoshit"));
console.log(countChar("no fucking letter that comes after a", "a"))