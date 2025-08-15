/*
 * Handle the registration 
 * @parmas req, the HTTP request from the client
 * @parmas res, the HTTP response
 * @return a json message and the status, or an error message 
*/
export const handleSignup = async (req, res) => {
  const { username, email, password } = req.body; // Should i use json here??? or it's automatic?

  console.log(req.body);

  const checkEmail = database.prepare(`SELECT * from "user" where email = ?`)
  console.log(checkEmail.run(email))


}


export const handleTest = async (req, res) => {
  res.json({ message: "Everything is good", status: 200 });
}
