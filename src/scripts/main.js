$(document).ready(function(){
    const nameElement = $('#name');
    const usernameElement = $('#username');
    const avatarElement = $('#avatar');
    const reposElement = $('#repos');
    const followersElement = $('#followers');
    const followingElement = $('#following');
    const linkElement = $('#link');

    const endpoint = 'https://api.github.com/users/danieltwentynine';
    
    fetch(endpoint).then(function(res){
        return res.json();
    })
    .then(function(json){
        nameElement.text(json.name);
        usernameElement.text(json.login);
        avatarElement.attr('src', json.avatar_url);
        avatarElement.attr('alt', json.name);
        reposElement.text(json.public_repos);
        followersElement.text(json.followers);
        followingElement.text(json.following);
        linkElement.attr('href', json.html_url);
    })
    .catch(function(erro){
        alert('Ocorreu um erro ao buscar dados da API.');
    })
})