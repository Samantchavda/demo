<template>
    <div>
                <!-- CSS animation example -->
    <notifications group="foo" :speed="500"/>

    <!-- Velocity animation example -->
    <notifications group="foo-velocity"
                   position="bottom right"
                   animation-type="velocity"
                   :speed="500" />

    <!-- Custom style example -->
    <notifications group="notify-custom-style"
                   position="top center"
                   classes="notify-n-light"
                   :max="3"
                   :width="400"/>


    <!-- Custom template example -->
     <notifications group="notify-custom-template"
                   :duration="5000"
                   :width="500"
                   animation-name="v-fade-left"
                   position="top left">

       <template slot="body" slot-scope="props">
        <div class="notify-custom-template">
          <div class="custom-template-icon">
            <i class="icon ion-android-checkmark-circle"></i>
          </div>
          <div class="custom-template-content">
            <div class="custom-template-title">
              {{props.item.title}}

              <p>
                template : Custom
              </p>
            </div>
            <div class="custom-template-text"
                 v-html="props.item.text"></div>
          </div>
          <div class="custom-template-close">
            <button v-on:click="props.close">Close</button>
          </div>
        </div>
      </template>
    </notifications>
    </div>
</template>

<script>
export default {
    name: 'AppNotification'
}
</script>


