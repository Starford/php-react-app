 import React from 'react';
import ReactDOM from 'react-dom';
function Tabs(props) {
    return (
            <li role="presentation" onClick={() => props.onClick()}>
                <a href="#">{props.value}</a>
            </li>
    );
}
function Payform(props) {
    return (
            <div className="show">{props.text}
            </div>
    );
}
class Payments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            show:true,
            tabs:["MPESA","AIRTEL","VISA"],
            text:null

        }
    }
    showForm(i){
        const textArray = ['Lipa na MPESA', 'Pay with Airtel Money', 'Credit or Debit card Payments']
        this.setState({
                    text: textArray[i]
                });
    }
    renderTab(i)
    {
        const somearray = this.state.tabs;
        return <Tabs value={somearray[i]}
                onClick={() => this.showForm(i)}
        />;
    }
    render(){
        return (  
            <div className="panel panel-default">
                <div className="panel-heading">Hello This is My React APP</div>
                <div className="panel-body">
                <ul className="nav nav-tabs" style={{borderBottom : 'none'}}>
                    {this.renderTab(0)}
                    {this.renderTab(1)}
                    {this.renderTab(2)}
                </ul>
                <div className="table-responsive">
                <Payform text={this.state.text} />
                </div>
                </div>
                
            </div>
        );
    }    
}
export default Payments;
// ReactDOM.render(
//     <Payments />,
//     document.getElementById('panel')
// );