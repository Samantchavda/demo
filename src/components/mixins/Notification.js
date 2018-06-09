export const Notify = {
    data(){
        return{

        }
    },
    methods :{
        Notify:function(group ,type= ''){
            this.$notify({
                group,
                title: `${type} notification`,
                text: `This is ${ type } notification text!`,
                type,
                data: {
                  randomNumber: Math.random()
                }
              });
        }
    }
}