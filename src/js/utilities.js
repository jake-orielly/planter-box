function titleCase(text) {
    let result = text.split(" ");
    for (let i in result)
        result[i] = result[i].substr(0,1).toUpperCase() + result[i].substr(1);
    return result.join(" ");
}

export default {
    titleCase
}