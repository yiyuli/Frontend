import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
require('./Page.scss');

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
        axios.get('https://ejp-backend.herokuapp.com/program/' + this.props.match.params.id).then(function (response) {
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
        var contact = this.state.data.contact;
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
        <div className="container page-full">
            <div className="row info-container">
                <div className="col-md-1">
                    </div>
                <div className="col-md-6">
                    <h1>{name} </h1>
                    <p>{state}</p>
                    <a src={website}>{website}</a>
                    <p>Contact: {contact}</p>
                   <ul>
                    {list.map((item) =>
                    item
                    )}
                   </ul>
                    <p>{desc}</p>
                </div>
                <div className="col-md-4">
                    <img src="https://i.pinimg.com/originals/25/e9/65/25e9653188c2421fe384f6bbe2734fac.jpg" className="img"  />

                </div>
                <aside className="float-right col-md-1 aside">
                </aside>
            </div>
        </div>
    )
    }
}

export default Page
