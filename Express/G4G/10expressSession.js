const express = require("express");

const session = require("express-session");

const app = express();

app.use(
	session({
		// Secret key for session
		secret: "I am a boy",

		// Forces the session to be saved
		// back to the session store
		resave: true,

        // Forces a session that is uninitialized
        // to be saved to the store
        saveUninitialized: false,
        cookie: {
            expres: 1000 * 60
        }
	}),
);

app.get("/session", (req, res, next) => {
    
} )