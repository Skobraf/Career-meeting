<template>
    <div class="secteur">
        <carousel :per-page="1"  :mouse-drag="false">
            <slide v-for="secteur, index in secteurs">
                <router-link
                    :to="{ name: 'secteur', params: { secteurId: index }}">
                    <div>
                        <Slides v-bind:title="secteur.nameSecteur" v-bind:img="secteur.ImageSect" />
                    </div>
                </router-link>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import Slides from '../components/Slides.vue';

export default {
    name: 'secteur',
    computed: {
        secteurs() {
            return this.$store.state.secteur;
        }
    },
    components: {
        Carousel,
        Slide,
        Slides
  }
}
</script>
<style>
    .VueCarousel-dot{
        padding: 5px !important;
        width: 14px !important;
        height: 14px !important;
        background-color: #707070 !important;
       }
    .VueCarousel-dot--active {
        padding: 5px !important;
        width: 14px !important;
        height: 14px !important;
        background-color: #ffffff !important;
       }
</style>
