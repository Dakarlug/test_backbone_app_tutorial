backbonejs_tutorial
===================
This is The demo BackBone js app  for DakarLug , to teach how 
people can use The Backone js FrameWork to build great applica
tions that follow MVC strandards .For More informations you 
can look To the officiel web site of the frameWork 
backbonejs.org.


	git clone https://github.com/Dakarlug/backbonejs_tutorial
      cd backbonejs_tutorial
      

Demo BackBone 
=============

BckBonejs allow you to  implements a Model , View ,Router  , to 
build the logic of your application , These  are some  great Js
class That you can implements and add some logics as custom model,
collections of custom Model , and Html stuffs


Install NodeJs :
===============
Before starting , you can install NodeJs FrameWork , and npm
(This are similaire to apt-get tool for Unix ) It allow you 
to install node dependencies for your applications

Play With Model:
===============


    cd backbonejs_tutorial
    npm install backbone
    node
    >> Backbone =require("backbone") 
    >> Speatch  =  Backbone.Model.extend({
        str: function(){
            return  this.attributes.speaker_name +  " : " 
                    + this.attributes.title
        }
    })
    >> s  = new  Speatch ({
    speaker_name : 'Alioune Dia',
    title  : 'BackBone Demo FrameWork' 
    })
    >> s.str()



Play With Collection:
====================


    Speatchs = Backbone.Collection.extend({
       model: Speatch  
    });
    ss  = new Speatchs()
    ss.length
    ss.add(s)
    ss.toJSON()
    ss.length
    ss.reset()
    ss.length

Play with View:
==============

For testing whow backbone View Work in a real context , I prosose you 
to do more Things (Test basic app That will go basic things ) .it 
only create One view , and take One Model, And bind An Model change 
event ie When you change the speaker_name , This wiew will increment
The model_has_changed attributes .  All this Will live into The 
test.js  file .And you need and QUnit FrameWork to get things 
Work fine.


    test( "testing  our application - specifically our backbone view ", 
    function(){
    //Define a backBone Model object
    Speatch  =  Backbone.Model.extend({
      str: function(){
        return  this.attributes.speaker_name +  " : " 
                 + this.attributes.title
      }
    })

    // instanciate Model with given attributes
    model = new  Speatch({
      speaker_name : 'Alioune Dia',
      title  : 'BackBone Demo FrameWork' 
    })
          
    // difine a basic view
    SpeatchView  = Backbone.View.extend({
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
     
     view = new SpeatchView({model:model , el :$('body')})
     //$('body').append(view.el);
     view.render()
     // change speaker name to Genova , currently the speaker name 
     // is Alioune Dia
     view.model.set({speaker_name: "Genova"})
     equal(view.model_has_changed , 1 , 
                            "The view model sould be incremented"
                            + "and should be equal to 1, not 0")
    });




![Alt text](https://github.com/Dakarlug/test_backbone_app_tutorial/blob/master/test..PNG "screen_shot")




Thank you very Much , Now We are going The Write some more 
code soon with all guys which love JavaScript very well 
On The SFD 2014  .http://blog.dakarlug.org/


Alioune Dia




    


      
