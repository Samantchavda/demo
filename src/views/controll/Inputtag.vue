<template>

 <div> 
    <h2> {{ msg }}</h2> 

    <div class="demoexample">
      <h3> Input Bindings </h3>
      <div class="note">
      Code:
      {{ html }}
      </div>
      <div class="demo">
        Result: <br/>
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>
      </div>
    </div>
 </div>
  
</template>

<script>
export default {
  name: 'inputtag',
  data () {
    return {
      msg: 'Input Binding',
      html:`<input v-model="message" placeholder="edit me"> 
       <p>Message is: {{ message }}</p>`,
      message: 'Vue js'
    }
  }
}
</script>