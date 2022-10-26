import {injectable, /* inject, */ BindingScope} from '@loopback/core';

//importando paquetes para creara la clave y cifrar la clave
const generador = require('password-generator')
const cryptojs = require('crypto-js')

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

  //crear la clave
  GenerarClave(){
    let clave = generador(8,false)
    return clave
  }

  //cifrar la clave
  CifrarClave(contraseña: String){
    let claveCifrada= cryptojs.MD5(contraseña).toString()
    return claveCifrada
  }
}
