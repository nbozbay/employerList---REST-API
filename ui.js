class UI {
    constructor() {
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }

    showProfile(profile) { // profil bilgilerini ekleriz
        this.profileContainer.innerHTML = `

            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150" class="img-thumbnail"></a>
                    </div>
                    <div class="col-md-9">
                        <h4>Contact</h4>
                        <ul class = "list-group ">
                            <li class="list-group-item d-block">
                                name : ${profile.name}
                            </li>  
                            <li class="list-group-item">
                                username : ${profile.username}
                            </li>  
                            <li class="list-group-item">
                                mail : ${profile.email}
                            </li> 
                            <li class="list-group-item">
                                adress : ${profile.address.street}
                                         ${profile.address.city}
                                         ${profile.address.zipcode}
                                         ${profile.address.suite}
                            </li> 
                            <li class="list-group-item">
                                phone : ${profile.phone}
                            </li> 
                            <li class="list-group-item">
                                website : ${profile.website}
                            </li> 
                            <li class="list-group-item">
                                company : ${profile.company.name}
                            </li> 
                        </ul>
                        <h4> ToDo List </h4>
                        <ul id="todo" class = "list-group ">
                        
                        </ul>
                    </div>
                </div>
            </div>
        
        `;

    }

    showAlert(text) { // text değeri ile data eşleşmezse çalışır
        this.alert.innerHTML = `${text} is not found`;
    }

    showtoDo(todo) { // todo bilgilerini ekleriz
        let html = "";

        todo.forEach(item => {
            if (item.completed) {
                html += `
                    <li class="list-group-item bg-success">
                        ${item.title}
                    </li>
                `;
            }
            else {
                html += `
                <li class="list-group-item bg-secondary">
                    ${item.title}
                </li>
            `;
            }
        });

        this.profileContainer.querySelector('#todo').innerHTML = html;
    }

    clear() { // inputları temizleriz

        this.alert.innerHTML = "";
        this.profileContainer.innerHTML = "";
    }

}