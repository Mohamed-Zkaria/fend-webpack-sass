async function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:8081/test';
    const axios = require("axios")

    let formText = document.getElementById('name').value

    let valid = Client.textValidator(formText);
    console.log({valid})
    if(!valid ){
        window.alert("form is empty or less than three characters.");
        return 
    }

    try{
        const response = await axios.post(url, {
            body: JSON.stringify(formText)
        });
        let {text, confidence, agreement} = response.data[0]
        document.getElementById('results').innerHTML = `text: ${text}<br> confidence: ${confidence}<br> agreement: ${agreement}`;
    } catch( error ){
        console.log({error})
    }
}

export { handleSubmit }
