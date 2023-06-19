<template>
    <div>
        <h1>My Family</h1>   
    </div>
</template>

<script>
export default {
    data() {
        return getFamily();
    },
    methods:{
        async getFamily(){
            try{
                const response = await this.axios.get(
                    this.$root.store.server_domain +"/users/myfamilyrecipes",
                    {
                        username: this.$root.store.username
                    }
                );
                console.log(response);
                this.$root.store.family = response.data;
            }catch(err){
                console.log(err.response);
            }
        }
    }
};

</script>