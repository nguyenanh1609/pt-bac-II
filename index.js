function kiemTraPhuongTrinhBac2() {
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    let c = document.getElementById("c").value

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("kq").innerText = "not a number value"
    }
    else if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                document.getElementById("kq").innerText = "Phuong trinh vo so nghiem"
            }
            else { 

                document.getElementById("kq").innerText = "Phuong trinh vo nghiem"
            }
        }
        else {
            document.getElementById("pt").innerText = a + "x^2" + b + "x" + c + "=0"
            document.getElementById("kq").innerText = "Phuong trinh co nghiem duy nhat (-c/b):" + (-c / b)

        }
    }
    else {
        var delta = b * b - 4 * a * c;
        if (delta < 0) {
            if (b < 0 && c < 0) {
                document.getElementById("pt").innerText = a + "x^2" + b + "x" + c + "=0"
            }
            else if (b > 0 && c > 0) {
                document.getElementById("pt").innerText = a + "x^2" + "+" + b + "x" + "+" + c + "=0"

            }
            else if (b < 0 && c > 0) {
                document.getElementById("pt").innerText = a + "x^2" + b + "x" + "+" + c + "=0"
            }
            else if (b > 0 && c < 0) {
                document.getElementById("pt").innerText = a + "x^2" + "+" + b + "x" + c + "=0"
            }
            document.getElementById("kq").innerText = "vô nghiệm"
        }
        else if (delta == 0) {
            if (b < 0 && c < 0) {
                document.getElementById("pt").innerText = a + "x^2" + b + "x" + c + "=0"
            }
            else if (b > 0 && c > 0) {
                document.getElementById("pt").innerText = a + "x^2" + "+" + b + "x" + "+" + c + "=0"

            }
            else if (b < 0 && c > 0) {
                document.getElementById("pt").innerText = a + "x^2" + b + "x" + "+" + c + "=0"
            }
            else if (b > 0 && c < 0) {
                document.getElementById("pt").innerText = a + "x^2" + "+" + b + "x" + c + "=0"
            }
            document.getElementById("kq").innerText = "có nghiệm kép" + ":" + -b / (2 * a);

        }
        else {
            if (b < 0 && c < 0) {
                document.getElementById("pt").innerText = a + "x^2" + b + "x" + c + "=0"
            }
            else if (b > 0 && c > 0) {
                document.getElementById("pt").innerText = a + "x^2" + "+" + b + "x" + "+" + c + "=0"

            }
            else if (b < 0 && c > 0) {
                document.getElementById("pt").innerText = a + "x^2" + b + "x" + "+" + c + "=0"
            }
            else if (b > 0 && c < 0) {
                document.getElementById("pt").innerText = a + "x^2" + "+" + b + "x" + c + "=0"
            }
            document.getElementById("kq").innerText = "có 2 nghiệm" + ":" + ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(4) + " " + "và" + " " + ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(4)

        }
    }
}