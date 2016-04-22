function CPF() {

    this.generate = function (formatted) {
        formatted = formatted == undefined ? true : formatted;

        var n = 9;
        var n1 = rand(n);
        var n2 = rand(n);
        var n3 = rand(n);
        var n4 = rand(n);
        var n5 = rand(n);
        var n6 = rand(n);
        var n7 = rand(n);
        var n8 = rand(n);
        var n9 = rand(n);

        var d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
        d1 = 11 - (mod(d1, 11));
        if (d1 >= 10) d1 = 0;

        var d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
        d2 = 11 - (mod(d2, 11));
        if (d2 >= 10) d2 = 0;

        if (formatted) cpf = '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + n9 + '-' + d1 + d2;
        else cpf = '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;

        return cpf;
    };

    this.validate = function (cpf) {
        var sum = 0;
        var remainder;

        cpf = cpf.replace('.', '')
            .replace('.', '')
            .replace('-', '')
            .trim();

        var allEqual = true;
        for (var i = 0; i < cpf.length - 1; i++) {
            if (cpf[i] != cpf[i + 1])
                allEqual = false;
        }
        if (allEqual)
            return false;

        for (i = 1; i <= 9; i++)
            sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        remainder = (sum * 10) % 11;

        if ((remainder == 10) || (remainder == 11))
            remainder = 0;
        if (remainder != parseInt(cpf.substring(9, 10)))
            return false;

        sum = 0;
        for (i = 1; i <= 10; i++)
            sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i); remainder = (sum * 10) % 11;

        if ((remainder == 10) || (remainder == 11))
            remainder = 0;
        if (remainder != parseInt(cpf.substring(10, 11)))
            return false;

        return true;
    }

    function rand(n) {
        var ranNum = Math.round(Math.random() * n);
        return ranNum;
    }

    function mod(numerator, denominator) {
        return Math.round(numerator - (Math.floor(numerator / denominator) * denominator));
    }

}
