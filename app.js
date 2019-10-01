let value1 = 0;
let value2 = 0;
let value3 = 0;
const myButton = document.getElementById('action-button');
myButton.onclick = () => {
    alert('welcome to my quiz');
    const myConfirmation = confirm('do you want to take my quiz?');
    
    console.log(myConfirmation);
    const userAnswer = prompt('is the capitol of tunisa tunis? (yes/no)');
    const sanitizedUserAnswer = userAnswer.toLowerCase().trim();
    if (sanitizedUserAnswer === 'yes'){
        value1 = 1;
        alert('right-o');}
        else {
            value1 = 0;
            alert('nah');
        }
        console.log(sanitizedUserAnswer);
    const secondAnswer = prompt('What is my name, Alan? (yes/no)');
    const sanitizedSecondAnswer = secondAnswer.toLowerCase().trim();
    if (sanitizedSecondAnswer === 'yes'){
        value2 = 1;
        alert('right-o');
    }
    else {
        value2 = 0;
        alert('nah');
    }
    const thirdAnswer = prompt('Is this going to happen? (yes/no)');
    const sanitizedThirdAnswer = thirdAnswer.toLowerCase().trim();
    if (sanitizedThirdAnswer === 'yes'){
        value3 = 1;
        alert('right-o');
    }
    else {
        value3 = 0;
        alert('nah');
    }
    
    const score = value1 + value2 + value3;
    if (score <= 2){
        const result = document.getElementById('result');
        const ohNO = 'OhNo!';
       result.textContent = ohNO;
       result.classList.remove('hidden');
       result.classList.add('displayed');
       const smallBackground = document.getElementById('small-background');
       smallBackground.classList.remove('background');
       smallBackground.classList.add('new-background');
       const finalBit = document.getElementById('final-bit');
        finalBit.classList.remove('hidden');
        finalBit.classList.add('displayed');
    }
    else {
        const ok = 'Ok!';
        result.textContent = ok;
        result.classList.remove('hidden');
        result.classList.add('displayed');
        const smallBackground = document.getElementById('small-background')
        smallBackground.classList.remove('background');
        smallBackground.classList.add('new-background');
        const finalBit = document.getElementById('final-bit');
        finalBit.classList.remove('hidden');
        finalBit.classList.add('displayed');
    }
    
};