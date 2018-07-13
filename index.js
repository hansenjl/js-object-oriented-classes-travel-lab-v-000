
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year){
    return (year- this.startDate.getFullYear())
  }
}


class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  northSouthBlocks(){
    return Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
  }
  
  streetToInteger(street){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    
    eastWest.indexOf(street)
  }
  
   eastWestBlocks(){
     
     
     
    return Math.abs(this.beginningLocation.horizontal - this.endingLocation.horizontal)
  }
  
  blocksTravelled(){
    
  }
}