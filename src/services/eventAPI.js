import axios from "axios";

async function get_events(loading) {
  try {
    let response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/events?populate=images`
    );
    let data = await response.data;
    loading(false);
    return data.data;
  } catch (err) {
    console.error(err);
  }
}

async function get_one_event(id) {
  let response = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/events/${id}?populate=images`
  );
  let data = await response.data;

  return data.data;
}

export { get_events, get_one_event };
