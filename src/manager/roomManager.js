exports.generateAccessCode = function() {
  var code = "";
  var possible = "afghijkloqrsuwxy23456789";

    for(var i=0; i < 6; i++){
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    }

  return code;
}
