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
            //console.log(req.body);

            const item = req.body;
            const result = await model.addNew(item);
            res.json(result);
        } catch (error) {
            res.status(500).send('Error in adding new item');
        }
    }


    async getIds(req, res) {
        console.log(' getIds | controller.mjs')
        try {
            let arrItems = [];
            const items = await model.getIds();
            //console.log('All items returned');;

            items.map((item) => {
                console.log(item.id);
                arrItems.push(item.id);
            });
            //console.log(arrItems, 'Array of ids which gets res.sended');
            //res.json(arrItems);
            //res.send(arrItems); //Not json, because it is an array
            res.send(arrItems);

        } catch (error) {
            res.status(500).send('Error in getting items');
        }
    }


    async getDataById(req, res) {
        console.log('getDataById | controller.mjs');
        try {
            const item = await model.getDataById(req.params.id);
            console.log('All items returned');;
            res.json(item);
        } catch (error) {
            res.status(500).send('Error in getting items');
        }
    }
    // Other methods corresponding to CRUD operations
}

export default new controller();