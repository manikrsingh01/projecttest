export const exerciseOptions = {
  method: 'GET',
  headers: {
  'X-RapidAPI-Key': "e84a7b6891msh33b0dbf42e1d2e3p1425e3jsndb3c13daee3d",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
}
}

export const youtubeOptions = {
method: 'GET',
headers: {
'X-RapidAPI-Key': "e84a7b6891msh33b0dbf42e1d2e3p1425e3jsndb3c13daee3d",
'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
}
};

export const fetchData = async (url, options) => {
const response  = await fetch(url, options);
const data = await response.json();


return data;
}