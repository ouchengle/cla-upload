<template>
    <el-row style="height: 100%">
        <el-col  align="right" class="formBox">
            <div class="formBack_Box">
                <div class="formBack">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0">
                        <el-form-item label="" prop="account">
                            <el-input v-model="ruleForm.userName" autocomplete="off" placeholder="account"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="pass">
                            <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"
                                      placeholder="password"></el-input>
                        </el-form-item>
                        <el-form-item style="text-align: left">
                            <span class="pointer" @click="findPwd" id="forgetPwd">Forget the password?</span>
                        </el-form-item>
                        <el-form-item>
                            <el-button style="width: 100%" type="primary" @click="submitForm('ruleForm')">LOGIN IN
                            </el-button>
                        </el-form-item>
                    </el-form>

                </div>
            </div>

        </el-col>
    </el-row>

</template>

<script>
    import * as url from '../until/api'
    import {mapActions} from 'vuex'

    export default {
        name: "RepoSelect",
        data() {
            var validateAccount = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('please input account number'));
                }
                callback();
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('please input password'));
                }
                callback();
            };
            return {
                rules: {
                    userName: [
                        {validator: validateAccount, trigger: 'blur'}
                    ],
                    pwd: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                },
                ruleForm: {
                    userName: '',
                    pwd: '',
                },
            };
        },
        methods: {
            ...mapActions(['setLoginInfoAct']),
            findPwd() {
                console.log('findPwd');
            },
            login(userName, pwd) {
                let obj = {
                    user: userName,
                    password: pwd
                };
                this.$axios({
                    url: '/api' + url.corporationManagerAuth,
                    method: 'post',
                    data: obj,
                }).then(res => {
                    console.log(res);
                    new Promise((resolve, reject) => {
                        let userInfo = {userInfo: res.data}
                        Object.assign(userInfo, {userName: userName})
                        this.setLoginInfoAct(userInfo)
                        console.log(userInfo);
                        if (res.data.length > 1) {
                            this.$router.push('/orgSelect')
                        } else {
                            Object.assign(userInfo, {orgValue: 0})
                            this.setLoginInfoAct(userInfo)
                            if (res.data[0].role === 'admin') {
                                this.$router.push('/rootManager')
                            } else {
                                this.$router.push('/signedRepo')
                            }

                        }
                        resolve('completed');
                    }).then(res => {
                        console.log(res);
                    }, err => {
                        console.log(err);
                    })

                }).catch(err => {
                    console.log(err);
                    this.$message.closeAll()
                    this.$message.error(err.response.data)
                })
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.login(this.ruleForm.userName, this.ruleForm.pwd)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },

        }
    }
</script>

<style scoped lang="less">
    .formBack_Box{
        width: 100%;
        display: flex;
        flex-direction: row;
       justify-content: flex-end;
    }
    .formBack{
        width: 16rem;
        box-shadow: 0 0 20px 10px #F3F3F3;
        padding: 3rem;
        background-color: white;
        border-radius: 2rem;
    }
    .formBox {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .pointer {
        cursor: pointer;
    }

    #forgetPwd:hover {
        text-decoration: underline;
    }
</style>