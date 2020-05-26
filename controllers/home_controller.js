module.exports.homePage = async (req , res) => {
    res.render('index' , {
        title : 'Home Page'
    });
}