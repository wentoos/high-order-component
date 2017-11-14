import React, { Component } from 'react';

const propsProxyHoc = WrappedComponent => class extends Component {

    handleClick(e) {
        console.log('click',e);
    }

    render() {
        return (
        <WrappedComponent
            {...this.props}
            handleClick={this.handleClick}
        />);
    }
};
export default propsProxyHoc;