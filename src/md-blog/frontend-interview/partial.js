//实现函数 partial，满足以下条件
function partial() {

}

function add(a, b, c) {
    return a + b + c
}

add1 = partial(add, 1);
add2 = partial(add1, 2);

console.log(add2(3), 'should equal to 6')