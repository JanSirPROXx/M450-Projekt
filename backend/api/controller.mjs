import model from './model.mjs';

class controller {
    async getAll(req, res) {
        try {
            const items = await model.getAll();
            console.log('All items returned');;
            res.json(items);
        } catch (error) {
            res.status(500).send('Error in getting items');
        }
    }


    async addNew(req, res) {
        console.log('Add new item-----------------');
        console.log(req.body);
        try {
            console.log(req.body);

            const item = req.body;
            const result = await model.addNew(item);
            res.json(result);
        } catch (error) {
            res.status(500).send('Error in adding new item');
        }
    }


    async getIds(req, res) {
        console.log('Get all ids-----------------')
        try {
            let arrItems = [];
            const items = await model.getIds();
            console.log('All items returned');;

            items.map((item) => {
                console.log(item.id);
                arrItems.push(item.id);
            });

            res.json(arrItems);
        } catch (error) {
            res.status(500).send('Error in getting items');
        }
    }
    // Other methods corresponding to CRUD operations
}

export default new controller();