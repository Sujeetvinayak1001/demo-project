import * as mongoose from "mongoose";
import passportLocalMongoose  from 'passport-local-mongoose'

export const userSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,        
    },
    name: {
        type: String,
        required: [true, "Username required"],
        min: 6,
        max: 255,
        validate: {
            validator: (v:string) => {
                return /[a-zA-Z ]/gi.test(v)
            },
            message: "Please enter a valid name"
        }
    },
    email: {
        type: String,
        required: [true, "Email required"],
        min: 6,
        max: 255,
        validate: {
            validator: function(v:string) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"            
        }
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    date: {
        type: Number,
        default: Date.now().valueOf()
    }
}, {versionKey: false, timestamps:true});


//userSchema.plugin(passportLocalMongoose);

export const User = mongoose.model('User', userSchema);

//User.register(new User({ name: "Sujeet Soni", email: "sujeet.soni@gmail.com", password: "Test@1234", active: false }), 'sujeet');

