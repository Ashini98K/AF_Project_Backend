const mongo = require('mongoose')

const ResearchPaperModel = mongo.Schema({
    userId:{
        type:String
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    document:{
        type:String
    }
})

module.exports = mongo.model("researchpapers", ResearchPaperModel);