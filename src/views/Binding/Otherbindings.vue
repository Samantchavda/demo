<template>
  <div>
    <h2> {{ msg }}</h2> 
    Other Bindings Include condition, loops and User Input
    <div class="demoexample">
      <h3> Condition </h3>
      <div class="note">
      Code:
      {{ html }}
      </div>
      <div class="demo">
        Result: <br/>
        <input type="checkbox" id="checkbox" v-model="seen">
        <span v-if="seen">Now you see me</span>
        <span v-else>Click on check box for show data</span>
      </div>
    </div>

    <div class="demoexample">
      <h3> Loops </h3>
      <div class="note">
      Code:
      {{ loophtml }}
      </div>
      <div class="demo">
        Result: <br/>
        <ul>
          <li  v-for="(item, index) in JsFramwork" :key="index">
              {{ item.text }}
          </li>
        </ul>
      </div>
    </div>

    <div class="demoexample">
      <h3> Handling User Input </h3>
      <div class="note">
      Code:
      {{ UserInputhtml }}
      </div>
      <div class="demo">
        Result: <br/>
        <p>{{ message }}</p>
        <button v-on:click="reverseMessage">Reverse Message</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Otherbindings',
  data () {
    return {
      msg: 'Other Binding',
      html: `<span v-if="seen">Now you see me</span>
      <span v-else>Click on check box for show data</span>`,
      seen: true,
      JsFramwork: [
      { text: 'Node' },
      { text: 'Vue' },
      { text: 'Angular' }
      ],
      loophtml : `<ul>
          <li  v-for="(item, index) in JsFramwork" :key="index">
              {{ item.text }}
          </li>
        </ul>`,
      message: 'Hello !',
      UserInputhtml: `<p>{{ message }}</p>
        <button v-on:click="reverseMessage">Reverse Message</button>` 
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>