exports.queryList = {
    GET_STORE_LIST_QUERY : `SELECT STORE_ID "storeId",
                                   STORE_NAME "storeName",
                                   STORE_CODE "storeCode",
                                   ADDRESS
                            FROM BMS.STORE`,
    SAVE_STORE_QUERY : `INSERT INTO BMS.STORE (STORE_NAME, STORE_CODE, ADDRESS, CREATED_BY, CREATED_ON)
                        VALUES($1, $2, $3, $4, $5) RETURNING *`,
    GET_BOOK_LIST_QUERY : `SELECT BOOK_ID,
                                  BOOK_TITLE,
                                  BOOK_AUTHOR,
                                  BOOK_PUBLISHER,
                                  BOOK_PAGES
                           FROM BMS.BOOK`,
    GET_BOOK_DETAILS_QUERY : `SELECT
                                  BOOK_ID,
                                  BOOK_TITLE,
                                  BOOK_DESC,
                                  BOOK_AUTHOR,
                                  BOOK_PUBLISHER,
                                  BOOK_PAGES,
                                  S.STORE_CODE,
                                  S.STORE_NAME,
                                  S.ADDRESS
                              FROM
                                  BMS.BOOK B
                              INNER JOIN BMS.STORE S ON
                                  B.STORE_CODE = S.STORE_CODE
                              WHERE
                                  B.BOOK_ID = $1`,
    SAVE_BOOK_STATEMENT : `INSERT INTO BMS.BOOK
                            (BOOK_TITLE, BOOK_DESC, BOOK_AUTHOR, BOOK_PUBLISHER, BOOK_PAGES, STORE_CODE, CREATED_BY, CREATED_ON)
                            VALUES($1, $2, $3, $4, $5, $6, $7, $8)
                            RETURNING *`,         
    AUDIT_QUERY : `INSERT INTO bms.app_audit
    (audit_action, audit_data, audit_status, audit_error, audit_by, audit_on)
    VALUES($1, $2, $3, $4, $5, $6)`                                                     
}