const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {User} = require("./database")
const {TokenKey} = require("./keys")
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = TokenKey;
module.exports = passport => {
    passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
        
            // , function(err, user) {
            // if (err) {
            //     console.log("err")
            //     return done(err, false);
            // }
            // if (user) {
            //     console.log("user")
            //     return done(null, user);
            // } else {
            //     console.log("else")
            //     return done(null, false);
            //     // or you could create a new account
            // }
            User.findOne({where : {Email : jwt_payload.Email}})
                .then(user => {
                    if(user){
                        return done(null, user)
                    }else{
                        return done(null, false);
                    }
                })
                .catch(err => {
                    return done(err, false);
                })             
        }));
}