<script>
import axios from 'axios';

export default {
    name: "logout",
    beforeMount() {
        let token = localStorage.getItem("access_token");
        if (token != null) {
            localStorage.removeItem('access_token')
            localStorage.removeItem('user')
            axios.defaults.headers.common['Authorization'] = null;
            axios.get("http://localhost:8080/api/auth/logout")
        }
        this.$router.push({ name: 'home' })
    }
}
</script>
<template>

</template>

