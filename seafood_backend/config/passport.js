const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {User} = require("./database")
const {TokenKey} = require("./keys")
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = TokenKey;
module.exports = passport => {
    passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
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