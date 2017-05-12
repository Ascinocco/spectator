<template>
    <div>
        <h1 class="text-center">Profile</h1>
        <div class="col-md-offset-4 col-md-4">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="alert alert-danger" v-if="message.success == false && message.content != ''">
                        {{ message.content }}
                    </div>
                    <div class="alert alert-info" v-if="message.success == true && message.content != ''">
                        {{ message.content }}
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" class="form-control" v-model="user.name">
                        <br>
                        <label for="email">Email</label>
                        <input type="email" id="email" class="form-control" v-model="user.email">
                        <br>
                        <div>
                            <button class="btn btn-primary fullButton" v-on:click="update()">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: '',
                    email: ''
                },

                message: {
                    success: '',
                    content: ''
                }
            }
        },

        methods: {
            update () {
                this.message.success = '';
                this.message.content = '';

                axios.post('/user/store', {
                    name: this.user.name,
                    email: this.user.email
                })
                .then(res => {
                    this.message.success = res.data.success;
                    this.message.content = res.data.message;
                })
                .catch(error => {
                    this.message.success = res.data.success;
                    this.message.content = res.data.message;
                    console.error(error);
                });
            },
        },

        

        mounted () {
            console.log('Component Mounted...');
        },

        created () {
            // get user data from server
            axios.get('/user')
            .then(res => {
                this.user = res.data.user;
            });
        }
    }
</script>

<style>
    .fullButton {
        display: block;
        width: 100%;
    }
</style>