<template>
    <tr>
        <td class="text-center">{{stt}}</td>
        <td>{{student.masv}}</td>
        <td>{{student.name}}</td>
        <td class="text-center"><span ><i class="fas" v-bind:class="getSexName"></i></span></td>
        <td class="text-center"><span class="badge badge-info">{{student.score}}</span></td>
        <td>
            <button type="button" class="btn btn-warning"
                v-on:click="handleEdit"
            >Edit</button>
            <button type="button" class="btn btn-danger"
                v-on:click="deleteStudent"
            >Delete</button>
        </td>
    </tr>
</template>

<script>
export default {
   name:'list-item',
   props:{
       student:{type:Object,default:null},
       stt:{type:Number,default:0}
   },
   data(){
       return{

       }
   },
   computed:{
       getSexName(){
           switch(this.student.sex){
               case 0:
                    return 'fa-mars';
               case 1:
                    return 'fa-venus';
                default:
                    return '';
           }
       }
   },
   methods:{
       deleteStudent(){
           if(confirm('Bạn có muốn xóa học sinh: '+this.student.name))
                this.$emit('handleDelete',this.student);
       },
       handleEdit(){
           this.$emit('handleEdit',this.student);
       }
   }
}
</script>

<style>

</style>