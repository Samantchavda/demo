<template>

 <div> 
    <h2> {{ msg }}</h2> 

    <div class="demoexample">
         <h3>Form</h3>
        <div class="col-md-12">
            <div class="row">
                <label>First Name : </label>
                <input type="text" v-model="fname">
            </div>
            <div class="row">
                <label>Gender : </label>
                <div  v-for="(item, index) in fgenderlist" :key="index">
                    <input type="radio" :value="item" v-model="fgender">
                    <span>{{item }}</span>
                </div>
            </div>
            <div class="row">
                <label>JS Framwork : </label>
                <div  v-for="(item, index) in flanguagelist" :key="index">
                    <input type="checkbox" :value="item" v-model="flanguage">
                    <span>{{ item }}</span>
                </div>
            </div>
            <div class="row">
                <label>Environment : </label>
                <select v-model="fenviroment">
                    <option  v-for="(item, index) in fenviromentlist" :key="index">
                        {{ item }}
                    </option>
                </select>
            </div>
            <div class="row">
                <button v-on:click="submit">Submit</button>
            </div>
        </div>
    </div>

    <div class="demoexample">
         <h3>Result</h3>
        <div class="col-md-12">
            <div class="row">
                <label>First Name :  {{ fname }}</label>
            </div>
            <div class="row">
                <label>Gender :  {{ fgender }}</label>
            </div>
            <div class="row">
                <label>JS Framwork :  {{ flanguage }}</label>
            </div>
            <div class="row">
                <label>Environment :  {{ fenviroment }}</label>
            </div>
        </div>
    </div>
 </div>
  
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      msg: 'Form Demo',
      fname:'',
      fgender:'',
      fgenderlist:['Male','Female'],
      flanguagelist:['javaScript','Node','Anglar' ,'Vue'],
      flanguage :[],
      fenviromentlist:['Prod','Stage','Dev'],
      fenviroment :''
    }
  },
  methods:{
      submit : function(){
          var message = "First Name :  " + this.fname + '\n';
          message += "Gender :  " + this.fgender + '\n';
          message += "JS Framwork :  " + this.flanguage.toString() + '\n';
          message += "Environment :  " + this.fenviroment ;
          alert(message);
      }
  }
}
</script>