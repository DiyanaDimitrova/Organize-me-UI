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
                    <h1>Frequent questions and answers</h1>
                  </div>
                  <p>1. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues.
                  <br />2. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.
                  <br />3. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  <br />4. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Epsum factorial non deposit quid pro quo hic escorol.
                  <br />5. Souvlaki ignitus carborundum e pluribus unum.
                  <br />6. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues.
                  <br />7. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.
                  <br />8. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  <br />9. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Epsum factorial non deposit quid pro quo hic escorol.
                  <br />10. Souvlaki ignitus carborundum e pluribus unum.
                  <br />11. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre.
                  <br />12. Quote meon an estimate et non interruptus stadium.
                  </p>
                  <div id='titleText' className={classes.titleText}>
                    <h1></h1>
                  </div>
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
