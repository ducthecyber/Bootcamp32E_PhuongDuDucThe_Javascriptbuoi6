//Bài tập 1: Tìm số nguyên dương nhỏ nhất thỏa điều kiện: 1+2+3+...+n>10000

// B1-Xác định yếu tố thay đổi(Khởi tạo giá trị bắt đầu, và sẽ thay đổi trong vòng lặp)
// B2-Thiết lập điều kiện lặp (đúng thì làm và lặp lại)
// B3-Cài đặt khối xử lý
// B4-Thay đổi giá trị của biến khai báo ở bước 1

document.getElementById("btnSoNguyenDuong").onclick = function () {
    //B1: sum là yếu tố thay đổi    
    var sum = 0;
    var buocNhay = 1;
    //B2: điều kiện lặp
    //1 + 2 + 3 + 4 + 5 +....+(n-1+)+n > 10 000
    while (sum < 10000) {
        //B3: khối lệnh thực thi
        sum += buocNhay;
        //B4: thay đổi giá trị biến
        buocNhay++;
    }
    document.getElementById("ketQuaB1").innerHTML = buocNhay - 1;
}

//Bài tập 2:Viết chương trình nhập vào 2 số, x và n. Tính tổng: S(n) = x + x^2 + x^3 + ...+ x^n
function tong(soHang, soMu) {
    //input: numberX, numberN : number    
    var numberX = Number(document.getElementById(soHang).value);
    var numberN = Number(document.getElementById(soMu).value);
    //output: tongLapPhuong: number
    var tongLapPhuong = 0;
    //progress
    var go = 1;
    while (go <= numberN) {
        tongLapPhuong += Math.pow(numberX, go);
        go++;
    }
    return tongLapPhuong; //Trả ra output của hàm
}

document.getElementById("btnTinhTong").onclick = function () {
    tongLapPhuong = tong("soX", "soN");
    document.getElementById("ketQuaB2").innerHTML = "Tổng lập phương theo công thức là " + tongLapPhuong;
}

//Bài tập 3: Tính giai thừa: 1*2*3*...*n

document.getElementById("btnTinhGiaiThua").onclick = function () {
    //input: n: number (B1 yếu tố thay đổi)
    var n = Number(document.getElementById("soGiaiThua").value);
    //output: giaiThua: number
    var giaiThua = 1;
    //progress
    var count = 1;
    //điều kiện lặp
    while (count <= n) {
        giaiThua = giaiThua * count;
        //thay đổi giá trị 
        count++;
    }
    //khối lệnh thực thi
    document.getElementById("ketQuaB3").innerHTML = "Giá trị giai thừa là " + giaiThua;
}

//Bài tập 4: In ra 10 thẻ div, thẻ vị trí chẵn có background đỏ, thẻ vị trí lẻ có background xanh
document.getElementById("btnInTheDiv").onclick = function () {
    var soLanLap = 1;
    var ketQua = "";
    var content = document.getElementById("ketQuaB4");
    var div = "<div></div>";

    // var div = document.createElement("div");
    while (soLanLap <= 10) {
        if (soLanLap % 2 == 0) {
            // div = "<div style="color:red">Div Chẵn</div>";
            var divChan = document.getElementById("bottom").value;
            divChan = "<div>Div Chẵn</div>";
            ketQua = ketQua + divChan;
        }
        else {
            var divLe = document.getElementById("top").value;
            divLe = "<div>Div Lẻ</div>";
            ketQua = ketQua + divLe;
        }
        soLanLap++;
    }
    document.getElementById("ketQuaB4").innerHTML = ketQua;
}
