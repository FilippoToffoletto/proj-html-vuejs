<script>
import { store } from '../../data/store';
export default {
    name:'UpcomingEvents',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <div class="container-full bg-card-pink">
        <div class="ft-container text-center py-5">
            <div class="title">
                <h2 class="py-3">Upcoming Events</h2>
                <h4 class="text-uppercase">meet the author in person</h4>
            </div>
            <div class="row row-cols-3 mt-5">
                <div class="col-12 col-xl-4">
                    <div class="image">
                        <img src="../../images/event-05-400x240.jpg" alt="">
                    </div>
                </div>
                <div class="col-12 col-xl-4">
                    <div class="image">
                        <img src="../../images/event-05-400x240.jpg" alt="">
                    </div>
                </div>
                <div class="col-12 col-xl-4">
                    <div class="image">
                        <img src="../../images/event-05-400x240.jpg" alt="">
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
        color: $saffron;
        letter-spacing: 4px;
    }
}
</style>