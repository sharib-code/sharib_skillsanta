const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;

    },
};
// Retrieve the value of the weapon property
gimli.weapon;
// Retrieve the value of the weapon property
gimli["weapon"];
gimli.greet();
// Add new age property to gimli
gimli.age = 139;
// Add new fight method to gimli
gimli.fight = function() {
    return `Gimli attacks with an ${this.weapon}.`;
}
gimli.fight();
// Update weapon from axe to battle axe
gimli.weapon = "battle axe";
gimli;
	
// Remove weapon from gimli
delete gimli.weapon;