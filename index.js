// Get the graph container HTML element.

const graphContainer = document.getElementById('graph-container');
// Instantiate the graph.
const gitgraph = GitgraphJS.createGitgraph(graphContainer, {
  orientation: 'vertical-reverse',
  template: templateExtend('metro', {
    colors: ['red', 'blue', 'green', 'gray']
  })
});

// Simulate git commands with Gitgraph API.
const master = gitgraph.branch('master');
master.commit('Criando o projeto');
master.tag('v1.0.0');

const masterHotfix = master.branch('master_hotfix');
masterHotfix.commit('criando a master_hotfix');
const masterHomolog = masterHotfix.branch('master_homolog');
masterHomolog.commit('criando a master_homolog');
const masterDevelop = masterHotfix.branch('master_develop');
masterDevelop.commit('criando a master_develop');

//correção de um problema em produção
const feautreProblemaProdu = masterHotfix.branch('Feature/ProblemaProducao');
feautreProblemaProdu.commit('correção do problema em produção');
masterHotfix.merge(
  feautreProblemaProdu,
  'Subindo a correção para master_hotfix'
);
master.merge(masterHotfix, 'Subindo a correção para a Master').tag('v1.0.1');
masterHomolog.merge(
  master,
  'Replicando as correções que estão na Master mara o ambiente de homologação'
);
masterDevelop.merge(
  master,
  'Replicando as correções que estão na Master mara o ambiente de desenvolvimento'
);

const feautreImplementaLog = masterHotfix.branch('Feature/ImplementaLog');
feautreImplementaLog.commit('Adicionando log ao projeto');
feautreImplementaLog.commit('Ajustando o Log');

// const masterHomolog = master.branch("master_homolog");
// masterHomolog.commit("criando a master_homolog");

// const masterDevelop = master.branch("master_develop");
// masterDevelop.commit("criando a master_develop");

// const featureImplementaLog = masterHotfix.branch("feature/Implementa_Log");
// featureImplementaLog.commit("Adicionando Log");
// featureImplementaLog.commit("Ajustando Log");

// masterDevelop.merge(featureImplementaLog).commit("Levando a melhoria para teste em ambiente de desenvolvimento");
// masterHomolog.merge(featureImplementaLog).commit("Entregando a melhoria no ambiente de desenvolvimento homologação para QA.");
// featureImplementaLog.commit("implementação da correção solicitada por QA");
// masterDevelop.merge(featureImplementaLog).commit("Levando a melhoria com a correção de QA para teste em ambiente de desenvolvimento");
// masterHomolog.merge(featureImplementaLog).commit("Entregando a melhoria com a correção solicitada por QA no ambiente de desenvolvimento homologação para QA.");
// const develop = master.branch("develop");
// develop.commit("Add TypeScript");
// const aFeature = develop.branch("a-feature");
// aFeature
//   .commit("Make it work")
//   .commit("Make it right")
//   .commit("Make it fast");

// develop.merge(aFeature);
// develop.commit("Prepare v1");

// master.merge(develop).tag("v1.0.0");
