import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal'

function WithErrorHandler(WrappedComponent, axios) {

    return class extends Component {

        constructor(props) {
            super(props)
            this.state = {
                error: null,

            }
            
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, e => {
                this.setState({error: e})
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <React.Fragment>
                    <Modal
                        show={this.state.error}
                        hide={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            )
        }
    }

}

export default WithErrorHandler;