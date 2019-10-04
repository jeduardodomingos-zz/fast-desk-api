'use strict';

exports.index = (req, res, next) => {
    res.status(200).send({
        title: 'fast-desk-api',
        description: 'API do sistema de chamados FastDesk',
        owner: 'Juan Eduardo Domingos',
        version: '1.0.0'
    });
}