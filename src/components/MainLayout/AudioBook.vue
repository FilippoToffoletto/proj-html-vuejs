<script>
export default {
    name:'AudioBook'
}
</script>
<template>
    <div class="container-full">
        <div class="books-reader container row row-cols-xl-4 py-5 mt-5 d-flex">
            <div class="col logo">
                <img src="../../images/ebay-logotan-2x-200x66.png" alt="">
            </div>
            <div class="col logo">
                <img src="../../images/audible-logotan-2x-200x66.png" alt="">
            </div>
            <div class="col logo">
                <img src="../../images/bb-logotan-2x-200x66.png" alt="">
            </div>
            <div class="col logo">
                <img src="../../images/kindlefire-logotan-2x-200x66.png" alt="">
            </div>
        </div>
    </div>
    <div class="audiobook">
            <div class="bg-image container-lg m-auto">
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
    position: relative;
    max-width: 100%;
    background-size: cover;
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