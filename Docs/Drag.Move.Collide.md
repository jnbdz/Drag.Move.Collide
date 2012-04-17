Class: Drag.Move.Collide
=============================

**Syntax**

    var collide = new Drag.Move.Collide(el, [options]);
    
**Implements**

[Events](http://mootools.net/docs/core/Class/Class.Extras#Events), [Options](http://mootools.net/docs/core/Class/Class.Extras#Options)

**Extends**

[Drag.Move](http://mootools.net/docs/more/Drag/Drag.Move)

**Arguments**

1. el - (element) The Element to apply the drag to.
2. options - (object, optional) The options object.

**Options**

All the base Drag and Drag.Move options, plus:

* checkDroppables (boolean; defaults to false) Checks against the droppables on drag if true.
* checkCollision (boolean; defaults to true) If true, the class will be detect collisions.

**Events**

All the base Drag and Drag.Move events, plus:

* collide - Executed when the dragged element collides with the other elements.
* leaveCollision - Executed when the element leaves the elements it had collided with.

**Example**

        new Drag.Move.Collide(document.id('drag'), {

            container: $$('#collision>div')[0],

            droppables: $$('#collision .drop'),

            onCollide: function(element, droppable){
                droppable.setStyle('background', '#E79D35');
            },

            onLeaveCollision: function(element, droppable){
                droppable.setStyle('background', '#6B7B95');
            },

            onDrop: function(element, droppable){
                if (droppable) droppable.setStyle('background', '#C17878');
            }

        });