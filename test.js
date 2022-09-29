// const regex = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
// const str = `http://www.sample.com
// https://www.sample.com
// http://www.sample.com/xyz
// www.sample.com
// www.sample.com/xyz/#/xyz
// sample.com
// www.sample.com
// mofiz.com
// kolim.com
// www.murikhao.www.sample.com
// http://murihao.www.sample.com
// http://www.sample.com/xyz?abc=dkd&p=q&c=2
// www.sample.gov.bd
// www.sample.com.en
// www.sample.vu`;

// let m;

// while ((m = regex.exec(str)) !== null) {

//     if (m.index === regex.lastIndex) {
//         regex.lastIndex++;
//     }
//     console.log("matched :"+m[0]);
// }



function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

let number = 5

let a = generate(number)


console.log(a)