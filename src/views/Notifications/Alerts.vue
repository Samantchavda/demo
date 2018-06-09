<template>

 <div> 
    <h2> {{ msg }}</h2> 

    <div class="demoexample">
      <p> For Alert Notification <br/>
        we are use vue-notifications library <br/>
        npm install --save vue-notification <br/>
        For More inforamtion <a href="http://vue-notification.yev.io/" target="_blank">vue-notification</a>
      </p>
        <div>
            <h3>CSS animation:</h3>
            <button v-on:click="Notify('foo')"> Notification </button>
            <button v-on:click="Notify('foo','success')"> Sucess </button>
            <button v-on:click="Notify('foo','warn')"> Warning </button>
            <button v-on:click="Notify('foo','error')"> Error </button>
        </div>
    <div>
      <h3>Velocity animation:</h3>
      <button v-on:click="Notify('foo-velocity')"> Notification </button>
      <button v-on:click="Notify('foo-velocity','success')"> Sucess </button>
      <button v-on:click="Notify('foo-velocity','warn')"> Warning </button>
      <button v-on:click="Notify('foo-velocity','error')"> Error </button>
    </div>
    <div>
      <h3>Custom style:</h3>
      <button v-on:click="Notify('notify-custom-style')"> Top Center Notification (Max 3)</button>
    </div>
    <div>
      <h3>Custom Template:</h3>
      <button v-on:click="Notify('notify-custom-template')"> Top left Notification </button>
    </div>
    </div>
 </div>
  
</template>



<script>

import { Notify } from '@/components/mixins/Notification.js'
export default {
  name: 'Alerts',
  mixins: [Notify],
  data () {
    return {
      msg: 'Notification Alerts',
    }
  }
}
</script>