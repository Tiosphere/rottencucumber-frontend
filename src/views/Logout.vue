<script>
import axios from 'axios';
import { isJwtExpired } from 'jwt-check-expiration';

export default {
    name: "logout",
    beforeMount() {
        let token = localStorage.getItem("access_token");
        if (token != null) {
            localStorage.removeItem('access_token')
            axios.defaults.headers.common['Authorization'] = null;
            axios.get("http://localhost:8080/api/auth/logout")
        }
        this.$router.push({ name: 'home' })

    }
}
</script>
<template>

</template>

