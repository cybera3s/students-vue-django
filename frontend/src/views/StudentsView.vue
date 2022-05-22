<template>
	<div class="StudentView">
		<div class="row">
			<div class="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 mx-auto">
				
				<input class="mb-3 form-control" type="text" ref="search" v-model="search" placeholder="Search...">

				<h1 class="fw-bold">Students</h1>
				<hr>
				<div v-if="filteredStudents.length">
					<!-- students table -->
					<table class="table table-dark table-hover">
					  <thead>
					    <tr>
					      <th scope="col">#</th>
					      <th scope="col">Name</th>
					      <th scope="col">Age</th>
					      <th scope="col">Field</th>
					      <th scope="col"></th>
					    </tr>
					  </thead>
					  <tbody v-for="student in filteredStudents">
					    <tr>
					      <th scope="row">{{ students.indexOf(student) + 1 }}</th>
					      <td>{{ student.name }}</td>
					      <td>{{ student.age }}</td>
					      <td>{{ student.field }}</td>
					      <td class="text-center"><span class="fw-bold" style="cursor: pointer;" @click="doDel(student.id, students.indexOf(student), $event)">X</span></td>

					    </tr>
					  </tbody>
					</table>
				</div>
				<!-- alert box -->
				<div class="alert alert-warning text-center" v-else>
					There is no Students
				</div>
				<hr>
				<button class="btn btn-primary w-100 fw-bold" @click="adding = !adding" data-bs-toggle="modal" data-bs-target="#newStudent">Add New Student</button>

				<!-- Adding Modal -->
				<div class="modal fade hide" id="newStudent" aria-labelledby="exampleModalLabel" aria-hidden="true" v-show="adding">
				  <div class="modal-dialog modal-dialog-centered">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title" id="exampleModalLabel">New Student</h5>
				        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				      </div>

				      <div class="modal-body p-0">
				      		
				        	<div class="alert alert-danger mt-4 text-center mx-2 alert-dismissible" v-if="addError">
								something went wrong
								  <button type="button" class="btn-close" @click="addError=!addError"></button>

							</div>
							<form @submit.prevent="doAdd" class="mt-3 p-3 mb-2">
					          <div class="mb-3">

					            <label for="name" class="form-label">Name</label>
					            <input type="text" v-model="name" class="form-control" id="name" placeholder="Name">

					          </div>

					          <div class="mb-3">

					            <label for="age" class="form-label">Age</label>
					            <input class="form-control" type="number" v-model="age" id="age" placeholder="Age">

					          </div>

					          <div class="mb-3">

					            <label for="field" class="form-label">Field</label>
					            <input class="form-control" v-model="field" id="field" placeholder="Field">

					          </div>

					          <button class="btn btn-success w-100">Add Student</button>
					        </form> 

				      </div>
				     
				    </div>
				  </div>
				</div>

				
			</div>
		</div>
	</div>
</template>

<script>
	import axios from'axios'

	export default {
		name: 'StudentsView',
		data(){
			return {
				students: [],
				search: '',
				adding: false,
				name: '',
				age: '',
				field: '',
				addError: null,
			}
		},
		mounted(){
			axios
		      .get("/api/student/") 
		      .then(response => {
		          this.students = response.data
		          
      		})
	      this.$refs.search.focus()
		},
		computed:{
			filteredStudents(){
				return this.students.filter(student => {
				return student.name.toLowerCase().includes(this.search.toLowerCase())
			})
			}
		},
		methods: {
			doDel(id, index, e){
				// delete a specific student
				this.$swal({
			          title: 'Are you sure?',
			          text: 'You can\'t revert your action',
			          type: 'warning',
			          showCancelButton: true,
			          confirmButtonText: 'Yes Delete it!',
			          cancelButtonText: 'No, Keep it!',
			          showCloseButton: true,
			          showLoaderOnConfirm: true
			        }).then((result) => {
			          if(result.value) {
			          	axios
					      .delete(`/api/student/${id}`) 
					      .then(response => {
					          console.log(response)
					          console.log(this.filteredStudents)
					          $(e).parent('tr').remove()
					          this.students.splice(index, 1)
		      			})
			            this.$swal({
			          			icon: 'success',
							  title: 'Student Deleted',
							  showConfirmButton: false,
							  timer: 1500
				          })
			          } 
			        })

				
			},
			doAdd(){
				// add new student
				let student = {
					name: this.name,
					age: this.age,
					field: this.field
				}
				if (!student.name || !student.age || !student.field){
					this.addError = true
				}

				if (!this.addError){
					axios
				      .post(`/api/student/`, student) 
				      .then(response => {
				          this.students.push(response.data)
				          this.$swal.fire({
			          			icon: 'success',
							  title: 'New Student Added',
							  showConfirmButton: false,
							  timer: 1500
				          })
				          $("#newStudent").modal('hide');
	      			})
				      .catch(error => {
				      		console.log(error)
				      		this.addError = true
				      })
				}
			}
		},
		watch: {
			adding(){
				$('form').slideDown(300)
				
				
			}
		},
		
		

	}
</script>