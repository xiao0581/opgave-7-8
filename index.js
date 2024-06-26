const baseUrl = "https://resthussager20.azurewebsites.net/api/hussagers/"// API URL
Vue.createApp({
    data() {
        return {
            addMessage: "",
            hus: {}, 
            hussags: { Id: '', Vej: '', HusNr: '', By: '', pris: '' },                 
        }

    },  
   
    methods: {
        async addHussag() {        
            try {
                const response = await axios.post(baseUrl+this.hussags)
                this.addMessage = "response " + response.status + " " + response.statusText
                console.log(response)
            } catch (ex) {
                alert(ex.message)
            }

        },


     async getById(id) {              
                try {
                    const response = await axios.get(baseUrl+id)
                    this.hus = response.data
                    this.hussags.Id = this.hus.id;
                    this.hussags.Vej = this.hus.vej;
                    this.hussags.HusNr = this.hus.husNr;
                    this.hussags.By = this.hus.by;
                    this.hussags.pris = this.hus.pris; 
                    console.log(this.hus)             
                } catch (ex) {
                    alert(ex.message) 
                }
    }
}

}).mount("#app")