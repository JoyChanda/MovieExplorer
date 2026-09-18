const BASE_URL = 'https://api.tvmaze.com';

/**
 * Fetch initial list of all TV shows from TVMaze API
 * Endpoint: GET /shows
 */
export const fetchAllShows = async () => {
  try {
    const response = await fetch(`${BASE_URL}/shows`);
    if (!response.ok) {
      throw new Error(`Failed to fetch shows (Status: ${response.status})`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching shows from TVMaze API:', error);
    throw error;
  }
};
