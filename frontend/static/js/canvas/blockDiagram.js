//dev imports
import * as graph from './graph.js'
import * as guiDimensions from './guiDimensions.js'

export class BlockDiagram {
  constructor(context, gui, document, w, h) {
    this.context = context;
    this.document = document;
    this.gui = gui;
    
    this.colorS = 'red';
    this.colorB = 'yellow';
    this.colorA = '#00FF00';
    this.colorE = 'blue';
    this.colorF = 'black'
    
    this.specGraph = new graph.Graph(context, this.colorS, "Frequency", "Amplitude");
    this.brigGraph = new graph.Graph(context, this.colorB, "Frequency", "Amplitude");
    this.artiGraph = new graph.Graph(context, this.colorA, "Time", "Frequency");
    this.enveGraph = new graph.Graph(context, this.colorE, "Time", "Amplitude");
    this.finaGraph = new graph.Graph(context, this.colorF, "Frequency", "Amplitude");
    
    this.specGraph.resize(gui.graphSX, gui.graphY, gui.graphW, gui.graphH);
    this.brigGraph.resize(gui.graphBX, gui.graphY, gui.graphW, gui.graphH);
    this.artiGraph.resize(gui.graphAX, gui.graphY, gui.graphW, gui.graphH);
    this.enveGraph.resize(gui.graphEX, gui.graphY, gui.graphW, gui.graphH);
    this.finaGraph.resize(gui.graphFX, gui.graphFY, gui.graphFW, gui.graphFH);
    
    
    // change envelop graph to read data as consecutive pairs of coords
    this.enveGraph.setType(1);
    
    // labels
    this.ttlFontSize = 12;
    this.specGraphTtl = "Raw Spectrum";
    // this.specGraphTitle = document.getElementById("specGraphTitle");
    // this.specGraphTitle.style.top = this.gui.graphTtlY;
    // this.specGraphTitle.style.left = this.gui.graphSTtlX;
    
    // image
    this.controlImg = document.getElementById("controls");
    
    
    this.resize(w,h);
  }
  
  draw() {
    this.specGraph.drawGraph();
    this.brigGraph.drawGraph();
    this.artiGraph.drawGraph();
    this.enveGraph.drawGraph();
    
    this.finaGraph.drawGraph();
    this.context.drawImage(this.controlImg, this.controlX, this.controlY, this.controlW, this.controlH);
    
    //graph titles
    // this.context.fillStyle = "red";
    // this.context.font = this.ttlFontSize+"px Verdana";
    // // this.context.font = "12px Verdana";
    // // this.context.font="30px Verdana";
    // this.context.fillStyle = "black";
    // this.context.textAlign = "center";
    // this.context.fillText(this.specGraphTtl, this.gui.graphSTtlX, this.gui.graphTtlY);
    // // this.context.fillText("Raw Spectrum", 0, 0);
    
    //graph labels
    
    
  }
  
  resize(w, h) {
    this.gui.resize(w, h);
    this.specGraph.resize(this.gui.graphSX, this.gui.graphY, this.gui.graphW, this.gui.graphH);
    this.brigGraph.resize(this.gui.graphBX, this.gui.graphY, this.gui.graphW, this.gui.graphH);
    this.artiGraph.resize(this.gui.graphAX, this.gui.graphY, this.gui.graphW, this.gui.graphH);
    this.enveGraph.resize(this.gui.graphEX, this.gui.graphY, this.gui.graphW, this.gui.graphH);
    this.finaGraph.resize(this.gui.graphFX, this.gui.graphFY, this.gui.graphFW, this.gui.graphFH);
    
    this.controlY = 0.675 * h;
    this.controlWMax = 0.3 * w;
    this.controlHMax = 0.13 * h;
    this.controlW = this.controlHMax * this.controlImg.width / this.controlImg.height;
    if (this.controlW < this.controlWMax) {
      this.controlH = this.controlHMax;
    } else {
      this.controlW = this.controlWMax;
      this.controlH = this.controlWMax * this.controlImg.height / this.controlImg.width;
    }
    // center under the final spectrum graph
    this.controlX = 0.84 * w - (this.controlW / 2);
    
    // this.specGraphTitle.style.top = this.gui.graphTtlY;
    // this.specGraphTitle.style.left = this.gui.graphSTtlX;
  }
  
}