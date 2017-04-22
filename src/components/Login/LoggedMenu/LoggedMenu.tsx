import * as React from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { AppState } from '../../../store/AppStore'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
interface StateProps {
}

interface DispatchProps {
}

export interface LoggedMenuProps extends StateProps, DispatchProps {

}

interface LoggedMenuState{
  opened: Boolean
}

class LoggedMenu extends React.Component<LoggedMenuProps, LoggedMenuState> {
  constructor(props) {
    super(props)
    this.state = {
      opened: true
    }
  }

  render() {
    console.log(this.props)
    return (
        <IconMenu {...this.props}
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}>
          <MenuItem primaryText="Refresh" />
          <MenuItem primaryText="Send feedback" />
          <MenuItem primaryText="Settings" />
          <MenuItem primaryText="Help" />
          <MenuItem primaryText="Sign out" />
        </IconMenu>
      )
    }
}
const mapStateToProps: (state: AppState) => StateProps = (state) => ({

})

const mapDispatchToProps: (dispatch: Dispatch<any>) => DispatchProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedMenu)
