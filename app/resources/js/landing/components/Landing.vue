<template>
    <div>
        <div class="site-wrapper">
            <div class="site-wrapper-inner">
                <div class="cover-container">
                    <div class="masthead clearfix">
                        <div class="inner">
                            <h3 class="masthead-brand">
                                <a href="/">
                                    Spectator
                                </a>
                            </h3>
                            <nav>
                                <ul class="nav masthead-nav">
                                    <router-link tag="li" to="/login" exact><a>Login</a></router-link>
                                    <router-link tag="li" to="/register"><a>Register</a></router-link>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div class="inner cover">
                        <h1 class="cover-heading">Super basic continuous deployment</h1>
                        <p class="lead">It's really easy to get started. Register for an account, and leave a docker-compose.yml in the root
                            of your project directory. We'll spin it up every time the branch you specify get's pushed to.
                            We're working on an integration for docker hub as well to assemble your applications from github
                            and dockerhub.
                        </p>
                    </div>

                    <div class="mastfoot">
                        <div class="inner">
                            <p>Copyright &copy; 2017 by <a href="https://www.anthonyscinocco.com">Anthony Scinocco</a>. Styles
                                by @mdo.
                            </p>
                        </div>
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