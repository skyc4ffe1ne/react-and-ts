import { db } from "../app.js"
import jwt from "jsonwebtoken"
import argon2 from "argon2"
/*
 * Handle the registration 
 * @params req, the HTTP request from the client
 * @params res, the HTTP response
 * @return a json message and the status, or an error message 
*/
export const signup = async (req, res) => {

  try {
    const { username, email, password } = req.body;
    const sqlEmail = db.prepare("SELECT * from user where email = ?").get(email)

    if (sqlEmail) {
      console.error("Email arleady token!");
      throw new Error("Email arleady token!")
    }

    const sqlUsername = db.prepare("SELECT * from user where username = ?").get(username);

    if (sqlUsername) {
      console.error("Username arleady token!");
      throw new Error("Username arleady token!")
    }

    const hash = await argon2.hash(password)


    const sqlNewUser = db.prepare(
      "INSERT INTO USER (username,email,password) VALUES (?,?,?)"
    ).run(username, email, hash)

    const userID = sqlNewUser.lastInsertRowid

    const jwToken = jwt.sign({ id: userID }, process.env.JWT_TOKEN)
    res.cookie("token", jwToken, {
      httpOnly: true,
      sameSite: "Lax",
      // secure: true,
      maxAge: 3600 * 1000,
      path: "/",
    })
    res.json({ message: "Everything is good", status: 201, data: { username } });
  } catch (error) {
    console.error(error.message)
    res.json({ message: error.message ?? "Something went wrong", status: 404 });
  }
}

/*
 * Handle the login
 * @params req, the HTTP request from the client
 * @params res, the HTTP response
 * @return a json message and the status, or an error message.
 *
*/

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const sqlEmail = db.prepare("SELECT * from user where email = ?").get(email)
    if (!sqlEmail) {
      throw new Error("Email or password are not good!")
    }
    const sqlUser = db.prepare("SELECT * from user where email = ?").all(email)
    let hashedPassword = sqlUser[0].password
    const checkPassword = await argon2.verify(hashedPassword, password)
    if (!checkPassword) throw new Error("Email or password are not good!");

    let userID = sqlUser[0].id
    const jwToken = jwt.sign({ id: userID }, process.env.JWT_TOKEN)
    res.cookie("token", jwToken, {
      httpOnly: true,
      sameSite: "Lax",
      // secure: true,
      maxAge: 3600 * 1000,
      path: "/",
    })
    return res.json({ message: "Everything is good", status: 200 });

  } catch (error) {
    console.error(error.message)
    return res.json({ message: "Something went wrong", status: 404 });
  }
}



/*
 * Handle the logout
 * @params req, the HTTP request from the client
 * @params res, the HTTP response
 * @return a json message and the status, or an error message.
 *
*/

export const logout = async (req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      sameSite: "Lax",
      maxAge: 3600 * 1000,
      path: "/",
    });
    return res.json({ message: "Logout successfully", status: 200 })
  } catch (error) {
    console.error(error.message)
    return res.json({ message: "Something went wrong", status: 404 });
  }
}


/*
 * Handle the session user
 * @params req, the HTTP request from the client
 * @params res, the HTTP response
 * @return a json message and the status, or an error message.
 *
*/

export const me = async (req, res) => {
  try {
    console.log(req.cookies.token)
    if (!req.cookies.token) throw new Error("User arleady alogged")
    let user = jwt.verify(req.cookies.token, process.env.JWT_TOKEN)
    const userID = user.id
    const userQuery = db.prepare("SELECT username FROM user WHERE id = ?").all(userID)
    return res.json({ message: "Everything is good", status: 200, data: userQuery });
  } catch (error) {
    console.error(error.message)
    return res.json({ message: "Something went wrong", status: 404 });
  }
}
