import React from 'react';
import axios from 'axios';

const apiaddr = 'http://localhost:8080'
const apiaddrH = 'https://rentopolis.herokuapp.com'


export function postNewUser(id,_name,phoneNumber,email,passwd){
    axios.post(apiaddrH+'/home/user', {
        "id": id,
        "name": _name,
        "phoneNumber": phoneNumber,
        "email": email,
        "passwd": passwd
    }).then(function(response){
        console.log(response);
    })
}


