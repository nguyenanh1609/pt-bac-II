function kiemTraPhuongTrinhBac2() {
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    let c = document.getElementById("c").value


    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                document.getElementById("kq").innerText = "Phuong trinh vo so nghiem"
            }
            else {

                document.getElementById("kq").innerText = "Phuong trinh vo nghiem"
            }
        }
        else {
            document.getElementById("kq").innerText = "Phuong trinh co nghiem duy nhat (-c/b):" + (-c / b)

        }
    }
    else {
        var delta = b*b - 4*a*c;
        if (delta < 0) {
            document.getElementById("kq").innerText = "vô nghiệm"
        }
        else if (delta == 0) {
            document.getElementById("kq").innerText = "có nghiệm kép" + ":" + -b / (2 * a);

        }
        else {
            document.getElementById("kq").innerText = "có 2 nghiệm" + ":" + (-b + Math.sqrt(delta)) / (2 * a) + " " + "và" + " " + (-b - Math.sqrt(delta)) / (2 * a)

        }
    }
}