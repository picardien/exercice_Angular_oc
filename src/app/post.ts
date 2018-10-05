export class Post {
	
	title: string;
	content : string;
	loveIts : number;
	created_at : Date;
	
    constructor(postTitle: string, postContent: string, postLoveIts) {
        this.title = postTitle;
		this.content = postContent;
		this.loveIts = postLoveIts;
		this.created_at = new Date();
    }	
	
}
