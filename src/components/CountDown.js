import React from "react";

export class CountDown extends React.Component{

    constructor(props){
        super(props)
        this.state = {count: 100, name: "Ian"}
    }

    componentDidMount(){
        this.update()
    }

    update(){
        setInterval(
            () => {
                let currentCount = this.state.count - 1
                this.setState({X: currentCount})
            }, 1000
        )

        // TODO: IDENTIFY WHY COUNT REDUCES BY 2 INSTEAD OF 1
        // TODO: FIND A WAY TO STOP COUNT AT 0

    }

    render(){
        return(
            <div>
                <center>
                    <h6>{this.state.name}</h6>
                    <h4 className="time-text">{this.state.count}</h4>
                </center>
            </div>
        )
    }

}