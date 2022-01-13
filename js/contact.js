let nameLabel = document.getElementById("nameLabel")
let nameInput = document.getElementById("nameInput")

let emailLabel = document.getElementById("emailLabel")
let emailInput = document.getElementById("emailInput")

let msgLabel = document.getElementById("msgLabel")
let msgInput = document.getElementById("msgInput")


let formItems = {
    name:{
        label:nameLabel,
        input:nameInput
    },
    email:{
        label:emailLabel,
        input:emailInput
    },
    msg:{
        label:msgLabel,
        input:msgInput
    }
}

for (const item in formItems) {
    if (Object.hasOwnProperty.call(formItems, item)) {
        const formItem = formItems[item];
        formItem.input.addEventListener('focus', function(){
            formItem.label.classList = 'active'
        })
        
        formItem.input.addEventListener('blur', function(){
            console.log(this.value.length)
            if (this.value.length!=0) {
                formItem.label.classList.add("filled")
            } else {
                formItem.label.classList = ""
            }
        })
    }
}

