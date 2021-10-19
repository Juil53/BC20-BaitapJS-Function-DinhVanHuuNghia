//BÀI TẬP 1
function tuyenSinh(){
    var diem1 = Number(document.getElementById("b1diem1").value);
    var diem2 = Number(document.getElementById("b1diem2").value);
    var diem3 = Number(document.getElementById("b1diem3").value);
    var tong = diem1 + diem2 + diem3;
    var khuVuc = Number(document.getElementById("khuvuc").value);
    var doiTuong = Number(document.getElementById("doituong").value);
    if(khuVuc == 1){
        tong += 2;
    } else if(khuVuc == 2){
        tong += 1;
    } else if(khuVuc == 3){
        tong += 0.5;
    } else {
        tong;
    }
    if(doiTuong == 1){
        tong += 2.5;
    } else if(doiTuong == 2){
        tong += 1.5;
    } else if(doiTuong == 3){
        tong += 1;
    } else {
        tong;
    }
    if(diem1 > 0 && diem2 > 0 && diem3 > 0 && tong >= 15){
        document.getElementById("txtKetqua").innerHTML = "Tổng điểm là: " + tong + "<br>" + "Đậu";
    } else {
        document.getElementById("txtKetqua").innerHTML = "Tổng điểm là: " + tong + "<br>" + "Rớt";
    }  
}
document.getElementById("btnKetqua").onclick = tuyenSinh;

// BÀI TẬP 2
function tinhTienDien(){
    var ten = document.getElementById("b2name").value;
    var soKw = Number(document.getElementById("b2Kw").value);
    var total = 0;
    if(soKw<=50){
        total = soKw*500;
    } else if(soKw<=100){
        total = 50*500 + (soKw-50)*650;
    } else if(soKw<=200){
        total = 50*500 + 50*650 + (soKw-100)*850;
    } else if(soKw<=350){
        total = 50*500 + 50*650 + 100*850 + (soKw-200)*1100;
    } else {
        total = 50*500 + 50*650 + 100*850 + 150*1100 + (soKw-350)*1300;
    }
    document.getElementById("b2txtKetqua").innerHTML ="Số tiền điện của: " + ten + " là " + total;
}
document.getElementById("b2btnKetqua").onclick = tinhTienDien;

//BÀI TẬP 3
function tinhThue(){
    var ten = document.getElementById("b3Ten").value;
    var thuNhap = Number(document.getElementById("b3Thunhap").value);
    var phuThuoc = Number(document.getElementById("b3Phuthuoc").value);
    var thuNhapChiuThue = thuNhap - 4 - (phuThuoc*1.6);
    var thuePhaiNop = 0;
    if(thuNhap<=60){
        thuePhaiNop = thuNhapChiuThue*5/100;
    } else if(thuNhap>60 && thuNhap<=120){
        thuePhaiNop = thuNhapChiuThue*10/100;
    } else if(thuNhap>120 && thuNhap <=210){
        thuePhaiNop = thuNhapChiuThue*15/100;
    } else if(thuNhap>210 && thuNhap <=384){
        thuePhaiNop = thuNhapChiuThue*20/100;
    } else if(thuNhap>384 && thuNhap <=624){
        thuePhaiNop = thuNhapChiuThue*25/100;
    } else if(thuNhap>624 && thuNhap <=960){
        thuePhaiNop = thuNhapChiuThue*30/100;
    } else {
        thuePhaiNop = thuNhapChiuThue*35/100;
    }
    document.getElementById("b3txtKetqua").innerHTML = "SỐ THUẾ " + ten + " PHẢI NỘP LÀ: " + thuePhaiNop;
}
document.getElementById("b3btnKetqua").onclick = tinhThue;

//BÀI TẬP 4
function kiemTraLoaiKH(){
    var loaiKH = Number(document.getElementById("b4loaiKH").value);
    if(loaiKH == 2){
        document.getElementById("b4ketnoi").disabled = false;
    } else {
        document.getElementById("b4ketnoi").disabled = true;
    }
}
document.getElementById("b4btnKH").onclick = kiemTraLoaiKH;

function tinhHoaDon(){
    var maKH = document.getElementById("b4maKH").value;
    var soKN = Number(document.getElementById("b4ketnoi").value);
    var soKenh = Number(document.getElementById("b4kenh").value);
    var loaiKH = Number(document.getElementById("b4loaiKH").value);
    var hoaDon = 0;
    if(loaiKH == 2 && soKN <=10 ){
        hoaDon = 15 + 75 + soKenh*50;
    } else if(loaiKH == 2 && soKN > 10){
        hoaDon = 15 + 75 + (soKN-10)*5 + soKenh*50;
    } else {
        hoaDon = 4.5 + 20.5 + 7.5*soKenh;
    }
    document.getElementById("b4txtKetqua").innerHTML = "HÓA ĐƠN " + maKH + " LÀ: " + hoaDon;
}
document.getElementById("b4btnKetqua").onclick = tinhHoaDon;
