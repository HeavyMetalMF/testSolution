let object = {
    user: {
        name: {
            first: 'John',
            last: 'Snow'
        }
    }
};

function find(object, path) {
    return path.split('.').reduce((acc, res) => (acc && acc.hasOwnProperty(res)) ? acc[res] : undefined, object)

}

console.log(find(object, 'user.name.first'))