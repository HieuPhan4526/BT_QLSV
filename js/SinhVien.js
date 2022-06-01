function SinhVien(ID, ten, email, pass, ngayLam, luongCB, chucVu, gioLamTrongThang) {
    //Property
    this.taiKhoan = ID;
    this.hoTen = ten;
    this.email = email;
    this.pass = pass;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLamTrongThang = gioLamTrongThang;
    this.tongLuong = 0;
    this.xepLoai = "";


    //Method
    this.tinhTongLuong = function () {
        switch (this.chucVu) {
            case "Sếp": this.tongLuong = this.luongCB * 3 * this.gioLamTrongThang;
                break;
            case "Trưởng phòng": this.tongLuong = this.luongCB * 2 * this.gioLamTrongThang;
                break;
            case "Nhân viên": this.tongLuong = this.luongCB * this.gioLamTrongThang;
                break;
            default: alert("Hãy chọn chức vụ");
                break;

        }
    };
    this.xepLoai = function () {
        if (this.gioLamTrongThang >= 192) {
            this.xepLoai = "Nhân Viên Xuất sắc";

        } else if (this.gioLamTrongThang >= 176) {
            this.xepLoai = "Nhân Viên Giỏi";
        } else if (this.gioLamTrongThang >= 160) {
            this.xepLoai = "Nhân Viên Khá";
        } else {
            this.xepLoai = "Nhân Viên Trung Bình";
        }
    };

}