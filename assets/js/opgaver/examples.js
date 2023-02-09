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

    let myText = '<strong> Du har valgt:</strong>';

    myExtras.map((items) => {
        myText = myText + '<br>' + items;
    });

    myExtrasListElement.innerHTML = myText;

}






