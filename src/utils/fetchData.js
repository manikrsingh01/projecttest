export const exerciseOptions = {
  method: 'GET',
  headers: {
  'X-RapidAPI-Key': "632cf6948bmsh71e03ffab7ac482p120204jsnffaa4d76a3ae",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
}
}

export const youtubeOptions = {
method: 'GET',
headers: {
'X-RapidAPI-Key': "632cf6948bmsh71e03ffab7ac482p120204jsnffaa4d76a3ae",
'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
}
};

export const fetchData = async (url, options) => {
const response  = await fetch(url, options);
const data = await response.json();


return data;
}