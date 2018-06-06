<template>

 <div> 
    <h2> {{ msg }}</h2> 
    CSS Binding includes class and style binding

    <div class="demoexample">
      <h3> Class Bindings </h3>
      <div class="note">
      Code:
      {{ html }}
      </div>
      <div class="demo">
        Result: <br/>
        <input type="checkbox" id="checkbox" v-model="isActive">
        <label for="checkbox"> Is Active</label> <br/>
        <b>Object Syntax</b>
        <div v-bind:class="{ active: isActive }">Active class</div>
        <b>class object</b>
        <div v-bind:class="classObject">Active class</div>
        <b>Array Syntax</b>
        <div v-bind:class="[ isActive ? activeclass : errorclass ]">Active class</div>
        <div v-bind:class="[ {active : isActive } ]">Active class</div>
      </div>
    </div>

    <div class="demoexample">
      <h3> Style Bindings </h3>
      <div class="note">
      Code:
      {{ stylehtml }}
      </div>
      <div class="demo">
        Result: <br/>
        <b>Object Syntax</b>
        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">Active class</div>
        <b>class object</b>
        <div v-bind:style="styleObject">Active class</div>
        <b>Array Syntax</b>
        <div v-bind:style="[ styleObject]">Active class</div>
      </div>
    </div>
 </div>

 
  
</template>

<script>
export default {
  name: 'Cssbindings',
  data () {
    return {
      msg: 'CSS Binding',
      html:`Object Syntax :
        <div v-bind:class="{ active: isActive }">Active class</div>
        class object
        <div v-bind:class="classObject">Active class</div>
        Array Syntax
        <div v-bind:class="[ isActive ? activeclass : errorclass ]">Active class</div>
        <div v-bind:class="[ {active : isActive } ]">Active class</div>`,
       isActive: true,
       classObject: {
            active: true
        },
        activeclass :'active',
        errorclass: 'error',
        activeColor : 'green',
        fontSize :20,
        styleObject:{color:'green'},
        stylehtml:`<b>Object Syntax</b>
        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">Active class</div>
        <b>class object</b>
        <div v-bind:style="styleObject">Active class</div>
        <b>Array Syntax</b>
        <div v-bind:style="[ styleObject]">Active class</div>`
    }
  }
}
</script>

<style lang="scss" scoped>
    .active {
        color: green;
    }

    .error {
        color: red
    }
</style>

