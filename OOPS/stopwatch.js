function StopWatch() {
  let startTime = null,
      endTime = null,
      running = false,
      duration = 0;

  this.start = function()
  {

    if (running)
    {
      throw new Error ("STOP WATCH HAS ALREADY STARTED ")
    }
    running = true;
    starTime = new Date();
    
  }
  this.stop = function()
  {
    if (!running) {
      throw new Error ("STOP WATCH HAS NOT STARTED ")
    }
    running = false
    endTime = new Date();
    const second= (endTime.getTime() - starTime.getTime())/1000
    duration += second;

  }
  this.reset = function()
  {
    starTime = null;
    endTime = null;
    running = false;
    duration = 0;

  }
  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    }
  })
}

const watch = new StopWatch()

