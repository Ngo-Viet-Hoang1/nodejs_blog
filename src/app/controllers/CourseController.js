const Course = require("../models/Course")

class CourseController {
    async index(req, res, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug }).lean().exec()
            res.render('courses/show', { course })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new CourseController()