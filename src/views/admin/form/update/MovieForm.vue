<script>
import axios from 'axios';
import side from '@/components/Sidebar.vue'
export default {
    name: 'MovieForm',
    components: {
        side,
    },
    data: () => ({
        errormsg: "",
        name: "",
        preview: "",
        release: "",
        default_data: {
            name: "",
            preview: "",
            release: "",
            language: "",
            actor: "",
            writer: "",
            director: "",
            genres: "",
            platforms: "",
            image: "",
            summary: "",
        },
        languages: [

        ],
        actors: [

        ],
        writers: [

        ],
        directors: [

        ],
        genres: [

        ],
        platforms: [

        ],
        image: "",
        summary: "",


    }),
    methods: {
        submitForm() {
            let form = new FormData(this.$refs.accountForm);
            axios.post("http://localhost:8080/api/admin/movie/update/"+ this.$route.params.slug, form)
                .then((res) => {
                    let data = res.data
                    console.log(data)
                    if(data.success) {
                        this.$router.push({ name: 'manage-movies' });
                    }
                })
                .catch((error) => {
                    this.errormsg = "Something happen please try again"
                });
        },
    },

    beforeMount() {
        // language data
        axios.get("http://localhost:8080/api/admin/language/get/all")
                .then((res) => {
                    let data = res.data
                    console.log(res)
                    this.languages = data
                    
                })
                .catch(() => {
                    this.$router.push({ name: 'home' })
                });
        
        // actor data
        axios.get("http://localhost:8080/api/admin/actor/get/all")
                .then((res) => {
                    let data = res.data
                    console.log(res)
                    this.actors = data

                })
                .catch(() => {
                    this.$router.push({ name: 'home' })
                });

        // writer data
        axios.get("http://localhost:8080/api/admin/writer/get/all")
                .then((res) => {
                    let data = res.data
                    console.log(res)
                    this.writers = data
                })
                .catch(() => {
                    this.$router.push({ name: 'home' })
                });

        // director data
        axios.get("http://localhost:8080/api/admin/director/get/all")
                .then((res) => {
                    let data = res.data
                    console.log(res)
                    this.directors = data
                })
                .catch(() => {
                    this.$router.push({ name: 'home' })
                });

        // genre data
        axios.get("http://localhost:8080/api/admin/genre/get/all")
                .then((res) => {
                    let data = res.data
                    console.log(res)
                    this.genres = data
                })
                .catch(() => {
                    this.$router.push({ name: 'home' })
                });
    
        // platform data
        axios.get("http://localhost:8080/api/admin/platform/get/all")
                .then((res) => {
                    let data = res.data
                    console.log(res)
                    this.platforms = data
                })
                .catch(() => {
                    this.$router.push({ name: 'home' })
                });

    }
    
}
</script>

<template>
    <side />
    <div class="modal">
        <div class="modal-content">
            <div class="auth-header">
                <div class="auth-title">
                    <div class="title">Edit Movie</div>
                </div>
            </div>
            <div class="modal-body">
                <form class="content " v-on:submit.prevent="submitForm" ref="accountForm">
                    <div class="hide-on-success">
                        <div class="form-group">                            
                           <v-text-field clearable label="New Movie Name" name="name" variant="solo" required density="compact" v-model="default_name">

                           </v-text-field>
                        </div>
                        <div class="form-group">

                            <v-text-field clearable label="New Preview Url" name="preview" variant="solo" required density="compact"></v-text-field>
                        </div>

                        <div class="form-group"
                        >
                            <v-select
                                label="Languages"
                                :items="languages"
                                item-title="name"
                                item-value="id"
                                variant="solo"
                                density="compact"
                                required
                                
                            ></v-select>
                        </div>
                        
                        <div class="form-group"
                        >
                            <v-select

                                chips
                                label="Actors"
                                :items="actors"
                                item-title="name"
                                item-value="id"
                                multiple
                                variant="solo"
                                density="compact"
                                required
                            ></v-select>
                        </div>

                        <div class="form-group"
                        >
                            <v-select

                                chips
                                label="Writers"
                                :items="writers"
                                item-title="name"
                                item-value="id"
                                multiple
                                variant="solo"
                                density="compact"
                                required
                            ></v-select>
                        </div>

                        <div class="form-group"
                        >
                            <v-select

                                chips
                                label="Directors"
                                :items="directors"
                                item-title="name"
                                item-value="id"
                                multiple
                                variant="solo"
                                density="compact"
                                required
                            ></v-select>
                        </div>
                        
                        <div class="form-group"
                        >
                            <v-select

                                chips
                                label="Genres"
                                :items="genres"
                                item-title="name"
                                item-value="id"
                                multiple
                                variant="solo"
                                density="compact"
                                required
                            ></v-select>
                        </div>

                        <div class="form-group"
                        >
                            <v-select

                                chips
                                label="Platforms"
                                :items="platforms"
                                item-title="name"
                                item-value="id"
                                multiple
                                variant="solo"
                                density="compact"
                                required
                            ></v-select>
                        </div>
                        <v-file-input clearable label="Image" variant="solo" density="compact"
                                required></v-file-input>
                        
                        <div class="form-group">
                        
                            <input type="date" name="release" class="form-control" required>
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
    <foot />
</template>

<style scoped>
.modal {
    align-content: center;
    padding: 280px;
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
