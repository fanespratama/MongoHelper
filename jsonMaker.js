let text =
`
judulFilm | x
durasi | 100
jenisFilm | x
Pemeran | C, D, E, F
jenisFilm | x

`
text = text.split("\n")

let result = []

for (let i = 0; i < text.length; i++) {
    let lineSplit = text[i].split(" | ")
    if(text[i].length > 0){
        let value = lineSplit[1];
        if(value.includes(",")){
            value = value.replaceAll(", ", ",");
            value = value.split(",");
            value = '["'+value.join('","')+'"]'
        } else {
            if(value.includes("(int)")){
                value = value
            } else {
                value = '"'+value+'"';
            }
        }
        result.push(`"${lineSplit[0]}":${value}`)
    }
    
}

// let final = `db.tbFilm.insertOne({${result.join(",")}})`;
let final = result.join(",")

console.log(final);


/*
db.tbFilm.insertOne({"judulFilm":"Fast x","penulis":["Justin Lin","Dan Mazeau"],"jenisFilm":["Action","Crime"],"Pemeran":["Vin Diesel","Michelle","Jordana"]})

db.tbFilm.insertMany([{"judulFilm":"a","durasi":" ","kategori":"R13+","Pemeran":"a","jenisFilm":" "},{"judulFilm":"b","durasi":"123","kategori":" ","Pemeran":" ","jenisFilm":["History","Romantic"]},{"judulFilm":" ","durasi":"100","kategori":" ","Pemeran":["C","D","E","F"],"jenisFilm":" "}])




*/