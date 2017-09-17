'use strict'

const Zombie = require('zombie');
const should = require('should');
const assert = require('assert');

const data = [ 
    {"value": "il@gmail.com", "expected": "no"}, 
    {"value": "ilya@gmail.com", "expected": "yes"}, 
    {"value": "elias@gmail.ru", "expected": "no"}, 
    {"value": "il-ya@gmail.com", "expected": "no"}, 
    {"value": "name#gmail.com", "expected": "no"}, 
    {"value": "hahaha@gmail.com", "expected": "yes"},
    {"value": "hahaha@.com", "expected": "no"} 
];


describe('Email checker', function() {
    for (const o of data) {
        it(`${o.value} should be returned ${o.expected}`, function(done) {
            this.timeout(15000);
            Zombie.visit(`https://homework-goss-js.herokuapp.com/?test=${o.value}`, (e, browser)=>{
                browser.pressButton('Get').then(function() {
                    assert.ok(browser.success);
                    assert.equal(browser.text('h3'), o.expected);
                }).then(done, done);
            });
        });
    }
});