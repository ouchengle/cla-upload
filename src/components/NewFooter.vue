<template>
    <el-row align="middle" style="border-top:2px solid #F2F2F2;">
        <el-col class="footer" :offset="4" :span="16">
            <div class="box">
                <span class="join_us" @click="join">JOIN US</span>
            </div>
            <div class="box">

                <span class="copyright" @click="viewPrivacy">©2020 Draven.Designed by LA-Studio</span>
            </div>

        </el-col>

    </el-row>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "NewFooter",
        data(){
            return{}
        },
        methods:{
            ...mapActions(['viewPrivacy']),
            join(){
                window.open('https://github.com/opensourceways/app-cla-server')
            },
            // viewPrivacy(){
            //     window.open('/privacy')
            // },
        },
    }
</script>

<style scoped lang="less">

    @import '../assets/font/css/huaweisans-bold.css';
    @import '../assets/font/css/HuaweiSans-Thin.css';
    @import '../assets/font/css/HuaweiSans-Light.css';
    @import '../assets/font/css/HuaweiSans-Regular.css';

    .footer {
        font-family: HuaweiSans-Regular, sans-serif;
        display: flex;
        justify-content: space-between;
        height: 4.5rem;
    }

    .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .copyright {
        cursor: pointer;
        font-size: .5rem;
        /*font-family: HuaweiSans-Light,sans-serif;*/
    }

    .join_us {
        font-size: 1.8rem;
        cursor: pointer;
    }
</style>