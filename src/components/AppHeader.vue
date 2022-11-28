<script>
import { store } from '../data/store';
import NavBarItem from './MainLayout/NavBarItem.vue';
export default {
    name:'AppHeader',
    components:{
        NavBarItem
    },
    data(){
        return{
            store,
            enter:false,
        }
    }
}
</script>

<template>
    <div class="bg-image">
        <div class="container-fluid">
                <NavBarItem/>
            <div class="jumbo-text">
                <h1 class="">Damon Vaughn</h1>
                <h2 class="">Best-selling author and the most influential public intellectual in the western world right now.</h2>
                <h4><img src="../images/nytimes-logo-white-xsmall.png" alt="" >
                The New York Times</h4>
            </div>
        </div>
        
    </div>
    
 
</template>



<style lang="scss" scoped>
@use '../styles/partials/variabiles' as *;

.bg-image{
    max-width: 100%;
    background-image: url('../images/footer-3.jpg');
    background-size: cover;
    position: relative;
    background-position: bottom;
    color: white;
    padding-bottom: 100px;

    .container-fluid{
        max-width: 1600px;
        .jumbo-text{    
            margin-top: 15rem;
            max-width: 710px;
            h1{
                padding: 10px 90px;
                color: $saffron;
            }
            h2{
                font-weight: 600;
                font-size: 2.5rem;
                line-height: 4rem;
                padding: 10px 90px;
            }
            h4{
                padding: 10px 90px;
                font-weight: 200;
                color: $suva-grey;
                img{
                    width: 16px;
                }
            }
        }
    }
}



</style>