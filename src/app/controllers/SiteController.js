const Course = require('../models/Course')

class SiteController {

    async index(req, res) {

        try {
            const courses = await Course.find({})
            res.json(courses)
        } catch (error) {
            console.log(error);
            
            res.status(400).json({ error: error })
        }
        // res.render('home')
    }

    search(req, res) {
        res.render('search')
    }

}

module.exports = new SiteController()
