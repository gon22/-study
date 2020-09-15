const form = document.querySelector('form');
const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');


let numbers = [0,1,2,3,4,5,6,7,8,9]
let answer = []
let COUNT = 0;

for(let n = 0;n<=3;n++){
    const index = Math.floor(Math.random()*(10-n));
    answer.push(numbers[index]);
    numbers.splice(index,1);
}
console.log(answer)

let allCount = 0
form.addEventListener('submit',(e) => {
    e.preventDefault()
    function compare(){//비교하기
        let strike = 0
        let ball = 0
        for(let i = 0;i<value.length;i++){
            if(stAnswer[i]===value[i]){
                strike += 1
                console.log(`strike:${strike}`)
            }else{
                for(let j = 0;j<value.length;j++){
                if(stAnswer[i]===value[j]){
                    ball += 1
                    console.log(`ball:${ball}`)
                    }
                }
            }
        }
    }
    const value = input.value;
    const stAnswer = answer.join('');
    if(value && value.length === 4){
        if(stAnswer === value){
            logs.appendChild(document.createTextNode('hr'))
        }else{
            compare();
            if(allCount<9){
                console.log(`남은횟수${9-allCount}`)
                allCount +=1
            }else{
                console.log(`남은횟수${9-allCount}`)
                allCount +=1
                alert('게임종료')    
            }
        }
    }
    input.value = '';
    input.focus()
})

