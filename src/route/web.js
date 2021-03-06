import express from "express"
import homeController from '../controller/homeController'

let router = express.Router()

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage)
    router.get('/detail/user/:Id', homeController.getDetailPage)
    router.get('/about', (req, res) => {
        res.send(`I'm Tony`)
    })
    return app.use('/', router)
}
export default initWebRoute


