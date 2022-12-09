<script>
import axios from 'axios';
import side from '@/components/Sidebar.vue'
export default {
    name: 'DeleteLanguageForm',
    components: {
        side,
    },
    data: () => ({
        errormsg: ""
    }),
    methods: {
        submitForm() {
            let form = new FormData(this.$refs.accountForm);
            axios.post("http://backend.rottencucumber.tk/api/admin/review/delete/" + this.$route.params.id, form)
                .then((res) => {
                    let data = res.data
                    console.log(data)
                    if(data.success) {
                        this.$router.push({ name: 'manage-review' });
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
