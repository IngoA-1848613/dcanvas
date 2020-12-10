

class DCanvas {
  private elements: any[];

  // Canvas
  private canvas: HTMLDivElement;
  private canvasOffset: {x: number, y: number};

  // Pointer
  private mouseOffset: {x: number, y: number};
  private lastPointer: {x: number, y: number};


  // Events
  private leftMouseDown = false;
  private middleMouseDown = false;
  private rightMouseDown = false;


  public constructor(canvasId: string) {
    this.elements = [];
    this.canvas = document.getElementById(canvasId) as HTMLDivElement;

    this.initCanvas();
    this.initListeners();
  }


  private initCanvas() {
    // Set canvasOffset
    const bounding = this.canvas.getBoundingClientRect();
    this.canvasOffset = {x: bounding.x, y: bounding.y};


    console.log(bounding);
  }


  private initListeners() {

    this.canvas.addEventListener('mousedown', e => {
      this.leftMouseDown = true;

    });

    /**
     * - update pointer offset
     * - get correct pointer position
     * - handle mouse object drag
     */
    this.canvas.addEventListener('mousemove', e => {
      const currentPointer = this.getPointer(e);

      if (!this.lastPointer) {
        this.lastPointer = currentPointer;
      }

      // Calculate offset
      this.mouseOffset = {
        x: this.lastPointer.x - currentPointer.x,
        y: this.lastPointer.y - currentPointer.y
      };

      console.log(this.mouseOffset);

      // Update last mouse position
      this.lastPointer = currentPointer;

      // Dragging
      if (this.leftMouseDown) {

      }

    });




    this.canvas.addEventListener('mouseup', e => {
      this.leftMouseDown = false;

    });
  }


  private getPointer(event: any): {x: number, y: number} {
    return {x: event.clientX - this.canvasOffset.x, y: event.clientY - this.canvasOffset.y};
  }


  public add(element: any) {
    this.elements.push(element);
  }


  public on(eventName: string, eventCallback: any) {

  }
}

export default DCanvas;
