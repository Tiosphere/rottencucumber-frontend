<script>
import axios from 'axios';
import { isJwtExpired } from 'jwt-check-expiration';
import bar from '@/components/Navbar.vue'
import foot from '@/components/Footer.vue'

export default {
    name: 'LoginView',
    components: {
        bar,
        foot
    },
    data: () => ({
        errormsg: ""
    }),
    methods: {
        submitForm() {
            let form = new FormData(this.$refs.loginForm);
            axios.post("http://backend.rottencucumber.tk/api/auth/login", form)
                .then((res) => {
                    let data = res.data
                    if (data.success) {
                        localStorage.setItem("access_token", data.message)
                        localStorage.setItem("user", data.records[0].username)
                        localStorage.setItem("slug", data.records[0].slug)
                        this.$router.push({ name: 'home' })
                    } else {
                        this.errormsg = data.message
                    }
                })
                .catch((error) => {
                    this.errormsg = "Something happen please try again"
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
    <bar />
    <div class="modal">
        <div class="modal-content">
            <div class="auth-header">
                <div class="auth-title">
                    <div class="title">Login</div>
                </div>
            </div>
            <div class="modal-body">
                <form class="content " v-on:submit.prevent="submitForm" ref="loginForm">
                    <div class="hide-on-success">
                        <div class="form-group">
                            <i class="fa fa-user-alt"></i>
                            <input type="text" name="username" class="form-control" required placeholder="Username">
                        </div>
                        <div class="form-group">
                            <i class="fa fa-lock"></i>
                            <input type="password" name="password" class="form-control" required placeholder="Password">
                        </div>
                        <div class="form-error">
                            {{ errormsg }}
                        </div>
                        <div class="form-group">
                            <button class="main__button " type="submit" style="padding: 10px 50px; width: 100%;">
                                LOGIN
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="auth-footer">
                <RouterLink :to="{ name: 'forget-password' }">
                    <i class="fa fa-angle-right"></i>
                    Forgot password
                </RouterLink>
                <RouterLink :to="{ name: 'signup' }">
                    <i class="fa fa-angle-right"></i>
                    Create an account
                </RouterLink>
            </div>
        </div>
    </div>
    <foot />
</template>

<style scoped>
.modal {
    align-content: center;
    padding: 100px;
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
