
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
    let eastWestArray = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    
    return eastWestArray.indexOf(street)
  }
  
  blocksTravelled(){
    let northSouth = this.beginningLocation.vertical - this.endingLocation.vertical
    
    let eastWest = this.streetToInteger(this.beginningLocation.horizontal) - this.streetToInteger(this.endingLocation.horizontal)

    return (Math.abs(northSouth) + Math.abs(eastWest))
  }
  
  estimatedTime(peak){
    if(){
      return this.blocksTravelled() / 3
    }else{
      return this.blocksTravelled() / 2 
    }
    
    //3 blocks per minute
    //2 blocks per minute peak time
  }
}