// import React, { Component } from 'react';
// import simpleHoc from './simpleHoc';

// class Usual extends Component {
//     render() {
//         // console.log(this.props, 'props');
//         return (
//             <div onClick={this.props.handleClick}>
//                 Usual
//             </div>
//         )
//     }
// }
// export default simpleHoc(Usual);
import React, { Component } from 'react';
import hijackRenderHoc from './ii-hoc';


class Usual extends Component {

    constructor() {
        super();
        this.state = {
            usual: 'usual',
        }
    }

    componentDidMount() {
        console.log('didMount')
    }

    render() {
        return (
            <div>
                Usual
            </div>
        )
    }
}
export default hijackRenderHoc({ type: 'add-style', style: { color: 'red' } })(Usual)