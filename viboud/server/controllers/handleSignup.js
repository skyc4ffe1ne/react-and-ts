import { db } from "../server.js"
/*
 * Handle the registration 
 * @params req, the HTTP request from the client
 * @params res, the HTTP response
 * @return a json message and the status, or an error message 
*/
export const handleSignup = async (req, res) => {

  try {
    const { username, email, password } = req.body;
    console.log(req.body);
    const queryEmail = db.query(`SELECT * from "user" where email = ?`)
    if (queryEmail.get(email)) throw new Error("Something went wrong")

    const queryUsername = db.query(`SELECT * from "user" where username = ?`)
    if (queryUsername.get(username)) throw new Error("Something went wrong")

    const hash = await Bun.password.hash(password)

    const queryNewUser = db.query(
      `
        INSERT INTO "user" ("username","email","password") VALUES (?,?,?)
      `
    )
    queryNewUser.run(username, email, hash)

    res.json({ message: "Everything is good", status: 201 });

  } catch (error) {
    console.error(error.message)

    res.json({ message: "Something went wrong!", status: 404 });
  }
}
