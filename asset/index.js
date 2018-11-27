define([],function(){
  return {
    init:function($mod){
    	
    	var checkDataTime=function(){
    		
    		var ts=$mod.attr('data-ts');
			//console.log(ts);    	
			if((new Date()).getTime()-ts>5000){
				//这里主要是解决页面回退的问题，回退后数据源没有刷新，时间戳是老的
				//数据老于5秒，5秒间可能在其它页面完成一次数据操作，就刷新之
				
				$mod.OXRefresh()
			}

    	}

    	window.addEventListener('pageshow',checkDataTime);
    	//checkDataTime();
    }
  }
})
