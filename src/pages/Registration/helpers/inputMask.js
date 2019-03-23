import { createTextMask } from 'redux-form-input-masks'

const phoneMask = createTextMask({
  pattern: '+7 (9**) ***-**-**',
  maskDefinitions: {
    '*': {
      regExp: /[0-9]/
    }
  },
  guide: true,
  allowEmpty: true
})

export { phoneMask }
