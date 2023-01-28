export default class AnimeModel {
    title;
    image;
    description;

    constructor(item){
        this.title = item?.attributes?.titles?.en_jp ?? item?.attributes?.titles?.en_us ?? item?.attributes?.titles?.en ?? null;
        this.image = item?.attributes?.posterImage?.small ?? null;
        this.description = item?.attributes?.description ?? null;
    }
}