import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:String,
    
})

const user = mongoose.model('shopData',userSchema)

export default user;