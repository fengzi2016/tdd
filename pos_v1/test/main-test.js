/**
 * Created by root on 17-7-14.
 */
'use strict';
/*
describe(
  it('make a new array where there are values of "barcode" and "count"',() => {
    const tag =
      [
        'ITEM000001',
        'ITEM000001',
        'ITEM000003',
        'ITEM000005',
        'ITEM000005',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001'
      ];
    let actualResult = quchong(tag);
    let expectedText = [
      {barcode: 'ITEM000001', count: 5},
      {barcode: 'ITEM000003', count: 1},
      {barcode: 'ITEM000005', count: 2}
      ];
    expect(actualResult).toEqual(expectedText);
  })
);
*/
describe('FizzzBuzzWhizz',()=>{
    it('when num has element 3 and is times of 5 and is not times of 7',()=>{
      let num=30;
      let actualResult=FizzBuzzWhizz(num);
      let expectedText='Fizz';
      expect(actualResult).toEqual(expectedText);
    });
    it('when num has element 3 and is times of 7 and is not times of 5',()=>{
      let num=63;
      let actualResult=FizzBuzzWhizz(num);
      let expectedText='Fizz';
      expect(actualResult).toEqual(expectedText);
    });
    it('when num has element 3 and is times of 5 and 7',()=>{
       let num=35;
       let actualResult=FizzBuzzWhizz(num);
       let expectedText='Fizz';
      expect(actualResult).toEqual(expectedText);
    });
    it( 'when num doesn"t have element 3 and is times of 3 and is not times of 5 or 7', ()=>{
    let num=6;
    let actualResult=FizzBuzzWhizz(num);
    let expectedText='Fizz';
    expect(actualResult).toEqual(expectedText);
    });
    it('when num doesn"t have element 3 and is times of 3 and 5 and is not times of 7',()=>{
    let num=15;
    let actualResult=FizzBuzzWhizz(num);
    let expectedText='FizzBuzz';
    expect(actualResult).toEqual(expectedText);
    });
    it('when num doesn"t have element 3 and is times of 3 and 7 and is not times of 5',()=>{
    let num=21;
    let actualResult=FizzBuzzWhizz(num);
    let expectedText='FizzWhizz';
    expect(actualResult).toEqual(expectedText);
     });
    it('when num doesn"t have element 3 and is times of 5',()=>{
        let num=10;
        let actualResult=FizzBuzzWhizz(num);
        let expectedText='Buzz';
        expect(actualResult).toEqual(expectedText);
    });
    it('when num doesn"t have element 3 and is times of 7 and is not times of 3 or 5 ',()=>{
        let num=14;
        let actualResult=FizzBuzzWhizz(num);
        let expectedText='Whizz';
        expect(actualResult).toEqual(expectedText);
    });
    it('when num doesn"t have element 3 and doesn"t have element 3 and is times of 5 and 7 and is not times of 3 ',()=>{
        let num=70;
        let actualResult=FizzBuzzWhizz(num);
        let expectedText='BuzzWhizz';
        expect(actualResult).toEqual(expectedText);
    });
    it('when num doesn"t have element 3 and is times of 3 and 5 and 7 ',()=>{
        let num=105;
        let actualResult=FizzBuzzWhizz(num);
        let expectedText='FizzBuzzWhizz';
        expect(actualResult).toEqual(expectedText);
    });
    it('when num doesn"t have element 3 and is not times of 3 or 5 or 7 ',()=>{
        let num=1;
        let actualResult=FizzBuzzWhizz(num);
        let expectedText=num;
        expect(actualResult).toEqual(expectedText);
    });
});

