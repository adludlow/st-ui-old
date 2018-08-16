import React, { Component } from 'react';

export const FORWARD_LINE = 'Forward Line';
export const BACK_LINE = 'Back Line';
export const MIDFIELD = 'Midfield';

class TeamLine extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{`${this.props.line}`}</h1>
            </div>
        )
    }
}

export default TeamLine;