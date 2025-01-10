const inputs = document.querySelectorAll('.comments_inputs input'); 
const btn = document.querySelector('.btn'); 


function checkInputs() {
    let allFilled = true; 

    inputs.forEach(input => {
        if (input.value.trim() === '') { 
            allFilled = false; 
        }
    });

    
    if (allFilled) {
        btn.disabled = false; 
    } else {
        btn.disabled = true; 
    }
}

inputs.forEach(input => {
    input.addEventListener('input', checkInputs);
});

checkInputs();