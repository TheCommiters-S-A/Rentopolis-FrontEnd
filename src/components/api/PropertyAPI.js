import axios from 'axios';
import Swal from "sweetalert2";


const apiaddrH = 'https://rentopolis.herokuapp.com'
//const apiaddrH = 'http://localhost:8080'
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

export  function postProperty(property,callback){
    axios.post(apiaddrH+"/home/property", property)
            .then(response => {
                callback(response.data);
            })
            .then(Response => {
                Swal.fire(
                    '¡Súper!',
                    'Inmueble publicado',
                    'success'
                )
            }).catch(error => {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error publicando el inmueble'
            })

        });
}

export function  postPictureToProperty(data,callback){
    return(axios({
        url:apiaddrH+"/home/property/picture",
        method:'POST',
        data: data,
        headers: {"Content-Type":"multipart/form-data"}
    }).then(function(response){
        console.log(response);
    }).catch(function(response){
        console.log(response)
    }))
}
