var toolBarBannerItemImg = [
  'url(img/fixed_banner_itme_img/1.jpg)',
  'url(img/fixed_banner_itme_img/2.jpg)',
  'url(img/fixed_banner_itme_img/3.jpg)',
  'url(img/fixed_banner_itme_img/4.jpg)',
  'url(img/fixed_banner_itme_img/5.jpg)',
  'url(img/fixed_banner_itme_img/6.jpg)',
  'url(img/fixed_banner_itme_img/7.jpg)',
  'url(img/fixed_banner_itme_img/8.jpg)',];
  var toolBarBannerItems = document.querySelectorAll('.toolbar_banner_item_lnk');
  var toolBarBannerItemsIDX;
  var len = toolBarBannerItems.length;
  for(toolBarBannerItemsIDX = 0;toolBarBannerItemsIDX<len ; toolBarBannerItemsIDX++){
    var toolBarBannerItem = toolBarBannerItems[toolBarBannerItemsIDX];
    toolBarBannerItem.style.background = toolBarBannerItemImg[toolBarBannerItemsIDX];
  }