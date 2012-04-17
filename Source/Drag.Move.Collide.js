/*
---
description: The Drag.Move.Collide class makes it easy to detect when two or more elements collide when dragging an another element.

authors:
  - Jean-Nicolas Boulay (http://jean-nicolas.com/)

license:
  - MIT-style license

requires:
 - core/1.4:   '*'
 - elCollide/0.1

provides:
  - Drag.Move.Collide
...
*/

Drag.Move.Collide = new Class({

		Extends: Drag.Move,

		options: {/*
				onCollide: function(thisElement, thisOvered){},
				onLeaveCollision: function(thisElement, overed){},*/
				checkDroppables: false,
				checkCollision: true
		},

		initialize: function(element, options){
			this.parent(element, options);
			if (this.options.checkCollision) this.addEvent('start', this.checkCollision, true);	
			this.overed = null;
		},

		checkDroppables: function() {
			if(this.options.checkDroppables) this.parent();
		},

		checkCollision: function(){

			var overed = this.droppables.filter(function(el, i){

				return el.elCollide(this.element);

			}, this);

			if (this.overed != overed){
				if (this.overed) this.fireEvent('leaveCollision', [this.element, this.overed]);
				if (overed) this.fireEvent('collide', [this.element, overed]);
				this.overed = overed;
			}

		},

        drag: function(event){
			this.parent(event);
			if (this.options.checkCollision && this.droppables.length) this.checkCollision();
		},

		stop: function(event){
			if (this.options.checkCollision && this.droppables.length) this.checkCollision();
			this.fireEvent('drop', [this.element, this.overed, event]);
			this.overed = null;
			var events = {
				mousemove: this.bound.drag,
				mouseup: this.bound.stop
			};
			events[this.selection] = this.bound.eventStop;
			this.document.removeEvents(events);
			if (event) this.fireEvent('complete', [this.element, event]);
		}

    });