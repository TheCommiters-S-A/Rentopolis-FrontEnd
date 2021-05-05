import React,{useState} from 'react';

export const ImageUpload = (props) => {
    

    const handleChangeImagen =(e)=>{
        let metaData = e.target.files[0];
        var formData = new FormData();
        formData.append('file',metaData);
        formData.append('id',null);
        formData.append('title',metaData.name);
        props.handleChangeImagen(formData);
        setComponentState([...componentState,1]);
    }

    const [componentState,setComponentState] = useState([1]);

    
    return (
        <div>
            {
                componentState.map((item)=>
                     <p><input  onChange={handleChangeImagen} type="file"/></p>
                )
            }
        </div>
    )
}
