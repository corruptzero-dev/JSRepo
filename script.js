let toDoList = [];
const inputElem = document.getElementById('input')
const btnElem = document.getElementById('btn')
const outputElem = document.getElementById('output')

const upElem = document.getElementById('sortUp');
const downElem = document.getElementById('sortDown');
function render(){
    outputElem.innerText = '';
    toDoList.forEach(elem=>{
        const liElem = document.createElement('li');
        liElem.innerText = elem;
        outputElem.appendChild(liElem);
    })
}

btnElem.addEventListener('click', ()=>{
    const value = inputElem.value;
    inputElem.value = '';
    toDoList.push(value);
    console.log(toDoList);
    render();
})

upElem.addEventListener('click', ()=>{
    toDoList = toDoList.sort();
    render();
})

downElem.addEventListener('click', ()=>{
    toDoList = toDoList.sort().reverse();
    render();
})