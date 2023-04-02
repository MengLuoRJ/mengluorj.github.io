var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // $('[rel="icon"]').attr('href', "/img/TEP.ico");
        document.title = '|•\'-\'•) Waiting for Your Back - ' + OriginTitile;
        clearTimeout(titleTime);
    }
    else {
        // $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = 'ଘ(੭ˊᵕˋ)੭ Welcome Back - ' + OriginTitile;
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 3000);
    }
});