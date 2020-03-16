<template>
	<div id="app">
		<main>
			<h1>
				VUE BOOTSTRAP MODAL
			</h1>
			<hr>
			
			<div>
				<h2>EXAMPLES</h2>

				<button class="btn btn-primary" @click="(show = true)">
					REGISTER FORM
				</button>

				<bootstrap-modal v-bind="{id, title, show}" @close="(show = false)">
					<form>
						<div class="form-group">
							<label for="name">Name</label>
							<input type="text" name="name" id="name" class="form-control">
						</div>
						<div class="form-group">
							<label for="email">Email</label>
							<input type="email" name="email" id="email" class="form-control">
						</div>
						<div class="form-group">
							<label for="password">Password</label>
							<input type="password" name="password" id="password" class="form-control">
						</div>
						<div class="form-group">
							<button class="btn btn-danger" data-dismiss="modal">
								CANCEL
							</button>
							&nbsp;
							<button class="btn btn-success">
								SAVE
							</button>
						</div>
					</form>
				</bootstrap-modal>
			</div>
		</main>
	</div>
</template>

<style lang="css">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	text-align: justify;
	padding: 64px 32px;
}

h1 {
	text-align: center;
}
</style>

<script>
export default {
	name: "App",

	data() {
		return {
			id: 'register-form-modal',
			title: "register",
			show: false
		};
	},
};
</script>
