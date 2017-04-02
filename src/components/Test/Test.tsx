import * as React from 'react'
import { FlatButton, TextField } from 'material-ui'

interface TestProps {
}

interface TestState {
  /* empty */
}

class Test extends React.Component<TestProps, TestProps> {

  constructor(props?: TestProps, context?: any) {
    super(props, context);
  }


  render() {
    return (
        <div>
         <FlatButton label="Default" />
         <FlatButton label="Primary" primary={true} />
         <FlatButton label="Secondary" secondary={true} />
         <FlatButton label="Disabled" disabled={true} />
         <TextField value="Didi" />
        </div>
    )
  }
}

export default Test
