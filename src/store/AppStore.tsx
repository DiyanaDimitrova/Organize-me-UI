import { createStore, combineReducers, Reducer, Store, compose } from 'redux'
// import { BillState, billReducer } from '../bills/reducers/main'
import { LoginState, loginReducer } from '../main/loginMain'
// import { IIntlState, intlReducer } from '../common/reducers/I18nReducer'
// import { ServicesState, servicesReducer } from '../services/reducers/main'
// import { NavigationState, navigationReducer } from '../applicationHeader/reducers/navigationReducer'
// import { CustomerState, customerReducer } from '../customer/reducers/main'
// import { P360State, p360Reducer } from '../p360/reducers/main'
// import { DailyNoteLogState, DailyNoteLogReducer } from '../applicationHeader/reducers/mainDailyNoteLog'
// import { NotesState, notesReducer } from '../applicationHeader/reducers/mainNote'
// import { NotesHistoryState, noteshistoryReducer } from '../note/reducers/main'
// import { SearchAccountState, searchAccountReducer } from '../searchAccount/reducers/main'
// import { SelectAccountState, selectAccountReducer } from '../selectAccount/reducers/main'
// import { CountryDDLStates, countryDDLReducer } from '../account/reducers/countryDDLmain'
// import { StateDDLStates, stateDDLReducer } from '../account/reducers/stateDDLmain'
// import { OneTimeChargeState, oneTimeChargeReducer } from '../account/reducers/mainOneTimeCharge'
// import { NewChildAccountState, newChildAccountReducer } from '../newChildAccount/reducers/main'
// import { BillingOverviewState, billingOverviewReducer } from '../billing/reducers/main'
// import { AccountContactsState, AccountContactReducer } from '../account/components/contactDetails/reducers/main'
// import { AdditionalInfoState, AdditionalInfoReducer } from '../account/reducers/mainAI'
// import { DispMethodDDLState, dispMethodDDLReducer } from '../account/reducers/dispMethodDDLmain'

const persistStore = require('redux-persist').persistStore
const autoRehydrate = require('redux-persist').autoRehydrate
// import todos from '../reducers/todos'

export interface AppState {
    login: LoginState
}

const appReducer: Reducer<AppState> = combineReducers<AppState>({
    login: loginReducer
})

const rootReducer = (state, action) => {
    // if (action.type === 'USER_LOGOUT') {
    //     state = undefined
    // }
    return appReducer(state, action)
}

export let appStore: Store<AppState> = compose(autoRehydrate())(createStore)(rootReducer, window['devToolsExtension'] && window['devToolsExtension']())

persistStore(appStore)
