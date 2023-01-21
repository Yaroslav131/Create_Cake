import React from "react";
import "./InputBox.css"


interface Iprops {
    description: string
    className: string
    headLine: string
}

export default class Constructor extends React.Component<Iprops> {
    constructor(props: Iprops) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <div className="inscription-div section-div">
                <p>{this.props.headLine}</p>

                <p className="description-p">{this.props.description}</p>

                <textarea className={this.props.className} name="inscription-input" cols={40} rows={5}></textarea>
            </div>
        )
    }
}
