function verificar() {
  let anoAtual = new Date();
  let anoVigente = anoAtual.getFullYear();
  let anoNascimento = document.getElementById('txtano');
  let res = document.querySelector('div#res');

  if (anoNascimento.value == 0 || Number(anoNascimento.value) > anoVigente) {
    window.alert('[Erro] Verifique os dados e tente novamente');
  } else {
    let formsex = document.getElementsByName('radsex');
    let idade = anoVigente - Number(anoNascimento.value);
    let genero = '';
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (formsex[0].checked) {
      genero = 'Homem';
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'foto-menino.jpg');
      } else if (idade < 21) {
        img.setAttribute('src', 'foto-adolescente-homem.jpg');
      } else if (idade < 50) {
        img.setAttribute('src', 'foto-adulto.jpg');
      } else {
        img.setAttribute('src', 'foto-idoso.jpg');
      }
    } else if (formsex[1].checked) {
      genero = 'Mulher';
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'foto-menina.jpg');
      } else if (idade < 21) {
        img.setAttribute('src', 'foto - adolescente - mulher.jpg');
      } else if (idade < 50) {
        img.setAttribute('src', 'foto-adulta.jpg');
      } else {
        img.setAttribute('src', 'foto-idosa.jpg');
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.append(img);
  }
}
