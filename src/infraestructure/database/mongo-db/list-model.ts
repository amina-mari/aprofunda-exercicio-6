import {model, Schema} from 'mongoose'

const ListSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    to_dos: {
        type: [],
        require: false
    }
})

export const ListModel = model('lists', ListSchema)