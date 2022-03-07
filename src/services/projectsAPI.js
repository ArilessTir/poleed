import axios from "axios";

async function get_projects(loading) {
  try {
    let response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/projects?populate=image`
    );
    let data = await response.data;
    loading(false);
    return data.data;
  } catch (err) {
    console.error(err);
  }
}

export { get_projects };
