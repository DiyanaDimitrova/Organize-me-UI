import RegisterPage from '../../pages/RegisterPage/RegisterPage'
const routes = [
    { path: '/register', getComponent: getRegisterPage}
]

function getRegisterPage(nextState, cb) {
    require.ensure([], (require) => {
        cb(null, require('../../pages/RegisterPage/RegisterPage'))
    }, 'register')
}

export default routes
