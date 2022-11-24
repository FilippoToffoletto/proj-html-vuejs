<script>
export default {
    name:'AppHeader'
}
</script>

<template>
    <div class="bg-image">
        <div class="container-fluid">
            <nav>
                navbar
            </nav>
            <div class="jumbo-text">
                <h1 class="">Damon Vaughn</h1>
                <h2 class="">Best-selling author and the most influential public intellectual in the western world right now.</h2>
                <h4>- The New York Times</h4>
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
    height: 90vh;
    color: white;
    nav{
        height: 70px;
        background-color: red;
    }
    .container-fluid{
        max-width: 1600px;
        .jumbo-text{    
            margin-top: 15rem;
            max-width: 710px;
            h1{
                padding: 10px 0px;
                color: $saffron;
            }
            h2{
                font-weight: 600;
                font-size: 2.5rem;
                line-height: 4rem;
                padding: 10px 0px;
            }
            h4{
                padding: 10px 0px;
                font-weight: 200;
                color: $suva-grey;
            }
        }
    }
}



</style>