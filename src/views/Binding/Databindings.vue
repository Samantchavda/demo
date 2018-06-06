<template>

 <div>
    <h2> {{ msg }}</h2> 
    <div>
      Mainly 2 type of binding in vue <br/>
      1) Declarative Bindings <br/>
      2) Semantic Bindings <br/>
      <br/>
      And another one is Once Binding
    </div>

    <div class="demoexample">
      <h3> Declarative Bindings </h3>
      <div class="note">
      {{ Dbindingmsg }}
      Code:
      {{ Dbindinghtml }}
      </div>
      <div class="demo">
        Result: <br/>
        <div v-html="msg"></div>
      </div>
    </div>

    <div class="demoexample">
      <h3> Semantic Bindings </h3>
      <div class="note">
      {{ Sbindingmsg }}
      Code:
      {{ Sbindinghtml }}
      </div>
      <div class="demo">
        Result: <br/>
        <div>{{ msg }}</div>
      </div>
    </div>

    <div class="demoexample">
      <h3> Once Bindings </h3>
      <div class="note">
      {{ Obindingmsg }}
      Code:
      {{ Obindinghtml }}
      </div>
      <div class="demo">
        Result: <br/>
        <div v-once>{{ msg }}</div>
        <br/><br/>
        For test, change message:  <br/>
        <input v-model="msg" placeholder="edit me">
      </div>
    </div>

 </div>
  
</template>

<script>
export default {
  name: 'Databindings',
  data () {
    return {
      msg: 'Binding in vue',
      Dbindingmsg: `Created via directives 
      All backed-in directives begon with "v-" `,
      Dbindinghtml:'<div v-html="msg"></div>',
      Sbindingmsg: 'Semantic Bindings use {{ }}',
      Sbindinghtml:'<div >{{ msg }}</div>',
      Obindingmsg: 'Once Bindings use v-once',
      Obindinghtml:'<div v-once>{{ msg }}</div>',
    }
  }
}
</script>