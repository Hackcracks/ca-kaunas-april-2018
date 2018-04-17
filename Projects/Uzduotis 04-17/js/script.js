let miestai = ["New york", "Berlin","Oslo","Riga","Moscow","Rome",""];

// Step 1: turim nuskaityti teksta is laukelio (Input)
function check(){
    let city = document.getElementById("city").value;
    console.log(city);

    // Step 2: patikrinti ar tekstas yra masyve (Logic)
    let cityFound = "";
    if(miestai.indexOf(city) > -1){
        cityFound = "Toks miestas yra";
    }else{
        cityFound = "Tokio miesto nera";
    }

    //Step 3: atvaizduoti rezultata (Output)
    document.getElementById("result").innerHTML = "<h3>"+cityFound+"</h3>";
}



// miestai.check("Rome");
// // miestai = clearDuplicates(miestai);





// let split_list = "New york", "Berlin","Oslo","Riga","Moscow","Rome","";
// let splitted_miestai = split_list.split(',');

// // splitted_miestai = splitted_miestai.reverse(); // Apvercia masyva, padaro "yellow,blue,black" 

// // tikrinam ar zodis yra Rastas
// let wordFound = splitted_miestai.indexOf("Rome") > -1;

// console.log(splitted_miestai);


// let split_list = "New york", "Berlin","Oslo","Riga","Moscow","Rome","".split(',');
// //console.log(colors2);
// if(color_list.indexOf("Berlin") == -1){
//     //console.log("red nerasta");
// }else{
//     //console.log("Blue gyvena "+colors2.indexOf("blue")+" vagone");
// }





