//自动添加 css 浏览器前缀
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer({
            browsers: ['last 5 versions']
        })
    ]
};

