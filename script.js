let toDoList = [];
const inputElem = document.getElementById('input')
const btnElem = document.getElementById('btn')
const outputElem = document.getElementById('output')
const formElem = document.getElementById('formData')

const upElem = document.getElementById('sortUp');
const downElem = document.getElementById('sortDown');
function render(){
    outputElem.innerText = '';
    toDoList.forEach(elem=>{
        const liElem = document.createElement('li');
        liElem.classList.add('elem')
        liElem.innerText = elem;
        outputElem.appendChild(liElem);
        liElem.addEventListener('click', ()=>{
            const elems = document.getElementsByClassName('elem');
            [...elems].forEach(item=>item.classList.remove('active'));
            liElem.classList.add('active');
        })
    })
}


upElem.addEventListener('click', ()=>{
    toDoList = toDoList.sort();
    render();
})

downElem.addEventListener('click', ()=>{
    toDoList = toDoList.sort().reverse();
    render();
})

formElem.addEventListener('submit', event=>{
    event.preventDefault();
    const value = inputElem.value;
    inputElem.value = '';
    toDoList.push(value);
    render();
})

