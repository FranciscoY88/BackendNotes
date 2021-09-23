const {Schema,model, models} = require("mongoose");

const noteSchema = new Schema({
    title: {
        type:String
    },
    description: {
        type:String
    }
},{timestamps: true});

module.exports = model("note", noteSchema, "note");