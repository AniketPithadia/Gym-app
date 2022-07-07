export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0deaf235b5msh742de250a1f7ab4p1a9156jsn1d63623fff96',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0deaf235b5msh742de250a1f7ab4p1a9156jsn1d63623fff96',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
