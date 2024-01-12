import axios from 'axios';

/*Backend
Ist eine Node.js Applikation, die Express verwendet.
Agiert als Applikationsserver und stellt eine oder mehrere REST-Schnittstellen zur Verfügung. Jede Ressource hat eine eigene REST-Schnittstelle und jede Schnittstelle wird nach dem Model-View-Controller Architekturmuster implementiert. Im Rahmen der REST-Schnittstellen, werden folgende HTTP-Requests umgesetzt:
GET-Request
POST-Request
PUT-Request
DELETE-Request
Die zur Verfügung gestellten Daten werden auf einer MongoDB-Datenbank abgespeichert. Für die Datenbankanbindung verwenden Sie die Library Mongoose. Für die Implementation der Model Komponente verwenden Sie Mongoose-Schemas.
Agiert als Webserver, welcher einem Webclient (Browser) das Frontend ausliefert. Die Frontend-Ressourcen enthalten nur so viel Code wie nötig.
Der Code ist übersichtlich strukturiert und befolgt die Richtlinien für guten Code / clean Code. */




class Model {

    // Methods to interact with the database
    async getAll() {
        // Get all items from the database
        try {
            //const response = await axios.get('http://localhost:3001/reviews');
            //console.log("Response", response.data);
            //return response.data;
            return {
                "Hello": "World"
            }
        } catch (error) {
            console.error(error);
            
        }

    }


    async getIds() {

        try {
            const response = await axios.get('http://localhost:3001/quiz');
            console.log("Response: ", response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }


    async addNew(data) {
        // Add a new item to the database
        const dataObj = {
            
            name: data.name,
            questions: data.questions
        }

        try {
            const response = await axios.post('http://localhost:3001/quiz', dataObj);
            console.log("Response", response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }

    }

    async getDataById(id){
        // Get data from database by id
        try {
            const response = await axios.get(`http://localhost:3001/quiz/${id}`);
            console.log("Response", response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    //Löscht eine Umfrage aus der Datenbank nach Id
    async deleteDataById(id){
        try {
            const response = await axios.delete(`http://localhost:3001/quiz/${id}`);
            console.log("Response", response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async setupAnswers(id){
        const dataObj = {
            quizId: id,
            answers: []
        }

        try {
            const response = await axios.post('http://localhost:3001/answers', dataObj);
            console.log("Response**************************************************", response.data);
            
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }


    async getAnswersByQuizId(id){
        // Get data from database by id
        try {
            const response = await axios.get(`http://localhost:3001/answers/`);

            //finde dieses objekt im array, welches die quizId id hat und speichere es in data
            const data = response.data.find((obj) => obj.quizId === id);

            if(data === undefined || data === null || data.length < 1){
                return null;
            }else{
                return data;
            }

            
        } catch (error) {
            console.error(error);
        }
    }

    //poste eine antwort in die datenbank
    async postAnswer(data){ //data = array mit antworten


        try {
            const response = await axios.post(`http://localhost:3001/answers/`, data);
            console.log("Response", response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }



    // Other CRUD methods
}

export default new Model();
