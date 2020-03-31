<template>
    <div class="col-12">
        <div class="input-group">
            <input
                v-bind:value="strSearch"
                v-on:input="handleSearch"
             type="text" class="form-control" placeholder="Search for name..." />
            <span class="input-group-append">
                <button
                    v-on:click="clearSearch"
                 class="btn btn-info" type="button">Clear!</button>
            </span>
        </div>
    </div>
</template>

<script>
export default {
   name:'control-searh',
   props:{
       strSearch:{type:String,default:''},
   },
   data(){
       return{

       }
   },
   methods:{
		handleSearch(e){
            console.log(e.target);
            this.$emit("handleSearch",e.target.value);
        },
        clearSearch(){
            this.$emit("handleSearch",'');
        }
   } 
}
</script>

<style>

</style>