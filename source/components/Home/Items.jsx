import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Items extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        var data = this.props.data;
        var selectedCredit = this.props.selectedCredit;
        var selectedDegree = this.props.selectedDegree;
        var selectedState = this.props.selectedState;
        var tmp = []
        data.map((item) => {
            if ((item['Credit'] === selectedCredit || selectedCredit === 'Credit') &&
                (item['State'] === selectedState || selectedState === 'State') &&
                (item['Degree'] === selectedDegree || selectedDegree === 'Degree')) {
                tmp.push(item);
            }
        });
        return (
            <div className="list-group ad-item-groups">
                {tmp.map((item) =>

                    <div
                        className="list-group-item list-group-item-action flex-column align-items-start ad_item mb-2">
                        <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1 col-lg-6">{item['Name']}</h6>
                            <small className="col-lg-6">Arts and others: {item['Art']}</small>
                        </div>
                        <div className="d-flex w-100 justify-content-between">
                            <small className="mb-1 col-lg-6">{item['State']}</small>
                            <small className="col-lg-6">: {item['Four']}</small>

                        </div>
                        <div className="d-flex w-100 justify-content-between">
                            <small className="col-lg-6">Credit: {item['Credit']}</small>
                            <small className="col-lg-6">Two year program: {item['Two']}</small>
                        </div>
                        <br/>
                        <p className="mb-1 col-lg-12">{item['Description']}</p>
                    </div>
                )}
            </div>
        )
            ;
    };
}

export default Items