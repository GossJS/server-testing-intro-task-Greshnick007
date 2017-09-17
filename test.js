'use strict';
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server_class');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET length', () => {
      it('?erere должно быть 5', (done) => {
        chai.request(server)
            .get('/length?erere')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.eql('5');
              done();
            });
      });
      
      it('?1 должно быть 1', (done) => {
        chai.request(server)
            .get('/length?1')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.eql('1');
              done();
            });
      });
      
      
        it('?1.1.1 должно быть 5', (done) => {
        chai.request(server)
            .get('/length?1.1.1')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.eql('5');
              done();
            });
      });
  });