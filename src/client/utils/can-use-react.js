function canUseReact() {
  return Object.create
      && Object.freeze
      && Date.now
      && Object.keys
      && Array.isArray
      && Array.prototype.every
      && Array.prototype.forEach
      && Array.prototype.indexOf
      && Array.prototype.map
      && Function.prototype.bind
      && String.prototype.split
      && String.prototype.trim;
}


module.exports = canUseReact;
