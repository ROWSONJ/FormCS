//EX 1
function check_three_nums(x,y,z){
    return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99);
    }
    console.log(check_three_nums(50, 90, 99));
   
//EX 2
function check_script(str){
    if (str.length < 6) {
        return str;
    } else {
        let result_str = str;
        if (str.substring(10, 4) == 'Script') {
            result_str = str.substring(0, 4) + str.substring(10, str.length);
        }
            return result_str;
    }
}
console.log(check_script("Script"));   

//EX 3
function Guess(){
const num = Math.ceil(Math.random() * 10);
console.log(num);
const gnum = prompt('Guess the number between 1 and 10 inclusive');

    if(gnum == num){
        console.log('Matched');
    }
    else{
        console.log('Not matched');
    }
}
//EX 4 
var today = new Date();

var cmas = new Date(today.getFullYear(),11,25);

if(today.getMonth == 11 && today.getDate() > 25){

    cmas.setFullYear(cmas.getFullYear()+1);

}
var one_day = 1000*60*60*24;

console.log(Math.ceil((cmas.getTime() - today.getTime())/(one_day))+" days left until Christmas!");

//EX 5
var num1 = prompt("Enter the Num 1:");
var num2 = prompt("Enter the Num 2:");
var unit = prompt("Enter 'M' for Multiply or 'D' for Divide:").toUpperCase();

var fun = (num1, num2, unit) => {
if (unit == "M") {
    Num = num1 * num2;
}else if(unit == "D"){
    Num = num1 / num2;
}
return Num;
}
console.log(fun(num1, num2, unit));

//EX 6
function temp_convert() 
{
var unit = prompt("Enter 'C' for Celsius or 'F' for Fahrenheit:").toUpperCase();
var temperature = prompt("Enter the temperature:");

if (unit == "C") {
    F = temperature * 9/5 + 32;
    console.log(F + " degrees Fahrenheit.");
}else if(unit == "F"){
    C = (temperature - 32) * 5/9;
    console.log(C + " degrees Celsius.");
    }
} 

//EX 7

function string_check(str){
    if (str === null || str === undefined || str.substring(0, 2) === 'Py'){
        return str;
    }
    return "Py" + str;
}
console.log(string_check("Python"));
console.log(string_check("thon"));
console.log(string_check("ComSci"));

