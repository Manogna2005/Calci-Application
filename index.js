function compute() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
        let val = document.getElementsByName("operation");
        let operation = "";
        for (let i = 0; i < val.length; i++) {
            if (val[i].checked) {
                operation = val[i].value;
                break;
            }
        }
        let c = 0;
        switch (operation) {
            case "Addition":
                c = +a + +b;     
                document.getElementById("res").value = c;
                break;
            case "Subtraction":
                c = +a - +b;     
                document.getElementById("res").value = c;
                break;
            case "Multiplication":
                c = +a * +b;     
                document.getElementById("res").value = c;
                break;
            case "Division":
                if (+b == 0) {
                    document.getElementById("res").value = "Division By Zero Exception"
                    break;
                }
                c = +a / +b;
                document.getElementById("res").value = c;
                break;
        }
}