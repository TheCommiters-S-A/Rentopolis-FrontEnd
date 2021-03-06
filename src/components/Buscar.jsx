import { useState } from "react"

export const Buscar = (props) => {

    const [nameState,setName] = useState("");

    const handleChangeName =(e)=>{
        setName(e.target.value);
    }

    const handleClickBuscar =()=>{
        props.filter(nameState);
    }
    
    return (
        <div className="col-lg-6 col-sm-12">
            <form action="#" className="search">
                <div className="input-group w-100 ">
                    <input type="text" className="form-control" placeholder="Buscar" onChange={handleChangeName}/>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit" onClick={handleClickBuscar}>
                            <i className="fa fa-search"></i>
                        </button>  
                    </div>                
                </div>
            </form>
        </div>
    )
}
