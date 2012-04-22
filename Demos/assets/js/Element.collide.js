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
    collide: function(el){
        var thisCoors = this.getCoordinates(),
            elCoors = el.getCoordinates();
        
        return !((thisCoors['bottom'] < elCoors['top']) ||
                 (thisCoors['top'] > elCoors['bottom']) ||
                 (thisCoors['right'] < elCoors['left']) ||
                 (thisCoors['left'] > elCoors['right']));
    }
});