$(function(){
    $('#cc').combo({
        required:true,
        editable:false
    });
    $('#sp').appendTo($('#cc').combo('panel'));
    $('#sp input').click(function(){
        var v = $(this).val();
        var s = $(this).next('span').text();
        $('#cc').combo('setValue', v).combo('setText', s).combo('hidePanel');
    });
    // $('#up>span>input')[0].click(function() {
    //     alert("nihao00");
    // });
    // (function(){
    //     alert("hello");
    // });
});

