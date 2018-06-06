<template>

 <div> 
    <h2>
      {{ msg }}
    </h2>
    <div class="demoexample">
      <h2>Single Checkbox</h2>
      <div class="note">
      {{ html }}
      </div>
      <div class="demo">
        Result: <br/>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox" >{{ checked }}</label>
      </div>
    </div>
    <div class="demoexample">
      <h2>Multiple Checkbox</h2>
      <div class="note">
      {{ Multiselecthtml }}
    </div>
    <div class="demo">
      Result: <br/>
      <input type="checkbox" id="Node" value="Node" v-model="checkedScripts">
      <label for="Node">Node</label>
      <input type="checkbox" id="Angular" value="Angular" v-model="checkedScripts">
      <label for="Angular">Angular</label>
      <input type="checkbox" id="Vue" value="Vue" v-model="checkedScripts">
      <label for="Vue">Vue</label>
      <br>
      <span>Checked names: {{ checkedScripts }}</span>
    </div>
    </div>
 </div>
  
</template>

<script>
export default {
  name: "Checkboxtag",
  data() {
    return {
      msg: "CheckBox Binding",
      html: `Code:
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>`,
      checked: false,
      Multiselecthtml: `Code:
      <input type="checkbox" id="Node" value="Node" v-model="checkedScripts">
      <label for="Node">Node</label>
      <input type="checkbox" id="Angular" value="Angular" v-model="checkedScripts">
      <label for="Angular">Angular</label>
      <input type="checkbox" id="Vue" value="Vue" v-model="checkedScripts">
      <label for="Vue">Vue</label>
      <br>
      <span>Checked names: {{ checkedScripts }}</span>`,
      checkedScripts: []
    };
  }
};
</script>