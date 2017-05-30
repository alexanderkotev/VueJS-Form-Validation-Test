<template>
  <div id="app" class="main-container">
    <header>
      <section class="logo-ribbon">
      <span id="green-dot">
        <img src="./assets/green-dot.png">
      </span>
      <div id="logo">
        <img src="./assets/logo.png">
      </div>
      <div class="phone-number">
        <span id="phone-icon"><img src="./assets/phone.png"></span>
        <span id="number">08443 913 376</span>
      </div>
      </section>
      <h1>Register account</h1>
    </header>
    <main>
      <section class="description">
        <div class="left-wrapper wrapper">
          <h2>Apply in just 10 minutes</h2>
          <p class="trimmed">It's quick and easy to apply for a business loan.  We just need a few details before we can make a loan decision.</p>
        </div>
        <div class="wrapper right-wrapper">
          <img id="norton-logo" src="./assets/nortonlogo.png">
          <img id="trust-logo" src="./assets/trust-logo.png">
        </div>
        <p class="not-trimmed">To start the process we need you to first register to create a Customer Account. If you would like to know more about how we collect and use your data, please see our <a href="#">Privacy Policy.</a></p>
      </section>
      <div class="form-container">
        <h2>Your details</h2>
        <validateForm></validateForm>
      </div>
    </main>
  </div>
</template>

<script>
  import validateForm from './components/validateForm'
  import VeeValidate from 'vee-validate';

  export default {
    name: 'app',
    components: {
      validateForm
    }
  }
</script>

<style>
  body {
    margin: 0;
  }
  a {
    color: #e28023;
    text-decoration: none;
  }
  header {
    background-color: #f1f0f0;
    padding-top: 18px;
  }
  .logo-ribbon {
    position: relative;
    height: 108px;
    border-top: 12px solid #8dc63f;
    background-color: #28211f;
  }
  #green-dot {
    position: absolute;
    right: 80px;
    top: -24px;
  }
  #logo {
    float: left;
    padding: 27px 0 30px 85px;
  }
  .phone-number {
   color: #FFF;
   float: right;
   padding: 40px 80px 40px 0;
  }
  .phone-number img {
    margin-bottom: -2px;
  }
  h1 {
    margin: 0;
    padding: 80px 0 70px 85px;
  }
  h2 {
    color: #8dc641;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .main-container {
    max-width: 1110px;
    margin: 0 auto;
  }
  main {
    margin: 0 80px;
  }
  .description {
    margin-top: 30px;
  }
  .description .wrapper {
    float: left;
    width: 50%;
  }
  .description .right-wrapper {
    text-align: right;
  }
  .description .right-wrapper #norton-logo {
    margin-right: 20px;
  }
  .description .not-trimmed {
    clear: both;
  }
  .form-container {
    background-color: #f1f0f0;
    padding: 40px;
  }
  .form-container .details-form {
    text-align: right;
  }
  .details-form label,
  .details-form p.control {
    display: inline-block;
  }
  .details-form label {
    margin-right: 20px;
  }
  .details-form  .password-container {
    position: relative;
  }
  .details-form .showbutton {
    background: none;
    border: none;
    color: #e28023;
    position: absolute;
    right: 10px;
    top: 0px;
  }
  .details-form  .input {
    height: 45px;
    width: 555px;
    border: 0;
    border-bottom: 2px solid #c7c7c7;
    font-size: 20px;
    padding-left: 10px;
  }
  .details-form .field-phone,
  .details-form .auth-button-container {
    display: inline-block;
  }
  .details-form .auth-button-container {
    text-align: center;
  }
  .details-form .auth-button-container .auth-button {
    width: 245px;
    height: 45px;
    background-color: transparent;
    color: #ef7f12;
    border: 1px solid #ef7f12;
  }
  .details-form .field-phone {
    margin-right: 18px;
  }
  .details-form .field-phone .input {
    width: 283px;
  }
  .details-form .checkbox-container {
    margin-right: 137px;
  }
  .details-form #checkbox {
    height: 35px;
    width: 35px;
    vertical-align: sub;
  }
  .details-form .submit-container button {
    background-color: #ef7f12;
    color: #FFF;
    border: 0;
    border-top: 1px solid #f39e4b;
    height: 50px;
    width: 245px;
  }

  @media screen and (min-width: 768px) and (max-width: 980px) {
    .details-form .field-phone .input {
      width: 150px;
    }
    .details-form  .input {
      width: 347px;
    }
    .details-form .auth-button-container .auth-button {
      width: 170px;
    }
    .details-form .checkbox-container {
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    .details-form .input,
    .details-form label,
    .details-form .control,
    .details-form .auth-button-container,
    .details-form .auth-button-container .auth-button,
    .details-form .field-phone,
    .details-form .field-phone .input,
    .details-form .submit-container button {
      width: 100%;  
    }
    .details-form .checkbox-container,
    .details-form .checkbox-container label {
      width: auto;
      margin: 20px 0;
    }
    .details-form label {
      text-align: left;
    }
  }
  @media screen and (max-width: 500px) {
    #logo,
    .phone-number {
      float: none;
      padding: 0;
    }
  }
</style>
