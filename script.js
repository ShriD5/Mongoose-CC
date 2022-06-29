const mongoose = require('mongoose')
const User = require("./User")




mongoose.connect('mongodb+srv://Shrithan:WFHRPUfdIRwIpp6N@cluster0.jfqhi.mongodb.net/Woh?retryWrites=true&w=majority')

run()
async function run() {
try {
   const user = await User.findOne({name: "kyle", email: "test@test.com"})
    console.log(user)
    await user.save()

} catch(e){
console.log(e.message)
}


}


