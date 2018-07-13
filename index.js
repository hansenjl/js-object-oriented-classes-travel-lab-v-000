
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(){
    return (2017 - this.startDate.getFullYear())
  }
}


class Route {
  
}