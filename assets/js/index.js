$('.tab .menus li').each(function(){
    $('.tab .menus li').mouseover(function(){
        $('.tab .menus li').removeClass('bg');
        $(this).addClass('bg');
        var index = $(this).index();
        var arr = [
                'assets/bg1.png',
                'assets/bg2.png',
                'assets/bg3.png',
        $('.tab .scroll').css('margin-top',-index*800+'px');
        $('.tab').css('background-image','url('+arr[index]+')')
    })
})