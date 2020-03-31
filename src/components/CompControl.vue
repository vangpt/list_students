<template>
        <div class="col-12 col-lg-6">
            <div class="row">
                <!-- <control-sort/>
                <control-gt/> -->
                <control-search 
                    v-bind:strSearch="strSearch"
                    v-on:handleSearch="handleSearch"
                />
            </div>
        </div>
</template>

<script>
import ControlSort from './ControlSort'
import ControlGt from './ControlGt'
import ControlSearch from './ControlSearch'
export default {
   name:'comp-control',
   components:{
       ControlSort,
       ControlGt,
       ControlSearch,
   },
   props:{
       strSearch:{type:String,default:''},
   },
   data(){
       return{

       }
   },
   methods:{
       handleSearch(strSearch){
            this.$emit("handleSearch",strSearch);
       }
   } 
}
</script>

<style>

</style>