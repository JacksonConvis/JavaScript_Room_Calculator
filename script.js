let yn='';
do{

    console.log("Welcome to the room calculator");

    let length = prompt("Enter Length:");
    
    let width = prompt("Enter Width:");
    
    console.log("Area: " + width * length);
    
    let perimeter = (width * 2) + (length * 2);
    
    console.log("Perimeter: " + perimeter);
    
     yn = prompt("continue? type 'yes' or 'no'");

}while(yn==='yes');

console.log("Adios!");
