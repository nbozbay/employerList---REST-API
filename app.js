const profile = new Profile();
const ui = new UI();

const searchProfile = document.querySelector('#searchProfile');

searchProfile.addEventListener('keyup', (e) => {

    ui.clear();

    let text = e.target.value; // input üzerindeki tuş basmalardan gelen değeri alırız

    if (text !== '') {
        profile.getProfile(text).then(res => { // function'dan dönen objeyi then() ile yakalarız
            if (res.profile.length === 0) { // gönderilen text değeri bir data ile eşleşmezse çalışır
                ui.showAlert(text)
            }
            else {
                ui.showProfile(res.profile[0]);
                ui.showtoDo(res.todo);
            }
        })
        .catch(err =>{
            ui.showAlert(text)
        })
    }

})