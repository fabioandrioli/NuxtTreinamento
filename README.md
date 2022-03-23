# NuxtJs
Treinando, para relembrar os conceitos de nuxtJs

----------------------------------------------------------------------------

# Parametros de rotas no nuxtJs
É usado o underline ``` _slug ``` ele ira capturar os parametos da url.

----------------------------------------------------------------------------
# Definindo template para as páginas filhos
Usamos dois aquivos do mesmo nome para definir templates. Adicionamos a tag nuxtchild

----------------------------------------------------------------------------
# Layouts
Para definirmos um modelos, criamos uma pasta layouts
e definimos um arquivo defaul, ele ja reconhece automaticamente.

----------------------------------------------------------------------------
# middleware
Pode ser usado no arquivo default ae fica padrão para todas as paginas,
Ou entao em uma pagina especifica. É apenas a chamda de uma funcao dentro do export default.
se chamarmos uam funcao assim ``` middleware(){ console.log("Teste de middleware")} ``` Ele vai executar sempre que acessar a pagina especifica, ou o projeto caso esteja no arquvio default.

----------------------------------------------------------------------------
# midleware para toas as rotas
Para definir uma middleware para todas as rotas,
Temos que ir no arquivo nuxt.config.js 
- adicionar ```router:{},``` dentro do objeto definimos o middleware

----------------------------------------------------------------------------
# Context middleware
No middleware podemos usar o context, que nos da diversa ferramentas.
Uma é redirect onde podemos controlar nossas rotas.

----------------------------------------------------------------------------
# asyncData ()
Usado para fazer requisicoes. Roda do lado do cliente e do lado do servidor
Roda antes do componenent ser criado.
    - # Dentro dele tamém temos o context, que dentro dele tem o $axios.
Então podemos descontrui-los e usalo para fazer requisicao http.

----------------------------------------------------------------------------
# fetch()
A propriedade fetch faz o que o asyncData faz, porem depois que carrega o component
O legal é que ele nos da um atributo chamado "peding" que tem valores boleanos falso ou true
enquanto ele esta fazendo uma requisicao, ele deixa o valor como falso.
Depois que a requisicao é terminada, ele seta como true.
```<div v-if="$fetchState"> ```

-----------------------------------------------------------------------------
# Propiredade haed
A propriedade head possibilita mecher com as metas tags
- ``` head() ``` é uma propriedade para usar meta-tag.

------------------------------------------------------------------------ 

# Vuex
- O vuex usa a store, que usa 3 propriedade
- actions.
- mutations.
- states.

# states
- Os states são variaveis que definimos como padrão.

# mutatios
É o que vai responsavel na mudança dos estados.
ele recebe dois parametros um por padrão é o (state,produto)
o outro parametro é o que queros alterar no estado.

Com isso acessamos o estado e pegamos o atributos e realizamos a mudança.
``` state.produto = produto ```

# aciton
É responsavel por usar o mutation, os mutatios sao chamados aqui
o action é reponsavel por buscar qualquer outro dado e colocar na mutation.
exemplo 
- ``` axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
    primeiro parametro é o nome da mutation  e o segundo é dado
    commit('SET_PRODUTO',response.data)
}) ```

As action recebem por parametro um context, e o context tem uma funcao chamada commit
que usamos para modificar as mutations, podemos descontruir o context e chamar a commit direto
- ``` ({commit}) ```
A action pode receber outros paretros ficando assim
({commit},produto)

# Acessando a action no component
 Para acessar a action podemos no nuxt, podemos usar o dataSync, data, ou created
temos que acesar o store, todos esses metodos tem um context como parametros que nos
dão diversas ferramentas, uma delas é o store. Porém podemos acessar ele diretamente assim
- ``` ({store}) ```
Depois precisamos fazer um disptach, caso tenhamos criado uma pasta de user dentro da pasta story, precisamos passar o caminho para o dispacth
ficando assim 
- ``` store.dispatch('user/getDevs') ``` 
 caso seja o component created() podemos usar assim
- ``` this.$store.dispatch('user/getDevs') ```
Podemos também fazer o mapeamento dessas action importando os maps do Vuex
- ``` import {mapActions, mapState, mapMutations} from 'vuex' ``` 
e podemos usar o map, nos methods, porem temos que setar uma label para ele que sera usado
como nome do metodos
- ```methods: {
    ...mapActions({
      getDevs: 'user/getDevs',
    })
  } ```

a chamda dele fica assim
- ```created() {
    console.log('created')
    this.getDevs(); // nova maneira usando o map
  } ``` 
a

------------------------------------------------------------------------
# Getters
São funcoes ultilitarias, que ajudarao a dar ajuste
em algum momento, exemplo, colocar todoas as primeiras
Letras do nome de um usuário em maiusculo.

-------------------------------------------------------------------

# Plugins
Criamos uma pasta chamada plugins, e todo plugin ficara dentro dela.
Pelo nome da pasta registrada no config o nuxt reconhece automaticamente.
- ```   
 plugins: [
    '@/plugin/my-plugin.',
  ],
```
Podemos usar pluggins para facilitar nossa vida
Neste projeto usamos v-tooltip
- ``` npm install --save v-tooltip ```
Instalamos o pacote. normal como fariamos no vuejs client.
temos que registrar o plugin no arquvi nuxt.config.js
depois disso ele se torna uma variavel imutavel, então usamos dele com o $ na frente

- O plugin tbm recebe context, e recebe tbm o inject.
-  Com inject podemos alterar a variavel criada no plugin.