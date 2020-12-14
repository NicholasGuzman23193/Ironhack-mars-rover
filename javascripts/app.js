// Rover Object Goes Here
// ======================
let rover = {
  direction: "N"
}
let direct = rover.direction;
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  if(direct == `N`){
     let direct = `W`;
     console.log(`Rover is facing Noth and turns left => Rover is now facing West`);
  } else if(direct == `W`) {
     let direct = `S`
     console.log(`Rover is facing West and turns left => Rover is now facing South`)
  } else if (direct == `S`) {
     let direct = `E`
     console.log(`Rover is facing South and turns left => Rover is now facing East`)
  } else if(direct == `E`) {
     let direct = `N`
     console.log(`Rover is facing East and turns left => Rover is now facing North`)
  }
}




function turnRight(rover){
  console.log("turnRight was called!");
  if(direct == `N`){
    let direct = `E`;
    console.log(`Rover is facing Noth and turns right => Rover is now facing East`);
 } else if(direct == `E`) {
    let direct = `S`
    console.log(`Rover is facing East and turns left => Rover is now facing South`)
 } else if (direct == `S`) {
    let direct = `W`
    console.log(`Rover is facing South and turns left => Rover is now facing West`)
 } else if(direct == `W`) {
    let direct = `N`
    console.log(`Rover is facing West and turns left => Rover is now facing North`)
 }
}



function moveForward(rover){
  console.log("moveForward was called")
  
}
 