import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as url from '../until/api'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        claChoose: sessionStorage.getItem('claChoose') || undefined,
        orgChoose: sessionStorage.getItem('orgChoose') || undefined,
        repositoryChoose: sessionStorage.getItem('repositoryChoose') || undefined,
        isEmail: sessionStorage.getItem('isEmail') || undefined,
        repositoryValue: sessionStorage.getItem('repositoryValue') || undefined,
        claValue: sessionStorage.getItem('claValue') || undefined,
        orgValue: sessionStorage.getItem('orgValue') || undefined,
        claOptions: sessionStorage.getItem('claOptions') || undefined,
        repositoryOptions: sessionStorage.getItem('repositoryOptions') || undefined,
        orgOptions: sessionStorage.getItem('orgOptions')|| undefined,
        showConfigForm: sessionStorage.getItem('showConfigForm') || undefined,
        userLimit: sessionStorage.getItem('userLimit') || undefined,
        loginInfo: JSON.parse(sessionStorage.getItem('loginInfo')) || undefined,
        repoInfo: JSON.parse(sessionStorage.getItem('repoInfo')) || undefined,
        loginType: sessionStorage.getItem('loginType') || undefined,
        tableData: sessionStorage.getItem('tableData')|| undefined,
        ready: Boolean(sessionStorage.getItem('ready') || undefined),
        platform: sessionStorage.getItem('platform') || undefined,
        gitee_client_id: '2632e89d3dfb17ce941d2d2b45efc6f235afb4941ddb67578adda83aa33ab6a2',
        gitee_client_secret: '265ba325522a42a531649d39fa323ce0788238b1c7ea279297443eb52edd18af',
        gitee_redirect_uri: 'http://139.159.224.207:60031/api/v1/login?platform=gitee',
        github_client_id: 'd86f4915398dad23bffc',
        github_client_secret: '7e605a8a1104b78452475264c85df5b73a108c94',
        github_redirect_uri: 'http://localhost:8080/home',
        access_token: sessionStorage.getItem('token') || undefined,
        refresh_token: sessionStorage.getItem('refresh_token') || undefined,
        platform_token: sessionStorage.getItem('platform_token') || undefined,
        user: {
            userId: sessionStorage.getItem('userId') || undefined,
            userName: sessionStorage.getItem('userName') || undefined,
            userImg: sessionStorage.getItem('userImg') || undefined,
            userEmail: sessionStorage.getItem('userEmail') || undefined,
        },
    },
    mutations: {
        setReady(state, data) {
            console.log(data);
            state.ready = data.ready;
            state.tableData = data.tableData;
            sessionStorage.setItem('ready', data.ready);
            sessionStorage.setItem('tableData', JSON.stringify(data.tableData));
        },
        setToken(state, data) {
            console.log(data);
            state.access_token = data.access_token;
            state.refresh_token = data.refresh_token;
            state.platform_token = data.platform_token;
            sessionStorage.setItem('token', data.access_token);
            sessionStorage.setItem('refresh_token', data.refresh_token);
            sessionStorage.setItem('platform_token', data.platform_token);
        },
        setLoginUser(state, data) {
            state.user.userId = data.userId;
            state.user.userName = data.userName;
            state.user.userImg = data.userImg;
            state.user.userEmail = data.userEmail;
            sessionStorage.setItem('userId', data.userId);
            sessionStorage.setItem('userName', data.userName);
            sessionStorage.setItem('userImg', data.userImg);
            sessionStorage.setItem('userEmail', data.userEmail);
        },
        setPlatform(state, platform) {
            console.log(platform);
            state.platform = platform;
            sessionStorage.setItem('platform', platform);
        },
        setLoginType(state, loginType) {
            console.log(loginType);
            state.loginType = loginType;
            sessionStorage.setItem('loginType', loginType);
        },
        setRepoInfo(state, obj) {
            console.log(obj);
            state.repoInfo = obj;
            sessionStorage.setItem('repoInfo', JSON.stringify(obj));
        },
        setLoginInfo(state, obj) {
            console.log(obj);
            state.loginInfo = obj;
            sessionStorage.setItem('loginInfo', JSON.stringify(obj));
        },
        setUserLimit(state, userLimit) {
            console.log(userLimit);
            state.userLimit = userLimit;
            sessionStorage.setItem('userLimit', userLimit);
        },
        setShowConfigForm(state, showConfigForm) {
            console.log(showConfigForm);
            state.showConfigForm = showConfigForm;
            sessionStorage.setItem('showConfigForm', showConfigForm);
        },
        setOrgOption(state, orgOptions) {
            console.log(orgOptions);
            state.orgOptions = orgOptions;
            sessionStorage.setItem('orgOptions', JSON.stringify(orgOptions));
        },
        setRepositoryOptions(state, repositoryOptions) {
            console.log(repositoryOptions);
            state.repositoryOptions = repositoryOptions;
            sessionStorage.setItem('repositoryOptions', JSON.stringify(repositoryOptions));
        },
        setClaOptions(state, claOptions) {
            console.log(claOptions);
            state.claOptions = claOptions;
            sessionStorage.setItem('claOptions', JSON.stringify(claOptions));
        },
        setOrgValue(state, orgValue) {
            console.log(orgValue);
            state.orgValue = orgValue;
            sessionStorage.setItem('orgValue', orgValue);
        },
        setRepositoryValue(state, repositoryValue) {
            console.log(repositoryValue);
            state.repositoryValue = repositoryValue;
            sessionStorage.setItem('repositoryValue', repositoryValue);
        },
        setClaValue(state, claValue) {
            console.log(claValue);
            state.claValue = claValue;
            sessionStorage.setItem('claValue', claValue);
        },
        setOrgChoose(state, orgChoose) {
            console.log(orgChoose);
            state.orgChoose = orgChoose;
            sessionStorage.setItem('orgChoose', orgChoose);
        },
        setClaChoose(state, claChoose) {
            console.log(claChoose);
            state.claChoose = claChoose;
            sessionStorage.setItem('claChoose', claChoose);
        },
        setRepositoryChoose(state, repositoryChoose) {
            console.log(repositoryChoose);
            state.repositoryChoose = repositoryChoose;
            sessionStorage.setItem('repositoryChoose', repositoryChoose);
        },
        setIsEmail(state, isEmail) {
            console.log(isEmail);
            state.isEmail = isEmail;
            sessionStorage.setItem('isEmail', isEmail);
        },
        setTableData(state, data) {
            console.log(data);
            state.tableData = data;
            sessionStorage.setItem('tableData', JSON.stringify(data));
        },
    },
    actions: {
        setShowConfigFormAct({commit}, showConfigForm) {
            console.log(showConfigForm);
            commit('setShowConfigForm', showConfigForm);
        },
        setUserLimitAct({commit}, userLimit) {
            console.log(userLimit);
            commit('setUserLimit', userLimit);
        },
        setLoginInfoAct({commit}, obj) {
            console.log(obj);
            commit('setLoginInfo', obj);
        },
        setRepoInfoAct({commit}, obj) {
            console.log(obj);
            commit('setRepoInfo', obj);


        },
        setLoginTypeAct({commit}, loginType) {
            console.log(loginType);
            commit('setLoginType', loginType)

        },
        setPlatformAct({commit}, platform) {
            console.log(platform);
            commit('setPlatform', platform)
        },
        setTokenAct({commit}, data) {
            commit('setToken', data);
        },
        setLoginUserAct({commit}, data) {
            commit('setLoginUser', data)
        },

        getLinkedRepoListAct({commit}, data) {
            console.log('getLinkedRepoListAct', data);
            axios({
                url: '/api' + url.getLinkedRepoList,
                params: {platform: data.platform, enabled: true},
                headers: {
                    'Token': data.access_token,
                    'Access-Token': data.platform_token,
                    'Refresh-Token': data.refresh_token,
                    'User': `${data.platform}/${data.userName}`
                }
            }).then(res => {
                console.log(res);

                if (res.data.length) {
                    let tableData = [];
                    let count = res.data.length
                    res.data.forEach((item, index) => {
                        console.log(index);
                        tableData.push({
                            id: item.id,
                            repository: `${item.org_id}/${item.repo_id}`,
                            cla: item.cla_id,
                            org_id: item.org_id,
                            repo_id: item.repo_id,
                            apply_to: item.apply_to,
                            cla_language: item.cla_language,
                            platform: item.platform,
                            contributors: '0',
                        });
                        ((index, item, length, {commit}, tableData) => {
                            console.log(index, tableData, item, length);
                            if (item.apply_to === 'corporation') {
                                count++
                                console.log(data);
                                axios({
                                    url: `/api${url.corporation_signing}`,
                                    params: {
                                        platform: item.platform,
                                        org_id: item.org_id,
                                        repo_id: item.repo_id,
                                        cla_language: item.cla_language
                                    },
                                    headers: {
                                        'Token':data.access_token,
                                        'Access-Token': data.platform_token,
                                        'Refresh-Token': data.refresh_token,
                                        'User': `${data.platform}/${data.userName}`
                                    }
                                }).then(resp => {
                                    console.log(resp);
                                    Object.assign(tableData[index], {
                                        contributors: resp.data.length,
                                        corporationInfo: resp.data,
                                    })
                                    if (--count === 0) {
                                        let obj = {tableData: tableData, ready: true}
                                        console.log(tableData);
                                        commit('setReady', obj);
                                    }
                                    console.log(tableData);
                                }).catch(err => {
                                    console.log(err);
                                })
                            }
                            axios({
                                url: `/api${url.getClaInfo}/${item.cla_id}`,
                                headers: {
                                    'Token':data.access_token,
                                    'Access-Token': data.platform_token,
                                    'Refresh-Token': data.refresh_token,
                                    'User': `${data.platform}/${data.userName}`
                                }
                            }).then(resp => {
                                console.log(resp);
                                Object.assign(tableData[index], {
                                    claName: resp.data.name,
                                })
                                if (--count === 0) {
                                    let obj = {tableData: tableData, ready: true}
                                    console.log(tableData);
                                    commit('setReady', obj);
                                }

                            }).catch(err => {
                                console.log(err);
                            })
                        })(index, item, res.data.length, {commit}, tableData)

                    })

                }
            }).catch(err => {
                console.log(err);
            })

        },
        setTableDataAct({commit}, data) {
            commit('setTableData', data)
        },
        viewPrivacy(){
            window.open('/privacy')
        },
    },
    modules: {}
})
