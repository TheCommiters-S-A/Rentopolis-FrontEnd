import axios from 'axios';
import Swal from "sweetalert2";

const apiaddrH = 'https://rentopolis.herokuapp.com'
export function getProperties(){

let properties=[];
    axios.get(apiaddrH + "/home/properties")
        .then(response => {
            var APIResponse = response.data;
            properties = [...properties]
            if (APIResponse.length !== properties.length) {
                properties = APIResponse
                console.log(properties,"Api call");
                return response.data;
            }

        }).catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
        })
    });
    return properties;
}