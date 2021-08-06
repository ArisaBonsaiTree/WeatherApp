// const res = await axios.get(LINK)


async function getLoc() {
    const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.KEY}&q=San Francisco&aqi=no`)
    console.log(res.data.location.name)
}