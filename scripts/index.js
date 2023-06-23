


const submitDetails = async(event) => {
    event.preventDefault();

        let email = document.getElementById("email").value
        let name = document.getElementById("name").value
        let password = document.getElementById("password").value
        let education = document.getElementById("education").value
        let city = document.getElementById("city").value
        let mobile = document.getElementById("number").value

    let details_obj = {
       email,
       name,
       password,
       education,
       city,
       mobile
    }
    console.log(details_obj);

    let res = await fetch("https://vast-lime-bat-cuff.cyclic.app/users/addUser",{
        method:"POST",
        body:JSON.stringify(details_obj),
        headers: {
            "Content-Type": "application/json"
        }
    });
   alert("User has been registered")
   window.location.assign("signIn.html");
        
}