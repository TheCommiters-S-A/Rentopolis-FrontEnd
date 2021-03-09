import React from 'react';
import axios from 'axios';


export function postNewUser(id,_name,phoneNumber,email,passwd){
    axios.post('http://192.168.0.11:8080/home/user', {
        "id": id,
        "name": _name,
        "phoneNumber": phoneNumber,
        "email": email,
        "passwd": passwd
    }).then(function(response){
        console.log(response);
    })
}


