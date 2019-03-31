import level0 from './img/levels/0.png'
import level1 from './img/levels/1.png'
import level2 from './img/levels/2.png'
import level3 from './img/levels/3.png'
import level4 from './img/levels/4.png'

import window0 from './img/windows/0.png'
import window1 from './img/windows/1.png'
import window2 from './img/windows/2.png'
import window3 from './img/windows/3.png'
import window4 from './img/windows/4.png'
import window5 from './img/windows/5.png'
import window6 from './img/windows/6.png'
import window7 from './img/windows/7.png'
import window8 from './img/windows/8.png'
import window9 from './img/windows/9.png'
import window10 from './img/windows/10.png'
import window11 from './img/windows/11.png'
import window12 from './img/windows/12.png'

const getImageByID = (type, id) => {
  if (type === 'level') {
    switch (id) {
      case 0:
        return level0
      case 1:
        return level1
      case 2:
        return level2
      case 3:
        return level3
      case 4:
        return level4
      default:
        return level0
    }
  }
  if (type === 'window') {
    switch (id) {
      case 0:
        return window0
      case 1:
        return window1
      case 2:
        return window2
      case 3:
        return window3
      case 4:
        return window4
      case 5:
        return window5
      case 6:
        return window6
      case 7:
        return window7
      case 8:
        return window8
      case 9:
        return window9
      case 10:
        return window10
      case 11:
        return window11
      case 12:
        return window12
      default:
        return window0
    }
  }
}

export default getImageByID
