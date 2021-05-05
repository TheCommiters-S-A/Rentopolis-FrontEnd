import axios from 'axios';
import Swal from "sweetalert2";

const apiaddrH = 'https://rentopolis.herokuapp.com'
export function postNewUser(id,_name,phoneNumber,email,passwd){
    axios.post(apiaddrH+'/home/user', {
        "id": id,
        "name": _name,
        "phoneNumber": phoneNumber,
        "email": email,
        "passwd": passwd
    }).then(function(response){
        return response;
    })
}

export function GetUserByEmail(email,callback){
    axios.get(apiaddrH+"/home/user/email/"+email).then(response=>{
        localStorage.setItem("user",JSON.stringify(response.data));
        callback(JSON.stringify(response.data.id));
    }).catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
    })});
}

