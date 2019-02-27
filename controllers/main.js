module.exports.index = function(req, res, next){
  res.render('index',{tittle:'mañana',
                      artista:[
                        {nombre: 'Emilia',
                          apellido:'Vargas'
                        },
                        {nombre:'Andrea',
                         apellido:'Flores'}]
                       });
}


module.exports.hola = function(req,res,next){
  res.render('hola',{tittle:' hola loca'});
}

module.exports.adios = function(req,res,next){
  res.render('adios',{tittle:' otra loca'});
}
module.exports.cualquiera = function(req,res,next){
  res.render('error',{tittle:'un culo'});
}
