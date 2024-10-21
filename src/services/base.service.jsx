const BASE_API_URL = import.meta.env.VITE_APP_BASE_API_URL;

export const headers = {
  "Content-type": "application/json",
};

export default async function makeApiRequest(endPoint, options) {
  return await fetch(`${BASE_API_URL}/${endPoint}`, options);
}
