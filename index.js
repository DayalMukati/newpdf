const http = require('http');
const express = require('express');
var fs = require('fs');
var pdf = require('dynamic-html-pdf');

const app = express();
const server = http.createServer(app);

server.listen(9000);

var html = fs.readFileSync('./temp1.html', 'utf8');

var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm"
};

var document = {
    template: html,
    context: {
        options: {
            fname: 'Dayal Mukati',
            //mname: 'Middlename',
            //lname: 'Lastname'
            FromDate: '11/07/2019',
            ToDate:  '14/07/2019'
        },
        //img: 'http://www.ruralagriventures.com/wp-content/uploads/2017/05/man-team.jpg'
        
    },
    path: "./output.pdf"
};

pdf.create(document, options)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.error(error)
    });