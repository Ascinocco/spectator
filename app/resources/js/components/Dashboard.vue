<template>
    <div>
        <div class="row">
            <div class="col-md-4">
                <div class="text-left">
                    <button class="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i></button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="text-center">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search...">
                        <span class="input-group-btn">
                            <button class="btn btn-primary" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="text-right">
                    <div class="dropdown">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropDownMenuFilters" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Filters <span class="caret"></span></button>
                        <ul class="dropdown-menu dropDown-addon" aria-labelledby="dropDownMenuFilters">
                            <li><a href="#">Has Errors</a></li>
                            <li><a href="#">Tests Failing</a></li>
                            <li><a href="#">Oldest First</a></li>
                            <li><a href="#">Youngest First</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <hr style="height: 1.5px; color: black; background-color: black;">
        </div>
        <div class="row">
            <div class="text-center">
                <h1>Dashboard</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .dropDown-addon {
        left: 74%;
        right: auto;
        text-align: center;
        transform: translate(-50%, 0);
    }
</style>