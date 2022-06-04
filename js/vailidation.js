function Validation() {
    //?Kiểm tra Rỗng
    this.kiemTraRong = function (value, spanID, message) {
        if (value.trim() == "") {
            //Không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        //Hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;


    };
    //?Kiểm tra Trùng

    this.kiemTraTrung = function (value, spanID, message, mangSV) {
        //Duyệt mảng bằng hàm có sẵn some => sẽ trả ra kết quả true or false
        var isExist = mangSV.some(function (sv) {
            return value.trim() == sv.taiKhoan || value.trim() == sv.email;
        });
        if (isExist) {
            //Không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        //Hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    };
    //?Kiểm tra Tài Khoản

    this.kiemTraTaiKhoan = function (value, spanID, message) {
        var pattern = /^[A-z_](\w|\.|_){3,5}$/;
        if (value.match(pattern)) {
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //Không hợp lệ¢£
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    };
    //?Kiểm tra Tên

    this.kiemTraTen = function (value, spanID, message) {
        var pattern = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;

        if (value.match(pattern)) {
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    };
    //?Kiểm tra Email

    this.kiemTraEmail = function (value, spanID, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (value.match(pattern)) {
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    };
    //?Kiểm tra PassWord

    this.kiemTraPassWord = function (value, spanID, message) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if (value.match(pattern)) {
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    };
    //?Kiểm tra Ngày Làm

    this.kiemTraNgayLam = function (value, spanID, message) {
        //* mm/dd/yyyy
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if (value.match(pattern)) {
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    };
    //?Kiểm tra Lương

    this.kiemTraLương = function (value, spanID, message) {
        var pattern = /^[0-9]{7,8}$/;
        if (value.match(pattern) >= 1e+6 && value.match(pattern) <= 20e+6) {
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    };
    //?Kiểm tra Chức vụ

    this.kiemTraChucVu = function (selectID, spanID, message) {
        var optionIndex = document.getElementById(selectID).selectedIndex;
        if (optionIndex != 0) {
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    };
    //?Kiểm tra Giờ làm

    this.kiemTraGioLam = function (value, spanID, message) {
        var pattern = /^[0-9]{2,3}$/;
        if (value.match(pattern) >= 80 && value.match(pattern) <= 200) {
            //Hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //Không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    };

}