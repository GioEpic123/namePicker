const names = ['Brandan', 'Carlos', 'Corbin', 'Ebony', 'Mariamawit', 'Petula', 'Hassan', 'Pavan', 'Giovanni', 'Napoleon', 'Grace', 'Nisa', 'Sebastian', 'Mark', 'Joshua'];
document.querySelector('button').addEventListener('click', function() {
    if(names.length > 0) {
        let num = Math.floor(names.length * Math.random());
        let li = document.createElement('li');
        li.textContent = names[num]
        document.querySelector('ul').append(li);
        names.splice(num,1)
    } else {
        window.location.reload()
    }
});