/**
 * Thêm sinh viên
 * Lấy thông tin từ form
 * Lưu thông tin sinh viên để tạo đối tương sv
 * thêm sv vào mảng sv
 * Hiển thị sinh viên lên table.
 */

// Tạo biến Global chứa Class DanhSachSinhVien;
const dsSV = new DanhSachSinhVien();
// Tạo biến Global chứa Class Validation
const valid = new Validation();

function getELE(id) {
    return document.getElementById(id);
}


//LocalStorage.

function setLocalStorage() {
    // Chuyển đổi Mảng sang JSON.
    localStorage.setItem("DSSV", JSON.stringify(dsSV.mangSV));
}

function getLocalStorage() {
    if (localStorage.getItem("DSSV") != null) {
        //Chuyển JSON sang Mảng.
        dsSV.mangSV = JSON.parse(localStorage.getItem("DSSV"));

    }
    hienThiTable(dsSV.mangSV);
}

getLocalStorage();


function themSinhVien() {
    var taiKhoan = getELE("tknv").value;
    var ten = getELE("name").value;
    var email = getELE("email").value;
    var pass = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLamTrongThang = getELE("gioLam").value;
    // console.log(ID,ten,email,pass,ngayLam,luongCB,chucVu,gioLamTrongThang);


    //Giả sử Validation true;
    var isValid = true;

    //Các bước kiểm tra Validation.
    //? Kiểm tra Tài khoản
    isValid &= valid.kiemTraRong(taiKhoan, "tbTKNV", "Tài Khoản không được để trống") && valid.kiemTraTrung(taiKhoan, "tbTKNV", "Tài Khoản đã có", dsSV.mangSV) && valid.kiemTraTaiKhoan(taiKhoan, "tbTKNV", "Tài khoản có từ 4-6 ký tự, Phải Bắt Đầu Bằng Chữ, Có thể có số và Có Thể Có 1 dấu _");
    //? Kiểm tra Tên.
    isValid &= valid.kiemTraRong(ten, "tbTen", "Tên không được để trống") && valid.kiemTraTen(ten, "tbTen", "Tên không đúng định dạng.");
    //? Kiểm Tra Email
    isValid &= valid.kiemTraRong(email, "tbEmail", "Email không được để trống") && valid.kiemTraEmail(email, "tbEmail", "Email không đúng định dạng.") && valid.kiemTraTrung(email, "tbEmail", "Email đã có", dsSV.mangSV);
    //? Kiểm tra Password
    isValid &= valid.kiemTraRong(pass, "tbMatKhau", "Mật khẩu không được để trống") && valid.kiemTraPassWord(pass, "tbMatKhau", "Mật khẩu phải có 1 ký tự in hoa, 1 ký tự đặt biệt, chứa ít nhất 1 số và chỉ đc từ 6-10 ký tự..");
    //? Kiểm tra ngày làm
    isValid &= valid.kiemTraRong(ngayLam, "tbNgay", "Ngày làm không được để trống") && valid.kiemTraNgayLam(ngayLam, "tbNgay", "Ngày làm phải đúng định dạng mm/dd/yyyy");
    //?Kiểm tra Lương cơ bản
    isValid &= valid.kiemTraRong(luongCB, "tbLuongCB", "Lương Cơ bản không được để trống") && valid.kiemTraLương(luongCB, "tbLuongCB", "Lương cơ bản từ 1 Triệu đến 20 Triệu");
    //? Kiểm tra chức vụ
    isValid &= valid.kiemTraChucVu("chucvu", "tbChucVu", " Hãy Chọn Chức Vụ");
    //? Kiểm tra giờ làm trong tháng;
    isValid &= valid.kiemTraRong(gioLamTrongThang, "tbGiolam", "Giờ làm không được để trống") && valid.kiemTraGioLam(gioLamTrongThang, "tbGiolam", "Giờ làm từ 80-200 giờ trong 1 tháng");

    if (isValid) {
        //Tạo thể hiện Class SinhVien. Lưu thông tin sv để tạo đối tượng sv
        var sv = new SinhVien(taiKhoan, ten, email, pass, ngayLam, luongCB, chucVu, gioLamTrongThang);
        sv.tinhTongLuong();
        sv.xepLoai();

        // console.log(sv);
        //Thêm sv vào Mảng
        dsSV.themSV(sv);
        // console.log(dsSV.mangSV);

        // Lưu dữ liệu vào localStorage
        setLocalStorage();
        // lấy dữ liệu localStorage

        getLocalStorage();
    }
}

