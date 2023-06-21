class Profile {
    constructor() {
        this.cliendId = ''; // API' lerden bilgi sağlamak için cliendID ve clientSecret gerekebilir
        this.clientSecret = '';
    }

    async getProfile(username) {
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`); // input kısmına gelen değeri fonksiyona atarız ve bizi o isme ait kayıda götürür

        const profile = await profileResponse.json(); // texti json objesine çeviririz

        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`); // profile değerindeki id üzerinden todo'lara ulaşırız

        const todo = await todoResponse.json();

        return {
            profile, // objeyi döndürürüz
            todo // todo döndürürüz
        }
    }
}