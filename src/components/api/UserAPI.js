import React, {useState} from 'react';
import axios from 'axios';

export default class UserAPI extends React.Component{
    postNewUser(id,_name,phoneNumber,email,passwd){
        axios.post({
            method: 'post',
            url: 'http://192.168.0.7:8080:/users',
            data: {
                "id": id,
                "Name": _name,
                "phoneNumber": phoneNumber,
                "email": email,
                "passwd": passwd
            }
        })
    }
}

