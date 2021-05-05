import axios from 'axios';
import React, { useState } from 'react';


export const Upload = () => {

    const apiaddr = "https://rentopolis.herokuapp.com/"
    const [picturesState,setPicturesState] = useState("");
    const [imageState,setImageState] = useState("");
    var FormData = require('form-data');

    const handlePictureChange = (e) =>{
        setPicturesState(e.target.files[0]);
        console.log(picturesState);
    }

    const handleUpload=()=>{
        var formData = new FormData();
        formData.append('file',picturesState);
        formData.append('id',null);
        formData.append('title',picturesState.name);
        formData.append('filename',"title.jpg")
        console.log(formData)

        axios({
            url:apiaddr+"home/picture",
            method:'POST',
            data: formData,
            headers: {"Content-Type":"multipart/form-data"}
        }).then(function(response){
            console.log(response);
        }).catch(function(response){
            console.log(response)})
        }

        const handleGetImage =()=>{
            axios.get(apiaddr+"/home/picture/\"2\"").then((response)=>{
                console.log(response.data.image.name);
                setImageState(response.data.image.data)
            })
        }


    return (
        <div>

            <h1>Upload image</h1>

            <form>
                <div>
                    <label>select file</label>
                    <input type="file" name="file" onChange={handlePictureChange}></input>
                </div>
            </form>

        <button onClick={handleUpload} >Subir</button>

        <button onClick={handleGetImage} >descargar</button>
    <img src={'data:image/jpeg;base64,'+imageState} alt="i"></img>

        </div>
    )
}



