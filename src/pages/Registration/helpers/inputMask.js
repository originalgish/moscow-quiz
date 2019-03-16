import { createTextMask } from 'redux-form-input-masks'

const phoneMask = createTextMask({
  pattern: '+7 (000) 000-00-00',
  maskDefinitions: {
    0: {
      regExp: /[0-9]/
    }
  },
  guide: false,
  allowEmpty: true
})

export { phoneMask }
