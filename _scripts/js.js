
let click_to_convert = document.querySelector("#click_to_convert");

click_to_convert.addEventListener('mousedown', function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "fr-FR";


    recognition.addEventListener('result', e=>{
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)

        convert_text.innerHTML = transcript;
    })

    if(speech == true ){
        recognition.start();
    }

})