function hienThiTable(mang) {
    //Tạo biến chứa các hàng cột của table
    var content = "";
    //Duyệt mảng sv = hàm map.
    // map(funtion(1 Phần tử của Mảng, vị trí của phần tử){})
    mang.map(function (sv) {
        var trELE = `<tr>
            <td>${sv.taiKhoan}</td>
            <td>${sv.hoTen}</td>
            <td>${sv.email}</td>
            <td>${sv.ngayLam}</td>
            <td>${sv.chucVu}</td>
            <td>${sv.tongLuong}</td>
            <td>${sv.xepLoai}</td>
            <td>
                <button class= "btn btn-danger" onclick = "xoaSinhVien('${sv.taiKhoan}')" >Xóa</button>
                <button data-toggle="modal" data-target="#myModal" class= "btn btn-info" onclick = "hienThiChiTiet('${sv.taiKhoan}')" >Xem</button>

            </td>
        </tr>`;
        content += trELE;
    });

    getELE("tableDanhSach").innerHTML = content;

}
function xoaSinhVien(id) {
    // console.log(id);
    dsSV.xoaSV(id);

    //Khi xóa xong thì hiển thị lên lại table cho ng dùng thấy.
    // Lưu dữ liệu vào localStorage
    setLocalStorage();
    // lấy dữ liệu localStorage

    getLocalStorage();
}
// Hiển thị lại sinh viên khi người dùng click button  xem.
function hienThiChiTiet(id) {
    var viTri = dsSV.viTri(id);

    console.log(dsSV.mangSV[viTri]);
    //Lấy thông tin lại
    getELE("tknv").value = dsSV.mangSV[viTri].taiKhoan;
    getELE("tknv").disabled = true;

    getELE("name").value = dsSV.mangSV[viTri].hoTen;
    getELE("email").value = dsSV.mangSV[viTri].email;
    getELE("password").value = dsSV.mangSV[viTri].pass;
    getELE("password").type = Text;

    getELE("datepicker").value = dsSV.mangSV[viTri].ngayLam;
    getELE("luongCB").value = dsSV.mangSV[viTri].luongCB;
    getELE("chucvu").value = dsSV.mangSV[viTri].chucVu;
    getELE("gioLam").value = dsSV.mangSV[viTri].gioLamTrongThang;

    getELE("btnCapNhat").disabled = false;
    getELE("btnThemNV").disabled = true;

}
// Cập Nhập lại sinh viên
function capNhapSinhVien() {
    //Lấy thông tin
    var taiKhoan = getELE("tknv").value;
    var ten = getELE("name").value;
    var email = getELE("email").value;
    var pass = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLamTrongThang = getELE("gioLam").value;

    //Giả sử validation true.
    var isValid = true;

    //Các bước kiểm tra
    //? Kiểm Tra Tên
    isValid &= valid.kiemTraRong(ten, "tbTen", "Tên Nhân viên Không được dể trống") && valid.kiemTraTen(ten, "tbTen", "Tên Nhân Viên Phải là Chữ.");
    //? Kiểm Tra Email
    isValid &= valid.kiemTraRong(email, "tbEmail", "Email Không Được Để Trống") && valid.kiemTraEmail(email, "tbEmail", "Email Phải Đúng Định Dạng");
    //? Kiểm Tra PassWord
    isValid &= valid.kiemTraRong(pass, "tbMatKhau", "PassWord Không Được Để Trống") && valid.kiemTraPassWord(pass, "tbMatKhau", "PassWord từ 6-10 ký tự ,chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt");
    //? kiểm Tra Ngày làm
    isValid &= valid.kiemTraRong(ngayLam, "tbNgay", "Ngày Làm Không Được Để Trống") && valid.kiemTraNgayLam(ngayLam, "tbNgay", "Ngày Làm Phải đúng định dạng mm/dd/yyyy");
    //? Kiểm Tra Lương
    isValid &= valid.kiemTraRong(luongCB, "tbLuongCB", "Lương Không Được Để Trống") && valid.kiemTraLương(luongCB, "tbLuongCB", "Lương Cơ Bản Từ 1 Triệu đến 20 triệu");
    //? Kiểm tra chức vụ
    isValid &= valid.kiemTraChucVu("chucvu", "tbChucVu", "Hãy chọn chức vụ");
    //? Kiểm Tra Giờ Làm
    isValid &= valid.kiemTraRong(gioLamTrongThang, "tbGiolam", "Giờ Làm Không Được Để Trống") && valid.kiemTraGioLam(gioLamTrongThang, "tbGiolam", "Giờ Làm Phải Từ 80 giờ đến 200 giờ");

    //Ràng buộc Điều Kiện
    if (isValid) {
        var sv = new SinhVien(taiKhoan, ten, email, pass, ngayLam, luongCB, chucVu, gioLamTrongThang);
        sv.tinhTongLuong();
        sv.xepLoai();

        dsSV.capNhap(sv);
        // Lưu dữ liệu vào localStorage
        setLocalStorage();
        // lấy dữ liệu localStorage

        getLocalStorage();
    }
}

getELE("btnTimNV").onclick = function () {
    var loaiNhanVienTK = getELE("searchName").value;
    var mangTK = [];

    mangTK = dsSV.timKiemSinhVien(loaiNhanVienTK);

    hienThiTable(mangTK);

};
