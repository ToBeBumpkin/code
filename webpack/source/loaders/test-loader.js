
/**
 * 
 * content 文件内容
 * map sourcemap
 * meta 别的loader传递的内容
 */

module.exports = (content,map,meta) => {
    console.log(content);
    return content;
}