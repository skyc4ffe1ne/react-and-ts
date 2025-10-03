/*
 * Handle the cookie for the current session of the user (username).
 * @params req, the HTTP request from the client
 * @params res, the HTTP response
 * @return a json message and the status, or an error message
 */

export const createMe = async (req, res) => {
  try {
    const { username } = req.body;
    res.cookie("viboudUser", username, {
      httpOnly: true,
      sameSite: "Lax",
      // secure: true,
      maxAge: 3600 * 1000 * 10,
      path: "/",
    });
    res.json({
      message: "Everything is good",
      status: 201,
      data: { username },
    });
  } catch (error) {
    console.error(error.message);
    res.json({ message: error.message ?? "Something went wrong", status: 404 });
  }
};

/*
 * Handle the session user
 * @params req, the HTTP request from the client
 * @params res, the HTTP response
 * @return a json message and the status, or an error message.
 *
 */

export const me = async (req, res) => {
  try {
    if (!req.cookies.viboudUser) throw new Error("User arleady alogged");
    console.log("req:", req);
  } catch (error) {
    console.error(error.message);
    return res.json({ message: "Something went wrong", status: 404 });
  }
};
