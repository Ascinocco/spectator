# Config Files Needed
db.js is expected it should have a url field string which should have the full application connection string
    - url: "mongodb://example/db"
session.js requires secret, saveUninit, and resave as you see fit
    - secret: "yourSecret"
    - resave: false
    - saveUninit: false

passport requires two strategies, local-signup and local-login which are completely up to you

all of the these files should exist within the config directory. Look at server.js to see where they are references
if this doesn't make sense you can reverse engineer it from there