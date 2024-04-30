var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var res = JSON.parse(request.response)
    console.log(res)

//Get all the countries from Asia continent /region using Filter method

var data = res.filter((ele)=>ele.region == 'Asia')
var country = data.map((ele)=>ele.name.common)
console.log(country);

// To print the details all the countries whose population is greater than 10000

var data = res.filter((ele)=>ele.population < 200000)
var country = data.map((ele)=>ele.name.common)
console.log(country);

//Print the following details name, capital, flag, using forEach method

var data = res.forEach((ele)=>console.log((ele.name.common) + " " + (ele.capital) + " " + (ele.flags.png)))


//Print the total population of countries using reduce method

var data = res.reduce((acc,cv)=>acc+cv.population,0)
console.log(data)


//Print the country that uses US dollars as currency.
var currency = res.filter((ele)=>ele?.currencies?.USD)
var country = currency.map((ele)=>ele.name.common)
console.log(country)

}