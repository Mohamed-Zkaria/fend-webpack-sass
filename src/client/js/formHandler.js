async function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:8081/test';
    const axios = require("axios")

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(formText === ""){
        window.alert("form is empty.");
        return 
    }
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => {
    //     return res.json()
    // })
    // .then(function(data) {
    //     document.getElementById('results').innerHTML = data.message
    // })

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
