import mongoose from 'mongoose'

const shopSchema = mongoose.Schema({
   shop:String,
   accessToken:String
    
})

const user = mongoose.model('shop',shopSchema)

export default user;