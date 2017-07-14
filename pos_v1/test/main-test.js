/**
 * Created by root on 17-7-14.
 */
'use strict';
ddescribe('FizzBuzzWhizz',() => {
    it( 'when num is times of 3' , ()=>{
        let num=6;
        let actualResult=FizzBuzzWhizz(num);
        let expectedText='Fizz';
        expect(actualResult).toEqual(expectedText);
    });
    it('when num has element 3',()=>{
        let num=13;
        let actualResult=FizzBuzzWhizz(num);
        let expectedText='Fizz';
        expect(actualResult).toEqual(expectedText);
    });
    it('when num is times of 5',()=>{
        let num=10;
        let actualResult=FizzBuzzWhizz(num);
        let expectedText='Buzz';
        expect(actualResult).toEqual(expectedText);
    });
    it('when num is times of 7',()=>{
        let num=21;
        let actualResult=FizzBuzzWhizz(num);
        let expectedText='Whizz';
        expect(actualResult).toEqual(expectedText);
    });
    it('when num is times of 3 and 5',()=>{
        let num=15;
        let actualResult=FizzBuzzWhizz(num);
        let expectedText='FizzBuzz';
        expect(actualResult).toEqual(expectedText);
    });
    it('when num is times of 3 and 7',()=>{
        let num=21;
        let actualResult=FizzBuzzWhizz(num);
        let expectedText='FizzWhizz';
        expect(actualResult).toEqual(expectedText);
    });
    it('when num is times of 5 and 7',()=>{
        let num=21;
        let actualResult=FizzBuzzWhizz(num);
        let expectedText='BuzzWhizz';
        expect(actualResult).toEqual(expectedText);
    });
    it('when num is times of 3 and 5 and 7 ',()=>{
        let num=105;
        let actualResult=FizzBuzzWhizz(num);
        let expectedText='FizzBuzzWhizz';
        expect(actualResult).toEqual(expectedText);
    });
    it('when num is not times of 3 or 5 or 7 ',()=>{
        let num=1;
        let actualResult=FizzBuzzWhizz(num);
        let expectedText=num;
        expect(actualResult).toEqual(expectedText);
    });
});

