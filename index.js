// ! Secret key 
const myKey = config.KEY;

// Get the current City name
const city = document.querySelector('#city')

// Allows us to call the button
const button = document.querySelector('button')

// ? The span where the temp will be placed when we pushed the button
const span = document.querySelector('#temp')

const date = document.querySelector('#date')

const condition = document.querySelector('#condition')



// * Give the button the power to get the weather
button.addEventListener('click', async function (e){
    const currentCity = await document.getElementById('city').value;
    const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${myKey}&q=${city.textContent}&aqi=no`)
    
    span.innerText = res.data.current.temp_f;
    date.innerText = res.data.location.localtime;
    condition.innerText = res.data.current.condition.text;
    const image = document.getElementById("img").src = res.data.current.condition.icon;
})

