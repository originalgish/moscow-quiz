import React, { Component } from 'react'
import { connect } from 'react-redux'

import ConfirmPhone from './ConfirmPhone'
import RegisterUser from './RegisterUser'

import { RegistrationWrapper } from './styles'

class Registration extends Component {
  state = {}
  render() {
    const { registrationStage } = this.props
    const confirmationStage = registrationStage === 'getCode' || registrationStage === 'submitCode'
    const userRegistrationStage = registrationStage === 'registerUser'
    const getCodeStage = registrationStage === 'getCode'
    const submitCodeStage = registrationStage === 'submitCode'

    return (
      <RegistrationWrapper>
        {!confirmationStage && <ConfirmPhone getCodeStage={getCodeStage} submitCodeStage={submitCodeStage} />}
        {!userRegistrationStage && <RegisterUser />}
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
