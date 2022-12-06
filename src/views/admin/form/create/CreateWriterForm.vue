<script>
import axios from 'axios';
import side from '@/components/Sidebar.vue'
export default {
    name: 'CreateMovieForm',
    components: {
        side,
    },
    data: () => ({
        errormsg: "",
        // name: "",
        // preview: "",
        // release: "",


    }),
    methods: {
        submitForm() {
            let form = new FormData(this.$refs.accountForm);
            axios.post("http://localhost:8080/api/admin/writer/create", form)
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
        },
        
    },

    beforeMount() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

    },
    
}

</script>

<template>
    <side />
    <div class="modal">
        <div class="modal-content">
            <div class="auth-header">
                <div class="auth-title">
                    <div class="title">Create Writer</div>
                </div>
            </div>
            <div class="modal-body">
                <form class="content " id="form" v-on:submit.prevent="submitForm" ref="accountForm">
                    <div class="hide-on-success">
                        <div class="form-group">
                            <label>Writer Name: </label>
                            <input type="text" name="name" class="form-control" required placeholder="Writer Name">
                        </div>
                        <div class="form-group">
                            <label>Writer BirthPlace: </label>
                            <textarea name="birthPlace" form="form" class="form-control" required></textarea>
                        </div>
                        <div class="form-group">
                            <label>Writer Description: </label>
                            <textarea name="description" form="form" class="form-control" required></textarea>
                        </div>
                        <div class="form-group">
                            <label>Writer Birth Day: </label>
                            <input type="text" name="day" class="form-control" required placeholder="Birth Day">
                        </div>

                        <div class="form-group">
                            <label>Writer Birth Month: </label>
                            <input type="text" name="month" class="form-control" required placeholder="Birth Month" >
                        </div>

                        <div class="form-group">
                            <label>Writer Birth Year: </label>
                            <input type="text" name="year" class="form-control" required placeholder="Birth Year">
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
