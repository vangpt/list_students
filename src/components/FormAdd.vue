<template>

        <div class="form-group add-task">
            <button
                v-on:click="turnOnForm"
                v-if="!isShowForm"
             type="button" class="btn btn-info btn-block">Add New Student</button>
            <button
                v-on:click="turnOffForm"
                v-else
             type="button" class="btn btn-info btn-block">Close</button>
            
        </div>
        
</template>

<script>

export default {
   name:'form-add',
   props:{
       isShowForm:{type:Boolean,default:false}
   },
   data(){
       return{

       }
   },
   methods:{
       turnOnForm(){
           this.$emit('toggleForm');
           
       },
       turnOffForm(){
           this.$emit('toggleForm');
       }
   } 
}
</script>

<style>

</style>