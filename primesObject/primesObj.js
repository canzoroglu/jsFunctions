describe("primesObj", function(){

	describe("test for isPrime method", function(){
		it("true for 2", function(){
		assert.equal(primesObj.isPrime(2), true);
		});
		it("true for 3", function(){
			assert.equal(primesObj.isPrime(3), true);
		});
		it("false for 1", function(){
			assert.equal(primesObj.isPrime(1), false);
		});
		it("false for 12", function(){
			assert.equal(primesObj.isPrime(12), false);
		});
		it("true for 23", function(){
			assert.equal(primesObj.isPrime(23), true);
		});
	});

	describe("test for showPrimes method", function(){
		it("2,3 for 3", function(){
		assert.equal(primesObj.showPrimes(3), "2,3");
		});
		it("2,3 for 4", function(){
			assert.equal(primesObj.showPrimes(4), "2,3");
		});
		it("2,3,5,7 for 9", function(){
			assert.equal(primesObj.showPrimes(9), "2,3,5,7");
		});
		it("2,3,5,7,11,13 for 16", function(){
			assert.equal(primesObj.showPrimes(16), "2,3,5,7,11,13");
		});
		it("enter at least 2 for 1", function(){
			assert.equal(primesObj.showPrimes(1), "enter at least 2");
		});
	});

});