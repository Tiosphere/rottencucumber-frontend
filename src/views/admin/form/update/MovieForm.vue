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
        // name: "",
        // preview: "",
        // release: "",
        default_data: {
            name: "",
            preview: "",
            day: "",
            month: "",
            year: "",
            language: "",
            actors: [],
            new_actors: [],
            writers: [],
            directors: [],
            genres: [],
            platforms: [],
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
            axios.post("http://backend.rottencucumber.tk/api/admin/movie/update/"+ this.$route.params.slug, form)
                .then((res) => {
                    let data = res.data
                    console.log(data)
                    if(data.code === 0) {
                        this.$router.push({ name: 'manage-movies' });
                    }
                })
                .catch((error) => {
                    this.errormsg = "Something happen please try again"
                });
        },
        isInList:function(list, item) {
            if (list.includes(item)) {
                return true;
            }
            else {
                return false;
            }
        },
        getAllId:function(list) {
            const new_list = []
            for (let i = 0; i < list.length; i++) {
                new_list[i] = list[i].id
            }
            return new_list;
        },

        convertMonthOrDay:function(day, month, year) {
            var day_string = day.toString()
            var month_string = month.toString()
            var year_string = year.toString()
            if (day < 10) {
                day_string = '0' + day_string
            }
            if (month < 10) {
                month_string = '0' + month_string
            }
            return year_string + '-' + month_string + '-' + day_string;
        },
    },

    beforeMount() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

        axios.get("http://backend.rottencucumber.tk/api/admin/movie/get/" + this.$route.params.slug)
            .then((res) => {

                let data = res.data
                console.log(data)
                this.default_data.name = res.data.records[0].name
                this.default_data.preview = res.data.records[0].preview
                this.default_data.language = res.data.records[0].language.id

                this.default_data.day = res.data.records[0].day
                this.default_data.month = res.data.records[0].month
                this.default_data.year = res.data.records[0].year

                this.default_data.actors = res.data.records[0].actors
                this.default_data.writers = res.data.records[0].writers
                this.default_data.directors = res.data.records[0].directors
                this.default_data.genres = res.data.records[0].genres
                this.default_data.platforms = res.data.records[0].platform

                this.default_data.summary = res.data.records[0].summary

                // var now = new Date()
                // now.setDate(res.data.records[0].day)
                // now.setMonth(res.data.records[0].month)
                // now.setFullYear(res.data.records[0].year)






            })
            .catch(() => {
                    this.$router.push({ name: 'home' })
                });



        // language data
        axios.get("http://backend.rottencucumber.tk/api/admin/language/get/all")
                .then((res) => {
                    let data = res.data
                    console.log(res)
                    this.languages = data

                })
                .catch(() => {
                    this.$router.push({ name: 'home' })
                });

        // actor data
        axios.get("http://backend.rottencucumber.tk/api/admin/actor/get/all")
                .then((res) => {
                    let data = res.data
                    console.log(res)
                    this.actors = data

                })
                .catch(() => {
                    this.$router.push({ name: 'home' })
                });

        // writer data
        axios.get("http://backend.rottencucumber.tk/api/admin/writer/get/all")
                .then((res) => {
                    let data = res.data
                    console.log(res)
                    this.writers = data
                })
                .catch(() => {
                    this.$router.push({ name: 'home' })
                });

        // director data
        axios.get("http://backend.rottencucumber.tk/api/admin/director/get/all")
                .then((res) => {
                    let data = res.data
                    console.log(res)
                    this.directors = data
                })
                .catch(() => {
                    this.$router.push({ name: 'home' })
                });

        // genre data
        axios.get("http://backend.rottencucumber.tk/api/admin/genre/get/all")
                .then((res) => {
                    let data = res.data
                    console.log(res)
                    this.genres = data
                })
                .catch(() => {
                    this.$router.push({ name: 'home' })
                });

        // platform data
        axios.get("http://backend.rottencucumber.tk/api/admin/platform/get/all")
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
                <form class="content " id="form" v-on:submit.prevent="submitForm" ref="accountForm">
                    <div class="hide-on-success">
                        <div class="form-group">
                            <label>Movie Name: </label>
                            <input type="text" name="name" class="form-control" required placeholder="New Movie Name" :value="this.default_data.name">
                        </div>
                        <div class="form-group">
                            <label>Movie Preview: </label>
                            <input type="url" name="preview" class="form-control" required placeholder="New Preview" :value="this.default_data.preview">
                        </div>
                        <div class="form-group">
                            <label>Movie Release Day: </label>
                            <input type="text" name="day" class="form-control" required placeholder="Release Day" :value="default_data.day">
                        </div>

                        <div class="form-group">
                            <label>Movie Release Month: </label>
                            <input type="text" name="month" class="form-control" required placeholder="Release Month" :value="default_data.month">
                        </div>

                        <div class="form-group">
                            <label>Movie Release Year: </label>
                            <input type="text" name="year" class="form-control" required placeholder="Release Year" :value="default_data.year">
                        </div>


                        <div class="form-group">
                            Choose language:
                            <select name="language" required style="background: white; text-align: center;">
                                <template
                                v-for="item in languages"
                                    :key="item.id"
                                    >

                                <option
                                    v-if="(item.id == this.default_data.language)"

                                    :value="item.id"
                                    selected
                                >
                                {{item.name}}
                                </option>

                                <option
                                    v-else
                                    :value="item.id"
                                >
                                {{item.name}}
                                </option>

                                </template>
                            </select>
                        </div>

                        <div class="form-group">
                            Choose actors:
                            <select name="actors" multiple required
                            >
                                <template
                                    v-for="item in actors"
                                    :key="item.id"

                                >
                                <option

                                    v-if="(isInList(getAllId(this.default_data.actors), item.id))"
                                    :value="item.id"
                                    selected
                                >
                                {{item.name}}
                                </option>

                                <option
                                    :value="item.id"
                                    v-else
                                >
                                {{item.name}}
                                </option>

                                </template>
                            </select>
                        </div>

                        <div class="form-group">
                            Choose writers:
                            <select name="writers" multiple required
                            >
                                <template
                                    v-for="item in writers"
                                    :key="item.id"

                                >
                                <option

                                    v-if="(isInList(getAllId(this.default_data.writers), item.id))"
                                    :value="item.id"
                                    selected
                                >
                                {{item.name}}
                                </option>

                                <option
                                    :value="item.id"
                                    v-else
                                >
                                {{item.name}}
                                </option>

                                </template>
                            </select>
                        </div>

                        <div class="form-group">
                            Choose directors:
                            <select name="directors" multiple required
                            >
                                <template
                                    v-for="item in directors"
                                    :key="item.id"

                                >
                                <option

                                    v-if="(isInList(getAllId(this.default_data.directors), item.id))"
                                    :value="item.id"
                                    selected
                                >
                                {{item.name}}
                                </option>

                                <option
                                    :value="item.id"
                                    v-else
                                >
                                {{item.name}}
                                </option>

                                </template>
                            </select>
                        </div>

                        <div class="form-group">
                            Choose genres:
                            <select name="genres" multiple required
                            >
                                <template
                                    v-for="item in genres"
                                    :key="item.id"

                                >
                                <option
                                    v-if="(isInList(getAllId(this.default_data.genres), item.id))"
                                    :value="item.id"
                                    selected
                                >
                                {{item.name}}
                                </option>

                                <option
                                    v-else
                                    :value="item.id"
                                >
                                {{item.name}}
                                </option>

                                </template>
                            </select>
                        </div>

                        <div class="form-group">
                            Choose platform:
                            <select name="platform" multiple required
                            >
                                <template
                                    v-for="item in platforms"
                                    :key="item.id"

                                >
                                <option
                                    const = item.id
                                    v-if="(isInList(getAllId(this.default_data.platforms), item.id))"
                                    :value="item.id"
                                    selected
                                >
                                {{item.name}}
                                </option>

                                <option
                                    v-else
                                    :value="item.id"
                                >
                                {{item.name}}
                                </option>

                                </template>
                            </select>
                        </div>





                        <div class="form-group">
                            Choose Image:
                            <input type="file" name="image" required>
                        </div>
                        <div class="form-group">
                            <label>Movie Summary: </label>
                            <textarea name="summary" form="form" class="form-control" :value="this.default_data.summary" required>Summary</textarea>
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
