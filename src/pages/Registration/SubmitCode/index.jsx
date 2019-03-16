import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import RenderTextField from '../../../components/RenderTextField'
import RenderButton from '../../../components/RenderButton'

import { onlyFiveNumbers } from '../helpers/normalize'

import submit from './utils/submit'
import validate from './utils/validate'

import './index.scss'

class SubmitCode extends Component {
  state = {}

  render() {
    const { handleSubmit, valid, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="confirmationCode"
          component={RenderTextField}
          label="Код подтверждения"
          type="number"
          normalize={onlyFiveNumbers}
        />
        <RenderButton type="submit" disabled={!valid || submitting} text="Отправить код" color="primary" />

        <div>
          <RenderButton type="submit" disabled={true} text="Выслать код" color="secondary" />
          <span>повторно через {`2:00`}</span>
        </div>
      </form>
    )
  }
}

SubmitCode = reduxForm({
  form: 'SubmitCode',
  onSubmit: submit,
  validate
})(SubmitCode)

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitCode)
