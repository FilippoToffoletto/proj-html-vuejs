<script>
import AboutMe from './MainLayout/AboutMe.vue';
import AudioBook from './MainLayout/AudioBook.vue';
import Critics from './MainLayout/Critics.vue';
export default {
    name:'AppMain',
    components:{
        AboutMe,
        AudioBook,
        Critics
    }
}
</script>
<template>
    <main>
        <AboutMe/>
        <AudioBook/>
        <Critics/>
    </main>
</template>



<style lang="scss" scoped>

</style>