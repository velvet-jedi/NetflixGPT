export const LOGO = "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
export const HOME_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"

export const AVATAR =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"


export const TMDB_API_KEY = process.env.TMDB_API_KEY
export const TMDB_ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN

export const TMDB_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?query=';

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: "Bearer " + process.env.TMDB_ACCESS_TOKEN
    }
};

export const IMAGE_CDN = "https://image.tmdb.org/t/p/w780/"


export const GEMINI_API_KEY = process.env.GEMINI_API_KEY