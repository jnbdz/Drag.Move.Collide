/*
---
description: Detect if two elements are colliding.

authors:
  - Jean-Nicolas Boulay (http://jean-nicolas.com/)

license:
  - MIT-style license

requires:
 - core/1.4:   '*'

provides:
  - Element.collide
...
*/

Element.implement({
    collide: function(el2){
        this.offsetBottom = this.offsetTop + this.offsetHeight;
        this.offsetRight = this.offsetLeft + this.offsetWidth;
        el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
        el2.offsetRight = el2.offsetLeft + el2.offsetWidth;
        
        return !((this.offsetBottom < el2.offsetTop) ||
                 (this.offsetTop > el2.offsetBottom) ||
                 (this.offsetRight < el2.offsetLeft) ||
                 (this.offsetLeft > el2.offsetRight));
    }
});