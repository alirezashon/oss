import { Schema, model, models } from "mongoose";

const authSchema = new Schema({
    email:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    }
})

const Auth = models.Auth || model("Auth", authSchema);

export default Auth;


