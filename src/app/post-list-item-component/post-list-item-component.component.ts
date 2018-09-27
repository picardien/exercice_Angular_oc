import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
	
   @Input() postTitre: string;
   @Input() postContent: string;
   @Input() postLoveIts: number;
   @Input() postCreated_at: Date;
   @Input() loveItsCount: number;
   @Input() dontLoveItsCount: number;

  
  constructor() { }

  ngOnInit() {
	if(this.postLoveIts > 0)
	{
		this.loveItsCount = this.postLoveIts;
		this.dontLoveItsCount = 0;
	}
	else if(this.postLoveIts < 0)
	{
		this.dontLoveItsCount = -this.postLoveIts;
		this.loveItsCount = 0;
	}
	else
	{
		this.dontLoveItsCount = 0;
		this.loveItsCount = 0;
	}
  }

  getColor() {
    if(this.postLoveIts > 0) 
	{
      return 'green';
    } 
	else if(this.postLoveIts < 0) 
	{
      return 'red';
    }
}

onLoveIt() 
{
	this.postLoveIts++;
	if(this.postLoveIts > 0)
	{
		this.loveItsCount = this.postLoveIts;
		this.dontLoveItsCount = 0;
	}
	else
	{
		this.dontLoveItsCount = -this.postLoveIts;
		this.loveItsCount = 0;
	}
}

onDontLoveIt()
{
	this.postLoveIts--;
	if(this.postLoveIts < 0)
	{
		this.dontLoveItsCount = -this.postLoveIts;
		this.loveItsCount = 0;
	}
	else
	{
		this.loveItsCount = this.postLoveIts;
		this.dontLoveItsCount = 0;
	}
}
  
}
