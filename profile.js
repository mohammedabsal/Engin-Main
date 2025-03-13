document.getElementById('editProfileButton').addEventListener('click', function() {
    let formElements = document.querySelectorAll('#profileForm input, #profileForm textarea, #profileForm select');
    formElements.forEach(element => element.disabled = false);
    document.getElementById('profilePictureInput').disabled = false;
    document.getElementById('saveChangesButton').disabled = false;
});

document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('profilePictureInput').click();
});

document.getElementById('profilePictureInput').addEventListener('change', function(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profilePicture').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
