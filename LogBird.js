class LogBird{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.connection = Constraint.create(options);
        World.add(world, this.connection);
        
    }
    display(){
        var pos = this.connection.bodyA.position
        var pos2 = this.connection.bodyB.position
        strokeWeight(4);
        line(pos.x,pos.y, pos2.x, pos2.y);
    }

}