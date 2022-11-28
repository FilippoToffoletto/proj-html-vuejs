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
            <div class="row row-cols-1 row-cols-lg-3 mt-5 gx-5">
                <div class="col"
                    v-for="card in store.FindOut.cards" :key="card">
                    <div class="ft-card"> 
                        <div class="layover"></div>  
                        <img :src="store.getImageUrl(card.img)" alt="{{store.FindOut.img}}" class="w-100">
                        <div class="m-0 m-auto text">
                            <h3 class="py-4">{{card.title}}</h3>
                            <hr class="m-auto">
                            <p>{{card.content}}</p>
                            <p>{{card.subtitle}}</p>
                        </div>
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
    img{
        object-fit: cover;
    }
}
.ft-card{
    position: relative;
    display: flex;
    justify-content: center;
    min-height: 500px;
    border-radius: 0 0 5rem 0;
    img{
        object-fit: cover;
        border-radius: 0 0 5rem 0;
    }
    .text{
        position: absolute;
        bottom: 10%;
        color: white;
        hr{
            opacity: 1;
            width: 60px;
        }
        p{
            color: $saffron;
        }
    }
    &:hover{
        box-shadow: 1px 1px 17px 4px rgba(0,0,0,0.58);
    }
}
</style>