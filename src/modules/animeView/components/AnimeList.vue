<template>
    <div class="anime-list">
        <anime-list-item
            v-for="item in items"
            :key="item.id"
            :item="item"
        ></anime-list-item>
    </div>
</template>

<script>
import AnimeListItem from '@/modules/animeView/components/AnimeListItem.vue';
export default {
    name: 'AnimeList',
    components: {
        AnimeListItem,
    },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
    .anime-list{
        background: var(--grey-main);
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 40px;
    }

    @media (max-width: 800px){
        .anime-list{
            grid-template-columns: 1fr 1fr;
        }
    }
</style>