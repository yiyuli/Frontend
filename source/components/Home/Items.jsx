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
                tmp.append(row);
            }
        }
        return (

            tmp.map((item) => {
                return
            })


        );
    };
}

export default Items