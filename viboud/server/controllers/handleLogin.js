import { db } from "../server.js"

/*
 * Handle the login
 * @params req, the HTTP request from the client
 * @params res, the HTTP response
 * @return a json message and the status, or an error message.
 *
*/

export const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const queryEmail = db.query(`SELECT * from "user" where email = ?`)

    const userAtt = queryEmail.get(email)
    console.log("User Att:", userAtt);
    if (!userAtt) throw new Error("Something went wrong!");

    console.log("password: ", password)
    console.log("Hashedpassword: ", userAtt.password)
    const checkPassword = await Bun.password.verify(password, userAtt.password);
    if (!checkPassword) throw new Error("Something went wrong!");

    return res.json({ message: "Everything is good", status: 200 });

  } catch (error) {
    console.error(error.message)
    return res.json({ message: "Something went wrong", status: 404 });
  }
}
