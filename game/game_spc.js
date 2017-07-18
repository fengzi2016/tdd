/**
 * Created by root on 17-7-18.
 */

/**
 * Created by root on 17-7-18.
 */
describe('game',()=>{
    it('should print 0A0B',()=>{
        let input='6789';
        let actualResult=game(input);
        let expectedResult='0A0B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('should print 0A1B',()=>{
        let input='7196';
        let actualResult=game(input);
        let expectedResult='0A1B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('should print 0A2B',()=>{
        let input='2198';
        let actualResult=game(input);
        let expectedResult='0A2B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('should print 0A3B',()=>{
        let input='3127';
        let actualResult=game(input);
        let expectedResult='0A3B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('should print 0A4B',()=>{
        let input='4321';
        let actualResult=game(input);
        let expectedResult='0A4B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('should print 1A0B',()=>{
        let input='1789';
        let actualResult=game(input);
        let expectedResult='1A0B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('should print 1A1B',()=>{
        let input='1027';
        let actualResult=game(input);
        let expectedResult='1A1B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('should print 1A2B',()=>{
        let input='1473';
        let actualResult=game(input);
        let expectedResult='1A2B';
        expect(actualResult).toEqual(expectedResult);
    });

    it('should print 1A3B',()=>{
        let input='1423';
        let actualResult=game(input);
        let expectedResult='1A3B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('should print 2A0B',()=>{
        let input='1297';
        let actualResult=game(input);
        let expectedResult='2A0B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('should print 2A1B',()=>{
        let input='1247';
        let actualResult=game(input);
        let expectedResult='2A1B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('should print 2A2B',()=>{
        let input='1243';
        let actualResult=game(input);
        let expectedResult='2A2B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('should print 3A0B',()=>{
        let input='1237';
        let actualResult=game(input);
        let expectedResult='3A0B';
        expect(actualResult).toEqual(expectedResult);
    });
    it('should print 4A0B',()=>{
        let input='1234';
        let actualResult=game(input);
        let expectedResult='4A0B';
        expect(actualResult).toEqual(expectedResult);
    });
});
