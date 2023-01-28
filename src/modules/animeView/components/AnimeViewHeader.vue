<template>
    <app-header>
        <div class="find">
            <input
                class="find__input"
                :value="searchString"
                @input="emitUpdateSearchString"
            >
            <button
                class="find__button"
                @click="emitSearch"
            >
                Искать
            </button>
        </div>
    </app-header>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

const eventNameSearchString = 'update:searchString';
const eventNameSearch = 'search';

export default {
    name: 'AnimeViewHeader',
    props: {
        searchString: {
            type: String,
            default: '',
        },
    },
    components: {
        AppHeader,
    },
    emits: [eventNameSearchString, eventNameSearch],
    methods: {
        emitUpdateSearchString(event) {
            this.$emit(eventNameSearchString, event.target.value);
        },
        emitSearch() {
            this.$emit(eventNameSearch);
        }
    },
};
</script>

<style scoped>
    .find{
        max-width: 60%;
        min-width: 30%;
        justify-content: end;
        display: flex;
        flex-grow: 1;
    }
    .find__input{
        margin: 0 15px 0 0;
        max-width: 70%;
        padding: 0 10px;
        background-color: var(--grey-2);
        color: var(--text-content);
        border-radius: 5px;
    }
    .find__button{
        background-color: var(--orange-main);
        color: var(--text-head);
        padding: 5px;
        border-radius: 5px;
    }
</style>