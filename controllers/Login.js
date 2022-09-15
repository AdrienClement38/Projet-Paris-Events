export default class Login {
    constructor() {
        this.view = 'login.html';
    }


    executeHttpRequest() {
        document.querySelector('#auth_google').addEventListener('click', () => {

            const provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then((user) => {
                // vous pouvez récupérer le nom comme ceci :             
                document.getElementById('li_auth').textContent = user.additionalUserInfo.profile.name;
            }).catch(function(error) {
                console.log(error);
            });

        })

        document.querySelector('#auth_github').addEventListener('click', () => {

            const provider = new firebase.auth.GithubAuthProvider();

            firebase.auth().signInWithPopup(provider).then((user) => {
                // vous pouvez récupérer le nom comme ceci :             
                document.getElementById('li_auth').textContent = user.additionalUserInfo.profile.name || user.additionalUserInfo.profile.login;
            }).catch(function(error) {
                console.log(error);
            })


        })

        document.querySelector('#auth_facebook').addEventListener('click', () => {

            const provider = new firebase.auth.FacebookAuthProvider();

            firebase.auth().signInWithPopup(provider).then((user) => {
                // vous pouvez récupérer le nom comme ceci :             
                document.getElementById('li_auth').textContent = user.additionalUserInfo.profile.name || user.additionalUserInfo.profile.login;
            }).catch(function(error) {
                console.log(error);
            })


        })


    }
}