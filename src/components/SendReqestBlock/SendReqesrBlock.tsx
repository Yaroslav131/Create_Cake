import React from 'react';
import './SendReqestBlock.css'

function InputDiv(props: any) {
    return (
        <div className="grid-input-div section-div">
            <div className="input-p-div">
                   <p>{props.headLine}</p>
            </div>
            <div>
                <input placeholder={props.placeholder} className="user-input" type="text" name={props.name} />
            </div>
        </div>
    )
}

export default class SendReqestBlock extends React.Component {
    constructor(props: any) {
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

                    <InputDiv placeholder={""} headLine={"ИМЯ:"} name={"name-input"} />

                    <InputDiv placeholder={""} headLine={"E-MAIL:"} name={"email-input"} />

                    <InputDiv placeholder={"+7(___)___-__-__"} headLine={"ТЕЛЕФОН:"} name={"phone-input"} />

                    <InputDiv placeholder={"__.__.____"} headLine={"ДАТА ПОЛУЧЕНИЯ:"} name={"date-input"} />

                </div>

                <button className="send-button">
                    ОТПРАВИТЬ
                </button>
            </div>
        )
    }
}
