function DanhSachSinhVien() {
    //Property

    this.mangSV = [];

    //Method

    this.themSV = function (sv) {
        this.mangSV.push(sv);
    };
    // fruit.splice(index, 1)
    // Chỉ xóa 1 phần tử ở vị trí index.
    this.viTri = function (id) {
        var viTri = -1;
        this.mangSV.map(function (sv, index) {
            if (sv.taiKhoan == id) {
                viTri = index;
            }
        });
        return viTri;
    };
    this.xoaSV = function (id) {
        var viTriXoa = this.viTri(id);
        if (viTriXoa > -1) {
            this.mangSV.splice(viTriXoa, 1);
        }

    };

    this.capNhap = function (sv) {
        var viTriCapNhat = this.viTri(sv.taiKhoan);
        if (viTriCapNhat > -1) {
            this.mangSV[viTriCapNhat] = sv;

        }
    };
}
DanhSachSinhVien.prototype.timKiemSinhVien = function (xepLoaiTK) {
    var mangTK = [];
    var loaiNhanVienTK = xepLoaiTK.toLowerCase();
    this.mangSV.map(function (sv) {
        var loaiNhanVienTKthuong = sv.xepLoai.toLowerCase();
        if (loaiNhanVienTKthuong.indexOf(loaiNhanVienTK) > -1) {
            mangTK.push(sv);
        }
    });
    return mangTK;
};