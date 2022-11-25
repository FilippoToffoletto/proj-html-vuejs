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
                <h2 class="py-3">{{store.events.heading.title}}</h2>
                <h4 class="text-uppercase">{{store.events.heading.subtitle}}</h4>
            </div>
            <div class="row row-cols-3 mt-5">
                <div class="col-12 col-xl-4 m-0 m-auto"
                v-for="card in store.events.cards" :key="card">
                    <div class="">
                        <img :src="store.getImageUrl(card.img)" alt="" class="w-100">
                    </div>
                    <div class="text bg-white px-4 pb-4">
                        <h3 class="border-bottom py-4">{{card.title}}</h3>
                        <p>{{card.content}}</p>
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
        color: $saffron;
        letter-spacing: 4px;
    }
}
</style>