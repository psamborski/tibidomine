import React from 'react'

import FullPageOverlay from '../../components/templates/FullPageOverlay'
import NoteLoader from '../../components/atoms/NoteLoader'

export const Loading = ({ ...restProps }) => (
  <FullPageOverlay>
    <NoteLoader />
  </FullPageOverlay>
)
