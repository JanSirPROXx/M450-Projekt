import model from './model.mjs';


// ich habe komplet verkackt und eine json-server als db verwendet
/*Da wir im projekt von Herr hager M323 einen json-server verwendeten, 
hatte ich n irgendwie im kopf das wir hier auch einen verwenden.

Und mir ist erst jetzt aufgefallen das wir eine mongoDB verwenden sollten.
*/
//im controller 2 und model 2 finden sie die richtige version.


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

    //löschen einer umfrage nach id
    async deleteDataById(req, res) {
        console.log('deleteById | controller.mjs');

        const id = req.params.id;

        try {
            const item = await model.deleteById(id);
            console.log('All items returned');;
            res.json(item);
        } catch (error) {
            res.status(500).send('Error in getting items');
        }
    }

    async getAnswersByQuizId(req, res) {
        console.log('getAnswersByQuizId | controller.mjs');

        const id = req.params.id;

        try {
            const item = await model.getAnswersByQuizId(id);
            console.log('All items returned');;
            res.json(item);
        } catch (error) {
            res.status(500).send('Error in getting items');
        }
    }

    //setup answers
    async setupAnswers(req, res) {
        console.log('setupAnswers | controller.mjs');

        const id = req.params.id;

        try {
            const item = await model.setupAnswers(id);
            console.log('All items returned');;
            res.json(item);
        } catch (error) {
            res.status(500).send('Error in getting items');
        }
    }
    
}

export default new controller();