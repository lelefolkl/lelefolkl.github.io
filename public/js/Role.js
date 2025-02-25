class Villager extends Player{//villager role 
    constructor(name){
        super(name); //Calls class player constructor
    }

//Villagers don`t have any abillities

}

class Werewolf extends Player {
    constructor(name) {
        super(name);
    }

    kill(target) {
        if (this.isAlive && target.isAlive) {
            target.die();
            console.log(`Lobisomem matou ${target.name}`);
        } else {
            console.log(`Nao pode matar ${target.name}`);
        }
    }
}


