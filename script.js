"use strict"

// alert("Hello, JavaScript")

// const place = confirm("Are you here?")
// console.log(place)

// const currentPlace = +prompt("Where are you?", "")
// console.log(typeof currentPlace)

// const favoriteColor = []
// favoriteColor[0] = prompt("What's your favourite color #1", "")
// favoriteColor[1] = prompt("What's your favourite color #2", "")
// favoriteColor[2] = prompt("What's your favourite color #3", "")
// console.log(typeof favoriteColor)4

// const channel = prompt("What's your favourite youtuber?")
// console.log("https://youtube.com/" + channel)


// const numberOfSeries = +prompt("Nechta o'yin ko'rdingiz?", "") 
// console.log(numberOfSeries)

// seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false
// }



// const age = +prompt("How old are you?", "")

// const color = "yellow"

// switch (color) {
//     case "red": 
//         console.log("Stop!");
//         break;
//     case "green":
//         console.log("Goo!");
//         break;
//     case "yellow":
//         console.log("Slowly!");
//         break;
//     default:
//         console.log("Traffic jam!");
//         break;
// }

let num = 10;

// while(startNum <= 10) {
//     console.log(startNum) 
//     startNum ++
// }

// do {
//     console.log(startNum)
//     startNum ++
// } while (startNum <= 10)

const seriesDB = {
    series: {}
}


for (let i = 1; i <= 2; i++) {
    const nameOfSeries = prompt("Oxirgi ko'rgan serialingiz", "")
    const rankOfSeries = +prompt("Nechchi baho berasiz?", "")
    
    if (nameOfSeries != null && rankOfSeries != null && nameOfSeries != "" && rankOfSeries != "") {
        seriesDB.series[nameOfSeries] = rankOfSeries
        console.log("Done")
    } else {
        console.log("Error")
        i--
    }
}

console.log(seriesDB)
