import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Items extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        var data = this.props.data.slice(0);
        var selectedCredit = this.props.selectedCredit;
        var selectedTwo = this.props.selectedTwo;
        var selectedFour = this.props.selectedFour;
        var selectedArt = this.props.selectedArt;
        var selectedState = this.props.selectedState;
        var tmp = []
        data.map((item) => {
            if ((item['for_credit'].toString() == selectedCredit || selectedCredit === 'Credit') &&
                (item['state'] === selectedState || selectedState === 'State') &&
                (item['four_year'].toString() == selectedFour || selectedFour === 'Four') &&
                (item['arts_program'].toString() == selectedArt || selectedArt === 'Art') &&
                (item['two_year'].toString() == selectedTwo || selectedTwo === 'Two')) {
                if (item['for_credit'].toString() === 'true') {
                    item['for_credit'] = 'Yes'
                } else {
                    item['for_credit'] = 'No'
                }
                if (item['four_year'].toString() === 'true') {
                    item['four_year'] = 'Yes'
                } else {
                    item['four_year'] = 'No'
                }
                if (item['arts_program'].toString() === 'true') {
                    item['arts_program'] = 'Yes'
                } else {
                    item['arts_program'] = 'No'
                }
                if (item['two_year'].toString() === 'true') {
                    item['two_year'] = 'Yes'
                } else {
                    item['two_year'] = 'No'
                }
                tmp.push(item);
            }
        });
        if (tmp.length === 0) {
            return <div>No results found</div>
        }else {
            return (

                <div className="list-group ad-item-groups">
                    {tmp.map((item) =>

                        <div
                            className="list-group-item list-group-item-action flex-column align-items-start ad_item mb-2">
                            <div className="d-flex w-100 justify-content-between">
                                <h6 className="mb-1 col-lg-6">{item['name']}</h6>
                                <small className="col-lg-6">Arts and others: {item['arts_program']}</small>
                            </div>
                            <div className="d-flex w-100 justify-content-between">
                                <small className="mb-1 col-lg-6">{item['state']}</small>
                                <small className="col-lg-6">Four year program: {item['four_year']}</small>

                            </div>
                            <div className="d-flex w-100 justify-content-between">
                                <small className="col-lg-6">Credit: {item['for_credit']}</small>
                                <small className="col-lg-6">Two year program: {item['two_year']}</small>
                            </div>
                            <br/>
                            <p className="mb-1 col-lg-12">{item['short_desc']}</p>
                        </div>
                    )}
                </div>
            )
        }
    };
}

export default Items