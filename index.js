
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
  
  streetToInteger(street){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    
    eastWest.indexOf(street)
  }
  
  blocksTravelled(){
    let northSouth = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    
    let eastWest = Math.abs(streetToInteger(this.beginningLocation.horizontal) - streetToInteger(this.endingLocation.horizontal))
    
    return (northSouthBlocks)
  }
}