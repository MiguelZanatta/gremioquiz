document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Respostas corretas
    const respostas = {
        pergunta1: 'azul',
        pergunta2: '1903',
        pergunta3: 'premier',
        pergunta4: 'renato',
        pergunta5: 'arena',
        pergunta6: ['ronaldinho', 'braithwaite'],
        pergunta7: '3',
        pergunta8: 'imortal tricolor'
    };
    
    let pontuacao = 0;
    const resultados = [];
    
    // Verificar cada pergunta
    // Pergunta 1
    const p1 = document.querySelector('input[name="pergunta1"]:checked');
    if (p1 && p1.value === respostas.pergunta1) {
        pontuacao++;
        resultados.push('P1: Correta');
    } else {
        resultados.push('P1: Incorreta');
    }
    
    // Pergunta 2
    const p2 = document.getElementById('p2').value;
    if (p2 === respostas.pergunta2) {
        pontuacao++;
        resultados.push('P2: Correta');
    } else {
        resultados.push('P2: Incorreta');
    }
    
    // Pergunta 3
    const p3 = document.querySelector('input[name="pergunta3"]:checked');
    if (p3 && p3.value === respostas.pergunta3) {
        pontuacao++;
        resultados.push('P3: Correta');
    } else {
        resultados.push('P3: Incorreta');
    }
    
    // Pergunta 4
    const p4 = document.querySelector('input[name="pergunta4"]:checked');
    if (p4 && p4.value === respostas.pergunta4) {
        pontuacao++;
        resultados.push('P4: Correta');
    } else {
        resultados.push('P4: Incorreta');
    }
    
    // Pergunta 5
    const p5 = document.querySelector('input[name="pergunta5"]:checked');
    if (p5 && p5.value === respostas.pergunta5) {
        pontuacao++;
        resultados.push('P5: Correta');
    } else {
        resultados.push('P5: Incorreta');
    }
    
    // Pergunta 6 (checkbox - múltiplas respostas)
    const p6a = document.getElementById('p6a').checked;
    const p6b = document.getElementById('p6b').checked;
    const p6c = document.getElementById('p6c').checked;
    
    if ((p6a && p6b && !p6c) || 
        (p6a && !p6b && !p6c) || 
        (!p6a && p6b && !p6c)) {
        pontuacao++;
        resultados.push('P6: Correta');
    } else {
        resultados.push('P6: Incorreta');
    }
    
    // Pergunta 7
    const p7 = document.querySelector('input[name="pergunta7"]:checked');
    if (p7 && p7.value === respostas.pergunta7) {
        pontuacao++;
        resultados.push('P7: Correta');
    } else {
        resultados.push('P7: Incorreta');
    }
    
    // Pergunta 8 (texto - case insensitive)
    const p8 = document.getElementById('p8').value.toLowerCase().trim();
    if (p8 === respostas.pergunta8) {
        pontuacao++;
        resultados.push('P8: Correta');
    } else {
        resultados.push('P8: Incorreta');
    }
    
    // Mostrar resultado
    alert(`Você acertou ${pontuacao} de 8 perguntas!\n\n${resultados.join('\n')}`);
    
    // Opcional: Destacar respostas corretas/incorretas
    // Isso pode ser implementado com mais detalhes se desejar
});