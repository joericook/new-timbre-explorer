// class to keep track of graph positions and sizes
export class GuiDimensions {
  constructor(w, h) {
    this.resize(w, h);
  }
  
  resize(w, h) {
    // graph positions
    this.graphY = 0.11 * h;
    this.graphSX = 0.02 * w;
    this.graphBX = 0.261 * w;
    this.graphAX = 0.501 * w;
    this.graphEX = 0.742 * w;
    
    // graph sizes
    this.graphW = 0.23 * w;
    this.graphH = 0.2 * h;
    
    // graph title positions
    this.graphTtlY = 0.1 * h;
    this.graphSTtlX = 0.14 * w;
    
    // final graph size and position
    this.graphFX = 0.675 * w;
    this.graphFY = 0.35 * h;
    this.graphFW = 0.3 * w;
    this.graphFH = 0.3 * h;
    
    
  }
}