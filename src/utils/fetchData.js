export const exerciseOptions = {
  method: 'GET',
  headers: {
  'X-RapidAPI-Key': "d80bdf802bmsh34a243f0a4aef1ap119b91jsna5b1c792b125",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
}
}

export const youtubeOptions = {
method: 'GET',
headers: {
'X-RapidAPI-Key': "d80bdf802bmsh34a243f0a4aef1ap119b91jsna5b1c792b125",
'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
}
};

export const BMIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': "d80bdf802bmsh34a243f0a4aef1ap119b91jsna5b1c792b125",
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
const response  = await fetch(url, options);
const data = await response.json();


return data;
}