<template>
    <div class="col-12 col-lg-6">
        <form-add
            v-bind:isShowForm="isShowForm"
            v-on:toggleForm="toggleForm"
        />

        <form v-if="isShowForm" action="" method="POST" class="form-inline justify-content-between">
            
            <div class="form-group">
                <label class="sr-only" for="">Mã Sinh Viên</label>
                <input type="number" class="form-control" placeholder="Mã Sinh Viên" v-model="masv" v-bind:disabled="studentSelected !== null" />
            </div>
            <div class="form-group">
                <label class="sr-only" for="">Name</label>
                <input type="text" class="form-control" placeholder="Name" v-model="name"/>
            </div>
            
            
            <div class="form-group">
                <b-form-radio name="gt" value="0" v-model="sex">Nam&nbsp;</b-form-radio>
                <b-form-radio name="gt" value="1" v-model="sex">Nữ</b-form-radio>
            </div>
            <div class="form-group">
                <label class="sr-only" for="">Điểm</label>
                <input type="number" class="form-control" placeholder="Điểm" v-model="score"/>
            </div>
            
            <div>
            <button
                v-if="studentSelected === null"
             type="button" class="btn btn-primary" v-on:click="handleAddNew">Add</button>
            <button v-else type="button" class="btn btn-primary" v-on:click="handleEditStudent">Update</button>
            <button type="button" class="btn btn-secondary"
            v-on:click="handleCancel"
            >Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
import FormAdd from './FormAdd'
export default {
   name:'comp-form',
   components:{
       FormAdd,
   },
   props:{
       isShowForm:{type:Boolean,default:false},
       studentSelected:{type:Object,default:null}
   },
   data(){
       return{
           masv:'',
           name:'',
           score:'',
           sex:0,
       }
   },
   watch:{
       studentSelected : function(newData,oldData){
           if(newData !== null){
           this.masv = newData.masv;
           this.name = newData.name;
           this.score = newData.score;
           this.sex = newData.sex;
       };
           console.log('watch',newData,oldData);
       }
   },
//    beforeUpdate(){
//        if(this.studentSelected !== null){
//            this.masv = this.studentSelected.masv;
//            this.name = this.studentSelected.name;
//            this.score = this.studentSelected.score;
//            this.sex = this.studentSelected.sex;
//        };
//        console.log('beforeUpdate',this.studentSelected);
//    },
   
   methods:{
       toggleForm(){
           this.$emit('toggleForm');
           this.handleReset();
       },
       handleCancel(){
           this.$emit('toggleForm');
           this.handleReset();
       },
       handleAddNew(){
           let Obj={
               masv:parseInt(this.masv),
               name:this.name,
               score:parseFloat(this.score),
               sex:parseInt(this.sex),
           };
           this.$emit('handleAddNew',Obj);
           this.handleCancel();
       },
       handleReset(){
           this.masv='';
           this.name='';
           this.score='';
           this.sex=0;
       },
       handleEditStudent(){
           let objEdit ={
               masv:parseInt(this.studentSelected.masv),
               name:this.name,
               score:parseFloat(this.score),
               sex:parseInt(this.sex),
           };
           this.$emit('handleEditStudent',objEdit);
           console.log('handel edit',this.studentSelected);
           this.handleReset();
       }
   } 
}
</script>

<style>

</style>