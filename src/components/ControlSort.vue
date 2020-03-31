<template>
    <div class="col-12">
        <!-- <div class="form-group">
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort by
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Name ASC</a>
                    <a class="dropdown-item" href="#">Name DESC</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Level ASC</a>
                    <a class="dropdown-item" href="#">Level DESC</a>
                </div>
                <span class="badge badge-success badge-medium">NAME - DESC</span>
            </div>
        </div> -->
        <b-dropdown id="dropdown-1" text="Sort By">
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item active>Active action</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
        <span class="badge badge-success badge-medium">NAME - DESC</span>
    </div>
</template>

<script>
export default {
   name:'control-sort',
   data(){
       return{

       }
   } 
}
</script>

<style>

</style>