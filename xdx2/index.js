const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Era imposible decir que no la verdad jejeje, pero agradezco que podamos darnos una segunda oportunidad, y se que esto posiblemente no durará para siempre pero estoy feliz de que podamos seguir por un tiempo, te prometo cambiar la manera en que soy y sobre todo prometo no defraudarte ya que no te mereces eso, te amo mucho mucho Daniela.')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})