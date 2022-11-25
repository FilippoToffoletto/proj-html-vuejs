<script>
import { store } from '../../data/store';
export default {
    name:'FindOut',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="container-full">
        <div class="ft-container text-center py-5">
            <div class="title">
                <h2 class="py-3">{{store.FindOut.heading.title}}</h2>
                <h4 class="text-uppercase">{{store.FindOut.heading.subtitle}}</h4>
            </div>
            <div class="mt-5 col"
            v-for="card in store.FindOut.cards" :key="card">
                <div class="col-12 col-xl-4 m-0 m-auto images position-relative">
                <div class="layover"></div>
                        <img :src="store.getImageUrl(card.img)" alt="{{store.FindOut.img}}" class="w-100">
                        <div class="position-relative">
                            <h3 class="border-bottom py-4">{{card.title}}</h3>
                            <p>{{card.content}}</p>
                            <p>{{card.subtitle}}</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../../styles/partials/variabiles' as *;

.title{
    h4{
        color: $blue-lagon;
        font-size: 1.2rem;
        font-stretch: semi-expanded;
    }
}
.images{
    object-fit: cover;
    min-height: 500px;
    img{
        object-fit: cover;
    }
}
</style>