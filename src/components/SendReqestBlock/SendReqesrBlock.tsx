import React from 'react';
import './SendReqestBlock.css'

function InputDiv(props: any) {
    return (
        <div className="grid-input-div section-div">
            <div className="input-p-div">
                <p>{props.headLine}</p>
            </div>

            <input onChange={props.onChange} placeholder={props.placeholder} className="user-input" type="text" name={props.name} />

        </div>
    )
}

interface Iprops {
    onClientChange: (event: any) => void

    onSabmit: (event: any) => void
}

export default class SendReqestBlock extends React.Component<Iprops> {
    constructor(props: Iprops) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <div className="grid-input-divs section-div">
                <div className="reqest-p-div">
                    <p className="request-p">
                        Пожалуйста, заполните форму и наш менеджер<br />
                        свяжется с вами для согласования стоимости
                    </p>
                </div>

                <div className="grid-input-divs section-div" >

                    <InputDiv onChange={this.props.onClientChange} placeholder={""} headLine={"ИМЯ:"} name={"name"} />

                    <InputDiv onChange={this.props.onClientChange} placeholder={""} headLine={"E-MAIL:"} name={"email"} />

                    <InputDiv onChange={this.props.onClientChange} placeholder={"+7(___)___-__-__"} headLine={"ТЕЛЕФОН:"} name={"phone"} />

                    <InputDiv onChange={this.props.onClientChange} placeholder={"__.__.____"} headLine={"ДАТА ПОЛУЧЕНИЯ:"} name={"date"} />

                </div>

                <button onClick={this.props.onSabmit} className="send-button">
                    ОТПРАВИТЬ
                </button>
            </div>
        )
    }
}
