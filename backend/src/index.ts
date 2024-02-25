import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
//Import the main Passport and Express-Session library
import { initialize, session as passportSession, serializeUser, deserializeUser, strategies, authenticate } from 'passport';
import * as session from 'express-session';
//Import the secondary "Strategy" library
import { Strategy as LocalStrategy } from 'passport-local';

import './dbs/mongo' 
import Routes from './routes/index';
import { requestHandler } from './middlewares/requestHander';
import { responseHandler } from './middlewares/responseHandler';
import { errorHandler } from './middlewares/errorHandler';
import { authUser } from './middlewares/authenticateUser'
import { User } from "./models/user";


const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: "*"
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(session.default({
//     secret: "secret",
//     resave: false,
//     saveUninitialized: true
// }))
// //app.use(session({ secret: 'keyboard cat' }));
// app.use(initialize());
// app.use(passportSession());

// serializeUser(function (user: any, done) {
//     done(null, user.email);
// });

// deserializeUser(function (id, done) {
//     User.findById(id, function (err: any, user: any) {
//         done(err, user);
//     });
// });

//passport.use(new LocalStrategy(authUser))

app.use(requestHandler)

app.get("/", (req, res) => {
    res.send("Welcome to the Bike Rent Application!!");
})

Routes.forEach((route: any) => {
    app.use(route.path,  route.route)
})//authenticate('local', {    failureRedirect: "/login",}),

app.post("/auth/logout", (req, res) => {
    console.log(req.body);
    res.json({ error: false, message: "Logged out successfully.", data: { access_token: "adfjkdsfksdfjdsjfkdjfkdjfdkfdakfjdkfj" } })
})


app.use(responseHandler)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is running on ${process.env.NODE_ENV} http://localhost:${PORT}`));