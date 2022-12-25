// Set the following constants with the API key and API secret
// that you receive when you sign up to use the OpenTok API:
var opentok = new OpenTok("47632071", "0b962007058492c7a13d096cad18621c461dad14");

//Generate a basic session. Or you could use an existing session ID.
var sessionId;
var token
opentok.createSession({}, function(error, session) {
  if (error) {
    console.log("Error creating session:", error)
  } else {
    sessionId = session.sessionId;
    console.log("Session ID: " + sessionId);
    //  Use the role value appropriate for the user:
    var tokenOptions = {};
    tokenOptions.role = "publisher";
    tokenOptions.data = "username=bob";

    // Generate a token.
    token = opentok.generateToken(sessionId, tokenOptions);
    console.log(token);
  }
});

}
