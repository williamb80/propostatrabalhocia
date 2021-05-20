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

const feautreImplementaLog = master.branch('Feautre/ImplementaLog');
feautreImplementaLog
  .commit('Adicionando log')
  .commit('Ajustando log')
  .commit('Modificando log');
develop.merge(
  feautreImplementaLog,
  'Enviando a implementação para desenvolvimento'
);
homolog.merge(
  feautreImplementaLog,
  'Enviando a implementação para homologação'
);
release.merge(feautreImplementaLog, 'Enviando a implementação para release');
master.merge(release, 'Enviando a implementação para release');
develop.merge(master, 'replicação da melhoria para QA');
homolog.merge(master, 'replicação da melhoria para QA');
