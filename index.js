
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(){
    return (2018 - this.startDate.getFullYear())
  }
}


class Route {
  
}