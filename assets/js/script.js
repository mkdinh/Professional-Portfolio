let btnPortfolio = $('#btn-portfolio');

btnPortfolio.on('click', () => {
    $('#main').hide();
    $('#portfolio').fadeIn(1000);
});

$('.btn-info').hover( (ev) => {
    console.log('hey')
    let btn = $(ev.currentTarget);
    let name = btn.attr('data-name');
    $("#btn-name").text(name);
}, (ev) =>{
    $("#btn-name").empty() 
});

$('.preview-wrapper').hover((ev) => {
    let project = $(ev.currentTarget);
    let name = project.attr('data-name');
    $('#preview-name').text(name)
}, (ev) => { $('#preview-name').text(name)});

$('#back-btn').on('click', ev => {
    $('#portfolio').hide();
    $('#main').fadeIn(1000);
})
