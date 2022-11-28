<script>
import { store } from '../../data/store';
export default {
    name:'AppArticles',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="container-full bg-card-pink">
        <div class="ft-container py-5">
            <div class="header d-flex justify-content-between align-items-center mt-4">
                <div class="title">
                    <h2>Recent Articles</h2>
                    <h4 class="text-uppercase text-dark-blue">Read the latest entries</h4>
                </div>
                <div class="btn-orange h-25">All Articles</div>
            </div>
            <div class="row my-5">
                <div class="col-12 col-xl-8 py-2">
                    <div class="ft-card">
                        <img :src="store.getImageUrl(store.articles.main_card.img)" alt="" :key="index">
                        <h4 class="">{{store.articles.main_card.title}}</h4>
                        <div class="py-5">
                            <span class="">{{store.articles.main_card.info.author}}</span>
                            <span>{{store.articles.main_card.info.date}}</span>
                            <span>Categories: {{store.articles.main_card.info.categories}}</span>
                        </div>
                        <p class="fs-5">{{store.articles.main_card.content}}</p>
                    </div>
                </div>

                <div class="col-12 col-xl-4 d-flex flex-column py-2">
                    <div class="ft-card" v-for="card in store.articles.cards" :key="card">
                        <img :src="store.getImageUrl(card.img)" alt="">
                        <h4 class="">{{card.title}}</h4>
                        <div>
                            <span>{{card.info.comments}} Comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../../styles/partials/variabiles' as *;


.ft-card{
    background-color: white;
    padding: 2rem;
    flex-grow: 1;
    img{
        object-fit: cover;
        width: 100%;
    }
    h4{
        margin-top: 2rem;
    }
}

</style>