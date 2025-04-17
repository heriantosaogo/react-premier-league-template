import axios from "axios";

const API_URL = "https://soccer.highlightly.net/";
const API_KEY = "59193616-b38a-4081-bfa9-8a8a1b545e71";

export const getStandings = async () => {
  try {
    const response = await axios.get(`${API_URL}/standings`, {
      params: {
        leagueId: 33973,
        season: 2024,
      },
      headers: {
        "x-rapidapi-key": API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    return null;
  }
};

export const getMatch = async (date) => {
  try {
    const response = await axios.get(`${API_URL}/matches`, {
      params: {
        leagueId: 33973,
        date: date,
        timezone: "Asia/Jakarta",
        limit: 10,
        offset: 0,
      },
      headers: {
        "x-rapidapi-key": API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    return null;
  }
};
