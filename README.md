# Modal React CC

modal-react-cc is a React modal component library created to provide reusable modal component for your React projects.


## Installation

You can install the library via npm:

**npm install modal-react-cc**

## Usage/Examples

```javascript
import React, { useEffect, useState } from 'react'
import ModalComponent from './modal'

function ExampleComponent() {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <ModalComponent open={open}
      onClose={handleClose}
      closeText= 'F'
      fadeDuration= {120}
      fadeDelay = {100}
      opacityBackground = {0.5}>
        text
      </ModalComponent>
      <button onClick={() => setOpen(true)}>open</button>
    </>
  )
}

export default ExampleComponent
```

## Properties

| Prop  | Type | Description | default |
| --- | ---| --- | --- |
| open | Boolean  | Indicates whether the modal is open or closed | false |
| onClose | Function | Callback to close the modal component | () => {} |
| closeText | String | character displayed on the close button. | ✖ |
| fadeDuration | Number | modal fade duration in ms | 250 |
| fadeDelay | Number | modal fade delay in ms | 0 |
| opacityBackground | Number | changes the opacity of the background | 0.7 |