<template>
    <div class="card">
        <div class="card__image-wrapper">
            <img class="card__image" :src="item.image">
            <div class="card__desc">{{ item.description }}</div>
        </div>
        <div class="card__title"><a href="#">{{ item.title }}</a></div>
    </div>
</template>

<script>
export default {
    name: 'AnimeListItem',
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped>
    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        box-shadow: 5px 5px 20px var(--content-box-shadow);
        padding: 10px;
        border-radius: 10px;
    }

    .card__image-wrapper{
        position: relative;
        width: fit-content;
        max-height: 100%;
    }

    .card__image {
        width: 100%;
        border-radius: 10px;
    }

    .card__title{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        padding: 10px 0 0 0;
    }

    .card__title a {
        text-decoration: none;
        color: var(--orange-main);
    }

    .card__desc {
        user-select: none;
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 10px 10px 10px;
        height: 100%;
        width: 100%;
        color: var(--text-content);
        background: var(--overlay-bg);
        opacity: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: justify;
        transition: 0.5s;
        border-radius: 10px;
    }

    .card:hover .card__desc {
        z-index: 10;
        opacity: 0.8;
    }
</style>