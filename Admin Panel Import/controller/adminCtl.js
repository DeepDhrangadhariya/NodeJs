const { model } = require("mongoose")

module.exports.index = (req, res) => {
    try {
        res.render("index")
    } catch (error) {
        console.log("Error On Rendering Index Page ", error)
    }
}

module.exports.charts = (req, res) => {
    try {
        res.render("charts")
    } catch (error) {
        console.log("Error On Rendering Charts Page",  error)
    }
}

module.exports.widgets = (req, res) => {
    try {
        res.render("widgets");
    } catch (error) {
        console.log("Error On Rendering Widgets Page", error)
    }
}

module.exports.tables = (req, res) => {
    try {
        res.render("tables");
    } catch (error) {
        console.log("Error On Rendering Tables Page", error)
    }
}

module.exports.grid = (req, res) => {
    try {
        res.render("grid")
    } catch (error) {
        console.log("Error On Rendering Grid Page", error)
    }
}

module.exports.formBasic = (req, res) => {
    try {
        res.render("formBasic")
    } catch (error) {
        console.log("Error On Rendering FormBasic Page", error)
    }
}

module.exports.formWizard = (req, res) => {
    try {
        res.render("formWizard")
    } catch (error) {
        console.log("Error On Rendering FormWizard Page", error)    
    }
}

module.exports.pagesButtons = (req, res) => {
    try {
        res.render("pagesButtons")
    } catch (error) {
        console.log("Error On Rendering PagesButtons Page", error)
    }
}

module.exports.iconMaterial = (req, res) => {
    try {
        res.render("iconMaterial")
    } catch (error) {
        console.log("Error On Rendering IconMaterial Page", error)
    }
}

module.exports.iconFontAwesome = (req, res) => {
    try {
        res.render("iconFontAwesome")
    } catch (error) {
        console.log("Error On Rendering IconFontAwesome Page", error)        
    }
}

module.exports.pagesElements = (req, res) => {
    try {
        res.render("pagesElements")
    } catch (error) {
        console.log("Error On Rendering PagesElements Page", error)
    }
}

module.exports.index2 = (req, res) => {
    try {
        res.render("index2")
    } catch (error) {
        console.log("Error On Rendering Index2 Page", error)
    }
}

module.exports.pagesGallery = (req, res) => {
    try {
        res.render("pagesGallery")
    } catch (error) {
        console.log("Error On Rendering PagesGallery Page", error)
    }
}

module.exports.pagesCalendar = (req, res) => {
    try {
        res.render("pagesCalendar")
    } catch (error) {
        console.log("Error On Rendering PagesCalendar Page", error)
    }
}

module.exports.pagesInvoice = (req, res) => {
    try {
        res.render("pagesInvoice")
    } catch (error) {
        console.log("Error On Rendering PagesInvoice Page", error)
    }
}

module.exports.pagesChat = (req, res) => {
    try {
        res.render("pagesChat")
    } catch (error) {
        console.log("Error On Rendering PagesChat Page", error)
    }
}

module.exports.authenticationLogin = (req, res) => {
    try {
        res.render("authenticationLogin")
    } catch (error) {
        console.log("Error On Rendering AuthenticationLogin Page", error)
    }
}

module.exports.authenticationRegister = (req, res) => {
    try {
        res.render("authenticationRegister")
    } catch (error) {
        console.log("Error On Rendering AuthenticationRegister Page", error)
    }
}

module.exports.error403 = (req, res) => {
    try {
        res.render("error403")
    } catch (error) {
        console.log("Error On Rendering Error403 Page", error)
    }
}

module.exports.error404 = (req, res) => {
    try {
        res.render("error404")
    } catch (error) {
        console.log("Error On Rendering Error404", error)
    }
}

module.exports.error405 = (req, res) => {
    try {
        res.render("error405")
    } catch (error) {
        console.log("Error On Rendering Error405", error)
    }
}

module.exports.error500 = (req, res) => {
    try {
        res.render("error500")
    } catch (error) {
        console.log("Error On Rendering Error500", error)
    }
}