import React, { useContext } from "react";
import AppContext from "../../context/Appcontext";

const Breadcrumb = () => {
    const {state} = useContext(AppContext)
    return (
        <div className="bl-breadcrunb">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {
                        state.categories.map(item=>(
                            <li key={item.id} className="breadcrumb-item ">{item.name} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10"><path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path></svg></li>
                        ))
                    }
                </ol>
            </nav>
        </div>
    )
} 

export default Breadcrumb