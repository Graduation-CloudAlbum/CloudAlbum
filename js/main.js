(function($) {

  var data=[
     {img:"../img/3.jpg"},
     {img:"../img/Album-cover1.jpg"},
     {img:"../img/gallery/DSC_0019-660x441.jpg"}
]
var inputField = document.querySelector("#select")

  const $select = $('#select');
  const $img = $('#jcrop_target');
  const $crop = $('#crop');
  const $filter = $('.filter');
  const $options = $('#options');
  const $gradient = $('.gradient');
  const $midpoint = $('.midpoint');

  const defaultFilterparams = {
    Blur: {
      blurRadius: 10
    },
    Brighten: {
      brightness: 0.2
    },
    // Emboss: {
    //   embossStrength: 0.8,
    //   embossWhiteLevel: 0.3,
    //   embossDirection: 'right',
    //   embossBlend: true
    // },
    Enhance: {
      enhance: 0.1
    },
    HSL: {
      saturation: 120
    },
    HSV: {
      saturation: 360
    },
    Mask: {
      threshold: 200
    },
    Posterize: {
      levels: 0.1
    },
    RGB: {
      blue: 120,
      green: 120
    },
    RGBA: {
      red: 120,
      blue: 120,
      green: 120,
      alpha: 0.3
    },
    // Threshold: {
    //   threshold: 0.1
    // }
  };

  const filterParams = {
    RGBA: [
      {
        key: 'red',
        min: 0,
        max: 255,
        step: 1
      },
      {
        key: 'green',
        min: 0,
        max: 255,
        step: 1
      },
      {
        key: 'blue',
        min: 0,
        max: 255,
        step: 1
      },
      {
        key: 'alpha',
        min: 0,
        max: 1,
        step: 0.1
      }
    ]
  }

  const IMG_WIDTH = 400;

  let imgSrc = null;

  $gradient.on('change', function() {
    if ($midpoint.next('span')) {
      $midpoint.next('span').remove();
    }
    if ($(this).val() === 'none') {
      $midpoint.hide();
    } else {
      $midpoint.show();
      $('<span />')
        .text($midpoint.val())
        .insertAfter($midpoint);
    }
    handleChange();
  });

  $midpoint.on('change', function() {
    handleChange();
    $(this).next('span').text($(this).val());
  });

  $filter.on('change', function() {
    const key = $(this).val();
    handleChange();
    $options.empty();
    if (filterParams[key] && $(this).is(':checked')) {
      makeOptions(key);
    }
  });

var iPhoto=""
 document.addEventListener("click", function(event) {
  
 //alert(event.target.className)
 if ( /demo__option-img/.test(event.target.className) ) {
   document.getElementById("filter").style.display="block"
   iPhoto=Array.prototype.indexOf.call( document.querySelectorAll( '.demo__option-img' ), event.target );
   //alert(iPhoto)
  // $img.attr('src', data[iPhoto].img);
   inputField.value = data[iPhoto].img
//imgSrc=inputField.value;
console.log(inputField)
 handleSelectFile(inputField)
      .then(function(src) {
        $img.attr('src', src);
      });
   $('#gradient').show();
    $('#filter').show();
 }
  
}, false)

 function convertBase64UrlToBlob(base64){ 
        var urlData =  base64.dataURL;
        var type = base64.type;
        var bytes = window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte
        //处理异常,将ascii码小于0的转换为大于0  
        var ab = new ArrayBuffer(bytes.length);  
        var ia = new Uint8Array(ab);  
        for (var i = 0; i < bytes.length; i++) {  
            ia[i] = bytes.charCodeAt(i);  
        }  
        return new Blob( [ab] , {type : type});  
      }
      /* 
       * 图片的绝对路径地址 转换成base64编码 如下代码： 
       */
      function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
        var dataURL = canvas.toDataURL("image/"+ext);
        return {
          dataURL: dataURL,
          type: "image/"+ext
        };
      }
      var img = inputField.value;
      var image = new Image();
      image.crossOrigin = '';
      image.src = img;
      image.onload = function(){
        var base64 = getBase64Image(image);
        console.log(base64);
        /*
         打印信息如下：
         {
          dataURL: "data:image/png;base64,xxx"
          type: "image/jpg"
         }
         */
        var img2 = convertBase64UrlToBlob(base64);
        console.log(img2);
        /*
         打印信息如下：
         Blob {size: 9585, type: "image/jpg"}
         */
      } 




  // $select.on('change', function(e) {
  //   alert("ad")
  //   handleSelectFile(e.target.value)
  //     .then(function(src) {
  //       $img.attr('src', src);
  //     });
  //   e.target.value = '';
  //   $('#gradient').show();
  //   $('#filter').show();
  // });

   $img.on('load', function() {
    $img.css({
      width: IMG_WIDTH,
      height: IMG_WIDTH / ($img.width() / $img.height())
    });
    if ($img.cropper) {
      $img.cropper('destroy');
    }
    $img.cropper({
      autoCrop: true,
      viewMode: 2,
      scalable: false,
      zoomable: false,
      crop: handleChange
    });
  });

  function handleChange() {
    const filters = getSelectedFilter();
    const rect = $img.cropper('getData');
    buildImage(rect, filters);
  }

  function makeOptions(superKey) {
    const options = filterParams[superKey];
    $('[type="range"]').not('.midpoint').off('change');
    options.map(function(item) {
      const $li = $('<li />');
      const value = defaultFilterparams[superKey][item.key];
      $li.data('key', item.key);
      $li.data('superkey', superKey);
      $li.text(item.key + ':   ');
      $('<input />')
        .attr({
          type: 'range',
          min: item.min,
          max: item.max,
          step: item.step,
          value: value
        })
        .appendTo($li);
      $('<span />')
        .text(value)
        .appendTo($li);
      $li.appendTo($options);
    });
    $('[type="range"]').not('.midpoint').on('change', function() {
      const _this = $(this);
      const _parent = _this.parent();
      const _next = _this.next('span');
      const superkey = _parent.data('superkey');
      const key = _parent.data('key');
      const value = _this.val();
      defaultFilterparams[superkey][key] = value;
      _next.text(value);
      handleChange();
    });
  }

  function buildImage(rect, filters) {
    loadImg(imgSrc)
      .then(function(imgObject) {
            console.log(imgSrc)
        const src = resizeImage(imgObject)
        loadImg(src)
          .then(function(imgObj) {
            const height = IMG_WIDTH / (rect.width/rect.height);
            const g = $gradient.val();
            const stage = new Konva.Stage({
              container: 'container',
              width: IMG_WIDTH,
              height: height
            });
            const layer = new Konva.Layer();
            const img = new Konva.Image({
              image: imgObject,
              x: 0,
              y: 0,
              width: IMG_WIDTH,
              height: height,
              crop: {
                x: rect.x,
                y: rect.y,
                width: rect.width,
                height: rect.height
              }
            });
            if ((filters && filters.length) || g !== 'none') {
              const konvaFilters = filters.map(function(item) {
                return Konva.Filters[item];
              });
              konvaFilters.push(function(t) {
                gradient(t, +$midpoint.val(), g);
              });
              const defaultParams = filterDefaultParams(filters);
              img.cache();
              img.filters(konvaFilters);
              if (defaultParams.length) {
                defaultParams.map(function(item) {
                  img[item[0]](item[1]);
                });
              }
            }
            layer.add(img);
            stage.add(layer);
          });
      });
  }

  function loadImg(src) {
    
    return new Promise(function(resolve, reject) {
      const im = new Image();
      im.onload = function() {
        resolve(im);
      }
      im.onerror = reject;
      im.src = src;

    });
  }

  function handleSelectFile(file) {
    return new Promise(function(resolve, reject) {
      const reader = new FileReader();
      reader.onload = function(e) {
        imgSrc = e.target.result;
        resolve(imgSrc);
      }
      reader.readAsDataURL(file);
    });
  };

  function resizeImage(imgObj) {
    const width = IMG_WIDTH;
    const ratio = imgObj.width / imgObj.height;
    const height = width / ratio;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(imgObj, 0, 0, width, height);
    return canvas.toDataURL();
  }

  function getSelectedFilter() {
    const selected = [];
    $filter.each(function() {
      const _this = $(this);
      if (_this.is(':checked')) {
        selected.push(_this.val());
      }
    });
    return selected;
  }

  function filterDefaultParams(filters) {
    const ret = [];
    filters.map(function(key) {
      const item = defaultFilterparams[key];
      for (let index in item) {
        if (item.hasOwnProperty(index)) {
          ret.push([index, item[index]]);
        }
      }
    });
    return ret;
  }
})(jQuery);
