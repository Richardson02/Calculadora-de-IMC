function calcular() {
  var name = document.getElementById("nome");
  var altura = document.getElementById("alt");
  var peso = document.getElementById("peso");
  var res = document.getElementById("res");
  var cont = document.querySelector("p#cont");

  var nome = String(name.value);
  res.innerHTML = `Olá ${nome}`;

  var h = Number(altura.value);
  var p = Number(peso.value);
  var imc = p / (h * h);
  var imcFormatado = imc.toFixed(2);

  cont.innerHTML = `Seu resultado foi: `;
  fimr.innerHTML = `${imcFormatado}`;
  imcFormatado = Number(imcFormatado);

  if (p == 0 || h == 0) {
    window.alert("Algo está faltando!");
  }

  // Formatando resultado final

  document.getElementById("fimc").style.background = "white";
  document.getElementById("fimc").style.width = "200px";
  document.getElementById("fimc").style.height = "100px";
  document.getElementById("fimc").style.textAlign = "center";
  document.getElementById("fimc").style.margin = "-30px 75px";
  document.getElementById("fimc").style.fontSize = "40px";
  document.getElementById("fimc").style.borderRadius = "8px";
  document.getElementById("fimc").style.boxShadow = "2px 2px black";

  document.getElementById("fimr").style.paddingTop = "30px";

  // Classificação

  document
    .querySelectorAll("li")
    .forEach((li) => (li.style.background = "none"));

  if (imcFormatado < 18.5) {
    document.querySelector("li#abaixo").style.background = "orangered";
  } else if (imcFormatado >= 18.5 && imcFormatado < 25) {
    document.getElementById("normal").style.background = "green";
  } else if (imcFormatado >= 25 && imcFormatado < 30) {
    document.getElementById("sobrepeso").style.background = "yellowgreen";
  } else if (imcFormatado >= 30 && imcFormatado < 35) {
    document.getElementById("og1").style.background = "yellow";
  } else if (imcFormatado >= 35 && imcFormatado < 40) {
    document.getElementById("og2").style.background = "orangered";
  } else if (imcFormatado >= 40) {
    document.getElementById("og3").style.background = "red";
  }

  // Tabela de Cuidados

  var cuidado = document.getElementById("tbres");
  if (imcFormatado < 18.5) {
    cuidado.innerHTML = `<h3>O que Fazer se Estiver Abaixo do Peso</h3>
        
        1. <strong>Consultar um Profissional de Saúde</strong>:  - - - Procure um médico ou
        nutricionista para orientação personalizada.
        <br /><br />
        2. <strong>Aumentar a Ingestão Calórica</strong>: - Consuma mais calorias do que
        gasta. - Prefira alimentos ricos em nutrientes, como abacate, nozes e
        queijos.
        <br /><br />
        3.  <strong>Refeições Frequentes</strong>: - Faça pequenas refeições frequentes ao
        longo do dia. - Inclua lanches saudáveis, como frutas secas e smoothies.
        <br /><br />
        4.  <strong>Exercício Físico</strong>: - Pratique treinamento de força para ganhar
        massa muscular. - Mantenha uma rotina de exercícios regulares.
        <br /><br />
        5.  <strong>Evitar Alimentos Vazios</strong>: - Reduza o consumo de alimentos
        processados e com calorias vazias.
        <br /><br />
        6.  <strong>Hidratação Adequada</strong>: - Beba líquidos nutritivos, como sucos
        naturais e leite.
        <br /><br />
        7. <strong>Monitoramento</strong>:
        - Acompanhe seu progresso com um profissional de saúde.
        
        <h3> Conclusão </h3>
Ganhar peso de forma saudável envolve um equilíbrio entre aumento calórico e escolha de alimentos nutritivos. A orientação de profissionais de saúde é essencial para um plano seguro e eficaz.`;
  } else if (imcFormatado >= 18.5 && imcFormatado < 25) {
    cuidado.innerHTML = `<h3>O que Fazer se Estiver com Peso Normal</h3>

1. <strong>Manter uma Dieta Equilibrada</strong>: - Continue consumindo uma variedade de alimentos saudáveis, incluindo frutas, vegetais, proteínas magras, grãos integrais e laticínios.
Evite alimentos processados e ricos em açúcares e gorduras saturadas.
<br /><br />
2. <strong>Praticar Exercício Regularmente</strong>: - Faça pelo menos 150 minutos de atividade aeróbica moderada ou 75 minutos de atividade aeróbica vigorosa por semana.
Inclua exercícios de força duas vezes por semana para manter a massa muscular.
<br /><br />
3. <strong>Monitorar o Peso Regularmente</strong>: - Verifique seu peso periodicamente para garantir que está se mantendo na faixa saudável.
Faça exames de saúde regulares para monitorar outros indicadores de saúde.
<br /><br />
4. <strong>Hidratação Adequada</strong>: - Beba bastante água ao longo do dia para manter-se hidratado.
Limite a ingestão de bebidas açucaradas e alcoólicas.
<br /><br />
5. <strong>Gerenciar o Estresse</strong>: - Pratique técnicas de relaxamento, como meditação, yoga ou respiração profunda.
Mantenha um equilíbrio saudável entre trabalho e vida pessoal.
<br /><br />
6. <strong>Dormir Bem</strong>: - Garanta 7-9 horas de sono de qualidade por noite.
Mantenha uma rotina de sono consistente e um ambiente propício para dormir.
<br /><br />
7. <strong>Evitar Hábitos Nocivos</strong>: - Evite fumar e o consumo excessivo de álcool.
Adote hábitos de vida saudáveis que contribuam para o bem-estar geral.

<h3> Conclusão </h3>
Manter o peso normal envolve uma combinação de dieta equilibrada, exercício físico regular e hábitos de vida saudáveis. Acompanhar a saúde regularmente é essencial para garantir que você permaneça na faixa de peso ideal.`;
  } else if (imcFormatado >= 25 && imcFormatado < 30) {
    cuidado.innerHTML = `<h3>O que Fazer se Estiver com Sobrepeso</h3>

1. <strong>Consultar um Profissional de Saúde</strong>:
   - Procure um médico ou nutricionista para um plano personalizado de perda de peso.
<br /><br />
2. <strong>Adotar uma Dieta Balanceada</strong>:
   - Reduza a ingestão de calorias, optando por alimentos ricos em nutrientes.
   - Aumente o consumo de frutas, vegetais, grãos integrais e proteínas magras.
   - Evite alimentos processados, açúcares e gorduras saturadas.
<br /><br />
3. <strong>Praticar Exercício Regularmente</strong>:
   - Realize pelo menos 150 minutos de atividade aeróbica moderada por semana, como caminhada ou ciclismo.
   - Inclua exercícios de força para aumentar a massa muscular e acelerar o metabolismo.
<br /><br />
4. <strong>Monitorar a Perda de Peso</strong>:
   - Acompanhe o progresso regularmente para ajustar a dieta e o plano de exercícios conforme necessário.
   - Utilize aplicativos ou diários de alimentos para monitorar a ingestão calórica.
<br /><br />
5. <strong>Hidratação Adequada</strong>:
   - Beba muita água ao longo do dia para ajudar a controlar o apetite.
   - Evite bebidas açucaradas e alcoólicas.
<br /><br />
6. <strong>Gerenciar o Estresse</strong>:
   - Pratique técnicas de relaxamento, como meditação e yoga, para evitar a alimentação emocional.
   - Encontre atividades que tragam prazer e relaxamento.
<br /><br />
7. <strong>Dormir Bem</strong>:
   - Garanta 7-9 horas de sono por noite, pois o sono inadequado pode afetar o peso.
   - Mantenha uma rotina de sono regular e um ambiente adequado para dormir.
<br /><br />
8. <strong>Evitar Hábitos Nocivos</strong>:
   - Reduza ou elimine o consumo de álcool e tabaco.
   - Concentre-se em hábitos saudáveis que contribuam para a perda de peso.

<h3>Conclusão</h3>
Perder peso de maneira saudável envolve uma combinação de dieta balanceada, exercício físico regular e hábitos de vida saudáveis. Acompanhamento com profissionais de saúde é essencial para um plano eficaz e seguro.`;
  } else if (imcFormatado >= 30 && imcFormatado < 35) {
    cuidado.innerHTML = `<h3> O que Fazer se Estiver com Obesidade Grau I </h3>

1. <strong>Consultar um Profissional de Saúde</strong>:
   - Visite um médico ou nutricionista para um plano de emagrecimento personalizado e seguro.
   - Pode ser necessário acompanhamento de outros especialistas, como endocrinologistas ou psicólogos.
<br /><br />
2. <strong>Adotar uma Dieta Balanceada e Hipocalórica</strong>:
   - Reduza a ingestão calórica diária com a orientação de um nutricionista.
   - Prefira alimentos ricos em nutrientes, como frutas, vegetais, grãos integrais e proteínas magras.
   - Evite alimentos processados, açúcares, gorduras saturadas e trans.
<br /><br />
3. <strong>Praticar Exercícios Regulares</strong>:
   - Realize pelo menos 150 minutos de atividade aeróbica moderada por semana, como caminhadas, natação ou ciclismo.
   - Inclua exercícios de força para aumentar a massa muscular e melhorar o metabolismo.
   - Considere atividades de baixo impacto, especialmente se houver problemas nas articulações.
<br /><br />
4. <strong>Monitorar o Progresso</strong>:
   - Acompanhe a perda de peso regularmente para ajustar a dieta e o plano de exercícios conforme necessário.
   - Utilize aplicativos ou diários alimentares para monitorar a ingestão calórica e a atividade física.
<br /><br />
5. <strong>Hidratação Adequada</strong>:
   - Beba bastante água ao longo do dia para ajudar a controlar o apetite.
   - Evite bebidas açucaradas e alcoólicas.
<br /><br />
6. <strong>Gerenciar o Estresse</strong>:
   - Pratique técnicas de relaxamento, como meditação, yoga ou respiração profunda, para evitar a alimentação emocional.
   - Encontre atividades que tragam prazer e relaxamento.
<br /><br />
7. <strong>Dormir Bem</strong>:
   - Garanta 7-9 horas de sono por noite, pois o sono inadequado pode afetar negativamente o peso.
   - Mantenha uma rotina de sono regular e um ambiente propício para dormir.
<br /><br />
8. <strong>Participar de Grupos de Apoio</strong>:
   - Considere participar de grupos de apoio para perda de peso, onde você pode compartilhar experiências e obter motivação.
<br /><br />
9. <strong>Evitar Hábitos Nocivos</strong>:
   - Reduza ou elimine o consumo de álcool e tabaco.
   - Concentre-se em hábitos saudáveis que contribuam para a perda de peso e a melhoria geral da saúde.

<h3> Conclusão </h3>
Perder peso de maneira saudável e sustentável é um processo que envolve dieta equilibrada, exercício físico regular e mudanças de estilo de vida. O acompanhamento profissional é essencial para garantir a segurança e eficácia do plano de emagrecimento.`;
  } else if (imcFormatado >= 35 && imcFormatado < 40) {
    cuidado.innerHTML = `<h3> O que Fazer se Estiver com Obesidade Grau II </h3>

1. <strong>Consultar Profissionais de Saúde</strong>:
   - Consulte um médico, nutricionista e possivelmente um endocrinologista para criar um plano personalizado.
   - Considere a orientação de um psicólogo para ajudar na gestão de questões emocionais ligadas à alimentação.
<br /><br />
2. <strong>Adotar uma Dieta Balanceada e Hipocalórica</strong>:
   - Siga uma dieta com baixa ingestão calórica, focada em alimentos ricos em nutrientes.
   - Inclua frutas, vegetais, grãos integrais e proteínas magras.
   - Evite alimentos processados, açúcares e gorduras saturadas e trans.
<br /><br />
3. <strong>Exercícios Regulares e Adaptados</strong>:
   - Realize pelo menos 150 minutos de atividade aeróbica moderada por semana, como caminhada, natação ou ciclismo.
   - Inclua exercícios de força para aumentar a massa muscular e acelerar o metabolismo.
   - Considere atividades de baixo impacto para proteger as articulações, como hidroginástica.
<br /><br />
4. <strong>Monitorar o Progresso Regularmente</strong>:
   - Acompanhe a perda de peso e ajuste a dieta e os exercícios conforme necessário.
   - Use aplicativos ou diários alimentares para monitorar a ingestão calórica e a atividade física.
<br /><br />
5. <strong>Manter Hidratação Adequada</strong>:
   - Beba muita água durante o dia para ajudar a controlar o apetite.
   - Evite bebidas açucaradas e alcoólicas.
<br /><br />
6. <strong>Gerenciar o Estresse de Forma Eficaz</strong>:
   - Pratique técnicas de relaxamento, como meditação, yoga ou respiração profunda.
   - Encontre atividades que proporcionem prazer e relaxamento.
<br /><br />
7. <strong>Garantir um Sono de Qualidade</strong>:
   - Durma 7-9 horas por noite, já que o sono inadequado pode impactar negativamente o peso.
   - Mantenha uma rotina de sono regular e um ambiente propício para dormir.
<br /><br />
8. <strong>Considerar Grupos de Apoio e Terapia Comportamental</strong>:
   - Participe de grupos de apoio para perda de peso para compartilhar experiências e obter motivação.
   - Considere a terapia comportamental para mudar hábitos alimentares e comportamentos relacionados ao peso.
<br /><br />
9. <strong>Evitar Hábitos Nocivos</strong>:
   - Reduza ou elimine o consumo de álcool e tabaco.
   - Concentre-se em hábitos de vida saudáveis que contribuam para a perda de peso e a melhoria da saúde geral.
<br /><br />
10. <strong>Avaliar Tratamentos Médicos</strong>:
    - Em casos graves, consulte um médico sobre possíveis intervenções médicas, como medicamentos para perda de peso ou cirurgia bariátrica, se apropriado.

<h3> Conclusão </h3>
A perda de peso em casos de obesidade grau II requer uma abordagem multidisciplinar que inclui dieta, exercício, mudanças de estilo de vida e, possivelmente, intervenções médicas. O acompanhamento contínuo por profissionais de saúde é crucial para um plano seguro e eficaz.`;
  } else if (imcFormatado >= 40) {
    cuidado.innerHTML = `<h3> O que Fazer se Estiver com Obesidade Grau III </h3>

1. <strong>Consulta com Profissionais de Saúde</strong>:
   - Consulte um médico, nutricionista e endocrinologista para criar um plano personalizado.
   - Avalie a possibilidade de acompanhamento psicológico para questões emocionais ligadas à alimentação.
   - Considere a consulta com um cirurgião bariátrico para discutir opções cirúrgicas.
<br /><br />
2. <strong>Adotar uma Dieta Estritamente Controlada</strong>:
   - Siga uma dieta hipocalórica rigorosa sob orientação de um nutricionista.
   - Inclua alimentos ricos em nutrientes, como frutas, vegetais, grãos integrais e proteínas magras.
   - Evite totalmente alimentos processados, açúcares e gorduras saturadas e trans.
<br /><br />
3. <strong>Exercícios Regulares e Adaptados</strong>:
   - Realize atividades físicas de baixo impacto, como caminhada, natação ou hidroginástica, para evitar lesões nas articulações.
   - Inclua exercícios de força para aumentar a massa muscular e melhorar o metabolismo.
   - A atividade física deve ser adaptada e supervisionada por um profissional.
<br /><br />
4. <strong>Monitoramento e Acompanhamento Regular</strong>:
   - Acompanhe a perda de peso regularmente com a ajuda de profissionais de saúde.
   - Utilize ferramentas como aplicativos de monitoramento de dieta e exercícios para manter o controle.
<br /><br />
5. <strong>Manter Hidratação Adequada</strong>:
   - Beba muita água ao longo do dia para ajudar a controlar o apetite.
   - Evite bebidas açucaradas e alcoólicas.
<br /><br />
6. <strong>Gerenciamento de Estresse</strong>:
   - Pratique técnicas de relaxamento, como meditação, yoga ou respiração profunda.
   - Envolva-se em atividades que promovam o bem-estar emocional.

7. <strong>Garantir um Sono de Qualidade</strong>:
   - Durma 7-9 horas por noite, pois o sono adequado é crucial para a perda de peso.
   - Mantenha uma rotina de sono regular e um ambiente propício para dormir.
<br /><br />
8. <strong>Participação em Grupos de Apoio</strong>:
   - Participe de grupos de apoio para perda de peso para compartilhar experiências e obter motivação.
   - Considere a terapia comportamental para mudar hábitos alimentares e comportamentos relacionados ao peso.
<br /><br />
9. <strong>Evitar Hábitos Nocivos</strong>:
   - Reduza ou elimine o consumo de álcool e tabaco.
   - Foque em hábitos de vida saudáveis que contribuam para a perda de peso e a melhoria da saúde geral.
<br /><br />
10. <strong>Avaliação de Tratamentos Médicos</strong>:
    - Discuta com seu médico a possibilidade de medicamentos para perda de peso.
    - Avalie seriamente a cirurgia bariátrica como uma opção, especialmente se outras tentativas de perda de peso não tiveram sucesso.

<h3> Conclusão </h3>
A obesidade grau III requer uma abordagem abrangente e multidisciplinar, envolvendo dieta rigorosa, exercício adaptado, apoio emocional e, possivelmente, intervenções médicas. O acompanhamento contínuo de profissionais de saúde é essencial para um plano seguro e eficaz.`;
  }
}