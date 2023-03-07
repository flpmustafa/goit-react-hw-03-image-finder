export const API_URL = 'https://pixabay.com/api/',
  API_KEY = '33037708-78be3fad6ecee7435e5675b43',
  API_PARAMS = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });