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
            selectedCredit: 'Credit',
            filterText: ''
        };
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        this.setState({loading: true});
        axios.get('https://ejp-backend.herokuapp.com').then(function (response) {
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

    handleSearchChange() {
        this.setState({
            filterText: this.refs.filterTextInput.value
        });
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
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive"
                                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ad_img">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Map_of_USA_showing_state_names.png/1024px-Map_of_USA_showing_state_names.png" className="img"/>
                            </div>
                            <div className="row search-row">
                                <div className="col-lg-1">
                                    <select className="form-control" onChange={this.handleStateChange.bind(this)}>
                                        <option value="State" selected>State</option>
                                        <option value="IL">Illinois</option>
                                        <option value="Wyoming">Wyoming</option>
                                        <option value="NY">New York</option>
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
                                        <input type="text" className="form-control" placeholder="Search" ref="filterTextInput" onChange={this.handleSearchChange.bind(this)} />
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
                                    filterText={this.state.filterText}
                                />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
