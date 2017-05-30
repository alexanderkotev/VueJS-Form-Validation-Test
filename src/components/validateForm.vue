<template>
	<div class="validate-form">
		<form class="details-form" method="post" @submit.prevent="submit" novalidate>
			<div class="field field-email">
			    <label class="label" for="email">Email</label>
   				<p :class="{ 'control': true }">
			        <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text">
			        <!-- <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span> -->
    			</p>
			</div>

			<div class="field field-pass">
			    <label class="label" for="password">Password</label>
   				<p :class="{ 'control': true }">
   					<span class="password-container">
				        <input v-validate="'required|alpha_num|regex:^(?=.*[a-z])(?=.*?[0-9])'" :class="{'input': true, 'is-danger': errors.has('password') }" name="password" type="password" id="password">
				        <input type='button' v-on:click='changepasstype' id="pass-button" value="Show" class="showbutton">
			        </span>
			        <!-- <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span> -->
    			</p>
			</div>

			<div class="field field-confpass">
			    <label class="label" for="confirm password">Confirm Password</label>
   				<p :class="{ 'control': true }">
   					<span class="password-container">
				        <input v-validate="'required|confirmed:password'" :class="{'input': true, 'is-danger': errors.has('confirm password') }" name="confirm password" type="password" id="passconf">
				        <input type='button' v-on:click='changepassconftype' id="passconf-button" value="Show" class="showbutton">
				    </span>
			        <!-- <span v-show="errors.has('confirm password')" class="help is-danger">{{ errors.first('confirm password') }}</span> -->
    			</p>
			</div>

			<div class="field field-phone">
				<label for="phone" :class="{'is-danger' : errors.has('phone') }">Phone number</label>
				<p :class="{ 'control': true }">
					<input v-validate="'required|numeric'" :class="{'input': true, 'is-danger' : errors.has('phone') }" type="text" id="phone" name="phone">
					<!-- <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span> -->
				</p>
			</div>
			<div class="auth-button-container">
				<button class="auth-button">Send authentication code</button>
			</div>

			<p :class="{'checkbox-container': true, 'control': true}">
			<input v-validate="'required'" :class="{'input': true, 'is-danger' : errors.has('checkbox') }" type="checkbox" id="checkbox" name="checkbox">
			<label for="checkbox" id="checkbox-label" :class="{'is-danger' : errors.has('checkbox') }">Your business has an annual turnover of at least $100000</label>
			<!-- <span v-show="errors.has('checkbox')" class="help is-danger">{{ errors.first('checkbox') }}</span> -->
			</p>
			</br>
			<p :class="{'submit-container': true, 'control': true}">
				<button type="submit">Submit</button>
			</p>
		</form>
	</div>
</template>
<script>
	export default {
		name: 'validateForm',
	  	methods: {
	  		submit() {
	  			this.$validator.validateAll().then(() => {
         			 console.log('Success!');
     				 }).catch(() => {
          			console.log('Not valid!');
     		 });
	  		},
	  		//I failed to do it using a single function 
	  		changepasstype() {
	  			var parent = document.getElementById('password');
	  			var element = document.getElementById('pass-button');
	  			if(parent.type == 'text') {
	  				parent.type = 'password';
	  				element.value = 'Show';
	  			}
	  			else {
	  				parent.type = 'text';
	  				element.value = 'Hide';
	  			}
	  		},
	  		changepassconftype() {
	  			var parent = document.getElementById('passconf');
	  			var element = document.getElementById('passconf-button');
	  			if(parent.type == 'text') {
	  				parent.type = 'password';
	  				element.value = 'Show';
	  			}
	  			else {
	  				parent.type = 'text';
	  				element.value = 'Hide';
	  			}
	  		}	  		
	  	}
	}
</script>

<style scoped>
	.help {
		color: red;
		font-size: 10px;
		display: block;
	}
	.is-danger {
		border-color: red;
	}
	#checkbox-label {
		font-size: 14px;
		vertical-align: super;
	}
</style>