function solution1(A) {

    var minNum = 1,
        sortArr = A.sort();
    sortArr.forEach(function (item, i, arr) {
        if (item > 0 && item == minNum) {
            minNum++;
        }
    });
    return minNum;
}

function solution2(S) {
    var stack = [],
        openBrackets = "{[(",
        closeBrackets = "}])";

    for (var i = 0; i < S.length; i++) {
        typeOpenBrackets = openBrackets.indexOf(S[i]);
        if (typeOpenBrackets != -1) {
            stack.push(typeOpenBrackets);
        }

        typeCloseBrackets = closeBrackets.indexOf(S[i]);
        if (typeCloseBrackets != -1) {
            if (!stack) {
                return false;
            }
            if (typeCloseBrackets != stack.pop()) {
                return false;
            }
        }
    }
    return stack.length == 0;
}

function solution3(A, F) {
    var funcArgs,
        funcBody,
        funcMap,
        funcArr = F.split('=>'),
        newArr = [];

    funcArgs = funcArr[0].slice(1, -1);
    funcBody = funcArr[1];
    funcMap = new Function(funcArgs, 'return ' + funcBody);
    A.forEach(function (item, i, arr) {
        A[i] = funcMap(item, i, A);
    });
    return A;
}