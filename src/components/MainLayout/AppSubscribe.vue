<script>
import { store } from '../../data/store';
export default {
    name:'AppSubscribe',
    props:{

    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="container-full bg-image position-relative">
        <div class="layover"></div>
        <div class="text w-50 p-5 position-relative">
            <h2 class="py-4 fs-1">Subscribe To my Newsletter</h2>
            
            <h4 class="text-uppercase">be notified about book signing tour dates</h4>

            <form class="row g-3 m-auto p-4">
                <div class="col-xl-8 col-auto">
                    <label for="inputMail" class="visually-hidden">Mail</label>
                    <input type="mail" class="form-control" id="inputMail" placeholder="Insert your email...">
                </div>
                <div class="col-auto col-xl-3 btn-green">
                    Subscribe
                </div>
            </form>
            <span class="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nobis.</span>
        </div>
    </div>
  
</template>



<style lang="scss" scoped>
@use '../../styles/partials/variabiles' as *;


.bg-image{
    background-image: url('../../images/banner-2.jpg');
    background-size: cover;
    color:white;
    padding: 70px 0px;
    .text{
        width: 50%;   
        margin: 0 auto;
        text-align: center;
        z-index: 99999;
        h2{
            line-height: 4rem;
            width: 50%;
            margin: 0 auto;
        }
        h4{
            color: $saffron;
            font-size: 1.2rem;
            text-align: center;
            letter-spacing: 2px;
            margin: 0 auto;
            width: 70%;
        }
        form{
            width: 73%;
            margin: 0 auto;
            input{
                padding: 10px 10px;
            }
        }
    }
}

</style>