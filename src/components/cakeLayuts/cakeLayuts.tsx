import React from "react";
import "./cakeLayuts.css"
import "../../App.css"

export default class CakeLayuts extends React.Component
{
    constructor(props:any)
    {
        super(props)
    }

    render(): React.ReactNode {
        return(
            <div className=" flex-column-div section-div">
            <h1>ТОРТ БУДЕТ ВЫГЛЯДЕТЬ ТАК</h1>

            <div className="cake-constructor">
                <div className="first-layer-div">

                </div>
                <div className="second-layer-div">

                </div>
                <div className="third-layer-div">

                </div>
            </div>
        </div>
        )
    }
} 