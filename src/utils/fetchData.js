export const exerciseOptions = {
  method: 'GET',
  headers: {
  'X-RapidAPI-Key': "9083ced2dcmsh7db1e2ea9611c6cp1dd5adjsn277e729cdc31",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
}
}

export const youtubeOptions = {
method: 'GET',
headers: {
'X-RapidAPI-Key': "9083ced2dcmsh7db1e2ea9611c6cp1dd5adjsn277e729cdc31",
'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
}
};

export const fetchData = async (url, options) => {
const response  = await fetch(url, options);
const data = await response.json();


return data;
}