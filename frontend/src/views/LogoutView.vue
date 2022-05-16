<script>
	import axios from "axios"

	export default {
		name: "LogoutView",
		beforeMount(){
			axios
              .post('/api/auth/token/logout/')
              .then(response =>  {

                    this.$store.commit("logout")
                    this.$router.push("login")

              })
              .catch(error => {
                  console.log(error.response.data)
              })
		},
	}
</script>