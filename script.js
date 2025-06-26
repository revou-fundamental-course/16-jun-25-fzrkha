function htgkeliling(){
    const sisi1 = parseFloat(document.getElementById("sisi1").value);
    const sisi2 = parseFloat(document.getElementById("sisi2").value);
    const sisi3 = parseFloat(document.getElementById("sisi3").value);

    if(sisi1==0||sisi2==0||sisi3==0){
        document.getElementById("hasilkeliling").innerText = "Tidak boleh terdapat angka nol.";
    } else{
        const keliling = sisi1 + sisi2 + sisi3;

        document.getElementById("hasilkeliling").innerText =
        "K = Sisi 1 + Sisi 2 + Sisi 3\n" +
        "K = " + sisi1 + " + " + sisi2 + " + " + sisi3 +
        "\nK = " + keliling;
    }
}

function htgluas(){
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    if(alas==0||tinggi==0){
        document.getElementById("hasilluas").innerText = "Tidak boleh terdapat angka nol.";
    } else{
        const luas = 0.5 * alas * tinggi;

        document.getElementById("hasilluas").innerText =
        "L = 1/2 x alas x tinggi\n" +
        "L = 1/2 x " + alas + " x " + tinggi +
        "\nL = " + luas;
    }
}