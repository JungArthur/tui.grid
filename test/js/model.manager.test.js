'use strict';

var ModelManager = require('../../src/js/model/manager');
var DomState = require('../../src/js/domState');
var ColumnModel = require('../../src/js/model/data/columnModel');
var DataModel = require('../../src/js/model/data/rowList');

describe('model/manager', function() {
    var domState = new DomState($('<div>'));

    describe('creates dimension model', function() {
        it('with options', function() {
            var manager, dimension;
            manager = new ModelManager({
                headerHeight: 281,
                rowHeight: 72,
                fitToParentHeight: true,
                scrollX: true,
                scrollY: true,
                minimumColumnWidth: 192,
                displayRowCount: 36
            }, domState);

            dimension = manager.dimensionModel;
            expect(dimension.get('headerHeight')).toBe(281);
            expect(dimension.get('rowHeight')).toBe(72);
            expect(dimension.get('fitToParentHeight')).toBe(true);
            expect(dimension.get('scrollX')).toBe(true);
            expect(dimension.get('scrollY')).toBe(true);
            expect(dimension.get('minimumColumnWidth')).toBe(192);
            expect(dimension.get('displayRowCount')).toBe(36);
        });

        it('with options (boolean)', function() {
            var manager, dimension;
            manager = new ModelManager({
                fitToParentHeight: false,
                scrollX: false,
                scrollY: false
            });

            dimension = manager.dimensionModel;
            expect(dimension.get('fitToParentHeight')).toBe(false);
            expect(dimension.get('scrollX')).toBe(false);
            expect(dimension.get('scrollY')).toBe(false);
        });

        it('with required models', function() {
            var manager, dimension;
            manager = new ModelManager({}, domState);
            dimension = manager.dimensionModel;

            expect(dimension.columnModel instanceof ColumnModel).toBe(true);
            expect(dimension.dataModel instanceof DataModel).toBe(true);
            expect(dimension.domState).toBe(domState);
        });
    });
});