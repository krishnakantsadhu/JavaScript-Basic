const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)  //create using factory method
//const tea = new User()

console.log(tea.email);

//tea.email('dsdsds')
console.log(tea.email);