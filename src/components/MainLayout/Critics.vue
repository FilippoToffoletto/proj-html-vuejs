<script>
export default {
    name:'Critics'
}
</script>

<template>
    <div class="ft-container py-5 mt-4">
        <div class="title d-flex justify-content-between">
            <div class="left">
                <h2 class="d-flex justify-content-between align-items-center text-capitalize">
                    What the Critics Say
                </h2>
                <h4 class="text-uppercase">testimonials from around the world</h4>
            </div>
            <div class="right">
                <div class="btn-orange">Read All Testimonials</div>
            </div>
        </div>

        <div class="box-text row py-4">
            <div class="left col-6 d-flex justify-content-center">
                <div class="text-card">
                    <h2 class="text-capitalize">Best author of his  generation</h2>
                </div>
            </div>

            <div class="right col-6 d-flex flex-column align-items-center">
                <div>1</div>
                <div>2</div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../../styles/partials/variabiles' as *;

h4{
    color: $blue-lagon;
}

.box-text{
    .left{
        background-image: url('../../images/testimonial2-2x.jpg');
        background-size: cover;
        color: white;
    }
}


</style>