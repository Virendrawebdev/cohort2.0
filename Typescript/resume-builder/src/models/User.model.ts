import mongoose, { Document } from "mongoose";
import { IUser} from "@/types/user.types";
import bcrypt from "bcrypt";

interface UserDocument extends Omit<IUser, "_id">, Document {
  comparePass(candidatePassword: string): boolean;
}

let userSchema = new mongoose.Schema<UserDocument>({
    name:{
        type:String,
        trim:true,
        required:[true, "Name is required"]
    },
    email:{
        type:String,
        trim:true,
        required:[true, "Email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "password is required"],
        minlength:[6, "Minimum 6 characters required"]
    },
    mobile:{
        type:String,
        minlength:[10, "min 10 characters required"],
        maxlength:[10, "max 10 characters required"]
    }
    
},{
    timestamps:true,
})

userSchema.pre('save', function(): void{
    if(!this.isModified('password')) return
    this.password= bcrypt.hashSync(this.password, 10)
})


userSchema.methods.comparePass= function(condidatePassword: string): boolean{
    return bcrypt.compareSync(condidatePassword, this.password)
}

let UserModel =mongoose.models.User || mongoose.model('User', userSchema)
export default UserModel;