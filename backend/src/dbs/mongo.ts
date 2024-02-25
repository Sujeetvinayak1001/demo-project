import * as mongoose from 'mongoose'

const connectDb = () => {
    const dbUrl = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/users`
    mongoose.connect(dbUrl,
        {
            family: 4,
            socketTimeoutMS: 1000,
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as mongoose.ConnectOptions)
        .then(() => console.log("mongdb is connected to ", process.env.LIVE))
        .catch((error) => console.log('db connection error..', error))
}

connectDb()