<template>
    <div class="wrapper">

        <div class="upload-wrapper">
            <el-upload
                    :disabled="disabled"
                    :action="uploadPicUrl"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">

                <el-button size="small" type="primary" :disabled="disabled">
                    Click to Upload
                </el-button>

                <!--<img v-if="imageUrl" :src="imageUrl" class="avatar">-->
                <!--<i v-else class="el-icon-upload"></i>-->
                <!--<div class="el-upload__text"><em>Drag</em> Your Picture Here, or <em>Click</em> to Upload</div>-->
            </el-upload>

            <div class="el-upload__tip"><i class="el-icon-warning"></i>
                Only png/jpg/jpeg files are valid, and should be less than 2M
            </div>
        </div>

        <div class="result-wrapper"
             v-loading="loading"
             :element-loading-text="text">

            <img v-if="imageUrl" :src="imageUrl">
            <img src="../../assets/img/bg.jpeg" v-else>
            <div class="error-area"
                 :style="{top: top + '%', left: left + '%', width: width + '%', height: height + '%', opacity: opacity}"></div>

        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: 'upload-picture',
        data() {
            return {
                imageUrl: '',
                path: '',
                uploadPicUrl: '/api/upload',
                loading: false,
                text: '',
                disabled: false,
                top: 0,
                left: 0,
                width: 0,
                height: 0,
                opacity: 0
            }
        },
        methods: {
            ...mapActions([
                'fetchPicResult'
            ]),
            handleAvatarSuccess(res, file) {
                this.loading = true

                this.imageUrl = URL.createObjectURL(file.raw)
                this.path = file.raw.name
                this.$message.success('Successfully Upload!')
                this.text = 'Extracting...'
                this.disabled = true
                this.opacity = 0
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('Only png/jpg/jpeg files are valid');
                }
                if (!isLt2M) {
                    this.$message.error('Files should be less than 2M');
                }
                return isJPG && isLt2M;
            }
        },
        computed: {
            ...mapState({
                picResult: state => state.picResult
            })
        },
        watch: {
            imageUrl: function () {
                this.fetchPicResult({
                        imageUrl: this.path
                    }
                )
            },
            picResult: function () {
                this.$message.success('Successfully Extracted!')
                this.opacity = 1
                this.width = (this.picResult.endx - this.picResult.startx) * 100 / 2
                this.height = (this.picResult.endy - this.picResult.starty) * 100
                this.top = (this.picResult.starty) * 100
                this.left = this.picResult.startx * 100 / 2 + 25

                this.loading = false
                this.disabled = false
            }
        }
    }
</script>

<style src="./UploadPicture.css"></style>