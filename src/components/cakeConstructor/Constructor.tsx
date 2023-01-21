import React from "react";
import "./Consrtuctor.css"


export default class Constructor extends React.Component {
    constructor(props: any) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <div>
                <div className="numbers-div">
                    <button className="number-button"><p className="number-p">1</p></button>
                    <button className="number-button"><p className="number-p">2</p></button>
                    <button className="number-button"><p className="number-p">3</p></button>
                </div>

                <div className="lists-div ">
                    <div className="base-lists-div  ">
                        <  CheckList listName={"base1"} optionsArray={["ОСНОВА", "ОСНОВА", "ОСНОВА", "ОСНОВА"]} headerText={"ОСНОВА ДЛЯ 1 УРОВНЯ:"} />
                        <  CheckList listName={"base2"} optionsArray={["ОСНОВА", "ОСНОВА", "ОСНОВА", "ОСНОВА"]} headerText={"ОСНОВА ДЛЯ 2 УРОВНЯ:"} />
                        <  CheckList listName={"base3"} optionsArray={["ОСНОВА", "ОСНОВА", "ОСНОВА", "ОСНОВА"]} headerText={"ОСНОВА ДЛЯ 3 УРОВНЯ:"} />
                    </div>

                    <div className="filling-lists-div  ">
                        <  CheckList listName={"filling1"} optionsArray={["КРЕМ", "КРЕМ", "КРЕМ", "КРЕМ"]} headerText={"КРЕМ ДЛЯ НАЧИНКИ:"} />
                        <  CheckList listName={"filling2"} optionsArray={["КРЕМ", "КРЕМ", "КРЕМ", "КРЕМ"]} headerText={"КРЕМ ДЛЯ ПОКРЫТИЯ:"} />

                    </div>

                    <div className="decor-lists-div  ">
                        <  CheckList listName={"decor1"} optionsArray={["ГОЛУБИКА", "ЕЖЕВИКА", "МАЛИНА", "КЛУБНИКА", "БЕЗ ЯГОД"]} headerText={"ЯГОДЫ:"} />
                        <  CheckList listName={"decor2"} optionsArray={["БЕЗЕ", 'ПЕЧЕНЬЕ "ОРЕО"', "МАРШМЕЛОУ", "ПЕКАН", "БЕЗ ДЕКОРА"]} headerText={"ДЕКОР:"} />
                        <  CheckList listName={"decor3"} optionsArray={["С ДНЕМ РОЖДЕНИЯ!", 'HAPPY BIRTHDAY!', "ЖЕНИХ И НЕВЕСТА", "С 8 МАРТА!", "БЕЗ ТОПЕРА"]} headerText={"ТОПЕР:"} />
                    </div>
                </div>
            </div>


        )
    }
}

interface IpropsCheckList {
    headerText: string
    optionsArray: string[]
    listName:string
}

function CheckPoint(props: any) {
    return (
        <label className="container">{props.name}
            <input name={props.listName} type="radio" checked={true} />
            <span className="checkmark"></span>
        </label>
    )
}

class CheckList extends React.Component<IpropsCheckList>
{
    constructor(props: IpropsCheckList) {
        super(props)
    }

    render(): React.ReactNode {

        const options = this.props.optionsArray.map(option => <CheckPoint name={option} listName={this.props.listName} />)
        return (
            <div className="list-div">
                <p className="checkbox-head-p">{this.props.headerText}</p>

                {options}
            </div>
        )
    }
}