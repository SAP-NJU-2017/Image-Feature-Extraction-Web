<template>
    <div>
        <div class="body-wrapper">
            <slot>

            </slot>
        </div>

        <my-footer></my-footer>

    </div>
</template>

<script>
    import Footer from './Footer.vue'

    export default {
        name: '',
        components: {
            myFooter: Footer
        },
        data() {
            return {}
        },
        computed: {}
    }
</script>
