import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AppContext from "../../context/Appcontext";
import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Product from "../../components/Product/Product";
import Spinner from "../../components/Spinner/Spinner";

const SearchResult = (props) =>{
    // const [params] = useSearchParams()

    const [dataSearchResult, setDataSearchResult] = useState([])
    const { dataCategories} = useContext(AppContext)
    const {state,showSpinner} = useContext(AppContext)
   
    let paramss = new URLSearchParams(document.location.search);
    const keyword = paramss.get("search")
    useEffect(()=>{
        let abortController = new AbortController();

        if(keyword){
            getSearchResult()
        }
        return () =>{
            abortController.abort()
        }


    },[keyword])
    const getSearchResult = async() =>{
        try {
            const responseData = await axios.get(`http://localhost:3000/api/items?q=${keyword}`)
            setDataSearchResult(responseData.data)
            dataCategories(responseData.data[1].categories)
            showSpinner(false)
        } catch{
            console.log("prueba")
            showSpinner(false)
            setDataSearchResult([])
        }
      
    } 

    return (
        <div>  
            <Header />
            {
                state.spinner === true ? <Spinner /> 
                :
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <div className="row">
                                <div className="col-12 ps-0">
                                    {
                                        dataSearchResult.length > 0 ?
                                            <Breadcrumb categories={state.categories} />
                                        : ""
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 bl-products bg-white">
                                    {
                                        dataSearchResult.length > 0  ?
                                        dataSearchResult[2].items.map((item)=>(
                                            <div key={item.id}>

                                                <Product item={item}  />
                                            </div>
                                        ))
                                        : " No se encontraron resultados "
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
           

           

        </div>
    )
}
export default SearchResult