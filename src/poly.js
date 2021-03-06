SVG.Polyline = function(unbiased) {
  this.constructor.call(this, SVG.create('polyline'))
  
  this.unbiased = unbiased
}

// Inherit from SVG.Shape
SVG.Polyline.prototype = new SVG.Shape

SVG.Polygon = function(unbiased) {
  this.constructor.call(this, SVG.create('polygon'))
  
  this.unbiased = unbiased
}

// Inherit from SVG.Shape
SVG.Polygon.prototype = new SVG.Shape

// Add polygon-specific functions
SVG.extend(SVG.Polyline, SVG.Polygon, {
  // Private: Native plot
  _plot: function(p) {
    if (Array.isArray(p))
      p = new SVG.Array(p, [[0,0]])
    
    return this.attr('points', p)
  }
  
})

//
SVG.extend(SVG.Container, {
  // Create a wrapped polyline element
  polyline: function(points, unbiased) {
    return this.put(new SVG.Polyline(unbiased)).plot(points)
  }
  // Create a wrapped polygon element
, polygon: function(points, unbiased) {
    return this.put(new SVG.Polygon(unbiased)).plot(points)
  }
})