
document.addEventListener("DOMContentLoaded",(e)=>{
    // select 
    const wrapper = document.querySelectorAll('.select_form-wrapper')
    wrapper.forEach((item)=>{
        const btnSelect =  item.querySelector('.select_form-button')
        const selectedMenu = item.querySelector('.select_form')
        const selectedItem = item.querySelectorAll('.select_form-item')
    
    
        btnSelect.addEventListener('click',(e)=>{
            e.preventDefault()
            selectedMenu.classList.toggle('none')
            btnSelect.classList.toggle('act')
        })
    
        selectedItem.forEach((item)=>{
            item.addEventListener('click',function(){
                btnSelect.innerText = this.innerText
                btnSelect.value = this.dataset.value
                btnSelect.focus()
                selectedMenu.classList.add('none')
                btnSelect.classList.remove('act')
            })
        })
    
        document.addEventListener('click',(e)=>{
            if(e.target !== btnSelect){
                selectedMenu.classList.add('none') 
                btnSelect.classList.remove('act')
            }
        })
    

        document.querySelector('.order_form_button').addEventListener('click',(e)=>{
           e.preventDefault() 
        })

// range
        const input = document.querySelector('.range_input-item')
        const infoProcent = document.querySelector('.range_procent')
        input.value = 75;
        infoProcent.innerText = input.value + "%"
        input.onchange = function(){
            infoProcent.innerText = this.value + '%'
        }
    })

// burger-menu

    const btnMenu = document.querySelector('.header_burger')
    const burgerMenu = document.querySelector('.menumobile')
    const burgerClose = document.querySelector('.menumobile_close')

    btnMenu.addEventListener('click',()=>{
        burgerMenu.style.right = 0;
    })
    burgerClose.addEventListener('click',()=>{
        console.log(1231)
        burgerMenu.style.right = -1000 + 'px';
    })

})
