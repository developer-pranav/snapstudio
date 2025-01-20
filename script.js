var urlInput = document.getElementById('urlInput');
const targetElement = document.getElementsByClassName('window')[0];
const urlElement = document.getElementsByClassName('url')[0];
const radioButtons = document.querySelectorAll('input[name="radio"]');
const colorInputs = document.querySelectorAll('.custom-clr');
const colorBg = document.getElementById('clr-bg');
const colorUrlBox = document.getElementById('clr-urlBox');
const colorUrl = document.getElementById('clr-url');
const customTheme = document.getElementById('custom-theme');
const websiteElement = document.getElementById('webpageElement');
const inputWeb = document.getElementById('inputWeb');
const downloadImg = document.getElementsByClassName('preview')[0];
const downloadBtn = document.getElementById('download');


urlElement.innerHTML = "developer-pranav.in"

urlInput.addEventListener('input', ()=>{
    urlElement.innerHTML = urlInput.value
    if(urlInput.value == ''){
        urlElement.innerHTML = "developer-pranav.in"
    }
});

function triggerFileInput() {
    inputWeb.click();
}

inputWeb.onchange = function(){
    websiteElement.src = URL.createObjectURL(inputWeb.files[0]);
}


downloadBtn.addEventListener('click', function(){
    domtoimage.toPng(downloadImg, {
        width: downloadImg.offsetWidth * 2,
        height: downloadImg.offsetHeight * 2,
        style: { 
            transform: 'scale(1.98)',
            transformOrigin: 'top left',
            borderRadius: '5px'

        }
    }).then((data) => {
        var link = document.createElement('a');
        link.download = "mockup.png";
        link.href = data;
        link.click();
    });
});




radioButtons.forEach(radio => {
    radio.addEventListener('change', function () {
        if (this.checked) {
            const selectedValue = this.value;

            if (selectedValue === 'light') {
                colorInputs.forEach(input => {
                    input.disabled = true;
                    input.style.cursor = 'not-allowed';
                });

                targetElement.style.backgroundColor = '#ccc';
                urlElement.style.backgroundColor = '#bbb';
                urlElement.style.color = '#111';
            } else if (selectedValue === 'dark') {
                colorInputs.forEach(input => {
                    input.disabled = true;
                    input.style.cursor = 'not-allowed';
                });

                targetElement.style.backgroundColor = '#222';
                urlElement.style.backgroundColor = '#333';
                urlElement.style.color = '#eee';
            } else {
                colorInputs.forEach(input => {
                    input.disabled = false;
                    input.style.cursor = 'pointer';
                });
                targetElement.style.backgroundColor = colorBg.value;
                urlElement.style.backgroundColor = colorUrlBox.value;
                urlElement.style.color = colorUrl.value;
            }
        }
    });
});


colorInputs.forEach(input => {
    input.addEventListener('input', function () {
        if (customTheme.checked) {
            targetElement.style.backgroundColor = colorBg.value;
            urlElement.style.backgroundColor = colorUrlBox.value;
            urlElement.style.color = colorUrl.value;
        }
    });
});
