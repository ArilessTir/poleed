import axios from "axios";

async function get_artists() {
  try {
    let response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/artistes?populate=images`
    );
    let data = await response.data;

    return data.data;
  } catch (err) {
    console.error(err);
  }
}

async function get_one_artist(id) {
  let response = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/artistes/${id}?populate=images`
  );
  let data = await response.data;

  return data.data;
}

export { get_artists, get_one_artist };
