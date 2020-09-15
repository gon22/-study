const form = document.querySelector('form');
const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');


let numbers = [0,1,2,3,4,5,6,7,8,9]
let answer = []

for(let n = 0;n<=3;n++){
    const index = Math.floor(Math.random()*(10-n));
    answer.push(numbers[index]);
    numbers.splice(index,1);
}

console.log(answer)

let COUNT = 0;

form.addEventListener('submit',(e) => {
    e.preventDefault()
    const value = input.value;
    if(value && value.length === 4){
        if(answer.join('') === value){
            console.log('success')
        }
    }
})