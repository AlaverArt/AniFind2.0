<template>
    <anime-view-header
        v-model:searchString="searchString"
        @search="loadAnimesBySearchString(searchString)"
    ></anime-view-header>
    <div class="main">
        <div class="main__wrapper">
            <anime-list
                :items="animeListItems"
            ></anime-list>
        </div>
    </div>
</template>

<script>
import AnimeList from '@/modules/animeView/components/AnimeList.vue';
import AnimeViewHeader from '@/modules/animeView/components/AnimeViewHeader.vue';
import api from '@/modules/animeView/api';

export default {
    name: 'AnimeView',
    components: {
        AnimeList,
        AnimeViewHeader,
    },
    data() {
        return {
            animeListItems: [],
            searchString: '',
        };
    },
    methods: {
        async loadAnimesBySearchString(search) {
            this.animeListItems = await api.getAnimes(search);
        }
    },
    mounted() {
        this.loadAnimesBySearchString('bleach');
    }
};
</script>

<style scoped>
    .main {
        display: flex;
        justify-content: center;
    }

    .main__wrapper {
        max-width: 900px;
        width: 80vw;
        padding: 30px 20px 20px 20px;
        background-color: #343a40;
        min-height: 90vh;
    }

    @media (max-width: 800px) {
        .main__wrapper{
            max-width: 100vw;
            width: 100%;
        }
    }
</style>
