define([],function(){
  return {
    init:function($mod){
    	var ts=new Date();
    	
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
