<template>
	<div id="app">
		<b-container>
			<comp-title/>
			<b-row>
				<comp-control
					v-bind:strSearch="strSearch"
					v-on:handleSearch="handleSearch"
					
				/>
				<comp-form 
					v-bind:isShowForm="isShowForm"
					v-on:toggleForm="toggleForm"
					v-on:handleAddNew="handleAddNew"
					v-on:handleEditStudent="handleEditStudent"
					v-bind:studentSelected="studentSelected"

				/>
			</b-row>
			<comp-table
				v-bind:listStudents="listStudentsSearch"
				v-on:handleDelete="handleDelete"
				v-on:handleEdit="handleEdit"
				v-bind:strSearch="strSearch"
			/>
			
		</b-container>
	</div>
</template>

<script>
import CompTable from './components/CompTable'
import CompTitle from './components/CompTitle'
import CompControl from './components/CompControl'
import CompForm from './components/CompForm'

import listStudents from './mocks/students'
export default {
	name: 'app',
	components:{
		CompTable,
		CompTitle,
		CompControl,
		CompForm,
	},
	data () {
		return {
			listStudents:null,
			isShowForm:false,
			strSearch:'',
			studentSelected:null,
		}
	},
	watch:{
		listStudents:function(newStudent){
			var studentString =JSON.stringify(newStudent);
			localStorage.setItem('students',studentString)
		}
	},
	created(){
		let students = localStorage.getItem('students');
		if(students !== null){
			this.listStudents = JSON.parse(students);
		}
		else{
			this.listStudents = [];
		}
	},
	computed:{
		listStudentsSearch(){
			const {strSearch} = this;
			var newItems = this.listStudents.filter(item => {
				return item.name.toLowerCase().includes(strSearch.toLowerCase());
			});
			// this.listStudents.forEach(function(item,index){
			// 	if(item.name.toLowerCase().includes(strSearch.toLowerCase()))
			// 		newItems.push(item);
			// 	// if(item.masv.includes(strSearch))
			// 	// 	newItems.push(item);
			// });
			return newItems;
		},

	}, 
	methods:{
		toggleForm(){
			if(this.isShowForm) this.studentSelected = null;
			this.isShowForm=!this.isShowForm;
		},
		handleSearch(strSearch){
			this.strSearch = strSearch;
	   },
	   handleDelete(data){
			this.listStudents = this.listStudents.filter(item => {
			   return item.masv !== data.masv;
		   });
		},
		handleAddNew(data){
			console.log('add app',data);
			let index = this.listStudents.findIndex(item => item.masv === data.masv);
			if(index === -1){
				this.listStudents.push(data);
			}
			else{
				alert('Mã sinh viên đã tồn tại');
			}
			
			
		},
		handleEdit(data){
			console.log('app edit', data);
			this.studentSelected = data;
			this.isShowForm = true;
		},
		handleEditStudent(data){
			console.log('app edt',data);
			let index = this.listStudents.findIndex(item => item.masv === data.masv);
			if(index !== -1){
				this.listStudents.splice(index,1,data);
			};
			this.toggleForm();
		}   
	   
	}

}
</script>

<style>

	body {
		padding: 100px 0;
	}
	.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
		vertical-align: middle;
	}

	.container > .row {
		margin-top: 20px;
		margin-bottom: 30px;
	}

	span.badge-medium {
		padding: 11px 10px;
		margin: 0px 8px;
		font-size: 16px;
		display: inline-block;
		vertical-align: top;
	}

	@media (max-width: 992px) {
		.add-task {
			margin-top: 50px;
		}
	}

</style>
