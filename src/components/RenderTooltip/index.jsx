import React from 'react'
import { Tooltip } from '@material-ui/core'

const RenderTooltip = ({ children, ...props }) => <Tooltip {...props}>{children}</Tooltip>

export default RenderTooltip
