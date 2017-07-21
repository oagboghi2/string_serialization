const fs =require('fs');
const obj = JSON.parse(fs.readFileSync('deepObject_config.js', 'utf8'));

// let deepObject = {
//             "name": "Luís Landeiro Ribeiro",
//             "age": 28,
//             "sex": "M",
//             "interests": [ "Technology", "Mountain Biking", "People" ]
// };



fs.writeFileSync("serialized_string.json",  JSON.stringify(obj));
