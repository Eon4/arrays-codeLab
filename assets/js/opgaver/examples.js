//Opgave 1 på hardmode 

let myExtras = [];
const myExtrasInput = document.getElementById('extraUdstyr');
const myExtrasListElement = document.getElementById('extraList');


myExtrasInput.addEventListener("change", addExtra);



function addExtra() {

    myExtras.push(myExtrasInput.value);

    console.log(myExtras);

    updateExtras();
}



function updateExtras() {

    let myText = '<strong> Du har valgt:</strong><br><ul>';
    // console.log('exstras array:' + 'myExstra');  kun for at tjekke efter fejl

    myExtras.map((items) => {
    console.log('item:' + items);
    
    
    myText = myText +  '<li>' + items + '</li>';
    console.log('text:' + myText);

    });

    myText = myText +  '</ul>';

    myExtrasListElement.innerHTML = myText;

}






