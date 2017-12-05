let btnPortfolio = $('#btn-portfolio');
let btnSkills = $('#btn-skills');
let btnBio = $('#btn-bio');

let btnPage = $('.btn-page');

btnPage.on('click', (ev) => {
    ev.preventDefault();
    let page = $(ev.currentTarget).attr('data-page');
    $('#main').hide();
    $(`#${page}`).fadeIn(1000);
});

$('.btn-info').hover( (ev) => {
    ev.preventDefault();    
    let btn = $(ev.currentTarget);
    let name = btn.attr('data-name');
    $("#btn-name").text(name);
}, (ev) =>{
    $("#btn-name").empty() 
});

$('.preview-wrapper').hover((ev) => {
    ev.preventDefault();    
    let project = $(ev.currentTarget);
    let name = project.attr('data-name');
    $('#preview-name').text(name)
}, (ev) => { $('#preview-name').text(name)});

$('.back-btn').on('click', ev => {
    ev.preventDefault();    
    let page = $(ev.currentTarget).attr('data-page');
    $(`#${page}`).hide();
    $('#main').fadeIn(1000);
})
