const utterance = new SpeechSynthesisUtterance()

const setTextmessage = text => {
    utterance.text = text
}

const speakText = () => {
    speechSynthesis.speak(utterance)
}

const falar = (text) => {
    setTextmessage(text)
    speakText()
}

const setVoice = (idioma) => {
    utterance.voice = voices.find(voice => voice.name === idioma)
}

//Busca as frases
var main = document.querySelector("main")

//V2.0
var phases = {"Present Simple":
            {
                "Jóias":[
                    {text:"I need a new ring for my collection."},
                    {text:"She looks coll with this bracelet."},
                    {text:"Why don't you buy  this necklace?"},
                    {text:"They are trying on this pendant."},
                    {text:"It doesn't look like earrings."},
                    {text:"Are you the locket's man?"},
                    {text:"We are more valuable than gold."},
                    {text:"He doesn't know a gemstone mine."},
                    {text:"Where do you get the silver from?"},
                    {text:"He doesn't match with this chain."}
                ]
            }
        }

var divb = ""

var cont = 0;
for (var [key, value] of Object.entries(phases)) {
    divb += `
        <div class='menu' cont='${cont}'>
            <h3 class='matter'>${key}</h3>
        </div>
        <div class='expression-box' id='expression-box${cont}'>
    `
    var i = 0
    for (var [ke, val] of Object.entries(value)) {
        divb += `
            <div class='themes'>
                <div class='table-phases'>
                    <h4 class='theme' cont='${i}'>${ke}</h4>
                    <div id='ul${i}' cont='${i}' class='ul'>
        `
        for (var [k, v] of Object.entries(val)) {
            divb += `
                <div class='row'>
                    <div class='col-sm-9'>
                        <p class='text inline'>${v.text}</p>
                    </div>
                    <div class='col-sm-1 center'>
                        <i class='fa fa-play-circle play inline' onclick='falar("${v.text}")'></i>
                    </div>
                    <div class="col-sm-1 center">
                        <i class='fas fa-pen-alt inline play' onclick=''></i>
                    </div>
                    <div class="col-sm-1 center">
                        <i class='far fa-trash-alt inline play' onclick=''></i>
                    </div>
                </div>
            `
        }
        divb += `
                    </div>
                </div>
            </div>
        `
        i += 1;
    }
    divb += `
            </div>
        `
    
    cont += 1;
}

$(main).html(divb)

//Tipos de vozes/idiomas no select
var voices = []

speechSynthesis.addEventListener('voiceschanged', () => {
    voices = speechSynthesis.getVoices()

    var options = ``
    voices.forEach(({name, lang}) => {
        options += `<option value='${name}'>${lang} - ${name}</option>`
    })

    $("#selectIdioma").html(options)
})

$("#selectIdioma").on("change", function(){
    setVoice($(this).val())
})

//abringo cada modo
$(".menu").on("click", function(){
    $("#expression-box"+$(this).attr('cont')).slideToggle(500)
})

$(".theme").on("click", function(){
    $("#ul"+$(this).attr('cont')).slideToggle(500)
})