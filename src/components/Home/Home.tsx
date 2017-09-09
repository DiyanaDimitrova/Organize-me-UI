import * as React from 'react'
import { browserHistory } from 'react-router'
import { AppState } from '../../store/AppStore'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { FlatButton } from 'material-ui'
const classes = require('./Home.css')

interface StateProps {
}

interface DispatchProps {
}

export interface HomeProps extends StateProps, DispatchProps {

}
interface HomeState{
}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props) {
    super(props)
  }

  eventGridClick = () => {
    browserHistory.push('/event/all')
  }
  render() {
    return (
      <div id='homeDiv' className={classes.homeDiv}>
          <img id='homeImage' className={classes.homeImage} src={'../../media/images/background.jpg'}/>
          <div id='homeText' className={classes.homeText}>
            <div id='eventLeftDiv' className={classes.eventLeftDiv}>
              <h2 id='eventText' className={classes.eventText} >Want to see your favourite band? <br />Or you are interested in conferences?
              <br />Want to attend teathre performance?</h2>
              <h1 id='organizeMeText' className={classes.organizeMeText} >ORGANIZE ME</h1>
              <h2 id='eventText' className={classes.eventText} >give you the opportunity to see them all!</h2>
            </div>
            <div id='eventRightDiv' className={classes.eventRightDiv}>
              <FlatButton id='eventBtn' className={classes.eventBtn} style={{border: '1px solid #EDE7F6', height: 50, width: 250}} containerElement="label" label="Explore The Events" labelStyle={{color: '#EDE7F6', top: 5, fontSize: 20}} labelPosition="before" onClick={this.eventGridClick}/>
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
})

const mapDispatchToProps: (dispatch: Dispatch<any>) => DispatchProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
