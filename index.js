// ! Secret key 
const myKey = config.KEY;


const input = document.querySelector('input')
const h1 = document.querySelector('h1')
const date = document.querySelector('#date')
// span is nested inside h2
const h2 = document.querySelector('h2');
const span = document.querySelector('#temp')
const condition = document.querySelector('#condition')
const image = document.getElementById("img")


const button = document.querySelector('button')



input.addEventListener('input', (e) => {
    const value = input.value.trim();
    if(value){
        h1.innerText = input.value;
        
    }
        
    else{
        h1.innerText = ''

    }
        
})

const booleanChar = ['hidden', 'visible']

// Makes the text hidden
function toggleVisibility(value) {
    

    document.querySelector('#date').style.visibility = booleanChar[value];
    
    // span is nested inside h2
    document.querySelector('h2').style.visibility = booleanChar[value];
    document.querySelector('#temp').style.visibility = booleanChar[value];
    document.querySelector('#condition').style.visibility = booleanChar[value];
    document.getElementById("img").style.visibility = booleanChar[value];
    
}




// Runs when page is loaded
document.addEventListener('DOMContentLoaded', function() {
    toggleVisibility(0)
}, false);

// * Give the button the power to get the weather
button.addEventListener('click', async function (e){
    // IF you typed nothing or tried to be a smart ass
    if(h1.innerText === 'Enter a City')
        return
    
    
    
    const currentCity = h1.innerText;

    const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${myKey}&q=${currentCity}&aqi=no`)
    
    // document.querySelector('h2').style.visibility = 'visible'
    toggleVisibility(1)


    span.innerText = res.data.current.temp_f;
    date.innerText = res.data.location.localtime;
    condition.innerText = res.data.current.condition.text;
    document.getElementById("img").src = res.data.current.condition.icon;
})

