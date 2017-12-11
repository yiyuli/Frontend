import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
var axios = require('axios');

class Page extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: '',
        };
        this.componentWillMount = this.componentWillMount.bind(this)
    }
    componentWillMount() {
        axios.get('http://localhost:5000/program/' + this.props.match.params.id).then(function (response) {
            console.log(response);
            this.setState({
                data: response.data
            });
        }.bind(this)).catch(function (error) {
            console.log(error);
        });
    }

    render() {

        var name = this.state.data.name;
        var state = this.state.data.state;
        var desc = this.state.data.long_desc;
        var website = this.state.data.website;
        if(this.state.data =''){
            return (<h1>No data</h1>);
        }
        let list = [];


        if(this.state.data.for_credit == 'true'){
            list.push(<li>Credit</li>);
        }
        if(this.state.data.two_year == true){
            list.push(<li>Two Year Program</li>);
        }
        if(this.state.data.four_year == true){
            list.push(<li>Four Year Program</li>);
        }
        if(this.state.data.arts_program === true){
            console.log("hej");
            list.push(<li>Arts Program</li>);
        }
        console.log(list);
        return(
        <div className="container full">
            <div className="row">
                <div className="col-md-10">
                    <h1>{name} , {state}</h1>
                    <a src={website}>{website}</a>
                   <ul>
                    {list.map((item) =>
                    item
                    )}
                   </ul>
                    <p>{desc}</p>
                </div>
                <aside className="float-right col-md-2">
                    <div  />
                </aside>
            </div>
        </div>
    )
    }
}

export default Page
