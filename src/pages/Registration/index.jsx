import React, { Component } from 'react'
import { connect } from 'react-redux'

import ConfirmPhone from './ConfirmPhone'
import ConfirmEmail from './ConfirmEmail'
import RegisterUser from './RegisterUser'

import { RegistrationWrapper } from './styles'

class Registration extends Component {
  state = {}
  render() {
    // TODO: refactor this
    const { registrationStage } = this.props
    const confirmPhoneStage = registrationStage === 'getPhoneCode' || registrationStage === 'submitPhoneCode'
    const getPhoneCodeStage = registrationStage === 'getPhoneCode'
    const submitPhoneCodeStage = registrationStage === 'submitPhoneCode'

    const confirmEmailStage = registrationStage === 'getEmailCode' || registrationStage === 'submitEmailCode'
    const getEmailCodeStage = registrationStage === 'getEmailCode'
    const submitEmailCodeStage = registrationStage === 'submitEmailCode'

    const userRegistrationStage = registrationStage === 'registerUser'

    return (
      <RegistrationWrapper>
        {confirmPhoneStage && <ConfirmPhone getCodeStage={getPhoneCodeStage} submitCodeStage={submitPhoneCodeStage} />}
        {confirmEmailStage && <ConfirmEmail getCodeStage={getEmailCodeStage} submitCodeStage={submitEmailCodeStage} />}
        {userRegistrationStage && <RegisterUser />}
      </RegistrationWrapper>
    )
  }
}

const mapStateToProps = state => ({
  registrationStage: state.user.registrationStage
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration)
