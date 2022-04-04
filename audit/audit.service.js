const events = require('events');
const auditModel = require('../model/audit.model');
const quries = require('../db/quries');
const dbconnection = require('../db/connection');

let emitter = new events.EventEmitter();

let auditEvent = 'audit';
emitter.on('audit', (audit) => {
    try {
        let values = [audit.auditAction, JSON.stringify(audit.data), audit.status, audit.error, audit.auditBy, audit.auditOn];
        let auditQuery = quries.queryList.AUDIT_QUERY;
        dbconnection.dbquery(auditQuery, values);
    } catch (err) {
        console.log('Audit failed with error:' + err);
    }
});


exports.prepareAudit = (auditAction, data, error, auditBy, auditOn) => {
    let status = 200;
    if(error){
        status = 500;
    }
    let auditObj = new auditModel.Audit(auditAction, data, status, error, auditBy, auditOn);
    emitter.emit(auditEvent, auditObj);
}