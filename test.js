#!/usr/local/bin/node
// test.js

// typ determination

const gt = require('go-typ');
const items = {
    o: {a:1, b:2},
    s: 'stringy',
    i: 55,
    r: 55.5,
    b: true,
    a: [6,7],
};

const ia = Object.keys(items);

ia.forEach(function(item) {

    const res = gt.res(items[item]);
    console.log(`${item}: ${res}`);
});

