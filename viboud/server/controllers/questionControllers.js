import { allSong } from "../app.js"
/*
 * Handle the initialSongs
 * @params req, the HTTP request from the client
 * @params res, the HTTP response
 * @return a json with the data, message and the status or an error message 
*/
export const getInitialSongs = async (req, res) => {

  try {
    res.json({ message: "Everything is good", status: 201, data: allSong });
  } catch (error) {
    console.error(error.message)
    res.json({ message: error.message ?? "Something went wrong", status: 404 });
  }
}


