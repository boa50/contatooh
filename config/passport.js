var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function(){

  var Usuario = mongoose.model('Usuario');

  passport.use(new GitHubStrategy({
    clientID: '1cd9ee9a1071c11fbbde',
    clientSecret: '226f28de6f9a9d1e1495707e460c2dde2ca4ac59',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  }, function(accessToken, refreshToken, profile, done){

    Usuario.findOrCreate(
      {"login": profile.username},
      {"nome": profile.username},
      function(erro, usuario){
        if(erro){
          console.log(erro);
          return done(erro);
        }
        return done(null, usuario);
      }
    );

  }));

  passport.serializeUser(function(usuario, done){
    done(null, usuario._id);
  });

  passport.deserializeUser(function(id, done){
    Usuario.findById(id).exec().then(
      function(usuario){
          done(null, usuario);
      }
    );
  });

};
