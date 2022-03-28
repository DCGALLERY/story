// var dataPortfolio, dataApp;

// // function loadPortfolio(data){
// //   if( $('.list-photos-1').length ){
// //       var listPhotos1 = `<div class="grid__item grid__item_desktop-4 grid__item_tablet-6 grid__item_mobile-12 grid__item_fluid-3 grid__sizer js-grid__sizer"></div>`;
// //       var listPhotos2 = `<div class="grid__item grid__item_desktop-6 grid__item_tablet-6 grid__item_mobile-12 grid__item_fluid-3 grid__sizer js-grid__sizer"></div>`;
// //       var listPhotos3 = `<div class="grid__item grid__item_desktop-3 grid__item_tablet-6 grid__item_mobile-12 grid__item_fluid-3 grid__sizer js-grid__sizer"></div>`;
// //       var listVideo = `<div class="grid__item grid__item_desktop-4 grid__item_tablet-6 grid__item_mobile-12 grid__item_fluid-3 grid__sizer js-grid__sizer"></div>`;
// //       $.each(data, function(key,val) {
// //           if(key == "photo-1"){
// //               $.each(val, function(key,val) {
// //                   listPhotos1 += `
// //                   <div class="grid__item grid__item_desktop-` +val.grid__item_desktop+ ` grid__item_tablet-` +val.grid__item_tablet+ ` grid__item_mobile-12 grid__item_fluid-3 js-grid__item">
// //                       <div class="section-grid__item">
// //                         <div class="figure-image section-image"><a class="hover-zoom figure-image__link" data-arts-cursor="data-arts-cursor" data-arts-cursor-scale="1.6" data-arts-cursor-icon="add" data-arts-cursor-hide-native="true" href="img/assets/portfolio/original/` +val.img_name+ `.jpg" data-size="` +val.data_size+ `" data-title="">
// //                             <div class="hover-zoom__inner">
// //                               <div class="hover-zoom__zoom">
// //                                 <div class="figure-image__wrapper-img" data-arts-parallax="data-arts-parallax" data-arts-parallax-factor="0.15">
// //                                   <div class="lazy"><img data-src="img/assets/portfolio/` +val.img_name+ `-2x.jpg" src="#" alt="" width="` +val.img_width+ `" height="` +val.img_height+ `"/>
// //                                   </div>
// //                                 </div>
// //                               </div>
// //                             </div></a></div>
// //                       </div>
// //                   </div>
// //                   `;
// //               });
// //           } else if (key == "photo-2"){
// //               $.each(val, function(key,val) {
// //                   listPhotos2 += `
// //                   <div class="grid__item grid__item_desktop-` +val.grid__item_desktop+ ` grid__item_tablet-` +val.grid__item_tablet+ ` grid__item_mobile-12 grid__item_fluid-3 js-grid__item">
// //                       <div class="section-grid__item">
// //                         <div class="figure-image section-image"><a class="hover-zoom figure-image__link" data-arts-cursor="data-arts-cursor" data-arts-cursor-scale="1.6" data-arts-cursor-icon="add" data-arts-cursor-hide-native="true" href="img/assets/portfolio/original/` +val.img_name+ `.jpg" data-size="` +val.data_size+ `" data-title="">
// //                             <div class="hover-zoom__inner">
// //                               <div class="hover-zoom__zoom">
// //                                 <div class="figure-image__wrapper-img" data-arts-parallax="data-arts-parallax" data-arts-parallax-factor="0.15">
// //                                   <div class="lazy"><img data-src="img/assets/portfolio/` +val.img_name+ `-2x.jpg" src="#" alt="" width="` +val.img_width+ `" height="` +val.img_height+ `"/>
// //                                   </div>
// //                                 </div>
// //                               </div>
// //                             </div></a></div>
// //                       </div>
// //                   </div>
// //                   `;
// //               });
// //           } else if (key == "photo-3"){
// //               $.each(val, function(key,val) {
// //                   listPhotos3 += `
// //                   <div class="grid__item grid__item_desktop-` +val.grid__item_desktop+ ` grid__item_tablet-` +val.grid__item_tablet+ ` grid__item_mobile-12 grid__item_fluid-3 js-grid__item">
// //                       <div class="section-grid__item">
// //                         <div class="figure-image section-image"><a class="hover-zoom figure-image__link" data-arts-cursor="data-arts-cursor" data-arts-cursor-scale="1.6" data-arts-cursor-icon="add" data-arts-cursor-hide-native="true" href="img/assets/portfolio/original/` +val.img_name+ `.jpg" data-size="` +val.data_size+ `" data-title="">
// //                             <div class="hover-zoom__inner">
// //                               <div class="hover-zoom__zoom">
// //                                 <div class="figure-image__wrapper-img" data-arts-parallax="data-arts-parallax" data-arts-parallax-factor="0.15">
// //                                   <div class="lazy"><img data-src="img/assets/portfolio/` +val.img_name+ `-2x.jpg" src="#" alt="" width="` +val.img_width+ `" height="` +val.img_height+ `"/>
// //                                   </div>
// //                                 </div>
// //                               </div>
// //                             </div></a></div>
// //                       </div>
// //                   </div>
// //                   `;
// //               });
// //           }else if (key == "video"){
// //               $.each(val, function(key,val) {
// //                   listVideo += `
// //                   <div class="grid__item grid__item_desktop-4 grid__item_tablet-6 grid__item_mobile-12 grid__item_fluid-3 js-grid__item">
// //                       <div class="section-grid__item"><a class="figure-project hover-zoom js-change-text-hover" href="` +val.link+ `" data-autoplay="data-autoplay">
// //                           <div class="hover-zoom__inner">
// //                             <div class="hover-zoom__zoom">
// //                               <div class="figure-project__wrapper-img js-transition-img" data-arts-parallax="data-arts-parallax" data-arts-parallax-factor="0.15">
// //                                 <div class="lazy js-transition-img__transformed-el"><img data-src="img/assets/portfolio/video/` +val.img_name+ `.jpg" src="#" alt="" width="` +val.img_width+ `" height="` +val.img_height+ `"/></div>
// //                                 <div data-arts-cursor="data-arts-cursor" data-arts-cursor-scale="0" data-arts-cursor-label="Play" data-arts-cursor-hide-native="true" data-arts-cursor-magnetic="data-arts-cursor-magnetic">
// //                                 </div>
// //                               </div>
// //                             </div>
// //                           </div>
// //                           <div class="figure-project__content pt-md-2 pt-1">
// //                             <h2 class="h3 figure-project__heading">` +val.title+ `</h2>
// //                             <div class="figure-project__category mt-md-1 mt-0-5">
// //                               <div class="change-text-hover small-caps js-change-text-hover change-text-hover_has-line text-left">
// //                                 <!-- label by default -->
// //                                 <div class="change-text-hover__normal js-split-text split-text js-change-text-hover__normal" data-split-text-type="lines" data-split-text-set="lines">` +val.time+ `</div>
// //                                 <!-- - label by default -->
// //                                 <!-- label on hover -->
// //                                 <div class="change-text-hover__hover js-change-text-hover__hover">
// //                                   <!-- hover line -->
// //                                   <div class="change-text-hover__line js-change-text-hover__line"></div>
// //                                   <!-- - hover line --><span class="js-split-text split-text" data-split-text-type="lines" data-split-text-set="lines">WATCH ON YOUTUBE</span>
// //                                 </div>
// //                                 <!-- - label on hover -->
// //                               </div>
// //                             </div>
// //                           </div></a>
// //                       </div>
// //                   </div>
// //                   `;
// //               });
// //           };
// //       });
// //       $('.list-photos-1').html(listPhotos1);
// //       $('.list-photos-2').html(listPhotos2);
// //       $('.list-photos-3').html(listPhotos3);
// //       $('.list-video').html(listVideo);
// //   }
// // }
// // function loadLink(data){
// //       // var domain = data["domain"];
// //       // var link_page = data["link-page"];
// //       // $(".js-href-home").prop("href", domain+link_page["home"]);
// //       // $(".js-href-blog").prop("href", domain+link_page["blog"]);
// //       // $(".js-href-portfolio").prop("href", domain+link_page["portfolio"]);
// //       // $(".js-href-about").prop("href", domain+link_page["about"]);
// //       // var link_social = data["link-social"];
// //       // $(".js-href-facebook").prop("href", domain+link_social["facebook"]);
// //       // $(".js-href-twitter").prop("href", domain+link_social["twitter"]);
// //       // $(".js-href-instagram").prop("href", domain+link_social["instagram"]);
// //       // $(".js-href-github").prop("href", domain+link_social["github"]);
// //       // $(".js-href-500px").prop("href", domain+link_social["500px"]);
// //       var currentYear = new Date().getFullYear(); 
// //       $(".js-current-year").html(currentYear);
      
