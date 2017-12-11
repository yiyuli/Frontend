import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Items from './Items.jsx'

var axios = require('axios');

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: '',
            loading: false,
            selectedState: 'State',
            selectedTwo: 'Two',
            selectedFour: 'Four',
            selectedArt: 'Art',
            selectedCredit: 'Credit'
        };
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        this.setState({loading: true});
        axios.get('http://localhost:5000/').then(function (response) {
            console.log(response);
            this.setState({
                loading: false,
                data: response.data
            });
        }.bind(this)).catch(function (error) {
            console.log(error);
        });
    }

    handleStateChange(changeEvent) {
        this.setState ({
            selectedState: changeEvent.target.value
        })
    }

    handleCreditChange(changeEvent) {
        this.setState ({
            selectedCredit: changeEvent.target.value
        })
    }

    handleTwoChange(changeEvent) {
        this.setState ({
            selectedTwo: changeEvent.target.value
        })
    }

    handleFourChange(changeEvent) {
        this.setState ({
            selectedFour: changeEvent.target.value
        })
    }

    handleArtChange(changeEvent) {
        this.setState ({
            selectedArt: changeEvent.target.value
        })
    }

    render() {
        if (this.state.loading) {
            return(
                <div >
                    <div>Loading</div>
                </div>)
        }
        return (
            <div >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ad_img">
                                <img src="https://i.imgur.com/hFIg1W1.jpg" className="img-responsive"/>
                            </div>
                            <div className="row search-row">
                                <div className="col-lg-1">
                                    <select className="form-control" onChange={this.handleStateChange.bind(this)}>
                                        <option value="State" selected>State</option>
                                        <option value="Illinois">Illinois</option>
                                        <option value="California">California</option>
                                        <option value="Texas">Texas</option>
                                    </select>
                                </div>
                                <div className="col-lg-1">
                                    <select className="form-control" onChange={this.handleCreditChange.bind(this)}>
                                        <option value="Credit" selected>Credit</option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>
                                <div className="col-lg-2">
                                    <select className="form-control" onChange={this.handleFourChange.bind(this)}>
                                        <option value="Four" selected>Four Year Program</option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>
                                <div className="col-lg-2">
                                    <select className="form-control" onChange={this.handleTwoChange.bind(this)}>
                                        <option value="Two" selected>Two Year Program</option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>
                                <div className="col-lg-2">
                                    <select className="form-control" onChange={this.handleArtChange.bind(this)}>
                                        <option value="Art" selected>Arts and others</option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>
                                <div className="col-lg-1">

                                </div>

                                <div className="col-lg-3">
                                    <div className="input-group search-bar">
                                        <input type="text" className="form-control" placeholder="Search"/>
                                    </div>
                                </div>
                            </div>

                                <Items
                                    data={this.state.data}
                                    selectedCredit={this.state.selectedCredit}
                                    selectedTwo={this.state.selectedTwo}
                                    selectedState={this.state.selectedState}
                                    selectedFour={this.state.selectedFour}
                                    selectedArt={this.state.selectedArt}
                                />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
