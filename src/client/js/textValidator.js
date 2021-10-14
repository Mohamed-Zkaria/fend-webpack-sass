function textValidator(inputText) {

    const regexValidation = RegExp('.{3,}');
    let regexResult = regexValidation.exec(inputText);
    if(regexResult){
        return true;
    }
    return false
}

export { textValidator }
