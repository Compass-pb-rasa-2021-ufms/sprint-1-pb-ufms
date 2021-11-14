const buttons = document.querySelectorAll('.btn');
buttons.forEach(function(currentBtn){
    currentBtn.addEventListener('click', ()=>{
        const value = currentBtn.value;
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?attribute=${value}`)
        .then(res => res.json())
        .then(data =>{document.querySelector('#carta').innerHTML = `<img src=${data.data[Math.floor(Math.random() * 100)].card_images[0].image_url}>`;})
    })
});
