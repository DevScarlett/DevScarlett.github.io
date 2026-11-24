
'use strict';
const OLD_KEY='meu-cantinho-dados-v1', KEY='meu-cantinho-dados-v2';
const config={sozinho:{title:'Assistir sozinho',desc:'Para curtir no seu próprio ritmo.',statuses:['Vendo','Quero ver'],types:['Filme','Série','Anime','Outro']},sarah:{title:'Assistir com Sarah',desc:'Histórias para acompanhar juntos.',statuses:['Vendo','Quero ver'],types:['Filme','Série','Anime','Outro']},doramas:{title:'Doramas',desc:'Seus doramas, cada um no seu lugar.',statuses:['Vendo','Quero ver','Vistos'],types:[]},leituras:{title:'Leituras',desc:'Livros e mangás para as próximas páginas.',statuses:['Lendo','Quero ler'],types:['Livro','Mangá','Outro']}};
const initial=[];
function seed(area,status,names){names.forEach(title=>initial.push({id:uid(),area,status,title,type:'',genre:'',platform:'',synopsis:'',rating:null}));}
function uid(){return (globalThis.crypto&&crypto.randomUUID)?crypto.randomUUID():Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);}
seed('sozinho','Vendo',['Programa de proteção a princesas','Tomb Raider King','Jojo','Friends','One Piece','Black Mirror']);