<template>
    <div class="secteur">
        <carousel :per-page="1"  :mouse-drag="false">
            <slide v-for="secteur, index in secteurs">
                <router-link
                    :to="{ name: 'secteur', params: { secteurId: index }}">
                    {{secteur.nameSecteur}}
                </router-link>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name: 'secteur',
    computed: {
        secteurs() {
            return this.$store.state.secteur;
        }
    },
    components: {
        Carousel,
        Slide
  }
}
</script>
