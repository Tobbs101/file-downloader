const fileInput = document.querySelector('#url'),
    downloadBtn = document.querySelector('#submit');


    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        downloadBtn.innerText = 'Downloading...';
        fetchFile(fileInput.value);
    })

function fetchFile(url) {
    //fetching file & returning response as blob
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement('a');
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innerText = 'Download File';
    }).catch(() => {
        downloadBtn.innerText = 'Download File';
        alert('Could not download file');
    });
}
