<script>
import {store} from '../../data/store.js';
export default {
    name:'Critics',
    data(){
        return{
            store,
            journalism:[
                {
                    image:'nytimes-logo-white-xsmall.png'
                }
            ]
        }
    }
}
</script>

<template>
    <div class="ft-container py-5 mt-4">
        <div class="title d-flex justify-content-between">
            <div class="left">
                <h2 class="d-flex justify-content-between align-items-center text-capitalize">
                    What the Critics Say
                </h2>
                <h4 class="text-uppercase text-dark-blue">testimonials from around the world</h4>
            </div>
            <div class="right">
                <div class="btn-orange">Read All Testimonials</div>
            </div>
        </div>

        <div class="box-text row gx-5 mt-4">
            <div class="left col-12 col-xl-7 position-relative">
                <div class="layover"></div>
                <div class="text-card align-self-center justify-content-center">
                    <h2 class="text-capitalize mb-5 pb-5 border-bottom fs-1">Best author of his  generation</h2>
                    <h4 class="">This book will change your perspective on life</h4>  
                    <p class="py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae quo sed deleniti debitis dolorum ratione voluptates. Corporis saepe quas, enim repudiandae sint voluptas atque dicta officiis, incidunt distinctio tempore dolorem</p>              
                    <p class="py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae quo sed deleniti debitis dolorum ratione voluptates. Corporis saepe quas, enim repudiandae sint voluptas atque dicta officiis, incidunt distinctio tempore dolorem?</p>       
                    <span class="d-flex align-items-center fw-bold py-3" >
                        <img class="me-3" src="../../images/nytimes-logo-white-xsmall.png" alt="aa"> Justine Kilpatrick <span class="mx-2 text-dark-blue">The New York Times</span>
                    </span>       
                </div>
            </div>

            <div class="right col-12 col-xl-5 text-center h-100">
                <div class="critic">
                    <div class="text-card bg-card-pink py-5 px-5 w-100 mb-3">
                        <h5 class="mb-4">A True Masterpiece, Bravo!</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, sunt maiores! Mollitia accusantium eligendi aliquam dolores eum officiis neque, incidunt sunt doloremque ex est, possimus in! Id voluptas a fuga facilis reprehenderit quidem odit, deleniti, culpa magni, quae ad eos explicabo doloribus sint libero at molestias ab asperiores voluptates reiciendis?</p>
                    </div>
                    <span class="d-flex align-items-center fw-bold caption py-3"><img class="me-3" src="../../images/theguardian-xsmall.png" alt=""> Gerald Hendley <span class="text-dark fw-normal ms-1">The Guardian</span></span>
                </div>
                <div class="critic py-3">
                    <div class="text-card bg-card-pink py-5 px-5 w-100 mb-3">
                        <h5 class="mb-4">A Unique View On The World</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, sunt maiores! Mollitia accusantium eligendi aliquam dolores eum officiis neque, incidunt sunt doloremque ex est, possimus in! Id voluptas a fuga facilis reprehenderit quidem odit, deleniti, culpa magni, quae ad eos explicabo doloribus sint libero at molestias ab asperiores voluptates reiciendis?</p>
                    </div>
                    <span class="d-flex align-items-center fw-bold caption py-3"><img class="me-3" src="../../images/globe-xsmall.png" alt=""> Mary Maxey <span class="text-dark fw-normal ms-1">The Globe and Mail</span></span>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../../styles/partials/variabiles' as *;


.box-text{
    .left{
        background-image: url('../../images/testimonial2-2x.jpg');
        background-size: cover;
        color: white;
        padding: 7rem;
        border-radius: 0px 0px 80px 0px;
    }
    .text-card{
        position: relative;
        width: 75%;
        margin: 0 auto;
        z-index: 999;
    }
}

.critic{
    h5{

    }
}


</style>