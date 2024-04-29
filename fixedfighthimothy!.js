var himothy = 500
var food = 30
var enemy = 25
var enemyreward = enemy / 5
const nameaction = prompt("What's your name? ")
var character = 10
document.write("The goal of this game is to beat Himothy! Oh here he is now!")
document.write("Himothy: Hey " + nameaction + ". Are you ready to lose?")
var controls = "train, fight, work, fight Himothy."
document.write(nameaction + ": Bring it on!")
document.write("Himothy easily defeats you!")
while (true) {
    var action = prompt("What do you want to do? ")
    if (action === "controls") {
        document.write(controls)
    }
    if (action === "train") {
        food -= 3
        character += 5
        document.write("You used 3 food and got way stronger!")
        document.write(nameaction + "'s power level is now " + character.toString() + "!")
    }
    if (action === "work") {
        if (character > 15 && character < 20) {
            food += 4
            document.write("You got 4 food for your hard work!")
        }
        if (character >= 20 && character < 50){ 
            food += 6
            document.write("You got 6 food for your hard work!")
        }
        if (character > 50) {
            food += 10
            document.write("You got 10 food for your hard work!")
        }
        else {
            document.write("You got no food!")
        }
    }
    if (action === "fight") {
        if (character > enemy){
            enemy += 5
            character += enemy - enemyreward
            document.write("You defeated the enemy!")
        }
        else {
            document.write("The enemy beat you up!")
            food -= enemyreward
        }
    }
    if (action === "fight Himothy") {
        if (character > himothy){
            document.write("You beat Himothy!")
            document.write("Himothy: Augghh... you beat me...")
            break;
        }
        if (character < himothy) {
            document.write("Himothy comes out on top!)
        }
    }
    if (food <= 0) { 
        document.write("You starved to death!")
        break;
    }
}
