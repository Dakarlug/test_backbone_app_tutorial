test( "testing  our application - specifically our backbone view ", 
function(){
//Define a backBone Model object
Speech=  Backbone.Model.extend({
  str: function(){
    return  this.attributes.speaker_name +  " : " 
	     + this.attributes.title
  }
})

// instanciate Model with given attributes
model = new  Speech({
  speaker_name : 'Alioune Dia',
  title  : 'BackBone Demo FrameWork' 
})
      
// difine a basic view
SpeechView  = Backbone.View.extend({
  model_has_changed:0,
  initialize: function(){
   this.listenTo(this.model, "change", this.model_change);
  },
  // Model change, we increment the model_has_changed attributes
  model_change: function(){
    alert('model has changed')
    this.model_has_changed += 1 
  }
 });
 
 view = new SpeechView({model:model , el :$('body')})
 //$('body').append(view.el);
 view.render()
 // change speaker name to Genova , currently the speaker name 
 // is Alioune Dia
 view.model.set({speaker_name: "Genova"})
 equal(view.model_has_changed , 1 , 
				"The view model sould be incremented"
			      + "and should be equal to 1, not 0")
});


