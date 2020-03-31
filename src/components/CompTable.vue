<template>
    <div class="card card-success">
        <div class="card-header text-center"><h3>List Students</h3></div>
        <table class="table table-hover ">
            <thead>
                <tr>
                    <th style="width: 10%" class="text-center">STT</th>
                    <th style="width: 25%">Mã Sinh Viên</th>
                    <th style="width: 25%">Họ Tên</th>
                    <th style="width: 10%" class="text-center">Giới Tính</th>
                    <th style="width: 10%" class="text-center">Điểm</th>
                    <th style="width: 160px">Action</th>
                </tr>
            </thead>

            <tbody v-if="listStudents.length !== 0">
                <list-item
                    v-for="(student,stt) in listStudents" v-bind:key="student.masv"
                    v-bind:student="student"
                    v-bind:stt="stt+1"
                    v-on:handleDelete="handleDelete"
                    v-on:handleEdit="handleEdit"
                />
                
            </tbody>
            <tbody v-else>
                <tr><td colspan="6">Danh sách trống <b>{{strSearch}}</b></td></tr>
            </tbody>

        </table>
    </div>
</template>

<script>
import ListItem from './ListItem'
export default {
   name:'list-table',
   components:{
       ListItem,
   },
   props:{
       listStudents:{type:Array,default:[]},
       strSearch:{type:String,default:''},
   },
   data(){
       return{

       }
   },
   methods:{
       handleDelete(data){
           console.log('delete table',data);
           this.$emit('handleDelete',data);
       },
       handleEdit(data){
           this.$emit('handleEdit',data);
       }
   }
}
</script>

<style>

</style>