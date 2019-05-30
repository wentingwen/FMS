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
});
// $('#textarea-text').onfocus = function () {
//     // this.className = "textbox-focused";
//     // this.style.border-color = '#6b9cde';
//     alert('聚焦啦');
// };