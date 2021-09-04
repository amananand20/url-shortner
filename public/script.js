const inpLink = $('#inpLink');
const btnShort = $('#btnShort');
const inpDisplay = $('#inpDisplay');
const btnCopy = $('#btnCopy');

btnShort.click(() => {
    $.post("/api/create", {
        longURL: inpLink.val()
    }, (data) => {
        inpDisplay.val(`{"domain"}/${data.shortCode}`);
    });
});

btnCopy.click(() => {
    let text = inpDisplay;
    text.select();
    navigator.clipboard.writeText(text.val());
})