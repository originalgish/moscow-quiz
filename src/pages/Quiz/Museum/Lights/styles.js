import styled from 'styled-components'

import getImageByID from './getImageByID'

export const Wrapper = styled.div``
const LightTemplate = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`
export const LevelLight = styled(LightTemplate)`
  background-image: url(${props => getImageByID('level', props.imageID)});
`
export const WindowLight = styled(LightTemplate)`
  background-image: url(${props => getImageByID('window', props.imageID)});
`
