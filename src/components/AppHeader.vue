<template>
<header class="header">
    <div class="header__wrapper">
        <h1 class="header__title"><router-link to="/">AniFind2.0</router-link></h1>
        <slot></slot>
    </div>
</header>
</template>

<script>
export default {
    name: 'AppHeader',
};
</script>

<style scoped>
    .header{
        position: sticky;
        position: -webkit-sticky;
        z-index: 1000;
        top:0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 10vh;
        background-color: var(--grey-main);
        padding: 0 30px;
        border-bottom: 4px var(--orange-main) solid;
    }

    .header__wrapper{
        max-width: 1200px;
        width: 95vw;
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    }

    .header__title{
        flex-grow: 1;
        font-size: 2rem;
        font-weight: inherit;
    }
    .header__title a{
        color: var(--orange-main);
        text-decoration: none;
    }
</style>