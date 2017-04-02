import registerRoutes from '../../routes/RegisterRoute/RegisterRoute'
// import loginRoutes from '../login/routes'
// import servicesRoutes from '../services/routes'
// import themeDemoRoutes from '../theme/routes'
// import P360 from '../p360/routes'
// import noteRoutes from '../note/routes'
// import billingRoutes from '../billing/routes'
// import accountRoutes from '../account/routes'


let rootRouter: any[] =
    [].
        // concat(registerRoutes).
        // concat(loginRoutes).
        // concat(themeDemoRoutes).
        // concat(servicesRoutes).
        // concat(P360).
        // concat(noteRoutes).
        // concat(billingRoutes).
        concat(registerRoutes)
export default rootRouter
