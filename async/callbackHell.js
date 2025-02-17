function add(x, callback) {
    let sum = x + x;
    console.log(sum);
    callback(sum);
}

add(2, function (result)){
    add(result,function(result))
}

/* https://velog.io/@minidoo/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%9C%EB%B0%B1-%ED%95%A8%EC%88%98Callback-Function */