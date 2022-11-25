<script>
import {store} from '../../data/store.js';
export default {
    name:'AudioBook',
    data(){
        return{
            store,
            logosSmall:[
                {
                    image:'ebay-logotan-2x-200x66.png'
                },
                {
                    image:'audible-logotan-2x-200x66.png'
                },
                {
                    image:'bb-logotan-2x-200x66.png'
                },
                {
                    image:'kindlefire-logotan-2x-200x66.png'
                }
            ]
        }
    }
}
</script>
<template>
    <div class="container-full">
        <div class="books-reader container row row-cols-xl-4 py-5 mt-5 d-flex">
            <div class="col logo" v-for="logo in logosSmall"  :key="logo.id">
                <img :src="store.getImageUrl(logo.image)" alt="{{logosSmall.image}}">
            </div>
        </div>
        
    </div>
    <div class="audiobook">
            <div class="bg-image container-lg m-auto pt-4">
                <div class="row container-lg m-auto justify-content-between">
                    <div class="left col-12 col-xl-6 pt-5 d-flex justify-content-start">
                    <img src="../../images/audible-app-2x-800x837.png" alt="">
                </div>
                <div class="container-lg col-12 col-xl-5 text-center d-flex flex-column justify-content-center px-5">
                    <h2 class="py-2">New Audiobook</h2>
                    <h4 class="text-uppercase py-2">no time to read? no problem. listen to it</h4>
                    <p class="py-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi est deserunt quos velit quasi debitis provident quaerat mollitia inventore aut.
                    </p>
                    <div class="logo d-flex justify-content-between">
                        <img src="../../images/audible-logo.png" alt="">
                        <img src="../../images/bn-logo-tall.png" alt="">
                        <img src="../../images/kindle-logo-tall.png" alt="">
                    </div>
                </div>
                </div>
                
            </div>

    </div>
  
</template>


<style lang="scss" scoped>
@use '../../styles/partials/variabiles' as *;


.container-full{
    background-color: $dawn-pink;
    .books-reader{
        margin: 0 auto;
        padding: 100px 0px;
    }
    .logo{
        width: 25%;
    }
}
.logo{
    padding: 20px 3px;
}
.bg-image{
    background-image: url('../../images/banner.jpg');
    color: white;
    img{
        max-width: 80%;
    }
    h4{
        color: $saffron;
        font-size: 1.3rem;
    }
    p{
        width: 90%;
        margin: 0 auto;
        color: $suva-grey;
    }
}

</style>