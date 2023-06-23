


const login = async(event) => {

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

let user_obj = {
   email,
   password
}
event.preventDefault();
console.log(user_obj);

let res = await fetch("https://vast-lime-bat-cuff.cyclic.app/users/userLogin",{
    method:"POST",
    body:JSON.stringify(user_obj),
    headers: {
        "Content-Type": "application/json"
    }
});
console.log(res.body);
    
}