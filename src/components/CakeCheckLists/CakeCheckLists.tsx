import React, { Fragment } from "react";
import "./CakeCheckLists.css"


interface IProps {
    onCakeChange: (event: any) => void
    layoutCount: number
}

interface IPropsButtonList {
    onCakeChange: (event: any) => void
}


interface IStateButtonList {
    activeButtonKey: any
}


interface IPropsButton {
    onLayoutChange: (event: any) => void,
    value: number,
    corentButton: number
}

class CustomButton extends React.Component<IPropsButton> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (<button onClick={this.props.onLayoutChange} value={this.props.value} name={'LayutsCout'}
            className={this.props.corentButton == this.props.value ? "active-number-button" : "number-button"}>{this.props.value}</button>)
    }
}


class ButtonList extends React.Component<IPropsButtonList, IStateButtonList> {
    constructor(props: any) {
        super(props)
        this.state = {
            activeButtonKey: 0
        }

        this.onLayoutChange = this.onLayoutChange.bind(this);
    }

    onLayoutChange = (event: any) => {
        if (event.target.value === this.state.activeButtonKey) {
            this.setState({ activeButtonKey: 0 });

            let eventClone = {
                target: {
                    name: event.target.name,
                    value: 0
                }
            }

            this.props.onCakeChange(eventClone);
        }
        else {
            this.setState({ activeButtonKey: event.target.value });

            this.props.onCakeChange(event);
        }
    }

    render(): React.ReactNode {

        let buttons: any[] = [];

        for (let index = 1; index <= 3; index++) {
            buttons.push(<CustomButton corentButton={this.state.activeButtonKey} key={index} onLayoutChange={this.onLayoutChange} value={index} />)
        }

        return (
            <div className="numbers-div">
                {buttons}
            </div>
        )
    }
}

export default class CakeCheckLists extends React.Component<IProps> {
    constructor(props: any) {
        super(props)
    }

    render(): React.ReactNode {

        const layoutsList = [<  CheckList key={1} groupeName={"layutBase1"} onChange={this.props.onCakeChange} optionsArray={["ОСНОВА1", "ОСНОВА2", "ОСНОВА3", "ОСНОВА4"]} headerText={"ОСНОВА ДЛЯ 1 УРОВНЯ:"} />,
        <  CheckList key={2} groupeName={"layutBase2"} onChange={this.props.onCakeChange} optionsArray={["ОСНОВА1", "ОСНОВА2", "ОСНОВА3", "ОСНОВА4"]} headerText={"ОСНОВА ДЛЯ 2 УРОВНЯ:"} />,
        <  CheckList key={3} groupeName={"layutBase3"} onChange={this.props.onCakeChange} optionsArray={["ОСНОВА1", "ОСНОВА2", "ОСНОВА3", "ОСНОВА4"]} headerText={"ОСНОВА ДЛЯ 3 УРОВНЯ:"} />];

        return (
            <div>

                <ButtonList onCakeChange={this.props.onCakeChange} />

                <div className="lists-div ">
                    <div className="base-lists-div  ">
                        {layoutsList.slice(0, this.props.layoutCount == 0 ? 3 : this.props.layoutCount)}
                    </div>

                    <div className="filling-lists-div  ">
                        <  CheckList groupeName={"filling1"} onChange={this.props.onCakeChange} optionsArray={["КРЕМ1", "КРЕМ2", "КРЕМ3", "КРЕМ4"]} headerText={"КРЕМ ДЛЯ НАЧИНКИ:"} />
                        <  CheckList groupeName={"filling2"} onChange={this.props.onCakeChange} optionsArray={["КРЕМ1", "КРЕМ2", "КРЕМ3", "КРЕМ4"]} headerText={"КРЕМ ДЛЯ ПОКРЫТИЯ:"} />

                    </div>

                    <div className="decor-lists-div  ">
                        <  CheckList groupeName={"decor1"} onChange={this.props.onCakeChange} optionsArray={["ГОЛУБИКА", "ЕЖЕВИКА", "МАЛИНА", "КЛУБНИКА", "БЕЗ ЯГОД"]} headerText={"ЯГОДЫ:"} />
                        <  CheckList groupeName={"decor2"} onChange={this.props.onCakeChange} optionsArray={["БЕЗЕ", 'ПЕЧЕНЬЕ "ОРЕО"', "МАРШМЕЛОУ", "ПЕКАН", "БЕЗ ДЕКОРА"]} headerText={"ДЕКОР:"} />
                        <  CheckList groupeName={"decor3"} onChange={this.props.onCakeChange} optionsArray={["С ДНЕМ РОЖДЕНИЯ!", 'HAPPY BIRTHDAY!', "ЖЕНИХ И НЕВЕСТА", "С 8 МАРТА!", "БЕЗ ТОПЕРА"]} headerText={"ТОПЕР:"} />
                    </div>
                </div>
            </div>


        )
    }
}

interface IpropsCheckList {
    headerText: string
    optionsArray: string[]
    groupeName: string
}

interface IState {
    corentOption: string
}

function CheckPoint(props: any) {
    return (
        <label className="container">{props.value}
            <input onChange={props.onChange} value={props.value} name={props.listName} type="radio" checked={props.corentOption === props.value} />
            <span className="checkmark"></span>
        </label>
    )
}

interface IpropsCheckList {
    onChange: (event: any) => void
}

class CheckList extends React.Component<IpropsCheckList, IState>
{
    constructor(props: IpropsCheckList) {
        super(props)

        this.state = { corentOption: "" };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event: any) {
        const value = event.target.value;
        this.setState({ corentOption: value });
        this.props.onChange(event);
    }

    render(): React.ReactNode {
        const options = this.props.optionsArray.map((option, index) =>
            <CheckPoint corentOption={this.state.corentOption} key={index} onChange={this.onChange} value={option} name={this.props.groupeName} listName={this.props.groupeName} />)
        return (
            <div className="list-div">
                <p className="checkbox-head-p">{this.props.headerText}</p>
                <Fragment>
                    {options}
                </Fragment>
            </div>
        )
    }
}