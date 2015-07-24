var assets = (function(){
	var assets= {};
	
	//List of game images
	assets.images = [{
	    name: 'background',
	    id: 1,
	    src: 'img/background.png',
	    data: null
	},
	{
	    name: 'raft',
	    id: 2,
	    src: 'img/raft.png',
	    data: null
	},
	{
	    name: 'policeman',
	    id: 3,
	    src: 'img/policeman.png',
	    data: null
	},
	{
	    name: 'criminal',
	    id: 4,
	    src: 'img/criminal.png',
	    data: null
	},
	{
	    name: 'mother',
	    id: 5,
	    src: 'img/mother.png',
	    data: null
	},
	{
	    name: 'father',
	    id: 6,
	    src: 'img/father.png',
	    data: null
	},
	{
	    name: 'boy1',
	    id: 7,
	    src: 'img/boy1.png',
	    data: null
	},
	{
	    name: 'boy2',
	    id: 8,
	    src: 'img/boy2.png',
	    data: null
	},
	{
	    name: 'girl1',
	    id: 9,
	    src: 'img/girl1.png',
	    data: null
	},
	{
	    name: 'girl2',
	    id: 10,
	    src: 'img/girl2.png',
	    data: null
	}];
	
	//The raft
	assets.raft = {
		position: {
			left: {
				x: 280,
				y: 240, 
			},
			right: {
				x: 386,
				y: 240
			}
		},
		seats : {
			seat1 : {
				position: {
					left: {
						x: 210,
						y: 210, 
					},
					right: {
						x: 310,
						y: 210
					}
				}
			},
			seat2 : {
				position: {
					left: {
						x: 230,
						y: 230, 
					},
					right: {
						x: 330,
						y: 230
					}
				}
			}
		}
	};
	
	//List of game characters
	assets.characters =[
		{
			name: 'policeman',
			role: 'policeman',
			position : {
				left: {
					x: 20,
					y: 20,
				},
				right: {
					x: 220,
					y: 200
				}
			}
		},
		{
			name: 'criminal',
			role: 'criminal',
			position : {
				left: {
					x: 20,
					y: 20,
				},
				right: {
					x: 220,
					y: 200
				}
			}
		},
		{
			name: 'mother',
			role: 'mother',
			position : {
				left: {
					x: 20,
					y: 20,
				},
				right: {
					x: 220,
					y: 200
				}
			}
		},
		{
			name: 'father',
			role: 'father',
			position : {
				left: {
					x: 20,
					y: 20,
				},
				right: {
					x: 220,
					y: 200
				}
			}
		},
		{
			name: 'boy1',
			role: 'boy',
			position : {
				left: {
					x: 20,
					y: 20,
				},
				right: {
					x: 220,
					y: 200
				}
			}
		},
		{
			name: 'boy2',
			role: 'boy',
			position : {
				left: {
					x: 20,
					y: 20,
				},
				right: {
					x: 220,
					y: 200
				}
			}
		},
		{
			name: 'girl1',
			role: 'girl',
			position : {
				left: {
					x: 20,
					y: 20,
				},
				right: {
					x: 220,
					y: 200
				}
			}
		},
		{
			name: 'girl2',
			role: 'girl',
			position : {
				left: {
					x: 20,
					y: 20,
				},
				right: {
					x: 220,
					y: 200
				}
			}
		}
	];
	return assets;
})();