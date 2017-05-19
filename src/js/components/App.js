import React from 'react';

//import the sample data 
import Sample from './Sample_data';

//var samples = require('./sample-data');
//import NavigationBar from './NavigationBar';

/*class App extends React.Component {
    render() {
        return (
            <div className="container">
                    <NavigationBar />
            </div>
        );
    }
}*/

class InboxItem extends React.Component {
    sortByDate(a, b) {
        return a.time>b.time ? -1 : a.time<b.time ? 1 : 0;
    }
    messageSummary(conversations){
        var lastMessage = conversations.sort(this.sortByDate)[0];
        return lastMessage.who + ' said: "' + lastMessage.text + '" @ ' + lastMessage.time.toDateString();
    }
    setSelected(){
        this.props.setSelectedConversation(this.props.index);
    }

    render() {
        return (
                <tr>
                    <td><a onClick={this.setSelected}>{this.messageSummary(this.props.details.conversations)}</a></td>
                    <td>{this.props.index}</td>
                    <td>{this.props.details.orders.sort(this.sortByDate)[0].status}</td>
                </tr>
        );
    }
}

class InboxPane extends React.Component {

    renderConvoSum(human){
    return <InboxItem key={human} index={human} details={this.props.humans[human]} setSelectedConversation={this.props.setSelectedConversation} />;
  }

    render() {
        return (
            <div id="inbox-pane">
                   <h1>Inbox</h1>
                   <table className="table table-hover">
                       <thead>
                           <tr>
                               <th>TIME</th>
                               <th>NAME</th>
                               <th>STATUS</th>
                            </tr>
                       </thead>
                       <tbody>
                            {Object.keys(this.props.humans).map(this.renderConvoSum)}
                       </tbody>
                    </table>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            humans: {},
            stores: {},
            selectedConversation: []

    }
    //this.loadSampleData = this.loadSampleData.bind(this);
  }


    loadSampleData(){
        console.log(Sample);
        // this.setState({Sample});
        // this.setState({selectedConversation: Sample.humans["Rami Sayar"].conversations});
    }

    setSelectedConversation(human_index){
        this.setState({
            selectedConversation: this.state.humans[human_index].conversations
        });
    }
    render() {
        return (
            <div>
                <div id="header"></div>
                <div className="container">
                    <button className="btn btn-primary btn-block" onClick={()=> this.loadSampleData}>Load Sample Data</button>
                        <div className="row well well-sm">
                            <div className="col-md-12">
                                <InboxPane humans={ ()=> this.state.humans } setSelectedConversation={ ()=> this.setSelectedConversation } />
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default App;

