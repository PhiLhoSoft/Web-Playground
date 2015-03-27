describe('Helpers Test', function()
{
    'use strict';

    var Helpers;

    beforeEach(function()
    {
    });

    it('creates an enumeration from a list of strings', function()
    {
        var Enum1 = Helpers.createEnum('FOO');
        var Enum3 = Helpers.createEnum('A', 'B', 'C');

        expect(Enum1.FOO).toBe('FOO');
        expect(Enum3.A).toBe('A');
        expect(Enum3.B).toBe('B');
        expect(Enum3.C).toBe('C');
    });

    it('creates an enumeration from an object', function()
    {
        var Enum1 = Helpers.createEnum({ BOO: 'Foo' });
        var Enum2 = Helpers.createEnum({ OK: 'OK', CANCEL: 'Cancel' });
        var Enum3 = Helpers.createEnum({ A: { n: 'a' }, B: { n: 'b'}, C: { n: 'c' } });

        expect(Enum1.BOO).toBe('Foo');
        expect(Enum2.OK).toBe('OK');
        expect(Enum2.CANCEL).toBe('Cancel');
        expect(Enum3.A).toEqual({ n: 'a' });
        expect(Enum3.B.n).toBe('b');
        expect(Enum3.C.n).toBe('c');
    });

    it('explores corner cases for enumerations', function()
    {
        var EEnum = Helpers.createEnum();
        var OEnum = Helpers.createEnum({}, {});
        var SEnum = Helpers.createEnum('odd enum');
        var IEnum = Helpers.createEnum('InvariantEnum');

        var immutable = function()
        {
            IEnum.InvariantEnum = 'whatever';
        };

        expect(EEnum).toBeDefined();
        expect(OEnum).toBeDefined();
        expect(SEnum['odd enum']).toBe('odd enum');
        expect(immutable).toThrow();
        expect(IEnum.InvariantEnum).toBe('InvariantEnum');
    });
});
