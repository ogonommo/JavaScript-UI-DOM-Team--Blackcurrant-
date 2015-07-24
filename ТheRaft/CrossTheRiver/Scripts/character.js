var Character = (function(){
	'use strict';
	
	function Character(data, raft, imgList, layer) {
		this.position = data.position;
		this.name = data.name;
		this.role = data.role;
		this.side = 'left';
		this.raft = raft;
		this.image = imgList.getImage(this.name);
		this.layer = layer;
		this.inAnimation = false;
	}
	
	return Character;
})();