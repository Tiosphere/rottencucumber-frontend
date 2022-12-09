<script>
import axios from 'axios';
import { isJwtExpired } from 'jwt-check-expiration';

export default {
    name: "newpass",
    data: () => ({
        error: ""
    }),
    methods: {
        submitForm() {
            if (isJwtExpired(this.$route.params.token)) {
                this.error = "Your token is expire"
                return false;
            }
            let form = new FormData(this.$refs.newPassForm)
            let url = "http://backend.rottencucumber.tk/api/auth/forget/"
            axios.post(url.concat(this.$route.params.token), form)
                .then((res) => {
                    console.log(res.data)
                    let code = res.data.code;
                    if (code === 0) {
                        this.$router.push({ name: 'home' });
                    }
                    else if (code === 1) {
                        this.error = res.data.message;
                    }
                    else {
                        this.error = "Oops! something went wrong."
                    }
                })
                .catch((error) => {
                    this.error = "Something happen please try again"
                });
        }
    },
    beforeMount() {
        let token = localStorage.getItem("access_token");
        if (token != null && !isJwtExpired(token)) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
            this.$router.push({ name: 'home' })
        } else {
            localStorage.removeItem("access_token")
            axios.defaults.headers.common['Authorization'] = null;
        }
    }
}
</script>

<template>
    <div class="modal">
        <div class="modal-content">
            <div class="auth-header">
                <div class="auth-title">
                    <div class="title">New Password</div>
                </div>
            </div>
            <div class="auth-body modal-body">
                <form class="content" v-on:submit.prevent="submitForm" ref="newPassForm">
                    <div class="hide-on-success">
                        <div class="form-group">
                            <i class="fa fa-lock"></i>
                            <input name="password1" class="form-control" placeholder="Password" required
                                type="password">
                        </div>
                        <div class="form-group">
                            <i class="fa fa-lock"></i>
                            <input name="password2" class="form-control" placeholder="Confirm password" required
                                type="password">
                        </div>
                        <div class="form-error">
                            {{ error }}
                        </div>
                        <div class="form-group">
                            <button class="submit-btn button main__button " style="padding: 10px 50px; width: 100%;"
                                type="submit">SAVE
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal {
    align-content: center;
    padding: 80px;
    height: auto;
    background-color: rgba(0, 0, 0, 0.2);
    overflow: auto;
}

.modal-content {
    position: relative;
    margin: auto;
    padding: 20px;
    width: 90%;
    max-width: 400px;
    pointer-events: auto;
    border-radius: 0.3rem;
    outline: 0;
    background-color: #DEECDE;
}

.auth-header {
    border: none;
    padding: 0 40px 0;
    text-align: center;
    position: relative;
}

.modal-body {
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem;
}

.auth-footer {
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: space-between;
    padding: 0.75rem;
    border-top: 1px solid white;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
}

.auth-header .auth-title {
    width: 100%;
    flex-direction: column;
    display: flex;
}

.auth-header .title {
    position: relative;
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
    display: inline-block;
    text-transform: uppercase;
    color: #2A2C32;
}

.form-control {
    display: block;
    width: 100%;
    height: 32px;
    padding: 6px 30px;
    font-size: 13px;
    line-height: 1.42857;
    color: #555;
    background-color: #eee;
    border: 1px solid #eee;
    border-radius: 3px;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

.form-group {
    position: relative;
    margin-bottom: 15px;
}

input:not([type=checkbox]) {
    background: white;
    border: 1px solid #2A2C32;
}

.main__button {
    background: #6FAC49;
    border: none;
    display: block;
    padding: 10px 10px;
    text-align: center;
    font-weight: 700;
    color: #fff !important;
    cursor: pointer;
    border-radius: 2px;
    height: 40px;
    position: relative;
}

i[class*="fa-"] {
    display: inline-block;
    width: 16px;
    text-align: center;
}

.form-group i {
    position: absolute;
    text-align: center;
    color: #2A2C32;
    top: 8px;
    left: 7px;
    width: 12px;
    height: 12px;
}

.form-error {
    color: #BD1E1E;
}

.auth-footer a {
    cursor: pointer;
    color: #2A2C32;
    text-decoration: none;
}

.auth-footer a:hover {
    color: #4583C1;
    transition: all 0.1s;
}
</style>
