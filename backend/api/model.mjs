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
            console.log("Response", response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    getById(id) {
        // Get an item by its ID
    }

    getByRestaurantName(){
        // Get an item by its restaurant name
    }

    async addNew(data) {
        // Add a new item to the database
        
        try {
            const response = await axios.post('http://localhost:3001/quiz', {
                
            });
            console.log("Response", response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
        
    }

    updateById(id) {
        // Update an item in the database
    }
    updateByName(){
        // Update an item in the database
    }

    deleteById(id) {
        // Delete an item from the database
    }

    deleteByName(){
        // Delete an item from the database
    }
    



    
    // Other CRUD methods
}

export default new Model();
