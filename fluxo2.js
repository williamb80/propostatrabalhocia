// Get the graph container HTML element.

const graphContainer = document.getElementById('graph-container2');
// Instantiate the graph.

const gitgraph = GitgraphJS.createGitgraph(graphContainer, {
  template: 'metro',
  //template: 'blackarrow',
  reverseArrow: false,
  //mode: 'compact',
  orientation: 'vertical-reverse',
  author: 'Leng Li <rlengli@artmed.com.br>'
});

// var gitgraph = new GitGraph({
//   template: 'blackarrow',
//   reverseArrow: false,
//   orientation: 'horizontal',
//   mode: 'compact'
// });

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

// //correção de um problema em produção
// const feautreProblemaProdu = masterHotfix.branch('Feature/ProblemaProducao');
// feautreProblemaProdu.commit('correção do problema em produção');
// masterHotfix.merge(
//   feautreProblemaProdu,
//   'Subindo a correção para master_hotfix'
// );
// master.merge(masterHotfix, 'Subindo a correção para a Master').tag('v1.0.1');

// masterHomolog.merge(
//   master,
//   'Replicando as correções que estão na Master para o ambiente de homologação'
// );
// masterQa.merge(
//   master,
//   'Replicando as correções que estão na Master para o ambiente de Quality Assurance'
// );
// masterDevelop.merge(
//   master,
//   'Replicando as correções que estão na Master para o ambiente de desenvolvimento'
// );

// //Criando o cenário padrão de desenvolvimento
// const feautreImplementaLog = masterHotfix.branch('Feature/ImplementaLog');
// feautreImplementaLog.commit('Criando o branch Feature/ImplementaLog');
// const feautreImplementaSEO = masterHotfix.branch('Feautre/ImplementaSEO');
// feautreImplementaSEO.commit('Criando o branch Feature/ImplementaSEO');
// feautreImplementaLog.commit('Ajustando do Log');
// feautreImplementaSEO.commit('Ajustando de SEO');
// feautreImplementaLog.commit('Adaptação do Log');
// feautreImplementaSEO.commit('Adaptação de SEO');

// masterDevelop.merge(
//   feautreImplementaLog,
//   'Merge da Feuture de Log com o ambiente de desenvolvimento'
// );
// masterDevelop.merge(
//   feautreImplementaSEO,
//   'Merge da Feuture de SEO com o ambiente de desenvolvimento'
// );

// feautreImplementaLog.commit('Correção do Log');
// feautreImplementaSEO.commit('Correção de SEO');

// masterDevelop.merge(
//   feautreImplementaLog,
//   'Merge da Feuture de Log com o ambiente de desenvolvimento - Após a correção'
// );
// masterDevelop.merge(
//   feautreImplementaSEO,
//   'Merge da Feuture de SEO com o ambiente de desenvolvimento - Após a correção'
// );

// //Correção de um problema em produção durante o desenvolvimento de duas melhorias
// const feautreCorrecaoAmbiente = masterHotfix.branch(
//   'Feature/NovoProblemaProducao'
// );
// feautreCorrecaoAmbiente.commit('correção de um novo problema em produção');
// feautreCorrecaoAmbiente.commit('Outro ajuste');
// feautreCorrecaoAmbiente.commit('Problema corrigido');
// masterHotfix.merge(
//   feautreCorrecaoAmbiente,
//   'Subindo a correção para master_hotfix'
// );
// master.merge(masterHotfix, 'Subindo a correção para a Master').tag('v1.0.2');
// masterDevelop.merge(
//   master,
//   'Replicando as correções que estão na Master para o ambiente de desenvolvimento'
// );
// masterQa.merge(
//   master,
//   'Replicando as correções que estão na Master para o ambiente de homologação'
// );
// masterHomolog.merge(
//   master,
//   'Replicando as correções que estão na Master para o ambiente de homologação'
// );

// //envio dos testes para homologação do usuario
// masterHomolog.merge(
//   feautreImplementaLog,
//   'Envio das correções para o usuário homologar'
// );
// masterHomolog.merge(
//   feautreImplementaSEO,
//   'Envio das correções para o usuário homologar'
// );

// //Envio das melhorias para QA testar
// masterQa.merge(
//   feautreImplementaLog,
//   'Envio da melhoria para QA - Testes em homologação'
// );
// masterQa.merge(
//   feautreImplementaSEO,
//   'Envio da melhoria para QA - Testes em homologação'
// );

// feautreImplementaLog.commit('Correção do Log - Solicita por QA');
// masterHomolog.merge(
//   feautreImplementaLog,
//   'Envio da melhoria para QA - Com os ajustes solicitados por QA.'
// );
// feautreImplementaSEO
//   .commit('Correção 1 do SEO - Solicita por QA')
//   .commit('Correção 2 do SEO - Solicita por QA')
//   .commit('Correção 3 do SEO - Solicita por QA');

// masterHomolog.merge(
//   feautreImplementaSEO,
//   'Envio da melhoria para QA - Com os ajustes solicitados por QA.'
// );

// //Melhoria aprovada por QA para subir em produção
// masterHotfix.merge(
//   feautreImplementaSEO,
//   'Envio da melhoria de SEO para HotFix'
// );

// masterHotfix.merge(
//   feautreImplementaLog,
//   'Envio da melhoria de Log para HotFix'
// );

// master
//   .merge(masterHotfix, 'Envio das melhorias de Log e SEO para HotFix')
//   .tag('v1.1.0');

// masterHomolog.merge(
//   master,
//   'Replicando as correções que estão na Master para o ambiente de homologação'
// );
// masterDevelop.merge(
//   master,
//   'Replicando as correções que estão na Master para o ambiente de desenvolvimento'
// );

// const feautreCorrecaoHome = masterHotfix.branch('HotFix/CorrecaoNaHome');
// feautreCorrecaoHome.commit('Ajuste Realizado');
// masterHotfix.merge(feautreCorrecaoHome, 'Envio da correção na Home');
// master
//   .merge(masterHotfix, 'Envio da última versão para a master')
//   .tag('v1.1.1');
// masterHomolog.merge(
//   master,
//   'Replicando as correções que estão na Master para o ambiente de homologação'
// );
// masterDevelop.merge(
//   master,
//   'Replicando as correções que estão na Master para o ambiente de desenvolvimento'
// );
