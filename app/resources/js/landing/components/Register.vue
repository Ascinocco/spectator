<template>
    <div>
        <div class="container">
            <div class="col-md-offset-4 col-md-4">
                <div class="row text-center">
                    <br>
                    <router-link to="/" exact>Home</router-link> |
                    <router-link to="/login">Login</router-link>
                </div>
                <div class="row">
                    <br>
                    <br>
                </div>
                <div class="panel panel-default">
                    <div class="panel-body" style="background-color: #778899;">

                                <form class="form-signin" action="/register" method="POST">
                                    <h2 class="form-signin-heading text-center" style="color: white;">Please Register</h2>

                                    <div class="form-group">
                                        <label for="email" class="sr-only">Email</label>
                                        <input type="email" id="email" name="email" class="form-control" placeholder="Email address" required autofocus>
                                    </div>

                                    <div class="form-group">
                                        <label for="name" class="sr-only">Name</label>
                                        <input type="text" id="name" name="name" class="form-control" placeholder="Name" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="password" class="sr-only">Password</label>
                                        <input type="password" id="password" name="password" class="form-control" placeholder="Password" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="confirmPassword" class="sr-only">Confirm Password</label>
                                        <input type="password" id="confirmPassword" name="confirmPassword" class="form-control" placeholder="Confirm Password" required>
                                    </div>

                                    <div>
                                        <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                                    </div>
                                </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>