import axios from 'axios';


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




    // Other CRUD methods
}

export default new Model();
