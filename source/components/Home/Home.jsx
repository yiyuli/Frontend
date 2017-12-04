import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

var axios = require('axios');

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: [],
            loading: false,
            selectedState: 'State',
            selectedDegree: 'Degree',
            selectedCredit: 'Credit'
        };
    }

    // componentWillMount() {
    //     this.setState({loading: true});
    //     axios.get('').then(function (response) {
    //         this.setState({
    //             loading: false,
    //             data: response
    //         });
    //     }.bind(this)).catch(function (error) {
    //         console.log(error);
    //     });
    // }

    handleStateChange(changeEvent) {
        this.setState = ({
            selectedState: changeEvent.target.value
        })
    }

    handleCreditChange(changeEvent) {
        this.setState ({
            selectedCredit: changeEvent.target.value
        })
    }

    handleDegreeChange(changeEvent) {
        this.setState ({
            selectedDegree: changeEvent.target.value
        })
    }

    render() {
        if (this.state.loading) {
            return
                <div >
                    <div className="ui text loader">Loading</div>
                </div>
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
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h1 className="my-4">Shop Name</h1>
                            <div className="list-group">
                                <a href="#" className="list-group-item">Category 1</a>
                                <a href="#" className="list-group-item">Category 2</a>
                                <a href="#" className="list-group-item">Category 3</a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="ad_img">
                                <img src="https://i.imgur.com/hFIg1W1.jpg" className="img-responsive"/>
                            </div>
                            <div className="row search-row">
                                <div className="col-lg-2">
                                    <select className="form-control" onChange={this.handleStateChange.bind(this)}>
                                        <option value="State" selected>State</option>
                                        <option value="Illinois">Illinois</option>
                                        <option value="California">California</option>
                                        <option value="Texas">Texas</option>
                                    </select>
                                </div>
                                <div className="col-lg-2">
                                    <select className="form-control" onChange={this.handleCreditChange.bind(this)}>
                                        <option value="Credit" selected>Credit</option>
                                        <option value="Non-Credit">Non-Credit</option>
                                    </select>
                                </div>
                                <div className="col-lg-2">
                                    <select className="form-control" onChange={this.handleDegreeChange.bind(this)}>
                                        <option value="Degree" selected>Degree</option>
                                        <option value="Bachalor">Bachalor</option>
                                        <option value="Master">Master</option>
                                        <option value="PHD">PHD</option>
                                    </select>
                                </div>
                                <div className="col-lg-1">
                                </div>
                                <div className="col-lg-5">
                                    <div className="input-group search-bar">
                                        <input type="text" className="form-control" placeholder="Search"/>
                                    </div>
                                </div>
                            </div>

                            <div className="list-group ad-item-groups">
                                <Items
                                    data={this.state.data}
                                    selectedCredit={this.state.selectedCredit}
                                    selectedDegree={this.state.selectedDegree}
                                    selectedState={this.state.selectedState}
                                />


                                <div
                                    className="list-group-item list-group-item-action flex-column align-items-start ad_item mb-2">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1 col-lg-6">UIC Education Justice Program</h6>
                                        <small className="col-lg-6">Credit: No</small>
                                    </div>
                                    <div className="d-flex w-100 justify-content-between">
                                        <small className="mb-1 col-lg-6">Illinois</small>
                                        <small className="col-lg-6">Degree: Bachelor</small>
                                    </div>
                                    <br/>
                                    <p className="mb-1 col-lg-12">Donec id elit non mi porta gravida at eget metus.
                                        Maecenas sed diam eget risus
                                        varius blandit.</p>
                                </div>
                                <div
                                    className="list-group-item list-group-item-action flex-column align-items-start ad_item mb-2">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-1 col-lg-6">UIS Education Justice Program</h6>
                                        <small className="col-lg-6">Credit: Yes</small>
                                    </div>
                                    <div className="d-flex w-100 justify-content-between">
                                        <small className="mb-1 col-lg-6">Illinois</small>
                                        <small className="col-lg-6">Degree: Associate</small>
                                    </div>
                                    <br/>
                                    <p className="mb-1 col-lg-12">Donec id elit non mi porta gravida at eget metus.
                                        Maecenas sed diam eget risus
                                        varius blandit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
