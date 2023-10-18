const fname = document.getElementById('fname')
const last_name = document.getElementById('last_name')
const phone = document.getElementById('phone')
const e_mail = document.getElementById('e_mail')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (fname.value === '' || fname.value == null) {
        messages.push('First Name is required')
        fname.style.border = "2px solid rgb(211, 70, 70)" 
    } else {

    if (fname.value >= '' || fname.value != null) {
        fname.style.border = "2px solid black" 
    }
}

    if (last_name.value === '' || last_name.value == null) {
        messages.push('Last Name is required')
        last_name.style.border = "2px solid rgb(211, 70, 70)" 
    } else {

    if (last_name.value >= '' || last_name.value != null) {
        last_name.style.border = "2px solid black" 
    }
}

    if (phone.value === '' || phone.value == null) {
        messages.push('Phone number is required')
        phone.style.border = "2px solid rgb(211, 70, 70)" 
    } else {

     if (phone.value >= '' || phone.value != null) {
        phone.style.border = "2px solid black" 
     }
    }

    if (e_mail.value === '' || e_mail.value == null) {
        messages.push('E-mail is required')
        e_mail.style.border = "2px solid rgb(211, 70, 70)" 
    } else {

    if (e_mail.value >= '' || e_mail.value != null) {
        e_mail.style.border = "2px solid black" 
    }
}

    if (messages.length > 0) {
       e.preventDefault()
       errorElement.innerText = messages.join(', ')
    }    
})

// form.addEventListener('submit', (e) => {
//     let messages = []
//     if (fname.vale === '' || fname.value == null) {
//         messages.push('Name is required')
//     }

//     if (messages.length > 0) {
//     e.preventDefault()
//      errorElement.innerText = messages.join(',')
//     }
// })