import React, { useContext, useState } from "react";
import Logo from './../../assets/img/Logo_ML.png'
import IconoSearch from './../../assets/img/ic_Search.png'
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../../context/Appcontext";

const Header = () => {

    let navigate = useNavigate()
    const [keyword, setKeyword] = useState("")
    const {showSpinner} = useContext(AppContext)

    const searchProduct = event =>{
        event.preventDefault()
        showSpinner(true)
        navigate(`/search-result/items?search=${keyword}`,{
            state:{
                keyword: keyword
            }
        })
    }

    const handleInput = event =>{
        setKeyword(event.target.value)
    }

    return (
        <header>
            <div className="bl-header bg-yellow py-2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row">

                                <div className="col-3 col-sm-2 col-lg-1 pe-0">
                                    <Link to="/"> 
                                        <img src={Logo} alt="logo mercadolibre" />
                                    </Link>
                                </div>
                                <div className="col-9 col-md-9 col-lg-11 px-md-0">
                                    <form className="d-inline-block w-100" onSubmit={searchProduct}>
                                        <div className="input-group">
                                            <input type="text" className="form-control" 
                                                onChange={handleInput} 
                                                placeholder="Nunca dejes de buscar" 
                                                aria-label="Recipient's username" 
                                                aria-describedby="basic-addon2" 
                                                defaultValue={keyword}
                                                required/>
                                            <button type="submit"
                                                className="input-group-text" 
                                                id="basic-addon2" 
                                                ><img src={IconoSearch} className="" /></button>
                                        </div>
                                    </form>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header