//this function displays a counter on the webpage
let counter = 0;
function displayCounter() {
    counter++;
    document.querySelector('h2').innerHTML = counter;
    if (counter %100 === 0) {
        alert(`Counter is now at ${counter}`);
    }
}
//this function resets the counter to zero
function resetCounter() {
    counter = 0;
    document.querySelector('h2').innerHTML = counter;
}
//this function changes the background color of the webpage to a random color
function changeBackgroundColor() {
    document.body.style.backgroundColor = color='#'+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.color = 'white';
}
//this function changes the background color of the webpage to a white color
function changeTextColor() {
    document.body.style.backgroundColor = 'white';
     document.body.style.color = 'black';
}
//loop that logs numbers from 1 to 1000
for (let i = 1; i <= 1000; i++) {
    console.log(i);
}
//loop that prints even numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) { 
        document.write(i + '<br>');
    }
}