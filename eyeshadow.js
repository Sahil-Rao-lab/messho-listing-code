function listing() {
    let url = window.location.href;
    let url2 = "https://supplier.meesho.com/panel/v2/new/pbyq4/catalogs/single/add/product"
    if (url != url2) {
        // add single catalog
        document.getElementsByTagName('section')[0].children[0].children[1].children[0].children[0].children[0].children[1].children[1].click();
        // selection first category
        document.getElementsByTagName('section')[0].children[0].children[1].children[1].children[1].children[0].children[0].children[0].children[9].click();
        // select second type
        document.getElementsByTagName('section')[0].children[0].children[1].children[1].children[1].children[0].children[1].children[1].children[0].click();
        // select third type
        document.getElementsByTagName('section')[0].children[0].children[1].children[1].children[1].children[0].children[2].children[1].children[1].click();
        // select fourt type
        document.getElementsByTagName('section')[0].children[0].children[1].children[1].children[1].children[0].children[3].children[1].children[2].click();
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
        // select color
        document.getElementsByTagName('input')[13].click();
        document.getElementById('fieldOptions').children[18].click();
        // select multipack
        document.getElementsByTagName('input')[14].click();
        document.getElementById('fieldOptions').children[0].click();
        // select type
        document.getElementsByTagName('input')[15].click();
        document.getElementById('fieldOptions').children[2].click();
        // select country
        document.getElementsByTagName('input')[16].click();
        document.getElementById('fieldOptions').children[0].click();
        // select add on
        document.getElementsByTagName('input')[17].click();
        document.getElementById('fieldOptions').children[2].click();
        // select brand
        // 18
        // select concern
        document.getElementsByTagName('input')[19].click();
        document.getElementById('fieldOptions').children[10].click();
        // select flavour
        document.getElementsByTagName('input')[20].click();
        document.getElementById('fieldOptions').children[94].click();
        // select shade
        document.getElementsByTagName('input')[21].click();
        document.getElementById('fieldOptions').children[0].click();
        // save catalog
        document.getElementsByTagName('Section')[0].children[0].children[1].children[1].children[2].children[1].children[0].click();
    }
}
setInterval(() => {
    listing();
}, 500);

