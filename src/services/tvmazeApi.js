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

/**
 * Search TV shows by title query from TVMaze API
 * Endpoint: GET /search/shows?q=:query
 * Returns formatted array of show objects
 */
export const searchShows = async (query) => {
  try {
    if (!query || query.trim() === '') {
      return await fetchAllShows();
    }
    const response = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query.trim())}`);
    if (!response.ok) {
      throw new Error(`Failed to search shows (Status: ${response.status})`);
    }
    const data = await response.json();
    // TVMaze search API returns array of objects with structure: { score: number, show: { ... } }
    // We map over the data to extract the inner `show` object for consistent rendering.
    return data.map((item) => item.show);
  } catch (error) {
    console.error('Error searching shows from TVMaze API:', error);
    throw error;
  }
};
