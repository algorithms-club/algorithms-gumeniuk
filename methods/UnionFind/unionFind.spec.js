'use strict';

const algolib = require('../index');

describe('#unionFind', function() {
  it('should create proper data structure',function() {
    let uf = new algolib.UnionFind();

    uf.connect.should.be.instanceOf(Function);
    uf.isConnected.should.be.instanceOf(Function);

    // uf.connect(3,6);
    // uf.connect(2,4);

    // uf.isConnected(2,6); // false;
    // uf.isConnected(4,2); // true;

  })

  it('should #isConnected return false if not connected', function() {
    let uf = new algolib.UnionFind();

    let isElementConnected = uf.isConnected(3,4);
    isElementConnected.should.be.false();
  })

  it('should #isConnected return true if elements are conected', function() {
    let uf = new algolib.UnionFind();

    uf.connect(1,4);

    let isElementConnected = uf.isConnected(1,4);
    isElementConnected.should.be.true();
  })

  it('should #isConnected return true if elements are conected', function() {
    let uf = new algolib.UnionFind();

    uf.connect(1,2);
    uf.connect(1,3);

    uf.connect(1,4);
    uf.connect(1,4);

    let isElementConnected = uf.isConnected(1,4);
    isElementConnected.should.be.true();
  })
})