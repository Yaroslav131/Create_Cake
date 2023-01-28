import React from "react";
import Block from '../block/blockCom'
import CarouselBox from '../slider/Slider'
import CakeCheckLists from '../CakeCheckLists/CakeCheckLists'
import InputBox from '../InputBox/InputBox'
import CakeLayuts from "../cakeLayuts/cakeLayuts";
import SendReqestBlock from "../SendReqestBlock/SendReqesrBlock"
import '../../App.css'

interface IState {
    cake: {
        Design: string,
        LayutsCout: number,
        layutBase1: string,
        layutBase2: string,
        layutBase3: string,
        filling1: string,
        filling2: string,
        decor1: string,
        decor2: string,
        decor3: string,
        headLine: string,
        comment: string
    }

    client: {
        name: string,
        email: string,
        phone: string,
        date: string
    }

}

interface IProps {

}

export default class Main extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            cake: {
                Design: '',
                LayutsCout: 0,
                layutBase1: '',
                layutBase2: '',
                layutBase3: '',
                filling1: "",
                filling2: "",
                decor1: "",
                decor2: "",
                decor3: "",
                headLine: '',
                comment: '',
            },

            client: {
                name: '',
                email: '',
                phone: '',
                date: ''

            }


        };

        this.onCakeChange = this.onCakeChange.bind(this);

        this.onClientChange = this.onClientChange.bind(this);

        this.onOderSubmit = this.onOderSubmit.bind(this);
    }

    onClientChange(event: any) {
        const value = event.target.value;

        const name = event.target.name;

        const client = { ...this.state.client, [name]: value }
        this.setState(() => ({ client }))
    }

    onOderSubmit(event: any) {
        let alertString = `Поступил заказ:\n Дизайн: ${this.state.cake.Design}\n Количество уровней: ${this.state.cake.LayutsCout}`;

        for (let index = 1; index <= this.state.cake.LayutsCout; index++) {
            alertString += `\n Основа для уровня № ${index}: ${Object.entries(this.state.cake).find(x => x[0] == `layutBase${index}`)?.[1]}`;
        }

        alertString += `\n Наполнитель № 1: ${this.state.cake.filling1}`;

        alertString += `\n Наполнитель № 2: ${this.state.cake.filling2}`;

        alertString += `\n Декор № 1: ${this.state.cake.decor1}`;

        alertString += `\n Декор № 2: ${this.state.cake.decor2}`;

        alertString += `\n Декор № 3: ${this.state.cake.decor3}`;

        alertString += `\n Надпись: ${this.state.cake.headLine}`;

        alertString += `\n Коментарий к заказу: ${this.state.cake.comment}`;

        alertString += `\n Заказчик:`;

        alertString += `\n Имя: ${this.state.client.name}`;

        alertString += `\n Email: ${this.state.client.email}`;

        alertString += `\n Телефон: ${this.state.client.phone}`;

        alertString += `\n Дата поучения заказа: ${this.state.client.date}`;


        alert(alertString)
    }

    onCakeChange(event: any) {
        const value = event.target.value;

        const name = event.target.name;

        const cake = { ...this.state.cake, [name]: value }
        this.setState(() => ({ cake }))
    }

    onDesignChange(event: any) {

        const value = event.target.value;

        const name = event.target.name;

        const cake = { ...this.state.cake, [name]: value }
        this.setState(() => ({ cake }))

    }

    render(): React.ReactNode {
        return (
            <main>
                <h1>СОБЕРИ СВОЙ ТОРТ</h1>

                <Block text={'ВЫБЕРИТЕ ДИЗАЙН:'} body={<CarouselBox curentItemValue={this.state.cake.Design} onCakeChange={this.onCakeChange} />} />
                <Block text={'КОЛИЧЕСТВО УРОВНЕЙ:'} body={
                    <CakeCheckLists
                        onCakeChange={this.onCakeChange}
                        layoutCount={this.state.cake.LayutsCout}
                    />}
                />

                <InputBox name={"headLine"} onChange={this.onCakeChange} headLine={'НАДПИСЬ'} className={"inscription-input"} description={"Мы можем разместить на торте любую надпись, например: «С днем рождения!»:"} />
                <InputBox name={"comment"} onChange={this.onCakeChange} headLine={'КОМЕНТАРИЙ'} className={"comment-input"} description={"Дополнительные пожелания по украшению, начинке, декору и пр."} />
                <CakeLayuts />

                <SendReqestBlock
                    onSabmit={this.onOderSubmit}
                    onClientChange={this.onClientChange}
                />
            </main>
        )
    }
}