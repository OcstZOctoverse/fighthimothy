var himothy = 500
var food = 30
var enemy = 25
var enemyreward = enemy / 5
const nameaction = prompt("What's your name?")
var character = 10
print("The goal of this game is to beat Himothy! Oh here he is now!")
print("Himothy: Hey " + nameaction + ". Are you ready to lose?")
var controls = "train, fight, work, fight Himothy."
print(nameaction + ": Bring it on!")
print("Himothy easily defeats you!")
while (true) {
    var action = prompt("What do you want to do?")
    if (action === "controls") {
        print(controls)
    }
    if (action === "train") {
        food -= 3
        character += 5
        print("You used 3 food and got way stronger!")
        print(nameaction + "'s power level is now " + string(character) + "!")
    }
    if (action === "work") {
        if (character > 15 < 20) {
            food += 4
            print("You got 4 food for your hard work!")
        }
        if (character >= 20 < 50){ 
            food += 6
            print("You got 6 food for your hard work!")
        }
    }
    if (action === "fight") {
        if (character > enemy){
            enemy += 5
            character += enemy - enemyreward
            print("You defeated the enemy!")
        }
        else {
            print("The enemy beat you up!")
            food -= enemyreward
        }
    }
    if (food <= 0) { 
        print("You starved to death!")
        break;
    }
}