const freeAPIBaseURL = 'https://kitsu.io/api/edge/anime?filter[text]=';
const freeAPIBaseGenreURL = 'https://kitsu.io/api/edge/anime/';
//const aniFindBackendURL = 'http://45.15.159.108:3000';

import AnimeModel from "@/modules/animeView/model/AnimeModel.js";

export default {
    //TODO: remove mock_data fetch
    getAnimes: async (name) => (await ((await fetch('./mock_data.json')).json())).data.map(item => new AnimeModel(item)),/*await (await fetch(freeAPIBaseURL + name)).json(),*/
    getAnimeItemGenres: async (id) => await (await fetch(freeAPIBaseGenreURL + id + '/genres')).json(),
    //getAnimeItemComments: async (id) => await (await (await fetch(aniFindBackendURL + '/comments' + `/${id}`)).json()),
}
