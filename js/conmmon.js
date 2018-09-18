
// xiong 2018-08-13

//引入头部
$("#header").load("module/header.html",function(){
  var href = window.location.href;
  var name = href.split("/");
  var index = name.length - 1;
  if(name[index].indexOf("index") > -1){
    $(".nav_item:eq(0)").addClass("active").siblings(".nav_item").removeClass("active");
  }else if(name[index].indexOf("product") > -1){
    $(".nav_item:eq(1)").addClass("active").siblings(".nav_item").removeClass("active");
  }else if(name[index].indexOf("solution") > -1){
    $(".nav_item:eq(2)").addClass("active").siblings(".nav_item").removeClass("active");
  }else if(name[index].indexOf("about") > -1){
    $(".nav_item:eq(3)").addClass("active").siblings(".nav_item").removeClass("active");
  }
});
//引入底部
$("#footer").load("module/footer.html");
//产品服务子页面
function setProductService(obj){
  var data = obj;
  setTop();
  setFunction();
  setScene();
  //top
  function setTop(){
    var top = data.section_top;
    var f = $(".top-content");
    var arr = top.text_list;
    var list = "";
    $(arr).each(function(i,v){
      list +="<li>"+v+"</li>";
    });

    f.find(".text-list").html(list);
    f.find(".text-title").text(top.title);
    f.find(".btn-more").attr("href",top.url).hide();
    f.find(".top-right img").attr("src",top.img);

  }
  //核心功能
  function setFunction() {
    var arr = data.section_function;
    var frag = document.createDocumentFragment();

    for (var i = 0,len = arr.length;i < len ;i++){
      var arr2 = arr[i].describe.split("|");
      var html = "";
      $(arr2).each(function(i,v){
        html +="<p>"+v+"</p>"
      });
      var $item = $('<div class="item"><div class="scale-mask"></div><div class="clearfix content"><div class="left '+arr[i].img+'"></div><div class="right"><p class="title">'+arr[i].title+'</p><div class="describe">'+html+'</div></div></div></div>').appendTo($(frag));

      $item.on("mouseenter",function(){
        $(this).find(".scale-mask").css({"background-color":"#fff"});
      }).on("mouseleave",function () {
        setTimeout(function () {
          $(this).find(".scale-mask").css({"background-color":"transparent"});
        }.bind(this),200)
      });
      $(".section-function .section-content").append($(frag));
    }
  }
  //应用场景
  function setScene() {
    var arr = data.section_scene;
    var frag = document.createDocumentFragment();
    for(var i = 0,len = arr.length;i < len;i++){
      var item = $('<div class="item '+arr[i].class+'"><p class="title">'+arr[i].title+'</p></div>');
      var arr2 = arr[i].list.split("|");
      var ul  = $('<ul class="list"><ul>');

      for (var j = 0;j<arr2.length;j++){
        $('<li>'+arr2[j]+'</li>').appendTo(ul);
      }

      item.append(ul);
      $(frag).append(item);
    }
    $(".section-scene .section-content").append($(frag));
  }
}















