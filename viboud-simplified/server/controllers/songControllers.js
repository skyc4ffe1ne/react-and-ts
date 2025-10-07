import { formatTime } from "../utils/utils.js";
/*
 * Handle the song, get information about it using the youtube API
 * @params req, the HTTP request from the client
 * @params res, the HTTP response
 * @return a json message and the status, or an error message
 */

export const getSong = async (req, res) => {
  try {
    const { urlID, urlSong } = req.body;
    const username = req.cookies.viboudUser;

    const reqFetch = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${urlID}&key=${process.env.YOUTUBE_TOKEN_API}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${process.env.YOUTUBE_TOKEN_API}`,
        },
      },
    );

    if (!reqFetch.ok) {
      throw new Error(`${reqFetch.status}, ${reqFetch.statusText}`);
    }

    const resFetch = await reqFetch.json();
    const { title, thumbnails } = resFetch.items[0].snippet;
    // The duration is formatted as an ISO 8601 string
    const { duration } = resFetch.items[0].contentDetails;

    function convertToString(duration) {
      let time = {};
      const rTime_2 = /((?<hour>\d+)H)?((?<minutes>\d+)M)?(?<seconds>\d+)S$/gm;
      const getTime = duration.matchAll(rTime_2);
      for (const match of getTime) {
        time.hour = match?.groups?.hour;
        time.minutes = match?.groups?.minutes;
        time.seconds = match?.groups?.seconds;
      }

      let hourFormatted = time.hour ? formatTime(time.hour) : time.hour;
      let minuteFormatted = time.minutes
        ? formatTime(time.minutes)
        : time.minutes;

      let secondFormatted = time.seconds
        ? formatTime(time.seconds, "seconds")
        : time.seconds;

      let formattedTime =
        (hourFormatted ?? "") +
        (minuteFormatted ?? "") +
        (secondFormatted ?? "");

      return formattedTime;
    }

    const newTime = convertToString(duration);
    res.json({
      message: "Everything is good",
      status: 201,
      data: {
        id: Date.now(),
        title,
        thumbnails: thumbnails.default,
        user: username,
        duration: newTime,
        like: 1,
        urlSong,
        createdAt: Date.now(),
      },
    });
  } catch (error) {
    console.error("error:", error.message);
    res.json({ message: error.message ?? "Something went wrong", status: 404 });
  }
};
