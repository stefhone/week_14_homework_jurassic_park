const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

// Park test, runs a function
describe('Park', function(){

    let park;
    let dinosaurOne;
    let dinosaurTwo;
    let dinosaurThree;
    let dinosaurFour;
    let dinosaurFive;

    beforeEach(function(){
        park = new Park('Neverland', 20);
        dinosaurOne = new Dinosaur('T-Rex', 'Carnivore', 100);
        dinosaurTwo = new Dinosaur('Diplodocus', 'Herbivore', 40);
        dinosaurThree = new Dinosaur('Velociraptor', 'Carnivore', 70);
        dinosaurFour = new Dinosaur('Terrordactyl', 'Carnivore', 50);
        dinosaurFive = new Dinosaur('Brachiosaurus', 'Herbivore', 20);
    });

    it('Add a dinosaur to collection of dinosaurs', function () {
        // ARRANGE
        // run the addDinosaur function inside Park object with the parameter dinosaurOne, this is the dinosaur we want to add to our dinosaur collection array
        park.addDinosaur(dinosaurOne);

        // ACT
        // run the getDinosaurCount function inside Park object which returns the number of dinosaurs in the dinosaur collection array
        const actual = park.getDinosaurCount();
        
        // ASSERT
        // want the actual value to be equal to 1 because there should be 1 dinosaur added to our dinosaur collection array
        assert.strictEqual(actual, 1);
    });

    it('Remove a dinosaur from collection of dinosaurs', function () {
        park.addDinosaur(dinosaurOne);
        park.addDinosaur(dinosaurTwo);
        // run the removeDinosaur function inside Park object with the parameter dinosaurTwo, this is the dinosaur we want to remove from our dinosaur collection array
        park.removeDinosaur(dinosaurTwo);

        // expected value = [dinosaurOne] in dinosaur collection array, because we removed the other dinosaur, leaving only this one
        const expected = [dinosaurOne];
        
        // get back dinosaur collection array inside Park object
        const actual = park.dinosaurCollection;
        
        // expecting the dinosaur collection array to be equal to [dinosaurOne], the only dinosaur left in the dinosaur collection array
        assert.deepStrictEqual(actual, expected);
    });

    it('Find the dinosaur that attracts the most visitors', function () {
        park.addDinosaur(dinosaurOne);
        park.addDinosaur(dinosaurTwo);
        park.addDinosaur(dinosaurThree);
        park.addDinosaur(dinosaurFour);
        park.addDinosaur(dinosaurFive);
    
        // dinosaurOne has the highest averageVisitorsPerDay value, at 100
        const expected = dinosaurOne;
        // actual value is equal to running findMostAttractiveDinosaur function inside Park object
        const actual = park.findMostAttractiveDinosaur(); 
        assert.deepStrictEqual(actual, expected);
    });

    it('Find all dinosaurs of a particular species', function () {
        park.addDinosaur(dinosaurOne);
        park.addDinosaur(dinosaurTwo);
        park.addDinosaur(dinosaurThree);
        park.addDinosaur(dinosaurFour);
        park.addDinosaur(dinosaurFive);
        // run the findBySpecies function inside Park object with the parameter 'T-Rex', this is the species we want to find from our dinosaur collection array
        park.findBySpecies('T-Rex');
        
        // expected value = [dinosaurOne] in dinosaur collection array, because it contains a species 'T-Rex' dinosaur which is what we want to find 
        const expected = [dinosaurOne]; 
        // actual value is equal to running findBySpecies function inside Park object with the parameter 'T-Rex'
        const actual = park.findBySpecies('T-Rex');
        assert.deepStrictEqual(actual, expected);
    });

    it('Calculate the total number of visitors per day', function () {
        park.addDinosaur(dinosaurOne);
        park.addDinosaur(dinosaurTwo);
        park.addDinosaur(dinosaurThree);
        park.addDinosaur(dinosaurFour);
        park.addDinosaur(dinosaurFive);

        // expected value = 280 which equates to the total visits value per day for all dinosaurs combined
        const expected = 280;
        // actual value is equal to running totalVisitorsPerDay function inside Park object to find the total
        const actual = park.totalVisitorsPerDay();
        assert.strictEqual(actual, expected);
    });

    it('Calculate the total number of visitors per year', function () {
        park.addDinosaur(dinosaurOne);
        park.addDinosaur(dinosaurTwo);
        park.addDinosaur(dinosaurThree);
        park.addDinosaur(dinosaurFour);
        park.addDinosaur(dinosaurFive);
        
        // expected value = 102200 which equates to 280 total visits per day for all dinosaurs combined then multiply that value by 365 days (a year)
        const expected = 102200;
        // actual value is equal to running totalVisitorsPerYear function inside Park object to find the total
        const actual = park.totalVisitorsPerYear();
        assert.strictEqual(actual, expected);
    });
    
    it('Calculate the total revenue from ticket sales for one year', function () {
        park.addDinosaur(dinosaurOne);
        park.addDinosaur(dinosaurTwo);
        park.addDinosaur(dinosaurThree);
        park.addDinosaur(dinosaurFour);
        park.addDinosaur(dinosaurFive);

        // expected value = 102200 mutiplied by 20 which is the ticket price for the park
        const expected = 2044000;
        // actual value is equal to running totalYearlyTicketSales function inside Park object to find the total
        const actual = park.totalYearlyTicketSales();
        assert.strictEqual(actual, expected)
    });

    // EXTENSIONS
    it('Remove all dinosaurs of a particular species', function () {
    });
});