// // }

// //Use in PJAXUpdateBody(components.js)
// // function loadInfo(data){
// //       var info = data["info"];
// //       $(".js-info-email").prop("href", "mailto:"+info["email"]);
// //       $(".js-info-email").html(info["email"]);
// //       $(".js-info-phone").html(info["phone"]);
// //       $(".js-info-address").html(info["address"]["stress"]+`<br/>`+info["address"]["city"]+`, `+info["address"]["country"]+`<br/>`+info["address"]["zip-code"]);
// // }

// // $.getJSON("portfolio.json", function(data){
// //   dataPortfolio = data;
// //   loadPortfolio(dataPortfolio);
// // })
// // $.getJSON("app.json", function(data){
// //   dataApp = data;
// //   loadLink(dataApp);
// //   loadInfo(dataApp)
// // })

// js-time-designing-experience
// js-time-programming-experience

//Call function - Gọi hàm để hàm có thể chạy
loadWorkExperience();

//Định nghĩa một hàm - Chứa các thuật toán và logic hoặc các hành động
function loadWorkExperience(){
    let startDes = new Date('2017-10-01');
    let startDev = new Date('2019-10-01');
    let today = new Date();

    let yearDes =  diff_years(startDes, today);
    let yearDev =  diff_years(startDev, today);

    $('.js-time-designing-experience').data('counter-target',yearDes);
    $('.js-time-programming-experience').data('counter-target',yearDev);
    $('#js-time-designing-experience').text(yearDes);
    $('#js-time-programming-experience').text(yearDev);
}

function loadCurrentYear(){
    $('.js-current-year').text(new Date().getFullYear());
}

function diff_years(dt2, dt1) {
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff/365.25));
}