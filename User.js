const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    street:String,
    city: String

})
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: 
    {
        type: String,
        required : true,
        lowercase: true
    } , 
    createdAt: {
        type: Date,
        default : () =>  Date.now(),
        immutable : true
    },
    updatedAt :{
        type: Date,
        default : () =>  Date.now(),
    },
    bestFriend: mongoose.SchemaTypes.ObjectId, 
    hobbies: [String],
    address: addressSchema,
})

userSchema.methods.sayHi = function() { 
console.log(`Hi. My name is ${this.name}`)

}

userSchema.statics.findByName = function(name){ 
    return this.find({name: new RegExp(name,"i")})
}


userSchema.query.byName = function (name) { 
    return this.where({name: new RegExp(name,"i")})


     
}

userSchema.virtual("nameEmail").get(function() {
    return `{this.name} <${this.email}>`
})

userSchema.pre('save',function(next)  {
return this.updatedAt = Date.now()
next()

})

module.exports = mongoose.model('User',userSchema)