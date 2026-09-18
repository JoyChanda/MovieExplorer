/**
 * Safely strips HTML tags from TVMaze summary string
 */
export const stripHtml = (htmlString) => {
  if (!htmlString) return 'No description available for this show.';
  return htmlString.replace(/<[^>]*>?/gm, '').trim();
};

/**
 * Formats premier date string into year or readable date
 */
export const formatReleaseYear = (dateString) => {
  if (!dateString) return 'N/A';
  return dateString.substring(0, 4);
};

/**
 * Provides a fallback image URL if poster image is null
 */
export const getPosterImage = (showImage) => {
  if (showImage?.original) return showImage.original;
  if (showImage?.medium) return showImage.medium;
  return 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80';
};
