<template>

 <div> 
    <h2> {{ msg }}</h2> 

    <div class="demoexample">
      <h3> Single Select </h3>
      <div class="note">
      Code:
      {{ html }}
      </div>
      <div class="demo">
        Result: <br/>
        <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>
      </div>
    </div>

    <div class="demoexample">
      <h3> Multi Select </h3>
      <div class="note">
      Code:
      {{ Mhtml }}
      </div>
      <div class="demo">
        Result: <br/>
        <select v-model="selected" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        </select>
        <span>Selected: {{ mselected }}</span>
      </div>
    </div>



 </div>
  
</template>

<script>
export default {
  name: 'Selecttag',
  data () {
    return {
      msg: 'Select Bindings',
      html:`<select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>`,
      selected: '',
      Mhtml:`<select v-model="selected" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        </select>
        <span>Selected: {{ mselected }}</span>`,
      mselected: []
    }
  }
}
</script>