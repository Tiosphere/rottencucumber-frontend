<script>
import axios from 'axios';
import side from '@/components/Sidebar.vue'
export default {
    name: 'DeleteWriterForm',
    components: {
        side,
    },
    data: () => ({
        errormsg: ""
    }),
    methods: {
        submitForm() {
            let form = new FormData(this.$refs.accountForm);
            axios.post("http://backend.rottencucumber.tk/api/admin/writer/delete/" + this.$route.params.slug, form)
                .then((res) => {
                    let data = res.data
                    console.log(data)
                    if(data.success) {
                        this.$router.push({ name: 'manage-writer' });
                    }
                })
                .catch((error) => {
                    this.errormsg = "Something happen please try again"
                });
        }
    },
    beforeMount() {
        this.submitForm()
    },

}
</script>

<style scoped>

</style>
