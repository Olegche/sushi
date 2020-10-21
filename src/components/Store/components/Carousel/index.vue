<template>
    <section>
        <div class="example-component">
            
        </div>

        <b-carousel
            :arrow="arrow"
            :repeat="arrowBoth"
            :arrow-hover="arrowHover"
            :icon-pack="iconPack"
            :icon-prev="iconPrev"
            :icon-next="iconNext"
            :icon-size="iconSize">
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section :class="`hero is-medium is-${carousel.color}`">
                    <div class="hero-body has-text-centered">
                        <h1 class="title">{{carousel.title}}</h1>
                    </div>
                </section>
            </b-carousel-item>
        </b-carousel>
        
    </section>
</template>

<script>

export default {
    name: 'Carousel',
    data() {
        return {
            
            arrow: true,
            arrowBoth: true,
            arrowHover: false,
            autoplay: true,
            indicator: true,
            background: true,
            
            iconPack: 'mdi',
            iconPrev: 'arrow-left',
            iconNext: 'arrow-right',
            iconSize: '',
            
            carousels: [
                { title: 'Hello taste!', color: 'warning' },
                { title: 'welcome to best sushi store ever', color: 'primary' },
                { title: 'free delivery', color: 'info' },
                { title: 'enjoy!', color: 'success' }
            ]
        }
    }
}
</script>