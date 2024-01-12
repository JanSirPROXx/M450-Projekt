//Mongo DB controller

import { model } from './model.2.mjs';

class controller {
    async getAll(req, res) {
        try {
            const items = await model.find();
            console.log('All items returned');
            res.json(items);
        } catch (error) {
            res.status(500).send('Error in getting items');
        }
    }

    async addNew(req, res) {
        console.log('Add new item-----------------');
        console.log(req.body);
        try {
            const item = new model(req.body);
            const result = await item.save();
            res.json(result);
        } catch (error) {
            res.status(500).send('Error in adding new item');
        }
    }

    async getIds(req, res) {
        console.log('getIds | controller.mjs')
        try {
            let arrItems = [];
            const items = await model.find({}, 'id');
            items.map((item) => {
                console.log(item.id);
                arrItems.push(item.id);
            });
            res.send(arrItems);
        } catch (error) {
            res.status(500).send('Error in getting items');
        }
    }

    async getDataById(req, res) {
        console.log('getDataById | controller.mjs');
        try {
            const item = await model.findById(req.params.id);
            console.log('All items returned');
            res.json(item);
        } catch (error) {
            res.status(500).send('Error in getting items');
        }
    }

    async deleteDataById(req, res) {
        console.log('deleteById | controller.mjs');
        try {
            const item = await model.findByIdAndRemove(req.params.id);
            console.log('All items returned');
            res.json(item);
        } catch (error) {
            res.status(500).send('Error in getting items');
        }
    }
}

export default new controller();