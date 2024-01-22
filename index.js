const fs = require('fs')
const csv = require('csv-parser')
if(fs.existsSync('./canada.txt')){
    console.log("canada.txt exists")
    fs.unlinkSync('./canada.txt')
    console.log("canada.txt deleted")
} 
if(fs.existsSync('./usa.txt')){
    console.log("usa.txt exists")
    fs.unlinkSync('./usa.txt')
    console.log("usa.txt deleted")
} 
const readStream = fs.createReadStream('input_countries.csv', 'utf8').pipe(csv());
const canadaWriteStream = fs.createWriteStream('canada.txt');
const usaWriteStream = fs.createWriteStream('usa.txt');

canadaWriteStream.write("country, population, year \n");
usaWriteStream.write("country, population, year \n");

readStream.on('data',(chunk) => {
    
    if(chunk.country == "Canada"){
        let chunkString = `${chunk.country}, ${chunk.population}, ${chunk.year}\n`
        canadaWriteStream.write(chunkString);
    }
    else if(chunk.country == "United States"){
        let chunkString = `${chunk.country}, ${chunk.population}, ${chunk.year}\n`
        usaWriteStream.write(chunkString);
    }
})