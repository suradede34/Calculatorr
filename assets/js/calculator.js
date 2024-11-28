const bill = document.querySelector('.text');
const people = document.querySelector('.secondtext');
const box = document.querySelectorAll('.box');
const tekKisilikOdeme = document.querySelector('.footerContent h2');
const total = document.querySelector('.secondfooter h2');
const del = document.querySelector('.reset');

//resetleme icin cok ugrastim ama calismiyor
function handleReset() {
  if(bill.value > 0 || people.value > 0 || box.value > 0);
  bill.value = '';
  people.value = '';
  box.value = '';
}
del.addEventListener('click', handleReset);


function calculate() {
  const billAmount = parseFloat(bill.value);
  const peopleAmount = parseInt(people.value);
  let yuzde = 0;

for (const input of box) {
  if (input.value) {
    yuzde = parseFloat(input.value) / 100;
  }
}

const tipAmount = (billAmount * yuzde) / peopleAmount;
const totalAmount = (billAmount + (billAmount * yuzde)) / peopleAmount;

tekKisilikOdeme.innerText = `$${tipAmount}`;
total.innerText = `$${totalAmount}`;

}
//burayi ilk basta clik yaptim ama tiklanacak bir yer olmadigi icin calismamis 
//sonradan input yaptim bu kismida yardim aldim) 
bill.addEventListener('input', calculate);
people.addEventListener('input', calculate);
box.addEventListener('input', calculate);