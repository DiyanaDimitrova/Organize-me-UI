import * as React from 'react'
import { browserHistory } from 'react-router'
import { AppState } from '../../store/AppStore'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import { Paper } from 'material-ui'
const classes = require('./Help.css')

interface StateProps {
}

interface DispatchProps {
}

export interface HelpProps extends StateProps, DispatchProps {

}
interface HelpState{
}

class Help extends React.Component<HelpProps, HelpState> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id='helpWrapper' className={classes.helpWrapper}>
          <div>
            <Header />
          </div>
          <div id='helpDiv' className={classes.helpDiv}>
              <Paper id='helpPaper' className={classes.helpPaper} zDepth={2}>
                  <div id='titleText' className={classes.titleText}>
                    <h1>Customer questions</h1>
                  </div>
                  <p>1. Is it possible to have a free trial for my institution?
                  Institutional customers may request free trials online, or by contacting us.
                  <br />2. Can individuals register for a free trial or subscribe to Very Short Introductions?
                  We do not currently sell individual subscriptions to Very Short Introductions and free trials are not available to individuals.
                  <br />3. How do I subscribe to Very Short Introductions?
                  Very Short Introductions is available by annual subscription to libraries and institutions. Find out how to subscribe, or contact us.
                  <br />4. How will I renew my subscription when it expires?
                  You will be contacted by OUP representatives when your subscription is about to expire.</p>
                  <div id='titleText' className={classes.titleText}>
                    <h1>Librarian Support questions</h1>
                  </div>
                  <p>1. Do you have any materials I can use to promote my trial/subscription to users?
                  Yes. OUP offers a variety of free tools to help librarians promote their trial/subscription, including free training and promotional materials. Find out more on our Resources for Librarians page.
                  <br />2. Can I see usage statistics for my institution?
                  Yes, you can run COUNTER-compliant usage reports for your institution, see Subscriber Services for details.
                  <br />3. What COUNTER reports do you provide?
                  The Very Short Introductions reports conform to the Code of Practice for Books and Reference Works, Release 1. OUP deliver the following reports:
                  BR2: Number of Successful Section Requests by Month and Title
                  BR4: Turnaways by Month and Service
                  BR6: Total Searches and Sessions by Month and Service
                  <br />4. How often are COUNTER statistics made available?
                  COUNTER statistics are made available approximately 2 weeks after the end of the month. If you require usage statistics during a month please contact us.
                  <br />5. Can I add my library's logo to the website?
                  Yes, you can. To set up a logo please contact us.</p>
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
export default connect(mapStateToProps, mapDispatchToProps)(Help)
