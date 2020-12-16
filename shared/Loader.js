import React, { Component } from 'react';
import classnames from 'classnames';

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };

    }
  
    componentWillReceiveProps(nextProps) {
        this.setState({ isLoading: nextProps.isLoading });
    }



    render() {

        return (
            <div className={classnames('spinnerComponent flx justify-center align-center', this.props.styleName)}>
                <div className="d-flex justify-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loader