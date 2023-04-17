export const exerciseOptions = {
  method: 'GET',
  headers: {
  'X-RapidAPI-Key': "28258f9fd6msh35688cd54fc24d4p14cb5ejsnf6758af53dd1",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
}
}

export const youtubeOptions = {
method: 'GET',
headers: {
'X-RapidAPI-Key': "28258f9fd6msh35688cd54fc24d4p14cb5ejsnf6758af53dd1",
'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
}
};

export const fetchData = async (url, options) => {
const response  = await fetch(url, options);
const data = await response.json();


return data;
}