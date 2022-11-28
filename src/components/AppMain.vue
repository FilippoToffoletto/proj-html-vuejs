<script>
import AboutMe from './MainLayout/AboutMe.vue';
import AudioBook from './MainLayout/AudioBook.vue';
import Critics from './MainLayout/Critics.vue';
import UpcomingEvents from './MainLayout/UpcomingEvents.vue';
import AppSubscribe from './MainLayout/AppSubscribe.vue';
import FindOut from './MainLayout/FindOut.vue';
import AppArticles from './MainLayout/AppArticles.vue';
export default {
    name:'AppMain',
    components:{
        AboutMe,
        AudioBook,
        Critics,
        UpcomingEvents,
        AppSubscribe,
        FindOut,
        AppArticles
    }
}
</script>
<template>
    <main>
        <AboutMe/>
        <AudioBook/>
        <Critics/>
        <UpcomingEvents/>
        <AppSubscribe/>
        <FindOut/>
        <AppArticles />
    </main>
</template>



<style lang="scss" scoped>

</style>