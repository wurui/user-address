define([],function(){
  return {
    init:function($mod){
    	var ts=new Date();
    	
    	var log=function(s){
    		$('#log').html(s+''+(new Date).getTime())
    	}
    	$mod.on('click','.J_Refresh',function(){

    		$mod.OXRefresh()
    	})
    	window.addEventListener('pageshow',function(){
    		
    		var now=new Date();
    		log('pageshow')
    		if(now-ts>2000){
    			log('exec')
    			ts=now;
    			$mod.OXRefresh()
    		}

    	})
    }
  }
})
