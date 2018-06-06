<template>

 <div> 
    <h2> {{ msg }}</h2> 

    <div class="demoexample">
      <h3> Radio Bindings </h3>
      <div class="note">
      Code:
      {{ html }}
      </div>
      <div class="demo">
        Result: <br/>
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
      </div>
    </div>
 </div>
  
</template>

<script>
export default {
  name: 'Radiotag',
  data () {
    return {
      msg: 'Radio Button Binding',
      html:`<input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>`,
      picked: '',
    }
  }
}
</script>