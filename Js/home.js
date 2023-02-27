var counter = 0;
setInterval(() => {
    const el = document.querySelector('.number');
    const elValue = Number(el.getAttribute('data-value'));
    if(counter !== elValue){
        counter++
        el.innerHTML = `${counter}%`;
    }
},15);

var count = 0;
setInterval(() => {
    const all = document.querySelector('.num');
    const allValue = Number(all.getAttribute('value'));
    if(count !== allValue){
        count++
        all.innerHTML = `${count}%`;
    }
},17);

