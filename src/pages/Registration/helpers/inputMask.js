import { createTextMask } from 'redux-form-input-masks'

const phoneMask = createTextMask({
  pattern: '+7 (9**) ***-**-**',
  maskDefinitions: {
    '*': {
      regExp: /[0-9]/
    }
  },
  guide: false,
  allowEmpty: false,
  stripMask: false
})

export { phoneMask }
