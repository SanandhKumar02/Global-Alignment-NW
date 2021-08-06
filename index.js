function restart(){
    clear();
   GridBuilder.highlightOptimal();
}

function clear(){
    var cont = $('#cont');
    var resultContainer = $('#result');
    var matchScore = parseInt($('#matchScore').val());
    var mismatchScore = parseInt($('#mismatchScore').val());
    var gapScore = parseInt($('#gapScore').val());
    var seqSide = $('#seq_1').val();
    var seqTop = $('#seq_2').val();
    
    GridBuilder.rebuildTable(cont, resultContainer, matchScore, mismatchScore, gapScore, seqSide, seqTop);
}

$(document).ready(function(){

   
   
    restart();
    /*
    var ids = ["9_9", "9_8", "9_7", "8_6", "7_6", "6_5", "5_4", "5_3", "4_2", "3_2", "2_2", "1_1"];
    var ids = ["9_10", "9_9", "8_8", "7_7", "6_6", "5_5", "4_4", "3_4", "2_3", "1_2"];
    var ids = ["9_9", "9_8", "8_7", "7_6", "6_5", "5_4", "4_3", "3_3", "2_2", "1_1"];
    for(idx in ids){
        $('#' + ids[idx]).click();
    }
    */
    
    $('.seq').keyup(function(){
        restart();
    });
   
   $('.params').change(function(){
        restart();
    });
    
    $('.btn-clear').click(function(){
        clear();
    });

    $('.btn-compute').click(function(){
        restart();
    });

    $('.btn-custom').click(function(){
        GridBuilder.startCustomPath();
    });

});