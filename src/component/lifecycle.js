import React from 'react';
import Comp1 from './comp1'
export default class Lifecycle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: ''
        }
    }

    handleHide = () => {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div>
                Hello from LifeCycle<br />
                <button disabled={this.state.show === true ? true : false} onClick={() => {
                    this.setState({
                        show: true
                    })
                }}>
                    SHOW
                </button>
                <button onClick={this.handleHide}>
                    HIDE
                </button>

                {this.state.show === true &&
                    < Comp1 />
                }

            </div>
        )
    }
}