export const exerciseOptions = {
  method: 'GET',
  headers: {
  'X-RapidAPI-Key': "360a0e501dmsh5796a044c734d84p1152c2jsn40c4c2499c7a",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
}
}

export const youtubeOptions = {
method: 'GET',
headers: {
'X-RapidAPI-Key': "360a0e501dmsh5796a044c734d84p1152c2jsn40c4c2499c7a",
'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
}
};

export const BMIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': "360a0e501dmsh5796a044c734d84p1152c2jsn40c4c2499c7a",
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
const response  = await fetch(url, options);
const data = await response.json();


return data;
}