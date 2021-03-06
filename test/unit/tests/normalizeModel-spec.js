describe("normalizeModel setData", function () {

    var model;

    beforeEach(function () {
        model = ux.datagrid.coreAddons.normalizeModel({});
    });

    it("should keep a single array unmodified", function () {
        var data = "abcdef".split('');
        model.setData(data);
        expect(model.getData()).toEqual(data);
    });

    it("should convert a multi-dimensional array to a single one.", function () {
        var data = [
            {name: 'a', items: 'abc'.split('')}
        ];
        model.setData(data, 'items');
        expect(model.getData().length).toBe(4);
    });

    it("should convert a multi-dimensional array to a single one recursively.", function () {
        var data = [
            {
                items: [
                    {items: "abc".split('')}
                ]
            }
        ];
        model.setData(data, 'items');
        expect(model.getData().length).toBe(5);
    });

    it("getOriginalData should return the original data", function() {
        var data = [];
        model.setData(data);
        expect(model.getOriginalData()).toBe(data);
    });
});