<script>
import axios from 'axios';
import side from '@/components/Sidebar.vue'
export default {
    name: 'DirectorForm',
    components: {
        side,
    },
    data: () => ({
        errormsg: "",
        // name: "",
        // preview: "",
        // release: "",
        default_data: {
            name: "",
            birthPlace: "",
            description: "",
            day: "",
            month: "",
            year: "",
        },


    }),
    methods: {
        submitForm() {
            let form = new FormData(this.$refs.accountForm);
            axios.post("http://backend.rottencucumber.tk/api/admin/director/update/"+ this.$route.params.slug, form)
                .then((res) => {
                    let data = res.data
                    console.log(data)
                    if(data.success) {
                        this.$router.push({ name: 'manage-director' });
                    }
                })
                .catch((error) => {
                    this.errormsg = "Something happen please try again"
                });
        },

    },

    beforeMount() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

        axios.get("http://backend.rottencucumber.tk/api/admin/director/get/" + this.$route.params.slug)
            .then((res) => {
                console.log(res.data)

                this.default_data.name = res.data.records[0].name
                this.default_data.birthPlace = res.data.records[0].birth_place
                this.default_data.description = res.data.records[0].description

                var now = new Date(res.data.records[0].birthday)
                this.default_data.day = now.getDate()
                this.default_data.month = now.getMonth()
                this.default_data.year = now.getFullYear()
            })
            .catch(() => {
                    this.$router.push({ name: 'home' })
                });

    },

}

</script>

<template>
    <side />
    <div class="modal">
        <div class="modal-content">
            <div class="auth-header">
                <div class="auth-title">
                    <div class="title">Edit director</div>
                </div>
            </div>
            <div class="modal-body">
                <form class="content " id="form" v-on:submit.prevent="submitForm" ref="accountForm">
                    <div class="hide-on-success">
                        <div class="form-group">
                            <label>Director Name: </label>
                            <input type="text" name="name" class="form-control" required placeholder="New Director Name" :value="this.default_data.name">
                        </div>
                        <div class="form-group">
                            <label>Director BirthPlace: </label>
                            <textarea name="birthPlace" form="form" class="form-control" :value="this.default_data.birthPlace" required></textarea>
                        </div>
                        <div class="form-group">
                            <label>Director Description: </label>
                            <textarea name="description" form="form" class="form-control" :value="this.default_data.description" required></textarea>
                        </div>
                        <div class="form-group">
                            <label>Director Birth Day: </label>
                            <input type="text" name="day" class="form-control" required placeholder="Birth Day" :value="default_data.day">
                        </div>

                        <div class="form-group">
                            <label>Director Birth Month: </label>
                            <input type="text" name="month" class="form-control" required placeholder="Birth Month" :value="default_data.month">
                        </div>

                        <div class="form-group">
                            <label>Director Birth Year: </label>
                            <input type="text" name="year" class="form-control" required placeholder="Birth Year" :value="default_data.year">
                        </div>


                        <div class="form-group">
                            Choose Image:
                            <input type="file" name="image" required>
                        </div>



                        <div class="form-error">
                            {{ errormsg }}
                        </div>
                        <div class="form-group">
                            <button class="main__button" type="submit" style="padding: 10px 50px; width: 100%;">
                                Save
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
    padding: 280px;
    height: auto;
    background-color: rgba(0, 0, 0, 0.2);
    overflow: auto;

}
option:checked {
    background-color: gray;
}

option {
    background: white;
     text-align: center;
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
    font-size: 1.9rem;
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
