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
            res.redirect('/me/stored/courses')
        } catch (error) {
            console.log(error);

        }
    }

    async edit(req, res, next) {
        try {
            const course = await Course.findById(req.params.id).lean()
            res.render('courses/edit', { course })
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`

        try {
            await Course.updateOne({ _id: req.params.id }, formData)
            res.redirect('/')
        } catch (error) {
            console.log(error);

        }
    }

    async delete(req, res, next) {
        try {
            await Course.delete({ _id: req.params.id })
            res.redirect('back')
        } catch (error) {
            next(error)
        }
    }

    async deleteForce(req, res, next) {
        try {
            await Course.deleteOne({ _id: req.params.id })
            res.redirect('back')
        } catch (error) {
            next(error)
        }
    }

    async restore(req, res, next) {
        try {
            await Course.restore({ _id: req.params.id })
            res.redirect('back')
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new CourseController()