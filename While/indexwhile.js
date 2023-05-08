let letters = ["A", "B", "C", "D", "E"];
let i = 0;
let text = " ";

while (letters[i]) {
    text += letters[i] + "<br>";
    i++;
    console.log(text);
}
document.getElementById("demo").innerHTML = text;



let a=0;
while (a<=20) {
    a+=2;
    console.log(a);
}


//При помощи цикла for выведите чётные числа от 2 до 10.
for (let i = 2; i <= 10; i++) { 
    if (i % 2 == 0) {
    console.log(i);
        }
    }

    
