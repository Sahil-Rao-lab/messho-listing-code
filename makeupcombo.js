function listing() {
    let url = window.location.href;
    let url2 = "https://supplier.meesho.com/panel/v2/new/pbyq4/catalogs/single/add/product"
    if (url != url2) {
        // add single catalog
        document.getElementsByTagName('section')[0].children[0].children[1].children[0].children[0].children[0].children[1].children[1].click();
        // selection first category
        document.getElementsByTagName('section')[0].children[0].children[1].children[1].children[1].children[0].children[0].children[0].children[16].click();
        // select second type
        document.getElementsByTagName('section')[0].children[0].children[1].children[1].children[1].children[0].children[1].children[1].children[6].click();
        // select third type
        document.getElementsByTagName('section')[0].children[0].children[1].children[1].children[1].children[0].children[2].children[1].children[0].click();
        // select fourt type
        document.getElementsByTagName('section')[0].children[0].children[1].children[1].children[1].children[0].children[3].children[1].children[0].click();
    }
    else {
        // gst selection
        document.getElementsByTagName('input')[4].click();
        document.getElementById('fieldOptions').children[4].click();
        // hsn code
        document.getElementsByTagName('input')[5].click();
        document.getElementById('fieldOptions').children[0].click();
        // free size
        document.getElementsByTagName('input')[10].click();
        document.getElementsByTagName('input')[11].click();
        document.getElementsByTagName('input')[11].parentElement.parentElement.parentElement.children[1].children[0].click();
        // select capacity
        document.getElementsByTagName('input')[13].click();
        document.getElementById('fieldOptions').children[0].click();
        // select color
        document.getElementsByTagName('input')[14].click();
        document.getElementById('fieldOptions').children[112].click();
        // select finish
        document.getElementsByTagName('input')[15].click();
        document.getElementById('fieldOptions').children[10].click();
        // select multepack
        document.getElementsByTagName('input')[16].click();
        document.getElementById('fieldOptions').children[0].click();
        // select skin type
        document.getElementsByTagName('input')[17].click();
        document.getElementById('fieldOptions').children[0].click();
        // select type 
        document.getElementsByTagName('input')[18].click();
        document.getElementById('fieldOptions').children[6].click();
        // select country
        document.getElementsByTagName('input')[19].click();
        document.getElementById('fieldOptions').children[0].click();
        // 20 {brand}
        // select concern
        document.getElementsByTagName('input')[21].click();
        document.getElementById('fieldOptions').children[10].click();
        // select flavour
        document.getElementsByTagName('input')[22].click();
        document.getElementById('fieldOptions').children[98].click();
        // select shade 
        document.getElementsByTagName('input')[23].click();
        document.getElementById('fieldOptions').children[90].click();
        // save catalog
        document.getElementsByTagName('Section')[0].children[0].children[1].children[1].children[2].children[1].children[0].click();
    }
}
setInterval(() => {
    listing();
}, 500);

