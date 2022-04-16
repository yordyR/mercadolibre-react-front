import React, { useEffect, useState } from "react";
import axios from "axios";
import numeral from "numeral";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const ProductDetail = () =>{
    let {id} = useParams()

    const [dataProduct, setDataProduct] = useState([])
    useEffect(()=>{
        getProductId()
    })

    const getProductId = async() =>{
        const responseData = await  axios.get(`http://localhost:3000/api/items/${id}`)
            .catch(function (error) {
                console.log(error.toJSON());
            });
        setDataProduct(responseData.data[1].item)
    }

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row justify-content-center">
                    {
                        dataProduct.length > 0 ?
                        <div className="col-10">
                            <div className="row">
                                <div className="col-12">
                                    <Breadcrumb />
                                </div>
                            </div>
                            <div className="row bg-white">
                                <div className="col-md-8 ps-0">
                                    <img src={dataProduct[0].picture} alt="image" className="bl-detailProduct--image" />
                                </div>
                                <div className="col-md-4 pe-0">
                                    <div className="bl-detailProduct--title">
                                        <p className="f-size-14px">
                                            {dataProduct[0].condition == "new" ? "Nuevo" : ""} - {dataProduct[0].sold_quantity} vendidos
                                        </p>
                                        
                                        <h1 className="f-size-24px pe-2">
                                            {dataProduct[0].title}
                                        </h1>
                                    </div>
                                    <p className="f-size-46px ">
                                        {numeral(dataProduct[0].price.amount).format("$0,0")}

                                    </p>
                                    <div className=" bl-detailProduct--buy">
                                        <div className="btn btn-primary d-block">
                                            Comprar
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                <div className="col-12">
                                    <div className=" bl-detailProduct--description">
                                        <p className="f-size-28px mb-0">
                                            Descripciòn del producto
                                        </p>
                                        <p className="f-size-16px bl-detailProduct--description-texto">
                                            {dataProduct[0].description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : ""
                    }

                </div>
            </div>
        </div>
    )
}
export default ProductDetail