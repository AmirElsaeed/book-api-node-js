const quries = require('../db/quries');
const dbconnection = require('../db/connection');
const LoggerService = require('../services/logger.service');
const auditService = require('../audit/audit.service');
const auditAction = require('../audit/auditAction');
const util = require('../utils/utility');


const logger = new LoggerService('book.controller');

exports.getBookList = async (req, res) => {
    try {
        res.setHeader("Content-Type", "application/json");

        let bookListQuery = quries.queryList.GET_BOOK_LIST_QUERY;
        let result = await dbconnection.dbquery(bookListQuery);

        logger.info("return book list.", result.rows);

        auditService.prepareAudit(auditAction.actionList.GET_BOOK_LIST,
                                  result.rows, null, "postman", util.dateFormat());
                                  
        return res.status(200).send(JSON.stringify(result.rows));
    } catch(err) {
        return res.status(500).send({ error: err });
    }
}

exports.getBookDetails = async (req, res) => {
    try {
        res.setHeader("Content-Type", "application/json");
        let bookId = req.params.bookId;
        let bookDetailsQuery = quries.queryList.GET_BOOK_DETAILS_QUERY;
        let result = await dbconnection.dbquery(bookDetailsQuery, [bookId]);
        
        if(result.rowCount == 0) {
            return res.status(200).send({message : `no data found for bookId ${bookId}`});
        }
        return res.status(200).send(JSON.stringify(result.rows[0]));
    } catch(err) {
        return res.status(500).send({ error: err });
    }
}

exports.saveBook = async (req, res) => {
    try {
        res.setHeader("Content-Type", "application/json");
        let book_title = req.body.book_title;
        let book_author = req.body.book_author;
        let book_publisher = req.body.book_publisher;
        let store_code = req.body.store_code;

        if(!book_title || !book_author || !book_publisher || !store_code) {
            return res.status(500).send({error: 'Mandatory fields missing'});
        }

        let book_desc = req.body.book_desc;
        let book_pages = req.body.book_pages;
        let created_by = 'Amir';
        let created_on = new Date();

        let saveBookStatement = quries.queryList.SAVE_BOOK_STATEMENT;
        let queryParams = [book_title, book_desc, book_author, book_publisher, book_pages, store_code, created_by, created_on];
        let result = await dbconnection.dbquery(saveBookStatement, queryParams);

        result.rows[0].message = 'book added successfully';
        return res.status(201).send(result.rows[0]);

    } catch(err) {
        return res.status(500).send({ error: err });
    }
}