// Funcionalidade 1 - Boas-vindas
let nomeVisitante = prompt("Qual é o seu nome?");
if (nomeVisitante) {
    alert("Bem-vindo à Semana de Tecnologia, " + nomeVisitante + "!");
} else {
    alert("Bem-vindo à Semana de Tecnologia, Visitante!");
}

// Funcionalidade 2 - Alteração da cor de fundo
let desejaAlterar = confirm("Deseja alterar a cor de fundo da página?");

if (desejaAlterar) {
    let corEscolhida = prompt("Escolha uma das opções de cor: blue, red ou green");
    
    if (corEscolhida) {
        corEscolhida = corEscolhida.toLowerCase().trim();
        
        if (corEscolhida === "blue" || corEscolhida === "red" || corEscolhida === "green") {
            document.body.style.backgroundColor = corEscolhida;
        } else {
            alert("Opção inválida! A cor padrão definida no CSS será mantida.");
        }
    }
}
