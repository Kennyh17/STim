const name = document.getElementById('name')
const username = document.getElementById('username')
const Email = document.getElementById('Email')
const password = document.getElementById('password')
const myform = document.getElementById('form')
const errorElement = document.getElementById('error')
const DebitCredit = document.getElementById('DebitCredit')
const Expired = document.getElementById('Expired')

form.addEventListener('submit',(e)=>{
    let messages =[]
        if (name.value === ""||name.value === null) {
        messages.push('Please Input Your Fullname!')
        }
        if (!/^[a-zA-Z]*$/g.test(name.value)) {
            messages.push('Fullname Must be Letter!')
        }
        if(username.value === ''||username.value === null){
            messages.push('Please Input your Username')
        }
        if(username.value.length <=10){
            messages.push('Username Must Be Longer Than 10 Characters')
        }
       
        if(Email.value ===''|| Email.value === null){
            messages.push('Email Must Be Filled')
        }
        if(Email.value.indexOf('@')<=0){
            messages.push('Email Must Be @')
        }
        if(!/[.com]/.test(Email.value)){
            messages.push('Email ends with .com')
        }

        if (password.value === '' || password.value == null){
            messages.push('Please Input Password!')
        }

        if (!/[A-Z]/.test(password.value)) {
            messages.push('[Password must contain uppercase]!')
        }

        if (!/[0-9]/.test(password.value)) {
            messages.push('Password must contain numeric!')
        }

        if(DebitCredit.value === "" || DebitCredit.value === null){
            messages.push('Please Input Debit/Credit Number!')
        }
        if (!/^[0-9]*$/g.test(DebitCredit.value)) {
            messages.push('Debit/Credit Must Be Numeric!')
        }
        if(DebitCredit.value.length <= 15|| DebitCredit.value.length >=17 ){
            messages.push('Debit/Credit Must Be  16 Characters')
        }

        if(Expired.value===''||Expired.value=== null){
            messages.push('Expired Must Be Filled')
        }
        if(Expired.value.indexOf('/')<=0){
            messages.push('Expired Wrong Format')
        }
        
    
        if(messages.length >0){
            e.preventDefault()
            errorElement.innerText = messages.join(',')
        }
    })
