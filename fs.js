const fs = require("fs");

fs.readFile("./data/first.txt", 'utf-8', function (error, data) {
if (error) {
    console.log(error);
}
    console.log(data);

    fs.readFile("./data/second.txt", 'utf-8', function (error, data) {
        if (error) {
            console.log(error);
        }
            console.log(data)

            fs.writeFile('./data/newfile.txt', 'otro archivo creado', function(error, dato){
            console.log(error)
            console.log(dato)
            })

            fs.writeFile('./data/newfile2.txt', 'otro archivo creado', function(error, dato){
                console.log(error)
                console.log(dato)
                })

                fs.writeFile('./data/newfile3.txt', 'otro archivo creado', function(error, dato){
                    console.log(error)
                    console.log(dato)
                    })
        });    
        
});    

// const first = fs.readFileSync("./data/first.txt", "utf-8");
// const second = fs.readFileSync("./data/second.txt", "utf-8");

// console.log(first);
// console.log(second);

// const tittle = "soy el contenido ";

// fs.writeFileSync("./data/fourth.txt", tittle, {
//     flag: "a",
// });
