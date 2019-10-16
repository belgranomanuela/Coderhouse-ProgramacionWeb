function CuentaBancaria(nombreTitular, apellidoTitular, numeroCuenta, saldo) {
  this.nombreTitular = nombreTitular;
  this.apellidoTitular = apellidoTitular;
  this.numeroCuenta = numeroCuenta;
  this.saldo = saldo;
  this.movimientos = [];
  this.nombreCompleto = function() {
    console.log(this.nombreTitular + ' ' + this.apellidoTitular);
  };
  this.debito = function(monto) {
    if (this.saldo - monto < 0) {
      console.log('No se puede realizar el debito por saldo insuficiente');
      return;
    }
    this.movimientos.push(monto);
    this.saldo -= monto;
  };
  this.credito = function(monto) {
    this.saldo += monto;
    this.movimientos.push(monto);
  };
  this.mostrarSaldo = function() {
    console.log(this.saldo);
  };
  this.mostrarMovimientos = function() {
    console.log(this.movimientos);
  };
 }
 let cuenta1 = new CuentaBancaria('Joaquin', 'Lumelsky', 1, 1000);
 console.log('Arranca con saldo de 1000');
 cuenta1.nombreCompleto();
 cuenta1.debito(100);
 cuenta1.mostrarSaldo();
 cuenta1.credito(200);
 cuenta1.mostrarSaldo();
 cuenta1.debito(500);
 cuenta1.mostrarSaldo();
 cuenta1.debito(2000);
 cuenta1.mostrarSaldo();
 cuenta1.mostrarMovimientos();
 let cuenta2 = new CuentaBancaria('Jose', 'Rodriguez', 2, 300);
 // cuenta2.nombreCompleto();
 // cuenta2.debito(500);
 // cuenta2.mostrarSaldo();
 // cuenta2.credito(200);
 // cuenta2.mostrarSaldo();
 // cuenta2.debito(500);
 // cuenta2.mostrarSaldo();
 // cuenta2.credito(200);
 // cuenta2.mostrarSaldo();
 // cuenta2.debito(500);
 // cuenta2.mostrarSaldo();