const inpLink = $('#inpLink');
const btnShort = $('#btnShort');
const inpDisplay = $('#inpDisplay');
const btnCopy = $('#btnCopy');

btnShort.click(() => {
    $.post("/api/create", {
        longURL: inpLink.val()
    }, (data) => {
        inpDisplay.val(`shrt.lk/${data.shortCode}`);
    });
});

btnCopy.click(() => {
    let text = inpDisplay;
    text.select();
    navigator.clipboard.writeText(text.val());
})