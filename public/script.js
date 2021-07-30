const inpLink = $('#inpLink');
const btnShort = $('#btnShort');
const inpDisplay = $('#inpDisplay');

btnShort.click(() => {
    $.post("/api/create", {
        longURL: inpLink.val()
    }, (data) => {
        inpDisplay.val(`shrt.lk/${data.shortCode}`);
    });
});