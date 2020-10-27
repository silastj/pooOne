BEM - BLOCK ELEMENT MODIFIER

=> Regra

Ou seja, explicando agora o padrão da nomenclatura que utilizamos:
Nossa primeira classe sempre será o bloco: .list
Para criarmos os elementos, utilizamos 2 underlines ( __ ) após o nome do nosso bloco: .list__item, .list__title
Para criarmos os modificadores, utilizamos 2 traços ( — ) no nosso bloco ou elemento: .list__item--highlight, .list__author--active


=DICAS DE NAME

==========================================

BLOCK => BLOCO DE CONTEUDO
Exemplo: Menu , input, botão

=> Regra
1= Precisa ter uma class para modificar(sem tag e ID)
2= Sem dependência hierarquica

================================================
ELEMENT => ELEMENTOS
Exemplo: os itens do menu

=> Regra
Nome é precedido do BLOCK e __

===============================================

MODIFIER => MODIFICADORES
Exemplo: input, botão
=>Regra

.bloco--nome-do-modificador
.form__input--nome-do-modificador

Modifier para o elemento.
.form__input--green

================================================
OBS:
Não criar modificadores globais
por exemplo:

.hiden{
    display:none;
}

E aplicar ele em algum elemento.







