const submitForm1 = document.getElementById("form1");
const submitForm2 = document.getElementById("form2");
const submitForm3 = document.getElementById("form3");

const stepTwo = document.getElementById("step2");
const stepthree = document.getElementById("step3");

const numOne = document.getElementById("num1");
const numTwo = document.getElementById("num2");
// uncovered
submitForm1.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm1.classList.add('d-none');
    submitForm2.classList.remove('d-none');
    numOne.style.background = 'green';
    stepTwo.classList.remove('uncovered');

});

submitForm2.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm2.classList.add('d-none');
    submitForm3.classList.remove('d-none');
    numTwo.style.background = 'green';
    stepthree.classList.remove('uncovered');
});

submitForm3.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("done");
});
