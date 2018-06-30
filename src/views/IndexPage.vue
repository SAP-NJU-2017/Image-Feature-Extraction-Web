<template>
    <div class="index-page-wrapper">
        <layout>
            <h1>Image Feature Extraction</h1>
            <upload-picture></upload-picture>
        </layout>
    </div>
</template>

<script>
    import Layout from '../components/Layout/Layout.vue'
    import UploadPicture from '../components/Playgroud/UploadPicture.vue'

    export default {
        name: 'index-page',
        components: {
            UploadPicture,
            Layout
        }
    }
</script>

<style src="./IndexPage.css"></style>
