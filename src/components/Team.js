import React, { Component } from 'react';

import TeamLine, {FORWARD_LINE, BACK_LINE, MIDFIELD} from './TeamLine';

class Team extends Component {
    render() {
        return (
            <div className="Team">
                <TeamLine line={BACK_LINE} />
                <TeamLine line={MIDFIELD} />
                <TeamLine line={FORWARD_LINE} />
            </div>
        )
    }
}

export default Team;