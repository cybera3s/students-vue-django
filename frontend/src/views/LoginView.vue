<template>
	
	<div class="LoginView">

  		<div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto border shadow rounded p-4 mt-3">
  			<!-- Login Form -->
			<form @submit.prevent="doLogin">
				<h1 class="text-center fw-bold">Login</h1>
				<hr>
              	<div class="mb-3">
	            	<label for="username" class="form-label">Username *</label>
	                <input 
	                    type="text" 
	                    class="form-control" id="username" 
	                    v-model="username"
	                    :class="{
	                      'is-invalid': usernameE === true,
	                      'is-valid': usernameE === false
	                    }">
	                    <div class="invalid-feedback" v-if="usernameE">
	                      {{usernameEM}}
	                    </div>
              	</div>

              	<div class="mb-3">
	                <label for="password" class="form-label">Password *</label>
	                <input 
	                type="password" 
	                class="form-control" id="password" 
	                v-model="password"
	                :class="{
	                  'is-invalid': passwordE === true,
	                  'is-valid': passwordE === true
	                }">
	                 <div class="invalid-feedback" v-if="passwordE">
	                      {{passwordEM}}
	                    </div>
              	</div>

              	<button type="submit" class="btn btn-primary w-100 fw-bold">Login</button>

          </form>

      	</div>

	</div>

</template>

<script>
export default {
	name: 'LoginView',

}

</script>