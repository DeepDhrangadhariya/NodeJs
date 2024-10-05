const passport = require("passport")
const localSt = require("passport-local").Strategy
const adminSchema = require("../model/adminSchema")

passport.use("local", new localSt(
    { usernameField: "email" },
    async (email, password, done) => {
        const adminData = await adminSchema.findOne({ email: email })
        if (adminData) {
            if (adminData.password == password) {
                done(null, adminData)
            } else {
                done(null, false)
            }
        } else {
            done(null, false)
        }
    }
))

passport.serializeUser((user, done) => {
    return done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const adminData = await adminSchema.findById(id)
    if (adminData) {
        return done(null, adminData)
    } else {
        return done(null, false)
    }
})

passport.checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    } else {
        res.redirect('/')
    }
}

passport.setAuthUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.locals.user = req.user
    }
    next()
}

module.exports = passport