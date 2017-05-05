import { createStore, combineReducers, Reducer, Store, compose } from 'redux'
import { LoginState, loginReducer } from '../main/loginMain'
import { CategoryState, categoryReducer} from '../main/categoryMain'
import { EventState, eventReducer} from '../main/eventMain'
import { CodeState, codeReducer} from '../main/codeMain'

const persistStore = require('redux-persist').persistStore
const autoRehydrate = require('redux-persist').autoRehydrate

export interface AppState {
    login: LoginState,
    category: CategoryState,
    event: EventState,
    code: CodeState
}

const appReducer: Reducer<AppState> = combineReducers<AppState>({
    login: loginReducer,
    category: categoryReducer,
    event: eventReducer,
    code: codeReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export let appStore: Store<AppState> = compose(autoRehydrate())(createStore)(rootReducer, window['devToolsExtension'] && window['devToolsExtension']())

persistStore(appStore)
