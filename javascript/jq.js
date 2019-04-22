jQuery('.spmenu .icon').on('click', function() {
  if(jQuery('.spmenu').css('display') === 'block') {
    jQuery('.spmenu').slideUp('1500');
  }else {
    jQuery('.spmenu').slideDown('1500');
  }
});