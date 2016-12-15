//document ready function
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);

    }
}
//post promise
function post(url){
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('POST', url);

        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
            }
            else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = function() {
            reject(Error("Network Error"));
        }
        req.send();
    });
}
//parse the json gotten from the above post promise
function postJSON(url) {
    return post(url).then(JSON.parse);
}

//get promise
function get(url){
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
            }
            else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = function() {
            reject(Error("Network Error"));
        };
        req.send();
    });
}
//parse the json from the above get promise
function getJSON(url) {
    return get(url).then(JSON.parse);
}

// when document is ready, start listening
ready(function(){

    console.log(sumAll([0,1000]));


});

function sumAll(arr){
    var low = Math.min(arr[0], arr[1]);
    var high = Math.max(arr[0], arr[1]);
    for (var i = low + 1; i < high; i++){
        arr.push(i);
    }
    var sum = arr.reduce(function(accumulator, currentVal){
        return accumulator + currentVal;
    }, 0)
    return sum;
}