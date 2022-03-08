//Ẩn hiện giỏ hàng
document.getElementById("showcart").style.display="none";

// thêm đơn hang
var giohang = new Array();

function themvaogiohang(x) {
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].children[0].src;
    var gia = boxsp[1].children[0].innerText;
    var tensp = boxsp[2].innerText;
    var soluong = boxsp[3].value;
    var sp = new Array(hinh, gia, tensp, soluong);

    giohang.push(sp);

    console.log(giohang);
    showcountsp();
// lưu giỏ hàng dùng sessionStorage và Json.stringify (chuyển hàm thành chuỗi)

    sessionStorage.setItem("giohang", JSON.stringify(giohang));
}

//tạo đơn hàng trong giỏ hàng
function showcountsp() {
    document.getElementById("countsp").innerHTML = giohang.length;
}
function showmycart(){
    var ttgh= "";
    var tong = 0;
    for (let i=0; i<giohang.length; i++){
        var tt = parseInt(giohang[i][1])*parseInt(giohang[i][3]);
        tong += tt;
        ttgh+= '<tr>' +
            ' <td>'+(i+1)+'</td>'+
            ' <td><img src="'+giohang[i][0]+'" alt=""></td>' +
            ' <td>'+giohang[i][2]+'</td>' +
            '  <td>'+giohang[i][1]+'</td>' +
            '  <td>'+giohang[i][3]+'</td>' +
            '  <td>' +
            '  <div>'+tt+'</div>' +
            '  </td>' +
            '  </tr>' ;

    }
    ttgh+= '<tr>' +
         '  <th colSpan="5">Tổng đơn hàng</th>' +
         '  <th>' +
         '  <div>'+tong+'</div>' +
         '  </th>' +
         '   </tr>';
    document.getElementById("mycart").innerHTML=ttgh;

}
// ẩn hiện  giỏ hàng
function showcart(){
   var  x= document.getElementById("showcart");
   if (x.style.display == "block") {
       x.style.display ="none";
    } else{
        x.style.display ="block";
    }

    showmycart();

    }
function showgiohang_trangthanhtoan(){
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var ttgh= "";
    var tong = 0;
    for (let i=0; i<giohang.length; i++){
        var tt = parseInt(giohang[i][1])*parseInt(giohang[i][3]);
        tong += tt;
        ttgh+= '<tr>' +
            ' <td>'+(i+1)+'</td>'+
            ' <td><img src="'+giohang[i][0]+'" alt=""></td>' +
            ' <td>'+giohang[i][2]+'</td>' +
            '  <td>'+giohang[i][1]+'</td>' +
            '  <td>'+giohang[i][3]+'</td>' +
            '  <td>' +
            '  <div>'+tt+'</div>' +
            '  </td>' +
            '  </tr>' ;

    }
    ttgh+= '<tr>' +
        '  <th colSpan="5">Tổng đơn hàng</th>' +
        '  <th>' +
        '  <div>'+tong+'</div>' +
        '  </th>' +
        '   </tr>';
    document.getElementById("mycart").innerHTML=ttgh;
}
