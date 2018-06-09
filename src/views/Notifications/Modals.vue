<template>

 <div> 
    <h2> {{ msg }}</h2> 

    <div class="demoexample">
      <h3> Modal </h3> <br/>
      For this we are using bootstap Modal <br/>
      For More inforamtion <a href="https://bootstrap-vue.js.org/docs/components/modal" target="_blank">Bootstrap Modal</a>
      <div class="demo">

        <!-- Modal Component -->
        <b-modal id="modal1" title="Bootstrap-Vue">
            <p class="my-4">Hello from modal!</p>
        </b-modal>

        <!-- show / hide Open Modal Component -->
        <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
                <h3>Hello From My Modal!</h3>
            </div>
            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
        </b-modal>

        <!-- Modal Using modifiers / value -->
        <b-modal id="myModal">
            Hello From My Modal!
        </b-modal>

        <!-- Modal Using v-model property -->
        <b-modal v-model="modalShow">
            Hello From Modal!
        </b-modal>


        <!-- Modal Component Prevent closing -->
        <b-modal id="modalPrevent"
             ref="modal"
             title="Submit your name"
             @ok="handleOk"
             @shown="clearName">
            <form>
                <b-form-input type="text"
                      placeholder="Enter your name"
                      v-model="name"></b-form-input>
            </form>
        </b-modal>

        <!-- Modal Component Large -->
        <b-modal id="modallg" size="lg" title="Large Modal">
            Hello Modal!
        </b-modal>

        <!-- Modal Component Small -->
        <b-modal id="modalsm" size="sm" title="Small Modal">
            Hello Modal!
        </b-modal>

        <!-- Modal Component Vertically centered -->
        <b-modal id="modal-center" centered title="Bootstrap-Vue">
            <p class="my-4">Vertically centered modal!</p>
        </b-modal>

        <!-- Modal Component Popover -->
        <b-modal id="modalPopover" title="Modal with Popover" ok-only>
            <p>
                This
                <b-btn v-b-popover="'Popover inside a modal!'" title="Popover">
                    Button
                </b-btn>
                triggers a popover on click.
            </p>
            <p>
                This <a href="#" v-b-tooltip title="Tooltip in a modal!">Link</a>
                will show a tooltip on hover.
            </p>
        </b-modal>

        <!-- Modal Component Variants -->
        <b-modal v-model="show"
             title="Modal Variants"
             :header-bg-variant="headerBgVariant"
             :header-text-variant="headerTextVariant"
             :body-bg-variant="bodyBgVariant"
             :body-text-variant="bodyTextVariant"
             :footer-bg-variant="footerBgVariant"
             :footer-text-variant="footerTextVariant">
            <b-container fluid>
                <b-row class="mb-1 text-center">
                    <b-col cols="3"> </b-col>
                    <b-col>Background</b-col>
                    <b-col>Text</b-col>
                </b-row>
                <b-row class="mb-1">
                    <b-col cols="3">Header</b-col>
                    <b-col><b-form-select :options="variants" v-model="headerBgVariant" /></b-col>
                    <b-col><b-form-select :options="variants" v-model="headerTextVariant" /></b-col>
                </b-row>
                <b-row class="mb-1">
                    <b-col cols="3">Body</b-col>
                    <b-col><b-form-select :options="variants" v-model="bodyBgVariant" /></b-col>
                    <b-col><b-form-select :options="variants" v-model="bodyTextVariant" /></b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">Footer</b-col>
                    <b-col><b-form-select :options="variants" v-model="footerBgVariant" /></b-col>
                    <b-col><b-form-select :options="variants" v-model="footerTextVariant" /></b-col>
                </b-row>
             </b-container>
            <div slot="modal-footer" class="w-100">
                <p class="float-left">Modal Footer Content</p>
                <b-btn size="sm" class="float-right" variant="primary" @click="show=false">
                    Close
                </b-btn>
            </div>
        </b-modal>

        <div>
            <p>Demo model</p>
            <b-btn v-b-modal.modal1>Launch demo modal</b-btn>

            <p></p>
            <p>Toggle Modal Visibility</p>
            <b-button @click="showModal">
                show / hide Open Modal
            </b-button>
            <b-btn v-b-modal.myModal>Show Modal using  modifiers </b-btn>
            <b-btn v-b-modal="'myModal'">Show Modal using  value </b-btn>
            <b-button @click="modalShow = !modalShow">
                Open Modal Using V-Model property
            </b-button>
            <b-btn v-b-modal.modalPrevent>Modal prevent closing</b-btn>

            <p></p>
            <p>Modal sizing and position</p>
            <b-btn v-b-modal.modallg>Large modal</b-btn>
            <b-btn v-b-modal.modalsm>Small modal</b-btn>
            <b-btn v-b-modal.modal-center>Launch centered modal</b-btn>

            <p></p>
            <p>Modal Popover and Variants</p>
            <b-btn v-b-modal.modalPopover>Show Modal with Popover</b-btn>
            <b-btn @click="show=true">Show Modal Variants</b-btn>
        </div>
      </div>
    </div>
 </div>
  
</template>

<script>
export default {
  name: 'Modals',
  data () {
    return {
      msg: 'Bootstrap Modals',
      modalShow: false,
      name: "",
      show: false,
      variants: [
        'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'
      ],
      headerBgVariant: 'dark',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'warning',
      footerTextVariant: 'dark'
    }
  },
  methods: {
    showModal() {
      this.$refs.myModalRef.show();
    },
    hideModal() {
      this.$refs.myModalRef.hide();
    },
    clearName() {
      this.name = "";
    },
    handleOk(evt) {
      // Prevent modal from closing
      evt.preventDefault();
      if (!this.name) {
        alert("Please enter your name");
      } else {
        this.clearName();
        this.$refs.modal.hide();
      }
    }
  }
}
</script>