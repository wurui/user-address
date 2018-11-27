define([],function(){
  return {
    init:function($mod){
    	var ts=new Date();
    	
    	$('#Refresh').on('click',function(){
    		$mod.OXRefresh()
    	})
    	window.addEventListener('pageshow',function(){
    		
    		var now=new Date();

    		if(now-ts>2000){
    			
    			ts=now;
    			$mod.OXRefresh()
    		}

    	})
    }
  }
})
