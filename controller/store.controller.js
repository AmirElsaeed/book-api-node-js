const quries = require('../db/quries');
const dbconnection = require('../db/connection');

exports.getStoreList = async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    try {
        let storeListQuery = quries.queryList.GET_STORE_LIST_QUERY;
        let result = await dbconnection.dbquery(storeListQuery);
        return res.status(200).send(JSON.stringify(result.rows));
    } catch(err) {
        return res.status(500).send({ error: err });
    }
}

exports.saveStore = async (req, res) => {
    try {
        let store_name = req.body.store_name;
        let store_code = req.body.store_code;
        let address = req.body.address;

        res.setHeader("Content-Type", "application/json");

        if(!store_name || !store_code || !address) {
            return res.status(500).send({ error: 'Mandatory fields are missing!' });
        }

        let created_by = 'Amir';
        let created_on = new Date();
        
        let values = [store_name, store_code, address, created_by, created_on];
        let saveQuery = quries.queryList.SAVE_STORE_QUERY;
        let result = await dbconnection.dbquery(saveQuery, values);
    
        result.rows[0].message = 'added successfully';
        return res.status(201).send(JSON.stringify(result.rows[0]));

    } catch(err) {
        return res.status(500).send({ error : err });
    }
}

exports.saveBulkStore = async (req, res) => {
    try {
        res.setHeader("Content-Type", "application/json");

        for(row of req.body){
            if(!row.store_name || !row.store_code || !row.address) {
                return res.status(500).send({ error: 'Mandatory fields are missing!' });
            }
        }

        let response = [];
        for(row of req.body){
            let created_by = 'Amir';
            let created_on = new Date();
            
            let values = [row.store_name, row.store_code, row.address, created_by, created_on];
            let saveQuery = quries.queryList.SAVE_STORE_QUERY;
            let result = await dbconnection.dbquery(saveQuery, values);
        
            result.rows[0].message = 'added successfully';
            response.push(result.rows[0]);
        }
        return res.status(201).send(JSON.stringify(response));

    } catch(err) {
        return res.status(500).send({ error : err });
    }
}