
    // Upload Image 
    var loadFile = function(event) {
        var image = document.getElementById('uploaded-img');
        image.src = URL.createObjectURL(event.target.files[0]);
  };
  

      
      // referee-image-dropdown
      var shownnn = "yes";
      var dropd = document.getElementById("referee-image-dropdown");

      function showww() {
      dropd.style.height = "auto";
      dropd.style.overflow = "y-scroll";
      }

      function hideee() {
          dropd.style.height = "30px";
          dropd.style.overflow = "hidden";
      }

      function myfuunc(imgParent) {
      hideee();
      var mainDIVV = document.getElementById("referee-image-dropdown");
      imgParent.parentNode.removeChild(imgParent);
      mainDIVV.insertBefore(imgParent, mainDIVV.childNodes[0]);
      }


      
    // Side bar Menu Toggle Script
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $(window).resize(function () {
        if (window.innerWidth >= 768) {
            $("#wrapper").removeClass("toggled");
        }
    });

     
    //Pagination //////
    pageSize = 8;

    var pageCount =  $(".line-content").length / pageSize;

    for(var i = 0 ; i<pageCount;i++){
        
    $("#pagin").append('<li><a href="#">'+(i+1)+'</a></li> ');
    }
        $("#pagin li").first().find("a").addClass("current")
    showPage = function(page) {
        $(".line-content").hide();
        $(".line-content").each(function(n) {
            if (n >= pageSize * (page - 1) && n < pageSize * page)
                $(this).show();
        });        
    }

    showPage(1);

    $("#pagin li a").click(function() {
        $("#pagin li a").removeClass("current");
        $(this).addClass("current");
        showPage(parseInt($(this).text())) 
    });