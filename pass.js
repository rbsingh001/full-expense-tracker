async function forgetpass(){
    const email = document.getElementById('email').value ;

    if (email.trim() === "" ) {
        alert("Please Enter Email ");
        return;
    }

    try{
        const response = await axios.post('http://localhost:5000/password/forgotpassword', {
        email: email
    })
    console.log(response.data)
    if(response.status === 200){
                    document.body.innerHTML += '<div style="color:red;">Mail Successfuly sent <div>'
                    window.location.href = `file:///C:/Users/dell/Desktop/Exp/reset.html`;
                } else {
                    throw new Error('Something went wrong!!!')
                }

    }catch(err){
        console.log(err);
    }
    

}


// function forgotpassword(e) {
//     e.preventDefault();
//     console.log(e.target.name);
//     const form = new FormData(e.target);

//     const userDetails = {
//         email: form.get("email"),

//     }
//     console.log(userDetails)
//     axios.post('http://localhost:3000/password/forgotpassword',userDetails).then(response => {
//         if(response.status === 202){
//             document.body.innerHTML += '<div style="color:red;">Mail Successfuly sent <div>'
//         } else {
//             throw new Error('Something went wrong!!!')
//         }
//     }).catch(err => {
//         document.body.innerHTML += `<div style="color:red;">${err} <div>`;
//     })
// }