class Cadastro{
    constructor(){
    this.id = 1;
    this.arrayCadastro = [];
    }
    

receberDados(){
    event.preventDefault();
    let cadastro = this.lerDados()
    if(this.validarDados(cadastro) === true){
        this.salvar(cadastro)
        this.mostrarRetornoPositivo()
    }else{
    this.mostrarRetornoNegativo()
    }
    
    this.limpar()

}

lerDados(){
    let cadastro = {}
    cadastro.id = this.id;
    cadastro.nomePessoa = document.getElementById('nome').value
    cadastro.emailPessoa = document.getElementById('email').value
    cadastro.telefonePessoa = document.getElementById('telefone').value
    cadastro.cpfPessoa = document.getElementById('cpf').value
    cadastro.senhaPessoa = document.getElementById('senha').value
    return cadastro
}

validarDados(cadastro){
    if(cadastro.nomePessoa == ''){
        let respostaNome = document.getElementById('respostanome')
        respostaNome.innerText = '*Campo obrigatório'
        this.mostrarRetornoNegativo();
        return false
    } else{
        let respostaNome = document.getElementById('respostanome')
        respostaNome.innerText = ''
        
    }

    if(cadastro.emailPessoa == ''){
        let respostaEmail = document.getElementById('respostaemail')
        respostaEmail.innerText = '*Campo obrigatório'
        this.mostrarRetornoNegativo();
        return false
    } else{
        let respostaEmail = document.getElementById('respostaemail')
        respostaEmail.innerText = ''
        
    }

    return true
}

salvar(cadastro){
    this.arrayCadastro.push(cadastro)
    this.id++
    
}

mostrarRetornoNegativo(){
    let respostaCadastro = document.getElementById('respostacadastro')
    respostaCadastro.innerText = 'Campos obrigatórios não preenchidos!'
    respostaCadastro.style.color = 'red'
    respostaCadastro.style.textAlign = 'right'
}

mostrarRetornoPositivo(){
    let respostaCadastro = document.getElementById('respostacadastro')
    respostaCadastro.innerText = 'Cadastro realizado com sucesso!'
    respostaCadastro.style.color = '#2cd62c'
    respostaCadastro.style.textAlign = 'left'
    
}

limpar(){
    document.getElementById('nome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('telefone').value = ''
    document.getElementById('cpf').value = ''
    document.getElementById('senha').value = ''
}

}

var cadastro = new Cadastro();
console.log(cadastro);