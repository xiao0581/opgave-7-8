const baseUrl = "https://resthussager20.azurewebsites.net/api/hussagers/"// API URL
Vue.createApp({
    data() {
        return {
            addMessage: "",
            hus: [],
            hussags: {Id: 0,
                Vej: "",
                HusNr: 0,
                By: "",
                Pris: 0,}                  
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
                    console.log(this.hus)             
                } catch (ex) {
                    alert(ex.message) 
                }
    }
}

}).mount("#app")