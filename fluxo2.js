// Get the graph container HTML element.

const graphContainer = document.getElementById('graph-container');
// Instantiate the graph.

const gitgraph = GitgraphJS.createGitgraph(graphContainer, {
  template: 'metro',
  //template: 'blackarrow',
  reverseArrow: false,
  //mode: 'compact',
  orientation: 'vertical-reverse',
  author: 'Leng Li <rlengli@artmed.com.br>'
});

// Simulate git commands with Gitgraph API.
const master = gitgraph.branch('master');
master.commit('criando a master');
master.tag('v1.0.0');

const release = master.branch('release');
release.commit('criando a release');
const homolog = master.branch('homolog');
homolog.commit('criando a master_homolog');
const develop = master.branch('develop');
develop.commit('criando a master_develop');

const feautreCorrecaoEmProducao = master.branch('HotFix/CorrecaoEmProducao');
feautreCorrecaoEmProducao
    .commit('Correcao da Home')
    .commit('Correção da API')
    .commit('Correção do Estilo');

homolog.merge(feautreCorrecaoEmProducao, 'Enviando a correção para testar');
release.merge(feautreCorrecaoEmProducao,'Enviando a correção para a release');
master.merge(release);
develop.merge(master);
homolog.merge(master);




