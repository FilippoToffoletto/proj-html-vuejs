<script>
import AboutMe from './MainLayout/AboutMe.vue';
import AudioBook from './MainLayout/AudioBook.vue';
import Critics from './MainLayout/Critics.vue';
import UpcomingEvents from './MainLayout/UpcomingEvents.vue';
export default {
    name:'AppMain',
    components:{
        AboutMe,
        AudioBook,
        Critics,
        UpcomingEvents
    }
}
</script>
<template>
    <main>
        <AboutMe/>
        <AudioBook/>
        <Critics/>
        <UpcomingEvents/>
    </main>
</template>



<style lang="scss" scoped>

</style>