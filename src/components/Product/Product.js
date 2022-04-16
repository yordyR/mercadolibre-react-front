import React from "react";
import { Link } from "react-router-dom";
import IconShipping from "./../../assets/img/ic_shipping.png"
import numeral from "numeral";

const Product = ({item}) =>{
    return (
        <div className="row bl-products--row">
            <div className="col-lg-2">
                <Link to={`/product/items/${item.id}`} className="bl-products--link">
                    <div className="bl-products--picture">
                        <img src={item.picture} className="" />
                    </div>
                </Link>
            </div>
            <div className="col-lg-7 align-self-center">
                <div className="bl-products--content ">
                    <p className="bl-products--tittle f-size-24px">
                        {numeral(item.price.amount).format("$0,0")} { item.free_shipping ? <img src={IconShipping} alt="icono shipping"></img> : "" } 
                    </p>
                    <p className="bl-products--description f-size-18px">
                        {item.title}
                    </p>
                </div>
            </div>
            <div className="col-lg-3 align-self-center">
                <div className="bl-products--content">
                    <p className="bl-products--city f-size-12px">
                        Capital federal
                    </p>
                </div>
            </div>
            <div className="col-12">
                <hr />
            </div>
        </div>
    )
}

export default Product