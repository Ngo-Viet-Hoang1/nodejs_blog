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

    create(req, res, next) {
        res.render('courses/create')
    }

    async store(req, res, next) {
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        
        try {
            await Course.create(formData)
            res.redirect('/')
        } catch (error) {
            console.log(error);
            
        }
    }
}

module.exports = new CourseController()