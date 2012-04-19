Drag.Move.Collide
===========

The Drag.Move.Collide class makes it easy to detect when two or more elements collide when dragging another element.

![Screenshot](https://github.com/jnbdz/Drag.Move.Collide/raw/master/drag.move.collide.png)

How to use
----------

Similar to Drag.Move, Drag.Move.Collide needs all of the same informations.

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