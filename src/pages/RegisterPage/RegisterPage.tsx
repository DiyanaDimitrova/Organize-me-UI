import * as React from 'react'
import { connect } from 'react-redux'
import Register from '../../components/Register/Register/Register'
// const classes = require('./BillingHub.scss')
import { AppState } from '../../store/AppStore'
import { Unsubscribe, Store } from 'redux'

export class RegisterPage extends React.Component<any, any> {

    render() {
      console.log('REGISTER')
        return (
            <div id='billingPage'>
                <div>
                    <Register />
                </div>
            </div>
        )
    }
}



export default RegisterPage
