module.exports.Track = {
    Tracker: [
      { name: 'Xefros', msg: 'Doing Web programming' },
      { name: 'Joey', msg: 'Watching Xefros' },
      { name: 'Xefros', msg: 'Doing' },
      { name: 'Jude', msg: 'Web programming' },
      { name: 'Tetrarch', msg: 'Watching TV' },
    ],
    addToTracker(input) {
        this.Tracker.push({ name: input.name, msg: input.msg });
    },
    getTracks(){
      return this.Tracker;
    },
    getTrackDy(input){
      var messageOutput = null

      for(var i = 0 ; i < this.Tracker.length ; i++){ 

      if(this.Tracker[i].name == input)
        messageOutput = this.Tracker[i].msg
      }

      if(messageOutput == null)
        return -1;
      else
        return messageOutput;
    },
}
