const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
}

Park.prototype.getDinosaurCount = function () {
    // return the number of dinosaurs in the dinosaur collection array
    return this.dinosaurCollection.length;
}

Park.prototype.addDinosaur = function(dinosaur) {
    // add/push a dinosaur (we passed into the function) to our dinosaur collection array
    this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
    // declare a variable equal to first dinosaur in the dinosaur collection array and declare this as the dinosaur with most visitors initially
    const indexOfDinosaur = this.dinosaurCollection.indexOf(dinosaur);
    // remove 1 dinosaur from the dinosaur collection array
    this.dinosaurCollection.splice(indexOfDinosaur, 1);
}

Park.prototype.findMostAttractiveDinosaur = function() {
    // declare a variable equal to first dinosaur in the dinosaur collection array and declare this as the dinosaur with most visitors initially
    let mostAttractiveDinosaur = this.dinosaurCollection[0];

    // loop through all the dinosaurs in the dinosaur collection array
    // if the dinosaur currently looping over has more visitors than the one declared above in the 'let mostAttractiveDinosaur' variable then re-assign it as the dinosaur with most visitors
    // accessing averageVisitorsPerDay property inside Dinosaur
    for (const dinosaur of this.dinosaurCollection) {
        if (dinosaur.averageVisitorsPerDay > mostAttractiveDinosaur.averageVisitorsPerDay) {
            mostAttractiveDinosaur = dinosaur;
        }
    }
    // finally, return whichever dinosaur comes out on top with most visitors per day
    return mostAttractiveDinosaur;
}

Park.prototype.findBySpecies = function(species) {
    // declare a variable equal to an empty array to store species of dinosaurs found
    const speciesFound = [];

    // loop through all the dinosaurs in the dinosaur collection array
    // if the species of the dinosaur currently looping over equals the species we passed into the function then push it into the empty speciesFound array declared above
    // accessing species property inside Dinosaur object
    for (const dinosaur of this.dinosaurCollection) {
        if (dinosaur.species === species) {
            speciesFound.push(dinosaur);
        }
    }
    // finally, return speciesFound array
    return speciesFound;
}

Park.prototype.totalVisitorsPerDay = function() {
    // declare a variable equal to an empty array to store visitor count
    visitorCount = 0;

    // loop through all the dinosaurs in the dinosaur collection array
    // access averageVisitorsPerDay property inside Dinosaur object and add all it's values to visitorCount variable
    for (const dinosaur of this.dinosaurCollection){
        visitorCount += dinosaur.averageVisitorsPerDay;
    }
    // finally, return visitorCount which value will equal total averageVisitorsPerDay value of all dinosaurs in dinosaur collection array
    return visitorCount;
}

Park.prototype.totalVisitorsPerYear = function() {
    // return value equal to total numbers of visitors per day, as declared in 'totalVisitorsPerDay()' function above then mutliply this by 365 days in a year which value will equal total totalVisitorsPerYear
    return this.totalVisitorsPerDay() * 365;
}

Park.prototype.totalYearlyTicketSales = function() {
    // return value equal to total numbers of visitors per year, as declared in 'totalVisitorsPerYear()' function above, then mutliply this value by the cost of a ticket by accessing ticketPrice property inside this Park object
    return this.totalVisitorsPerYear() * this.ticketPrice;
}

module.exports = Park;