import * as React from 'react'
import { browserHistory } from 'react-router'
import { AppState } from '../../store/AppStore'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import { Paper } from 'material-ui'
const classes = require('./About.css')

interface StateProps {
}

interface DispatchProps {
}

export interface AboutProps extends StateProps, DispatchProps {

}
interface AboutState{
}

class About extends React.Component<AboutProps, AboutState> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
          <div>
            <Header />
          </div>
          <div id='aboutDiv' className={classes.aboutDiv}>
              <Paper id='aboutPaper' className={classes.aboutPaper} zDepth={2}>
                  <div id='titleText' className={classes.titleText}>
                      <h1>About Us</h1>
                      <h2>OUR STORY</h2>
                  </div>
                  <p>Periscope was founded on the belief that live video is a powerful source of truth and connects us in an authentic way with the world around us. We are fascinated by the idea of discovering the world through someone else’s eyes. What’s it like to see through the eyes of a protester in Ukraine? Or watch the sunrise from a hot air balloon in Cappadocia?
                  While there are many ways to discover events, movements and places, we realized there is no better way to experience something than through live video. A picture may be worth a thousand words, but live video lets us explore the world together.
                  </p>
                </Paper>
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
export default connect(mapStateToProps, mapDispatchToProps)(About)
