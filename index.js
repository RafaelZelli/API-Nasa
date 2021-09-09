$('button').on('click', async function (event) {
    event.preventDefault();
    $('#inicio').css("display", "none");
    let valueData = $('#date').val();
    let url = `https://api.nasa.gov/planetary/apod?api_key=QRaDd5HWwVtjNo83M6DhwSdhxw9M2Ibxj798RL5w&date=${valueData}`;
    let api = await fetch(url).then(response => response.json());
    $('body').css("background-image", `url(${api.url})`);
    $('body').css("background-repeat", "no-repeat");
    $('body').css("background-size", "cover");
    $('#corpo').css('display', 'block');
    $('#titulo').html(`${api.title}`);
    $('#texto').html(`(${api.explanation})`);
});