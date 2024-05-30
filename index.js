const baseUrl = "https://resthussager20.azurewebsites.net/api/hussagers/"// API URL
Vue.createApp({
    data() {
        return {
            addMessage: "",
            hus: [],
            hussags: [],                 
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
                    this.hus = [response.data]    
                    this.hussags.Id = this.hus[0].id;
                    this.hussags.Vej = this.hus[0].vej;
                    this.hussags.HusNr = this.hus[0].husNr;
                    this.hussags.By = this.hus[0].by;
                    this.hussags.pris = this.hus[0].pris;  
                    console.log(this.hus)             
                } catch (ex) {
                    alert(ex.message) 
                }
    }
}

}).mount("#app")