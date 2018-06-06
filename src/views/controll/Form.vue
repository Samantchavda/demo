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
                <!-- <input type="radio" value="Male" v-model="fgender">
                <span>Male</span>
                <input type="radio" value="Female" v-model="fgender">
                <span>Female</span> -->
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
      fgenderlist:['Male','Female']
    }
  }
}
</script>