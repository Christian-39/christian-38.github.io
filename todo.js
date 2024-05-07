
const inputDetails = document.querySelector('.entered-list')
const addButton = document.querySelector('.add-list')
const taskDiv = document.querySelector('.tasks')
// Format of Div that is being added
const format = (text) => {
    if(text === ''){
       return alert('Please enter a todo')
    
    }else {
        let newDiv = ` <div class="item">
                                <p>${text}</p>
                            <div class="item-btn">
                                <i class='bx bx-checkbox check'></i>
                                <i class='bx bxs-x-circle fa-xmark'></i>
                            </div>
                        </div>`

        taskDiv.innerHTML += newDiv
    }
}
// Add List Button
addButton.onclick = () => {   
    let text = inputDetails.value
    format(text)
    inputDetails.value = '';
};
// Delete A list
taskDiv.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})
// Function for identifying a completed task
taskDiv.addEventListener('click', (e) => {
    if(e.target.classList.contains('bx-checkbox')){
        e.target.classList.toggle('bxs-checkbox-checked');
        
        if(e.target.classList.contains('bxs-checkbox-checked')){
            e.target.parentElement.parentElement.style.background = 'rgb(73, 231, 73)'
            e.target.parentElement.parentElement.style.color = 'white'
            e.target.style.color ='white'
            e.target.nextElementSibling.style.color ='white'                
        }else{
            e.target.parentElement.parentElement.style.background ='white'
            e.target.parentElement.parentElement.style.color = 'black'
            e.target.style.color ='rgba(8, 6, 133)'
            e.target.nextElementSibling.style.color ='rgba(8, 6, 133)'
        }  
    }
})