const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');

function initialize(passport, getUserByUser_login, getUserByUser_id){

    const authenticateUser =  async (user_login, user_password, done ) => {
        try {

            const user = await getUserByUser_login(user_login) // return a user by user_login
            if( !user )
                return done(null, false, {message: "No user found. at passport-config"});    
            //matching user.user_password with password passed at authenticateUser user_password
            if(await bcrypt.compare(user_password, user.user_password)){
                return done(null, user) //user to authenticate
            }else{
                return done(null, false, { message: 'Password incorrect. at passport-config'});
            }
        } catch (error) { 
            return done({message:'at passport-config catch'}, error);
        }
    
    }

    passport.use(new LocalStrategy({ usernameField: 'user_login', passwordField: 'user_password' }, authenticateUser));
    passport.serializeUser( async (user, done) => done(null, user._id));

    passport.deserializeUser(async (_id, done) => { 
        try{
            const user = await getUserByUser_id(_id);
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    });

}

module.exports = initialize;