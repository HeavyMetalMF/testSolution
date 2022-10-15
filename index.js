let object = {
    user: {
        name: {
            first: 'John',
            last: 'Snow'
        }
    }
};

function find(object, path) {
    const slicePath = path.split('.')
    let result = object
    for (let item of slicePath){
        if (result.hasOwnProperty(item)){
            result = result[item]
        }else {
            return undefined
        }
    }
    return result
}

console.log(find(object, 'user.name.first'))