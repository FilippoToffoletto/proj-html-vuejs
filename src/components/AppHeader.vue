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
    <div class="bg-image position-relative">
        
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
        <div class="col-4 d-xxl-block buy-books">
            <div class="bg-white py-4">
                <div class="top pt-3 px-4 d-flex mx-3">
                    <div class="image">
                        <img src="../images/book-widget.png" alt="">
                    </div>
                    <div class="text">
                        <h2 class="text-capitalize fs-3">latest book Release</h2>
                        <h4 class="text-uppercase">D.Vaughn autobiography</h4>
                        <p class="d-flex overflow-scroll">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ex laudantium, id eius cum, repudiandae perferendis nemo ipsum repellat sed culpa sequi sint? Dolorum praesentium tenetur, corporis aliquid voluptatibus temporibus!</p>
                    </div>
                </div>
                <div class="bottom text-center pb-2">
                    <div class="btn-group pb-3" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-ft px-5">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path
                                d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z" />
                            </svg>
                            Buy on Amazon</button>
                        <button type="button" class="btn btn-outline-ft px-5">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path
                                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                                </svg>
                            Buy on App Store</button>
                    </div>
                </div>
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

.buy-books{
    position: absolute;
    bottom: 0;
    right: 0;
    .text{
        color: black;
        h4{
            color: $saffron;
            font-size: 1rem;
            font-weight: 400;
        }
    }
    .icon{
        width: 16px;
        padding-right: 5px;
        vertical-align: middle;
    }
    button{
        display: flex;
        align-items: center;
    }
    p{
        font-size: .9rem;
        font-weight: 300;
    }
    .btn-outline-ft{
        background-color: #F4FCFA;
        border: 1px solid $btn-green;
        padding: 10px 20px;
        cursor: pointer;
        &:hover{
            background-color: $btn-green;
            box-shadow: -2px 0px 20px -4px $btn-green;

        }
    }
}



</style>