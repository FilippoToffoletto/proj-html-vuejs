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
                <div class="ft-cards">
            <div class="ft-card-small"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-folder-fill text-dark-blue mb-2" viewBox="0 0 16 16">
                    <path
                        d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                </svg><span class="text-dark-blue">Demos</span></div>
            <div class="ft-card-small"><span class="d-block text-center text-dark-blue fs-3 fw-bold mb-1"><span
                        class="smaller align-top">&dollar;</span>39</span>
                        <span class="text-dark-blue">On sale</span></div>
        </div>
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
.ft-cards {
        position: absolute;
        right: 0;
        top: 20%;

        .ft-card-small {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: white;
            min-height: 50px;
            line-height: 1;
            margin: 0.5rem;
            padding: 0.5rem;
            border-radius: 0.5rem;
            font-size: 0.8rem;
            &:hover{
                cursor: pointer;
            }
        }
    }



</style>