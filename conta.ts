abstract class	Conta	{
  private readonly _numeroDaConta:	number;
  titular:	string;
  private _saldo:	number;
  
  constructor(numeroDaConta:	number,	titular:	string,	saldo:	number)	{
    this._numeroDaConta	=		Math.floor(Math.random()	*	1000)	+	1
    this.titular	=	titular;
    this._saldo	=	saldo;
    }

  get	numeroDaConta():	number	{
    return this._numeroDaConta;
  }

    protected consultaSaldo():	number	{
    return	this._saldo;
  }
  
  protected adicionaSaldo(saldo:	number):	void	{
    this._saldo	+	saldo;
  }
  protected sacarDoSaldo(valor:	number):	void	{
    this._saldo	-=	valor;
  }
  
}

interface Tributavel {
  CalculaTributo(): number;
}



class	ContaPF	extends	Conta	implements Tributavel {
  cpf:	number;
  constructor(cpf:	number,	numeroDaConta:	number,	titular:	string,	saldo:	number)	{
    super(numeroDaConta,	titular,	saldo);
    this.cpf	=	cpf;
  }

  CalculaTributo(): number {
    return 100 // exemplo
  }

  consultar():	string	{
    return	`Saldo	atual:	${this.consultaSaldo()}`;
  }
  sacar(valor:	number)	{
    if	(this.consultaSaldo()	>	0	&&	valor	<=	this.consultaSaldo())	{
            this.sacarDoSaldo(valor);
    }
  }
}

class	ContaPJ	extends	Conta	{
  cnpj:	number;
  constructor(cnpj:	number,	numeroDaConta:	number,	titular:	string,	saldo:	number)	{
    super(numeroDaConta,	titular,	saldo);
    this.cnpj	=	cnpj;
  }
  consultar():	string	{
    return	`Saldo	atual:	${this.consultaSaldo()}`;
  }

  sacar(valor:	number)	{
    this.sacarDoSaldo(valor);
  }
  
}


const	pessoaFisica	=	new	ContaPF(546546987657498, 1,	"carlos eduardo",	1000,);
const	pessoaJuridica	=	new	ContaPJ(46173051000116, 1,	"Thiago	Adriano",	1000);

console.log(pessoaFisica.consultar())
pessoaFisica.sacar(100)
console.log(pessoaFisica.numeroDaConta)
