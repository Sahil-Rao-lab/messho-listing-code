const shoppieListing = () => {
    let pageUrl = window.location.href;
    let homeUrl = "https://seller.shopee.in/portal/product/list/all";
    let categoryPage = "https://seller.shopee.in/portal/product/category";
    let listingPage = "https://seller.shopee.in/portal/product/new";
    if (pageUrl == homeUrl) {
        // add new btn 
        document.getElementsByTagName('button')[5].click();
    }
    if (pageUrl == categoryPage) {
        //------------------------ SELECT THE CATEGORY --------------------------//
        // click beauty category
        document.getElementsByClassName("category-list")[0].children[0].children[1].click();
        // click makeup category
        document.getElementsByClassName("category-list")[0].children[1].children[4].click();
        // click eye category
        document.getElementsByClassName("category-list")[0].children[2].children[2].click();
        // click eyeshadow category
        document.getElementsByClassName("category-list")[0].children[3].children[0].click();
        let inputBtn = document.querySelectorAll('input')[0].value;
        if (inputBtn !== "") {
            // click on the next button
            document.querySelectorAll('button')[4].click();
        }
    }
    if (pageUrl == listingPage) {
        // upload the product image
        document.getElementsByTagName('input')[0].click();
        // slect brand
        document.getElementsByClassName("shopee-select-popover")[0].children[0].children[1].click();
        document.getElementsByClassName('shopee-select__options')[8].children[0].children[0].children[0].children[0].click();
        // slect packaging type 
        document.getElementsByClassName("shopee-select-popover")[1].children[0].children[1].children[0].click();
        document.getElementsByClassName('shopee-select__options')[8].children[2].click();
        // select makeup finish
        document.getElementsByClassName("shopee-select-popover")[2].children[0].children[1].children[0].click();
        document.getElementsByClassName('shopee-select__options')[8].children[3].click();
        // slect volume
        document.getElementsByClassName("shopee-select-popover")[3].children[0].children[1].children[0].click();
        document.getElementsByClassName('shopee-select__options')[8].children[5].click();
        // shelp life 
        document.getElementsByClassName("shopee-select-popover")[4].children[0].children[1].children[0].click();
        document.getElementsByClassName('shopee-select__options')[9].children[1].click();
        // slect formulation
        document.getElementsByClassName("shopee-select-popover")[5].children[0].children[1].children[0].click();
        document.getElementsByClassName('shopee-select__options')[9].children[1].click();
        // select weight
        document.getElementsByClassName("shopee-select-popover")[6].children[0].children[1].children[0].click();
        document.getElementsByClassName('shopee-select__options')[9].children[5].click();
        // slect pack size 
        document.getElementsByTagName('input')[13].parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[0].click();
        document.getElementsByClassName('shopee-select__options')[9].children[10].click();
        // select tax code
        document.getElementsByClassName("shopee-select")[8].children[0].children[0].click();
        document.getElementsByClassName('shopee-select__options')[0].children[4].click();
    }
}
setInterval(() => {
    shoppieListing();
}, 1000);