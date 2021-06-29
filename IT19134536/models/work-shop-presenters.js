const mongo = require('mongoose')

const WorkShopProposalModel = mongo.Schema({
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

module.exports = mongo.model("proposals", WorkShopProposalModel);